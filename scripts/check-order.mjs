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
      const value = data.order
      const order =
        typeof value === "string" || typeof value === "number"
          ? String(value).trim()
          : ""

      if (
        !/^\d+(?:\/\d+)*$/.test(order) ||
        !order.split("/").every((part) => Number.isSafeInteger(Number(part)))
      ) {
        problems.push(
          `${filename}: ugyldig eller manglende order. Bruk f.eks. "100/10".`,
        )
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
