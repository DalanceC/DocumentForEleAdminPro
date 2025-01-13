<template><div><h2 id="_6-26-1-快速使用" tabindex="-1"><a class="header-anchor" href="#_6-26-1-快速使用"><span>6.26.1. 快速使用</span></a></h2>
<p>水印组件名称 <code v-pre>ele-watermark</code> ，支持文本、多行文本、图片等， <code v-pre>v1.11.0新增</code>，使用示例：</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ele-watermark</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Ele Admin Pro</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">height: 400px</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ele-watermark</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h2 id="_6-26-2-属性列表" tabindex="-1"><a class="header-anchor" href="#_6-26-2-属性列表"><span>6.26.2. 属性列表</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">水印宽度</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">120</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">水印高度</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">64</td>
</tr>
<tr>
<td style="text-align:left">rotate</td>
<td style="text-align:left">旋转角度, -180~180</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">-22</td>
</tr>
<tr>
<td style="text-align:left">zIndex</td>
<td style="text-align:left">层级</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">9</td>
</tr>
<tr>
<td style="text-align:left">image</td>
<td style="text-align:left">水印图片源</td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">content</td>
<td style="text-align:left">水印文字</td>
<td style="text-align:left">String, Array</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">font</td>
<td style="text-align:left">文字样式</td>
<td style="text-align:left">Object</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">gap</td>
<td style="text-align:left">水印间距</td>
<td style="text-align:left">Array</td>
<td style="text-align:left"><code v-pre>[100, 100]</code></td>
</tr>
<tr>
<td style="text-align:left">offset</td>
<td style="text-align:left">距离左上角的偏移量</td>
<td style="text-align:left">Array</td>
<td style="text-align:left"><code v-pre>[50, 50]</code></td>
</tr>
</tbody>
</table>
<p><code v-pre>font</code> 属性数据格式说明：</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">类型</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">color</td>
<td style="text-align:left">字体颜色</td>
<td style="text-align:left">String</td>
</tr>
<tr>
<td style="text-align:left">fontSize</td>
<td style="text-align:left">字体大小</td>
<td style="text-align:left">Number</td>
</tr>
<tr>
<td style="text-align:left">fontWeight</td>
<td style="text-align:left">字体粗细</td>
<td style="text-align:left">'normal','light','weight',Number</td>
</tr>
<tr>
<td style="text-align:left">fontFamily</td>
<td style="text-align:left">字体样式</td>
<td style="text-align:left">String</td>
</tr>
<tr>
<td style="text-align:left">fontStyle</td>
<td style="text-align:left">字体类型</td>
<td style="text-align:left">'none','normal','italic','oblique'</td>
</tr>
</tbody>
</table>
<br/>
<h2 id="_6-26-3-插槽列表" tabindex="-1"><a class="header-anchor" href="#_6-26-3-插槽列表"><span>6.26.3. 插槽列表</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">插槽名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">default</td>
<td style="text-align:left">默认插槽</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
</div></template>


