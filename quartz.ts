import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
import { compareByOrder } from "./quartz/order"
import ReaderMode from "./quartz/components/ReaderMode"

// Record the same ordering for navigation and generated page lists.
ExternalPlugin.Explorer({ sortFn: compareByOrder })
ExternalPlugin.FolderPage({ sort: compareByOrder })
ExternalPlugin.TagPage({ sort: compareByOrder })

const config = await loadQuartzConfig()
// Allow a preview or deployment environment to override the configured site address.
if (process.env.QUARTZ_BASE_URL) config.configuration.baseUrl = process.env.QUARTZ_BASE_URL
export default config
export const layout = await loadQuartzLayout({
  defaults: { footer: [], header: [ReaderMode()] },
})
