// Preview the production build as plain static files, without extensionless rewrites.
import http from "node:http"
import path from "node:path"
import { readFile, stat } from "node:fs/promises"
import YAML from "yaml"

const root = path.resolve(process.env.QUARTZ_PREVIEW_DIR ?? "public")
const config = YAML.parse(await readFile("quartz.config.yaml", "utf8"))
const prefix = decodeURIComponent(new URL(`https://${process.env.QUARTZ_PREVIEW_BASE_URL ?? config.configuration.baseUrl}`).pathname).replace(/\/$/, "")
const port = Number(process.env.QUARTZ_PREVIEW_PORT ?? 8082)
const types = { ".html": "text/html; charset=utf-8", ".htm": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".wasm": "application/wasm", ".woff2": "font/woff2" }
const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost")
    const pathname = decodeURIComponent(url.pathname)
    if (pathname === prefix) {
      response.writeHead(302, { Location: encodeURI(prefix + "/") + url.search })
      response.end()
      return
    }
    if (!pathname.startsWith(prefix + "/")) throw new Error("Outside site")
    const relative = pathname.slice(prefix.length + 1)
    const target = path.resolve(root, relative)
    if (target !== root && !target.startsWith(root + path.sep)) throw new Error("Outside output")
    const metadata = await stat(target)
    if (metadata.isDirectory() && !pathname.endsWith("/")) {
      response.writeHead(301, { Location: encodeURI(pathname + "/") + url.search })
      response.end()
      return
    }
    const choices = metadata.isDirectory() ? [path.join(target, "index.html")] : [target]
    for (const file of choices) {
      try {
        if (!(await stat(file)).isFile()) continue
        const bytes = await readFile(file)
        response.writeHead(200, { "Content-Type": types[path.extname(file)] ?? "application/octet-stream" })
        response.end(bytes)
        return
      } catch {}
    }
    throw new Error("Missing file")
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
    response.end("Not found")
  }
})
server.listen(port, "127.0.0.1", () => console.log(`Regnvika: http://127.0.0.1:${port}${encodeURI(prefix)}/`))
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => server.close(() => process.exit(0)))
