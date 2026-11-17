// Both page metadata (build time) and Explorer nodes (in the browser) use this comparator.
export interface SortableEntry {
  frontmatter?: Record<string, unknown>
  tags?: unknown
  title?: unknown
  slug?: unknown
  displayName?: string
  data?: Record<string, unknown> | null
}

export function compareByOrder(a: SortableEntry, b: SortableEntry): number {
  // Keep this function self-contained: Quartz serializes it for the Explorer.
  // In particular, named inner functions can introduce esbuild's __name helper.
  const paths = [a, b].map((entry) => {
    const data = entry.data ?? entry
    const frontmatter = data.frontmatter as Record<string, unknown> | undefined
    const tags = frontmatter?.tags ?? data.tags
    const tag = (Array.isArray(tags) ? tags : []).find(
      (value) => typeof value === "string" && /^rekkefolge\/\d+(?:[/.]\d+)*$/.test(value),
    ) as string | undefined
    return tag ? tag.slice("rekkefolge/".length).split(/[/.]/).map(Number) : null
  })

  const left = paths[0]
  const right = paths[1]
  if (left && !right) return -1
  if (!left && right) return 1
  if (left && right) {
    for (let i = 0; i < Math.min(left.length, right.length); i++) {
      if (left[i] !== right[i]) return left[i] - right[i]
    }
    if (left.length !== right.length) return left.length - right.length
  }

  const titles = [a, b].map((entry) => {
    const data = entry.data ?? entry
    const frontmatter = data.frontmatter as Record<string, unknown> | undefined
    return String(entry.displayName ?? frontmatter?.title ?? data.title ?? entry.slug ?? "")
  })
  return (
    titles[0].localeCompare(titles[1], "nb-NO", { numeric: true, sensitivity: "base" }) ||
    String(a.slug ?? "").localeCompare(String(b.slug ?? ""), "nb-NO")
  )
}
