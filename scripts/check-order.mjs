import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"

let count = 0
const problems = []

async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (["templates", "private"].includes(entry.name) || entry.name.startsWith(".")) continue
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      await check(filename)
    } else if (entry.name.endsWith(".md")) {
      const { data } = matter(await readFile(filename, "utf8"))
      const raw = data.tags ?? data.tag ?? []
      const tags = Array.isArray(raw) ? raw : String(raw).split(/[,\s]+/)
      const orderTags = tags.filter((tag) => String(tag).startsWith("rekkefolge/"))
      if (orderTags.length > 1) problems.push(`${filename}: bruk bare én rekkefølge-tag.`)
      for (const tag of orderTags) {
        if (
          !/^rekkefolge\/\d+(?:[/.]\d+)*$/.test(tag) ||
          !tag.slice("rekkefolge/".length).split(/[/.]/).every((part) => Number.isSafeInteger(Number(part)))
        ) {
          problems.push(`${filename}: ugyldig tagg «${tag}». Bruk f.eks. rekkefolge/100/10.`)
        }
      }
      count++
    }
  }
}

await check(path.resolve("content"))
if (problems.length) {
  console.error(problems.join("\n"))
  process.exitCode = 1
} else {
  console.log(`Kontrollert rekkefølge-tagger i ${count} notater.`)
}
