/**
 * MCP App sandbox proxy relay.
 *
 * Ported from `ext-apps/examples/basic-host/src/sandbox.ts` and made spec-faithful to
 * the MCP Apps 2026-01-26 sandbox model (see docs/plans/mcp-apps-epic.html §5-6):
 *
 *   1. Load first, then announce `ui/notifications/sandbox-proxy-ready` to the host.
 *   2. Receive the app HTML + CSP + permissions from the host via
 *      `ui/notifications/sandbox-resource-ready`.
 *   3. Build the inner iframe `allow` attribute from permissions, apply the `sandbox`
 *      attribute (host may override), then `document.write(html)` into the inner frame.
 *   4. Relay every message that is NOT a `ui/notifications/sandbox-*` handshake message
 *      bidirectionally between the host and the inner app frame.
 *
 * CSP is applied as an HTTP response header on this document by the serving origin
 * (read from the `?csp=` query param) — the inner iframe, created same-origin via
 * `document.write`, inherits that policy. The proxy itself does not set CSP.
 */

const PROXY_READY = 'ui/notifications/sandbox-proxy-ready';
const RESOURCE_READY = 'ui/notifications/sandbox-resource-ready';
const SANDBOX_METHOD_PREFIX = 'ui/notifications/sandbox-';
const DEFAULT_SANDBOX = 'allow-scripts allow-same-origin';

/**
 * Map MCP-app resource permission keys to iframe `allow` (Permissions-Policy) tokens.
 * Accepts either an array of raw feature tokens or an object of boolean flags.
 */
const PERMISSION_FEATURE_MAP = {
  camera: 'camera',
  microphone: 'microphone',
  geolocation: 'geolocation',
  clipboardRead: 'clipboard-read',
  clipboardWrite: 'clipboard-write',
  displayCapture: 'display-capture',
  fullscreen: 'fullscreen'
};

function buildAllowAttribute(permissions) {
  if (!permissions) {
    return '';
  }

  const features = new Set();

  if (Array.isArray(permissions)) {
    for (const feature of permissions) {
      if (typeof feature === 'string' && feature.trim()) {
        features.add(feature.trim());
      }
    }
  } else if (typeof permissions === 'object') {
    for (const [key, value] of Object.entries(permissions)) {
      if (value && PERMISSION_FEATURE_MAP[key]) {
        features.add(PERMISSION_FEATURE_MAP[key]);
      }
    }
  }

  return [...features].join('; ');
}

class SandboxProxy {
  #host = window.parent;
  #hostOrigin = null;
  #innerFrame = null;
  #appWindow = null;

  constructor() {
    this.#verifyIsolation();
    this.#resolveHostOrigin();
    window.addEventListener('message', this.#handleMessage);
    this.#post(this.#host, { jsonrpc: '2.0', method: PROXY_READY });
  }

  /**
   * Self-test that the host's top window is inaccessible. If `window.top` is reachable
   * the proxy is NOT cross-origin isolated from the host — running untrusted app HTML
   * here would be a full escape, so refuse to render.
   */
  #verifyIsolation() {
    try {
      void window.top.location.href;
      this.isolated = false;
      console.error(
        '[mcp-app-sandbox] window.top is accessible — proxy is same-origin with the host. ' +
          'Serve sandbox.html from a distinct origin; refusing to render untrusted app HTML.'
      );
    } catch {
      this.isolated = true;
    }
  }

  #resolveHostOrigin() {
    try {
      this.#hostOrigin = document.referrer ? new URL(document.referrer).origin : null;
    } catch {
      this.#hostOrigin = null;
    }

    if (!this.#hostOrigin) {
      console.warn('[mcp-app-sandbox] no document.referrer origin — cannot validate host messages by origin.');
    }
  }

  #isFromHost(event) {
    if (event.source !== this.#host) {
      return false;
    }
    if (this.#hostOrigin && event.origin !== this.#hostOrigin) {
      return false;
    }
    return true;
  }

  #isFromApp(event) {
    return this.#appWindow !== null && event.source === this.#appWindow;
  }

  #handleMessage = event => {
    const data = event.data;
    const method = data && typeof data === 'object' ? data.method : undefined;

    if (this.#isFromHost(event)) {
      if (method === RESOURCE_READY) {
        this.#renderResource(data.params ?? {});
        return;
      }
      // Never forward sandbox-* handshake traffic into the app.
      if (typeof method === 'string' && method.startsWith(SANDBOX_METHOD_PREFIX)) {
        return;
      }
      this.#relayToApp(data);
      return;
    }

    if (this.#isFromApp(event)) {
      if (typeof method === 'string' && method.startsWith(SANDBOX_METHOD_PREFIX)) {
        return;
      }
      this.#relayToHost(data);
    }
  };

  #renderResource(params) {
    if (!this.isolated) {
      return;
    }
    if (this.#innerFrame) {
      return;
    }

    const { html, permissions, sandbox } = params;
    if (typeof html !== 'string') {
      console.error('[mcp-app-sandbox] sandbox-resource-ready missing html string.');
      return;
    }

    const frame = document.createElement('iframe');
    frame.id = 'app-frame';
    frame.setAttribute('sandbox', typeof sandbox === 'string' && sandbox ? sandbox : DEFAULT_SANDBOX);

    const allow = buildAllowAttribute(permissions);
    if (allow) {
      frame.setAttribute('allow', allow);
    }

    document.body.appendChild(frame);
    this.#innerFrame = frame;
    this.#appWindow = frame.contentWindow;

    const doc = frame.contentDocument;
    doc.open();
    doc.write(html);
    doc.close();
  }

  #relayToApp(data) {
    this.#appWindow?.postMessage(data, '*');
  }

  #relayToHost(data) {
    this.#post(this.#host, data);
  }

  #post(target, data) {
    target?.postMessage(data, this.#hostOrigin ?? '*');
  }
}

new SandboxProxy();
