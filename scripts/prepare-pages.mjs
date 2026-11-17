import assert from "node:assert/strict"
import { readFile, realpath, writeFile } from "node:fs/promises"
import path from "node:path"
import YAML from "yaml"
import { addDirectoryRedirects } from "./page-links.mjs"

// Runs after the Quartz build; the repository stores source, never this output.
const project = await realpath(process.cwd())
const output = await realpath(path.join(project, "public"))
assert.equal(output, path.join(project, "public"), "Build output must stay in this checkout")
const config = YAML.parse(await readFile("quartz.config.yaml", "utf8"))
const baseUrl = process.env.QUARTZ_BASE_URL ?? config.configuration.baseUrl
const basePath = new URL("https://" + baseUrl).pathname.replace(/\/$/, "")
const index = await readFile(path.join(output, "index.html"), "utf8")
assert(index.includes('data-basepath="' + basePath + '"'), "Build uses the wrong site path")
const redirects = await addDirectoryRedirects(output, basePath)
await writeFile(path.join(output, ".nojekyll"), "")
console.log("Prepared public/ for GitHub Pages, with " + redirects.length + " static link entry points.")
