import { mkdir, readdir, writeFile } from "node:fs/promises"
import path from "node:path"

// Preserve extensionless and trailing-slash links on static hosts.
// Give each HTML page a directory entry point, using Quartz's canonical-redirect
// format so SPA navigation, prefetch, search previews and normal visits agree.
export async function addDirectoryRedirects(output, basePath) {
  const pages = []
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name)
      if (entry.isDirectory()) await walk(filename)
      else if (entry.isFile() && entry.name.endsWith(".html") && entry.name !== "index.html") {
        pages.push(path.relative(output, filename))
      }
    }
  }
  await walk(output)

  const created = []
  for (const page of pages) {
    const target = basePath.replace(/\/$/, "") + "/" + page.split(path.sep).map(encodeURIComponent).join("/")
    const destination = path.join(output, page.slice(0, -".html".length), "index.html")
    await mkdir(path.dirname(destination), { recursive: true })
    const html = `<!DOCTYPE html>
<html lang="nb"><head><meta charset="utf-8"><title>Åpner notatet</title>
<link rel="canonical" href="${target}">
<script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
<meta http-equiv="refresh" content="0;url=${target}"></head>
<body><a href="${target}">Åpne notatet</a></body></html>
`
    try {
      // An actual folder index always takes precedence over a compatibility redirect.
      await writeFile(destination, html, { flag: "wx" })
      created.push(path.relative(output, destination).split(path.sep).join("/"))
    } catch (error) {
      if (error.code !== "EEXIST") throw error
    }
  }
  return created
}
