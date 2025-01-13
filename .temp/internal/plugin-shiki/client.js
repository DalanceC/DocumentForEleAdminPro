
import { useCopyCode } from 'C:/Users/arche/Desktop/theme/EleAdminProDocument/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.126_typescript@5.7.3_vue@3.5.13_typescript@5.7.3__vue_yh5k6eca6ug6cmc3dqztdcjoom/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'C:/Users/arche/Desktop/theme/EleAdminProDocument/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.126_typescript@5.7.3_vue@3.5.13_typescript@5.7.3__vue_yh5k6eca6ug6cmc3dqztdcjoom/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
