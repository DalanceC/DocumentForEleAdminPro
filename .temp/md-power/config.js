import { defineClientConfig } from 'vuepress/client'
import Tabs from 'C:/Users/arche/Desktop/theme/EleAdminProDocument/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.126_markdown-it@14.1.0_typescript@5.7.3_vuepress@2.0.0-rc.1_frmn6ciaadjv4s3xfzwfo4gyja/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'C:/Users/arche/Desktop/theme/EleAdminProDocument/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.126_markdown-it@14.1.0_typescript@5.7.3_vuepress@2.0.0-rc.1_frmn6ciaadjv4s3xfzwfo4gyja/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'C:/Users/arche/Desktop/theme/EleAdminProDocument/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.126_markdown-it@14.1.0_typescript@5.7.3_vuepress@2.0.0-rc.1_frmn6ciaadjv4s3xfzwfo4gyja/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'C:/Users/arche/Desktop/theme/EleAdminProDocument/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.126_markdown-it@14.1.0_typescript@5.7.3_vuepress@2.0.0-rc.1_frmn6ciaadjv4s3xfzwfo4gyja/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import 'C:/Users/arche/Desktop/theme/EleAdminProDocument/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.126_markdown-it@14.1.0_typescript@5.7.3_vuepress@2.0.0-rc.1_frmn6ciaadjv4s3xfzwfo4gyja/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})