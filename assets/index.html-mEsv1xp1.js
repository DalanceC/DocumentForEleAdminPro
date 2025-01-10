import{_ as i,c as t,b as a,o as l}from"./app-BCACk1Ud.js";const e={};function n(h,s){return l(),t("div",null,s[0]||(s[0]=[a(`<h2 id="_6-27-1-快速使用" tabindex="-1"><a class="header-anchor" href="#_6-27-1-快速使用"><span>6.27.1. 快速使用</span></a></h2><p>仪表盘组件名称 <code>ele-dashboard</code> ，<code>v1.11.0新增</code>，使用示例：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ele-dashboard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">success</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">line-height: 1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">span</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">font-size: 48px</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">100</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">span</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">span</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">font-size: 12px; margin-left: 4px</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">分</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">span</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">margin-top: 4px</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">安全</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ele-dashboard</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_6-27-2-属性列表" tabindex="-1"><a class="header-anchor" href="#_6-27-2-属性列表"><span>6.27.2. 属性列表</span></a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">类型</td><td style="text-align:left;">String</td><td style="text-align:left;">&#39;primary&#39;,&#39;success&#39;,&#39;warning&#39;,&#39;danger&#39;</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">自定义颜色</td><td style="text-align:left;">String</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">尺寸</td><td style="text-align:left;">Number,String</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">space</td><td style="text-align:left;">间距</td><td style="text-align:left;">Number,String</td><td style="text-align:left;"></td></tr></tbody></table><br><h2 id="_6-27-3-插槽列表" tabindex="-1"><a class="header-anchor" href="#_6-27-3-插槽列表"><span>6.27.3. 插槽列表</span></a></h2><table><thead><tr><th style="text-align:left;">插槽名</th><th style="text-align:left;">说明</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">默认插槽</td><td style="text-align:left;"></td></tr></tbody></table>`,9)]))}const d=i(e,[["render",n],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/EleAdminPro/n2fg6nxq/","title":"仪表盘组件","lang":"zh-CN","frontmatter":{"title":"仪表盘组件","createTime":"2025/01/10 09:30:40","permalink":"/EleAdminPro/n2fg6nxq/"},"headers":[],"readingTime":{"minutes":0.44,"words":132},"git":{},"filePathRelative":"notes/EleAdminPro/six_twenty-seven.md","bulletin":false}');export{d as comp,p as data};
