import assert from "node:assert/strict"
import { readdir, readFile, stat } from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"

const root = path.resolve("content")
const files = []
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || ["templates", "private"].includes(entry.name)) continue
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) await walk(filename)
    else if (entry.name.endsWith(".md")) files.push(filename)
  }
}
await walk(root)
const documents = new Map()
for (const filename of files) {
  const raw = await readFile(filename, "utf8")
  documents.set(filename, { raw, data: matter(raw).data })
}
const isDraft = (data) => data?.draft === true || data?.draft === "true"
const errors = []
let links = 0
let images = 0
for (const filename of files) {
  const { raw: original, data } = documents.get(filename)
  // Obsidian/HTML comments are not visible links in the published page.
  const raw = original.replace(/%%[\s\S]*?%%/g, "").replace(/<!--[\s\S]*?-->/g, "")
  if (!data.title) errors.push(`${filename}: mangler title.`)
  if (!data.tags?.some((tag) => tag.startsWith("rekkefolge/"))) errors.push(`${filename}: mangler rekkefølge-tagg.`)
  const references = []
  for (const m of raw.matchAll(/(!?)\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) references.push([m[2], true, m[1] === "!"])
  for (const m of raw.matchAll(/(!?)\[[^\]\n]*\]\(([^)\n]+)\)/g)) references.push([m[2], false, m[1] === "!"])
  for (const m of raw.matchAll(/<(?:iframe|img)\b[^>]*\bsrc="([^"]+)"/g)) references.push([m[1], false, true])
  for (const [target, wiki, asset] of references) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(target)) continue
    const decoded = decodeURIComponent(target).split(/[?#]/)[0]
    if (!decoded) continue
    let candidates = wiki
      ? [path.join(root, decoded), path.resolve(path.dirname(filename), decoded)]
      : [path.resolve(path.dirname(filename), decoded)]
    if (wiki && !path.extname(decoded)) candidates = candidates.map((candidate) => candidate + ".md")
    if (wiki && !decoded.includes("/")) candidates.push(...files.filter((f) => path.basename(f, ".md") === decoded))
    let found = false
    for (const candidate of candidates) {
      if (!candidate.startsWith(root + path.sep)) continue
      try {
        if ((await stat(candidate)).isFile()) {
          found = true
          if (!isDraft(data) && isDraft(documents.get(candidate)?.data)) {
            errors.push(`${path.relative(root, filename)}: publisert side lenker til utkastet «${target}».`)
          }
          break
        }
      } catch {}
    }
    if (!found) errors.push(`${path.relative(root, filename)}: finner ikke «${target}».`)
    if (asset) images++
    else links++
  }
}
assert.equal(errors.length, 0, errors.join("\n"))
console.log(`Kontrollert ${files.length} sider, ${links} lokale notatlenker og ${images} lokale figurer/interaktiver.`)
