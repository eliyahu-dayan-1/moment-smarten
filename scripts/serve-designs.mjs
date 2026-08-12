import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

const port = Number(process.env.MOMENT_PREVIEW_PORT || 48138);
const docsRoot = resolve(process.cwd(), "docs");
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

function safePath(pathname) {
  const candidate = resolve(docsRoot, "." + pathname);
  return candidate === docsRoot || candidate.startsWith(docsRoot + sep) ? candidate : null;
}

async function existingFile(pathname) {
  const candidate = safePath(pathname);
  if (!candidate) return null;
  try {
    const info = await stat(candidate);
    if (info.isFile()) return candidate;
    if (info.isDirectory()) {
      const indexFile = resolve(candidate, "index.html");
      if ((await stat(indexFile)).isFile()) return indexFile;
    }
  } catch {
    return null;
  }
  return null;
}

createServer(async (request, response) => {
  const url = new URL(request.url || "/", "http://localhost");
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }

  const file = await existingFile(pathname);
  if (file) {
    const body = await readFile(file);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(body);
    return;
  }

  if (pathname !== "/" && pathname !== "") {
    const destination = "/?route=" + encodeURIComponent(pathname);
    response.writeHead(302, { Location: destination, "Cache-Control": "no-store" });
    response.end();
    return;
  }

  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("העמוד לא נמצא");
}).listen(port, "127.0.0.1", () => {
  console.log(`Moment designs: http://127.0.0.1:${port}/`);
});
