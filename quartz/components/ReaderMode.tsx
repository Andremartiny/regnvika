import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore: Quartz bundles inline browser scripts as text.
import script from "./scripts/readermode.inline"

export default (() => {
  const ReaderMode: QuartzComponent = ({ fileData }) => {
    // Only the site's root index is excluded, not folder index pages.
    if (fileData.slug === "index") return null

    return (
      <button
        type="button"
        class="readermode"
        aria-label="Lesemodus"
        aria-pressed="false"
        title="Slå på lesemodus"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5.5C9.5 4 6.5 3.5 3 4v15c3.5-.5 6.5 0 9 1.5 2.5-1.5 5.5-2 9-1.5V4c-3.5-.5-6.5 0-9 1.5Zm0 0v15" />
        </svg>
        <span>Lesemodus</span>
      </button>
    )
  }

  ReaderMode.beforeDOMLoaded = script
  ReaderMode.css = `
    .readermode {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.35rem 0.6rem;
      color: var(--secondary);
      background: transparent;
      border: 1px solid var(--lightgray);
      border-radius: 6px;
      font: inherit;
      font-size: 0.85rem;
      cursor: pointer;
    }
    .readermode svg {
      width: 18px;
      height: 18px;
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linejoin: round;
    }
    .readermode[aria-pressed="true"] {
      background: var(--highlight);
      border-color: var(--secondary);
    }
    .readermode:focus-visible {
      outline: 2px solid var(--secondary);
      outline-offset: 3px;
    }
    .page-header header:has(> .readermode) {
      justify-content: flex-end;
      margin: 0 0 1rem;
    }
    body[data-slug="index"] .page-header header {
      display: none;
    }
    @media (min-width: 801px) {
      :root[reader-mode="on"] body:not([data-slug="index"]) .sidebar {
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      :root[reader-mode="on"] body:not([data-slug="index"]) .sidebar:hover,
      :root[reader-mode="on"] body:not([data-slug="index"]) .sidebar:focus-within {
        opacity: 1;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      :root[reader-mode="on"] body:not([data-slug="index"]) .sidebar {
        transition: none;
      }
    }
  `

  return ReaderMode
}) satisfies QuartzComponentConstructor
