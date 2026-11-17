import assert from "node:assert/strict"
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import test from "node:test"
import { addDirectoryRedirects } from "./page-links.mjs"

test("static directory entry points preserve folder indexes and redirect Unicode notes", async () => {
  const output = await mkdtemp(path.join(tmpdir(), "maneoeya-links-"))
  try {
    for (const filename of ["index.html", "oppgaver/index.html", "oppgaver/låneproblemet.html", "tags/type.html", "tags/type/oppgave.html", "topic.html", "topic/index.html"]) {
      await mkdir(path.dirname(path.join(output, filename)), { recursive: true })
      await writeFile(path.join(output, filename), "Original page")
    }
    const basePath = "/andrem/m%C3%A5ne%C3%B8ya"
    const created = await addDirectoryRedirects(output, basePath)
    assert.deepEqual(created.sort(), ["oppgaver/låneproblemet/index.html", "tags/type/index.html", "tags/type/oppgave/index.html"])
    assert.equal(await readFile(path.join(output, "index.html"), "utf8"), "Original page")
    assert.equal(await readFile(path.join(output, "oppgaver/index.html"), "utf8"), "Original page")
    assert.equal(await readFile(path.join(output, "topic/index.html"), "utf8"), "Original page")
    const redirect = await readFile(path.join(output, "oppgaver/låneproblemet/index.html"), "utf8")
    assert(redirect.includes(`<link rel="canonical" href="${basePath}/oppgaver/l%C3%A5neproblemet.html">`))
    assert(redirect.includes("location.search + location.hash"))
    assert.equal(await readFile(path.join(output, "oppgaver/låneproblemet.html"), "utf8"), "Original page")
    assert.deepEqual(await addDirectoryRedirects(output, basePath), [])
  } finally {
    assert.equal(path.dirname(path.resolve(output)), path.resolve(tmpdir()))
    assert(path.basename(output).startsWith("maneoeya-links-"))
    await rm(output, { recursive: true, force: true })
  }
})
