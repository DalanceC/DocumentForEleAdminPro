import{_ as s,c as i,b as l,o as e}from"./app-UGfcum2M.js";const a={};function n(d,t){return e(),i("div",null,t[0]||(t[0]=[l(`<h2 id="_6-23-1-快速使用" tabindex="-1"><a class="header-anchor" href="#_6-23-1-快速使用"><span>6.23.1. 快速使用</span></a></h2><p>左右分割布局组件名 <code>ele-split-layout</code> ，用于左侧固定宽度，右侧铺满的布局，<code>v1.8.0新增</code>，使用示例：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ele-body</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">a-card</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :bordered</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">false</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ele-split-layout</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">266px</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                allow-collapse</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                :right-style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{ overflow: &#39;hidden&#39; }</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                :style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{ minHeight: &#39;calc(100vh - 152px)&#39; }</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            &gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">左边区域</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">右边区域</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ele-split-layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">a-card</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ele-split-layout 只负责左右内容的展示，折叠展开等功能，你可以为你的左右内容区域都加上边框样式，效果会更好。</p><br><h2 id="_6-23-2-属性列表" tabindex="-1"><a class="header-anchor" href="#_6-23-2-属性列表"><span>6.23.2. 属性列表</span></a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">width</td><td style="text-align:left;">左侧宽度</td><td style="text-align:left;">String</td><td style="text-align:left;">&#39;200px&#39;</td></tr><tr><td style="text-align:left;">space</td><td style="text-align:left;">间距</td><td style="text-align:left;">String</td><td style="text-align:left;">&#39;16px&#39;</td></tr><tr><td style="text-align:left;">collapse</td><td style="text-align:left;">是否折叠 v-model</td><td style="text-align:left;">Boolean</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">allowCollapse</td><td style="text-align:left;">是否可折叠</td><td style="text-align:left;">Boolean</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">leftStyle</td><td style="text-align:left;">左侧样式</td><td style="text-align:left;">Object: CSSProperties</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">rightStyle</td><td style="text-align:left;">右侧样式</td><td style="text-align:left;">Object: CSSProperties</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">collapseBtnStyle</td><td style="text-align:left;">折叠按钮样式</td><td style="text-align:left;">Object: CSSProperties</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">minSize</td><td style="text-align:left;">自动拉伸时最小尺寸 <code>v1.11.0新增</code></td><td style="text-align:left;">Number</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">maxSize</td><td style="text-align:left;">自动拉伸时最大尺寸 <code>v1.11.0新增</code></td><td style="text-align:left;">Number</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">vertical</td><td style="text-align:left;">是否垂直方向 <code>v1.11.0新增</code></td><td style="text-align:left;">Boolean</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">reverse</td><td style="text-align:left;">是否反向布局 <code>v1.11.0新增</code></td><td style="text-align:left;">Boolean</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">resizable</td><td style="text-align:left;">是否可拉伸宽度 <code>v1.11.0新增</code></td><td style="text-align:left;">Boolean</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">responsive</td><td style="text-align:left;">是否开启响应式 <code>v1.11.0新增</code></td><td style="text-align:left;">Boolean</td><td style="text-align:left;">默认取 pro-layout 的属性</td></tr></tbody></table><br><h2 id="_6-23-3-事件列表" tabindex="-1"><a class="header-anchor" href="#_6-23-3-事件列表"><span>6.23.3. 事件列表</span></a></h2><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">update:collapse</td><td style="text-align:left;">用于 collapse 的 v-model</td><td style="text-align:left;">collapse: boolean</td></tr></tbody></table><br><h2 id="_6-23-4-插槽列表" tabindex="-1"><a class="header-anchor" href="#_6-23-4-插槽列表"><span>6.23.4. 插槽列表</span></a></h2><table><thead><tr><th style="text-align:left;">插槽名</th><th style="text-align:left;">说明</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">边栏插槽</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">content</td><td style="text-align:left;">内容插槽</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">collapse</td><td style="text-align:left;">折叠展开按钮插槽 <code>v1.11.0新增</code></td><td style="text-align:left;">collapse</td></tr></tbody></table>`,13)]))}const p=s(a,[["render",n],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/EleAdminPro/0mqgkj1z/","title":"分割面板","lang":"zh-CN","frontmatter":{"title":"分割面板","createTime":"2025/01/10 09:30:40","permalink":"/EleAdminPro/0mqgkj1z/"},"headers":[],"readingTime":{"minutes":1.17,"words":352},"git":{},"filePathRelative":"notes/EleAdminPro/six_twenty-three.md","bulletin":false}');export{p as comp,k as data};
