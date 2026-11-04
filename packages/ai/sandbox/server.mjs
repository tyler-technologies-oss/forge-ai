/**
 * Local MCP App sandbox-proxy server.
 *
 * Serves `sandbox.html` + `sandbox.js` on a SEPARATE origin/port (default 6017) from
 * Storybook (6016) so the browser's Same-Origin Policy provides real isolation in dev —
 * the browser treats different ports as different origins.
 *
 * CSP is applied as a real HTTP `Content-Security-Policy` response header on the proxy
 * document. The host sends only the declared domain lists as JSON in `?csp=`
 * (`connectDomains`, `resourceDomains`, `frameDomains`, `baseUriDomains`); this server
 * validates them and builds every directive itself, appending `frame-ancestors` only when
 * `MCP_SANDBOX_FRAME_ANCESTORS` is set. Missing or invalid input falls back to the
 * restrictive default.
 */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, normalize } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.MCP_SANDBOX_PORT ?? 6017);
const FRAME_ANCESTORS = process.env.MCP_SANDBOX_FRAME_ANCESTORS;
const MAX_CSP_PARAM_LENGTH = 4096;
const MAX_SOURCES_PER_LIST = 32;
const SOURCE_PATTERN = /^(https|wss):\/\/(\*\.)?[a-z0-9-]+(\.[a-z0-9-]+)*(:[0-9]{1,5})?$/i;

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8'
};

function sources(list, fallback) {
  if (!Array.isArray(list) || list.length === 0) {
    return fallback;
  }
  if (list.length > MAX_SOURCES_PER_LIST) {
    return null;
  }
  if (!list.every(source => typeof source === 'string' && SOURCE_PATTERN.test(source))) {
    return null;
  }
  return list.join(' ');
}

function parseCspParam(param) {
  if (!param || param.length > MAX_CSP_PARAM_LENGTH) {
    return {};
  }
  try {
    const parsed = JSON.parse(param);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function buildCsp(declared) {
  const resource = sources(declared.resourceDomains, '');
  const connect = sources(declared.connectDomains, "'none'");
  const frame = sources(declared.frameDomains, "'none'");
  const baseUri = sources(declared.baseUriDomains, "'self'");

  if ([resource, connect, frame, baseUri].includes(null)) {
    return buildCsp({});
  }

  const extra = resource ? ` ${resource}` : '';
  return [
    "default-src 'none'",
    `script-src 'self' 'unsafe-inline'${extra}`,
    `style-src 'self' 'unsafe-inline'${extra}`,
    `img-src 'self' data:${extra}`,
    `media-src 'self' data:${extra}`,
    `font-src 'self' data:${extra}`,
    `connect-src ${connect}`,
    `frame-src ${frame}`,
    `base-uri ${baseUri}`,
    "object-src 'none'",
    ...(FRAME_ANCESTORS ? [`frame-ancestors ${FRAME_ANCESTORS}`] : [])
  ].join('; ');
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const requestedPath = url.pathname === '/' ? '/sandbox.html' : url.pathname;
    const safePath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, '');
    const ext = safePath.slice(safePath.lastIndexOf('.'));

    const contentType = CONTENT_TYPES[ext];
    if (!contentType) {
      res.writeHead(404).end('Not found');
      return;
    }

    const file = await readFile(join(__dirname, safePath));

    const headers = { 'Content-Type': contentType, 'Cache-Control': 'no-store' };

    // Only the sandbox document itself carries the app CSP; assets are served plain.
    if (safePath === '/sandbox.html') {
      headers['Content-Security-Policy'] = buildCsp(parseCspParam(url.searchParams.get('csp')));
    }

    res.writeHead(200, headers).end(file);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.writeHead(404).end('Not found');
      return;
    }
    console.error('[mcp-app-sandbox] server error:', error);
    res.writeHead(500).end('Internal server error');
  }
});

server.listen(PORT, () => {
  console.log(`[mcp-app-sandbox] proxy origin serving on http://localhost:${PORT}`);
});
