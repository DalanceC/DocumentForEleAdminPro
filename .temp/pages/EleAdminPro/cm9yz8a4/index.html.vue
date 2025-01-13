<template><div><h2 id="_6-3-1-快速使用" tabindex="-1"><a class="header-anchor" href="#_6-3-1-快速使用"><span>6.3.1. 快速使用</span></a></h2>
<p>组件名 <code v-pre>ele-cropper-model</code> ，基于 <a href="https://github.com/fengyuanchen/cropperjs" target="_blank" rel="noopener noreferrer">cropperjs</a> 开发 ，使用方式：</p>
<CodeTabs id="6" :data='[{"id":"TypeScript"},{"id":"JavaScript"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript-official"/><span>TypeScript</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-js-official"/><span>JavaScript</span></template><template #tab0="{ value, isActive }"><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ele-body</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">img</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> :src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">avatar</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> @click</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">visible=true</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        &#x3C;!-- 图片裁剪弹窗 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ele-cropper-modal</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> v-model:visible</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">visible</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> :src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">avatar</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> @done</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">onDone</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ts</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">avatar</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://cdn.eleadmin.com/20200610/avatar.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 是否显示裁剪弹窗</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">visible</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /* 裁剪完成回调 */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">onDone</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">res</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        avatar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> res</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        visible</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    };</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ele-body</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">img</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> :src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">avatar</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> @click</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">visible=true</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        &#x3C;!-- 图片裁剪弹窗 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ele-cropper-modal</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> v-model:visible</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">visible</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> :src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">avatar</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> @done</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">onDone</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> avatar</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://cdn.eleadmin.com/20200610/avatar.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 是否显示裁剪弹窗</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> visible</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /* 裁剪完成回调 */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onDone</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">res</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        avatar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> res</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        visible</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    };</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs><p><img src="/images/6-3-1.png" alt=""></p>
<p>注意，v1.5.0 以及之前的版本需要手动引入：</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> EleCropperModal</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ele-admin-pro/packages/ele-cropper-modal</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // v1.0.0 版本的引入方式为如下写法</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //import EleCropperModal from '@/components/EleCropperModal';</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        components</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> EleCropperModal</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h2 id="_6-3-2-属性列表" tabindex="-1"><a class="header-anchor" href="#_6-3-2-属性列表"><span>6.3.2. 属性列表</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">visible</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否显示(v-model)</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">String</td>
<td style="text-align:left">裁剪的图片地址</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">imageType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">默认的图片地址对应的图片类型 <code v-pre>1.9.0新增</code></td>
<td style="text-align:left">'image/png'</td>
</tr>
<tr>
<td style="text-align:left">accept</td>
<td style="text-align:left">String</td>
<td style="text-align:left">允许上传的图片类型</td>
<td style="text-align:left">'image/*'</td>
</tr>
<tr>
<td style="text-align:left">tools</td>
<td style="text-align:left">String/Boolean</td>
<td style="text-align:left">操作按钮布局, false 不显示</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">showPreview</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否显示预览组件</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">previewWidth</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">预览组件宽度 <code v-pre>1.8.0新增</code></td>
<td style="text-align:left">120</td>
</tr>
<tr>
<td style="text-align:left">okText</td>
<td style="text-align:left">String</td>
<td style="text-align:left">完成按钮文字</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">toBlob</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">裁剪后是否返回 blob 类型</td>
<td style="text-align:left">默认 false 返回 base64</td>
</tr>
<tr>
<td style="text-align:left">options</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">cropperjs 的参数 <code v-pre>1.9.0新增</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">croppedOptions</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">cropperjs 裁剪方法的参数 <code v-pre>1.9.0新增</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">aspectRatio</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪比例 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">1/1</td>
</tr>
<tr>
<td style="text-align:left">viewMode</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪器的视图模式 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">0</td>
</tr>
<tr>
<td style="text-align:left">dragMode</td>
<td style="text-align:left">String</td>
<td style="text-align:left">裁剪器的拖动模式 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">'crop'</td>
</tr>
<tr>
<td style="text-align:left">initialAspectRatio</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪框的初始高宽比 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">minContainerWidth</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">容器的最小宽度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">200</td>
</tr>
<tr>
<td style="text-align:left">minContainerHeight</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">容器的最小高度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">100</td>
</tr>
<tr>
<td style="text-align:left">minCanvasWidth</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">画布的最小宽度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">0</td>
</tr>
<tr>
<td style="text-align:left">minCanvasHeight</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">画布的最小高度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">0</td>
</tr>
<tr>
<td style="text-align:left">minCropBoxWidth</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪框的最小宽度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">0</td>
</tr>
<tr>
<td style="text-align:left">minCropBoxHeight</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪框的最小高度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">0</td>
</tr>
<tr>
<td style="text-align:left">croppedWidth</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪后输出宽度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">croppedHeight</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪后输出高度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">croppedMinWidth</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪后输出最小宽度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">croppedMinHeight</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪后输出最小高度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">0</td>
</tr>
<tr>
<td style="text-align:left">croppedMaxWidth</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪后输出最大宽度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">Infinity</td>
</tr>
<tr>
<td style="text-align:left">croppedMaxHeight</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪后输出最大高度 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">Infinity</td>
</tr>
<tr>
<td style="text-align:left">croppedFillColor</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">裁剪后输出的背景填充色 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">'transparent'</td>
</tr>
<tr>
<td style="text-align:left">imageSmoothingEnabled</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>1.9.0移除</code></td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">imageSmoothingQuality</td>
<td style="text-align:left">String</td>
<td style="text-align:left">裁剪后输出质量 <code v-pre>1.9.0移除</code></td>
<td style="text-align:left">默认 'low' , 可选 medium、high</td>
</tr>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">String</td>
<td style="text-align:left">弹窗的标题</td>
<td style="text-align:left">'裁剪图片'</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">String</td>
<td style="text-align:left">弹窗的宽度</td>
<td style="text-align:left">'680px'</td>
</tr>
<tr>
<td style="text-align:left">dialogStyle</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">弹窗样式</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">centered</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">垂直居中展示 Modal</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">closable</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否显示右上角的关闭按钮</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">destroyOnClose</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">关闭时销毁 Modal 里的子元素</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">forceRender</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">强制渲染 Modal</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">keyboard</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否支持键盘 esc 关闭</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">mask</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否展示遮罩</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">maskClosable</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">点击蒙层是否允许关闭</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">maskStyle</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">遮罩样式</td>
<td style="text-align:left">{}</td>
</tr>
<tr>
<td style="text-align:left">wrapClassName</td>
<td style="text-align:left">String</td>
<td style="text-align:left">对话框外层容器的类名</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">zIndex</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">设置 Modal 的 z-index</td>
<td style="text-align:left">1000</td>
</tr>
<tr>
<td style="text-align:left">dialogClass</td>
<td style="text-align:left">String</td>
<td style="text-align:left">可用于设置浮层的类名</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">movable</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否可以拖动 <code v-pre>v1.7.0新增</code></td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">moveOut</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否可以拖出边界 <code v-pre>v1.7.0新增</code></td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">moveOutPositive</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">如果可以拖出边界是否只允许下右拖出 <code v-pre>v1.7.0新增</code></td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">resizable</td>
<td style="text-align:left">Boolean, String</td>
<td style="text-align:left">是否可以拉伸 <code v-pre>v1.7.0新增</code></td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">maxable</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否显示最大化切换按钮 <code v-pre>v1.7.0新增</code></td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">multiple</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否支持打开多个 <code v-pre>v1.7.0新增</code></td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">fullscreen</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否默认全屏 <code v-pre>v1.7.0新增</code></td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">inner</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否限制在主体内部 <code v-pre>v1.7.0新增</code></td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">resetOnClose</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">是否在弹窗关闭后重置位置和大小 <code v-pre>v1.7.0新增</code></td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">maskClass</td>
<td style="text-align:left">String</td>
<td style="text-align:left">遮罩的类名 <code v-pre>v1.9.0新增</code></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p>弹窗相关的几个参数同 ant-design-vue 的 a-modal 组件的参数及弹窗扩展 ele-modal 组件。</p>
<br/>
<h2 id="_6-3-3-事件列表" tabindex="-1"><a class="header-anchor" href="#_6-3-3-事件列表"><span>6.3.3. 事件列表</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">事件名称</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">open</td>
<td style="text-align:left">Dialog 打开的回调</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">closed</td>
<td style="text-align:left">Dialog 关闭的回调</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">done</td>
<td style="text-align:left">裁剪完成的回调</td>
<td style="text-align:left">裁剪后的 base64 数据</td>
</tr>
<tr>
<td style="text-align:left">update:visible</td>
<td style="text-align:left">用于 visible 属性的 v-model</td>
<td style="text-align:left">visible: Boolean</td>
</tr>
</tbody>
</table>
<br/>
<h2 id="_6-3-4-上传服务端" tabindex="-1"><a class="header-anchor" href="#_6-3-4-上传服务端"><span>6.3.4. 上传服务端</span></a></h2>
<p>裁剪后返回 base64 字符，服务端可以接收字符类型，如果服务端非要使用 File 接收，先设置 <code v-pre>:to-blob=&quot;true&quot;</code> 属性，然后使用如下方法上传：</p>
<CodeTabs id="876" :data='[{"id":"TypeScript"},{"id":"JavaScript"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript-official"/><span>TypeScript</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-js-official"/><span>JavaScript</span></template><template #tab0="{ value, isActive }"><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ele-cropper-modal</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> :to-blob</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> @done</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">onDone</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ts</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> request</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@/utils/request</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">onDone</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">blob</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Blob</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 裁剪完成的回调</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">        const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">formData</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> new </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">FormData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        formData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">append</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">file</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> blob</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        //formData.append('file', blob, 'avatar.png');  // 参数三可以设定文件名称</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // 使用 axios 上传</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        request</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">post</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/file/upload</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> formData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">res</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">res</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">error</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        });</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    };</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ele-cropper-modal</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> :to-blob</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> @done</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">onDone</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> request</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@/utils/request</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onDone</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">blob</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 裁剪完成的回调</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">        const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> formData</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> FormData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        formData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">append</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">file</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> blob</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        //formData.append('file', blob, 'avatar.png');  // 参数三可以设定文件名称</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // 使用 axios 上传</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        request</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">post</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/file/upload</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> formData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">res</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">res</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">error</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        });</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    };</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs></div></template>


