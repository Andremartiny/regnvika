// Show navigation and sidebars by default; reading mode is an explicit choice.
let readerModeEnabled = false
document.documentElement.setAttribute("reader-mode", "off")

function applyReaderMode() {
  const slug = document.body?.dataset.slug
  if (!slug) return

  // Use Quartz's page slug, so the exception also works under a hosted subpath.
  // Visiting home must not overwrite the preference for other pages.
  const active = slug !== "index" && readerModeEnabled
  const mode = active ? "on" : "off"
  const changed = document.documentElement.getAttribute("reader-mode") !== mode
  document.documentElement.setAttribute("reader-mode", mode)

  for (const button of document.querySelectorAll<HTMLButtonElement>("button.readermode")) {
    button.setAttribute("aria-pressed", String(active))
    button.title = active ? "Slå av lesemodus" : "Slå på lesemodus"
  }

  if (changed) {
    document.dispatchEvent(new CustomEvent("readermodechange", { detail: { mode } }))
  }
}

// A single delegated listener survives SPA navigation and repeated render events.
document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return
  const button = event.target.closest("button.readermode")
  if (!button || document.body.dataset.slug === "index") return
  readerModeEnabled = !readerModeEnabled
  applyReaderMode()
})

document.addEventListener("nav", applyReaderMode)
document.addEventListener("render", applyReaderMode)
document.addEventListener("DOMContentLoaded", applyReaderMode, { once: true })
