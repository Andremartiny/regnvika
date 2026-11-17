import assert from "node:assert/strict"
import { test } from "node:test"
import { build } from "esbuild"
import { compareByOrder } from "./order"

const page = (order?: string, title = "Notat") => ({
  frontmatter: { title, tags: order ? [`rekkefolge/${order}`] : ["emne"] },
})

test("new notes fit between existing notes without renumbering", () => {
  const notes = ["200", "100/20", "150", "100/10/10", "100", "100/10"]
  assert.deepEqual(notes.sort((a, b) => compareByOrder(page(a), page(b))), [
    "100", "100/10", "100/10/10", "100/20", "150", "200",
  ])
})

test("segments use numeric order, including the optional dot notation", () => {
  assert.ok(compareByOrder(page("1/2"), page("1/10")) < 0)
  assert.ok(compareByOrder(page("1.2"), page("1.10")) < 0)
  assert.equal(compareByOrder(page("100/10"), page("100.10")), 0)
})

test("zero works and unordered notes appear last, with Norwegian title ordering", () => {
  assert.ok(compareByOrder(page("0"), page("100")) < 0)
  assert.ok(compareByOrder(page("100", "Å"), page(undefined, "A")) < 0)
  assert.ok(compareByOrder(page(undefined, "Ø"), page(undefined, "Å")) < 0)
  assert.ok(compareByOrder(page("100", "Notat 2"), page("100", "Notat 10")) < 0)
})

test("Explorer nodes and page metadata agree", () => {
  const node = (order: string) => ({ data: { title: "Notat", tags: [`rekkefolge/${order}`] } })
  assert.equal(Math.sign(compareByOrder(node("100/10"), node("150"))), -1)
  assert.equal(Math.sign(compareByOrder(node("100/10"), page("150"))), -1)
})

test("the bundled callback runs in the browser without module closures", async () => {
  const result = await build({
    entryPoints: ["quartz/order.ts"],
    bundle: true,
    write: false,
    format: "iife",
    globalName: "Ordering",
    keepNames: true,
  })
  const bundled = new Function(`${result.outputFiles[0].text}; return Ordering.compareByOrder;`)()
  const browserSort = new Function(`return (${bundled.toString()})`)()
  assert.ok(browserSort(page("100/2"), page("100/10")) < 0)
})
