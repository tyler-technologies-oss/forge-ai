/**
 * Local MCP App sandbox-proxy server.
 *
 * Serves `sandbox.html` + `sandbox.js` on a SEPARATE origin/port (default 6017) from
 * Storybook (6016) so the browser's Same-Origin Policy provides real isolation in dev —
 * the browser treats different ports as different origins.
 *
 * CSP is applied as a real HTTP `Content-Security-Policy` response header on the proxy
 * document, read from the `?csp=` query param the host appends to `sandboxUrl`. This is
 * the spec-faithful, tamper-proof mechanism (not a <meta> tag). When `?csp=` is absent
 * the restrictive default block is applied.
 */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, normalize } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.MCP_SANDBOX_PORT ?? 6017);

const DEFAULT_CSP =
  "default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data:; media-src 'self' data:; connect-src 'none'; object-src 'none'; base-uri 'self'; frame-src 'none'";

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8'
};

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
      const csp = url.searchParams.get('csp');
      headers['Content-Security-Policy'] = csp && csp.trim() ? csp : DEFAULT_CSP;
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
