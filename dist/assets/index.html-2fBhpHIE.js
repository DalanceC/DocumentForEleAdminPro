import{_ as i,c as t,b as a,o as l}from"./app-UGfcum2M.js";const n="/DocumentForEleAdminPro/images/6-9-1.png",e={};function h(k,s){return l(),t("div",null,s[0]||(s[0]=[a(`<h2 id="_6-9-1-快速使用" tabindex="-1"><a class="header-anchor" href="#_6-9-1-快速使用"><span>6.9.1. 快速使用</span></a></h2><p>组件名 <code>ele-color-picker</code> ，<code>v1.4.0新增</code> 使用方式：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ele-color-picker</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :show-alpha</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">true</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> v-model:value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">color</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :predefine</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">predefineColors</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 选中颜色</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rgba(255, 69, 0, 0.68)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 预设颜色</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> predefineColors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">([</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#ff4500</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#ff8c00</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#ffd700</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#90ee90</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#00ced1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#1e90ff</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#c71585</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rgba(255, 69, 0, 0.68)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rgb(255, 120, 0)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hsv(51, 100, 98)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hsva(120, 40, 94, 0.5)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hsl(181, 100%, 37%)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hsla(209, 100%, 56%, 0.73)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#c7158577</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    ]);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+n+`" alt=""></p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> EleColorPicker</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ele-admin-pro/packages/ele-color-picker</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        components</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">EleColorPicker</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_6-9-2-属性列表" tabindex="-1"><a class="header-anchor" href="#_6-9-2-属性列表"><span>6.9.2. 属性列表</span></a></h2><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">String</td><td style="text-align:left;">v-model</td><td style="text-align:left;">绑定值</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">String</td><td style="text-align:left;">尺寸</td><td style="text-align:left;">可选 &#39;large&#39; / &#39;default&#39; / &#39;small&#39;</td></tr><tr><td style="text-align:left;">show-alpha</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">是否支持透明度选择</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">color-format</td><td style="text-align:left;">String</td><td style="text-align:left;">写入 v-model 的颜色的格式</td><td style="text-align:left;">可选 &#39;hsl&#39; / &#39;hsv&#39; / &#39;hex&#39; / &#39;rgb&#39;</td></tr><tr><td style="text-align:left;">popper-class</td><td style="text-align:left;">String</td><td style="text-align:left;">自定义下拉框的类名</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">predefine</td><td style="text-align:left;"><code>Array&lt;string&gt;</code></td><td style="text-align:left;">预定义颜色</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">customClass</td><td style="text-align:left;">String</td><td style="text-align:left;">自定义类名 <code>v1.6.0新增</code></td><td style="text-align:left;"></td></tr></tbody></table><br><h2 id="_6-9-3-事件列表" tabindex="-1"><a class="header-anchor" href="#_6-9-3-事件列表"><span>6.9.3. 事件列表</span></a></h2><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;">当绑定值变化时触发</td><td style="text-align:left;">当前值</td></tr><tr><td style="text-align:left;">active-change</td><td style="text-align:left;">面板中当前显示的颜色发生改变时触发</td><td style="text-align:left;">当前显示的颜色值</td></tr><tr><td style="text-align:left;">update:value</td><td style="text-align:left;">用于 v-model</td><td style="text-align:left;">value: string</td></tr></tbody></table>`,11)]))}const d=i(e,[["render",h],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/EleAdminPro/h466j58k/","title":"颜色选择","lang":"zh-CN","frontmatter":{"title":"颜色选择","createTime":"2025/01/10 09:30:40","permalink":"/EleAdminPro/h466j58k/"},"headers":[],"readingTime":{"minutes":0.99,"words":297},"git":{},"filePathRelative":"notes/EleAdminPro/six_nine.md","bulletin":false}');export{d as comp,r as data};
