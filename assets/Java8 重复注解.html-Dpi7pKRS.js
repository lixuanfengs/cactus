import{_ as s,c as a,f as n,o as l}from"./app-DgJc46tw.js";const e={};function t(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<blockquote><p>理解Java 8 重复注解需理解几个问题:</p><ul><li>Jdk8之前对重复注解是怎么做的?</li><li>Jdk8对重复注解添加了什么支持?</li></ul></blockquote><ul><li>Java8 重复注解 <ul><li>什么是重复注解 <ul><li><a href="#jdk8%E4%B9%8B%E5%89%8D">JDK8之前</a></li><li><a href="#jdk8%E9%87%8D%E5%A4%8D%E6%B3%A8%E8%A7%A3">Jdk8重复注解</a></li></ul></li><li><a href="#%E6%80%BB%E7%BB%93">总结</a></li></ul></li></ul><h2 id="什么是重复注解" tabindex="-1"><a class="header-anchor" href="#什么是重复注解"><span><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E9%87%8D%E5%A4%8D%E6%B3%A8%E8%A7%A3">#</a> 什么是重复注解</span></a></h2><p>允许在同一申明类型(类，属性，或方法)的多次使用同一个注解</p><h3 id="jdk8之前" tabindex="-1"><a class="header-anchor" href="#jdk8之前"><span><a href="#jdk8%E4%B9%8B%E5%89%8D">#</a> JDK8之前</span></a></h3><p>java 8之前也有重复使用注解的解决方案，但可读性不是很好，比如下面的代码:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;"> Authority</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">     String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> role</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;"> Authorities</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Authority</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RepeatAnnotationUseOldVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Authorities</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">({</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Authority</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">role</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Admin&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Authority</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">role</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Manager&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)})</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> doSomeThing</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由另一个注解来存储重复注解，在使用时候，用存储注解Authorities来扩展重复注解。</p><h3 id="jdk8重复注解" tabindex="-1"><a class="header-anchor" href="#jdk8重复注解"><span><a href="#jdk8%E9%87%8D%E5%A4%8D%E6%B3%A8%E8%A7%A3">#</a> Jdk8重复注解</span></a></h3><p>我们再来看看java 8里面的做法:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Repeatable</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Authorities</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;"> Authority</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">     String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> role</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;"> Authorities</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Authority</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RepeatAnnotationUseNewVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Authority</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">role</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Admin&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Authority</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">role</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Manager&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> doSomeThing</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){ }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同的地方是，创建重复注解Authority时，加上@Repeatable,指向存储注解Authorities，在使用时候，直接可以重复使用Authority注解。从上面例子看出，java 8里面做法更适合常规的思维，可读性强一点</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><a href="#%E6%80%BB%E7%BB%93">#</a> 总结</span></a></h2><p>JEP120没有太多内容，是一个小特性，仅仅是为了提高代码可读性。这次java 8对注解做了2个方面的改进(JEP 104,JEP120)，相信注解会比以前使用得更加频繁了。</p>`,14)]))}const p=s(e,[["render",t],["__file","Java8 重复注解.html.vue"]]),r=JSON.parse(`{"path":"/posts/Java/Java8NewFeatures/Java8%20%E9%87%8D%E5%A4%8D%E6%B3%A8%E8%A7%A3.html","title":"Java8 重复注解","lang":"zh-CN","frontmatter":{"title":"Java8 重复注解","subtitle":"Java，Java开发，Java 体系","date":"2024-03-17T15:06:55.000Z","category":["Java"],"tag":["Java","Java8 新特性"],"order":6,"description":"理解Java 8 重复注解需理解几个问题: Jdk8之前对重复注解是怎么做的? Jdk8对重复注解添加了什么支持? Java8 重复注解 什么是重复注解 JDK8之前 Jdk8重复注解 总结 # 什么是重复注解 允许在同一申明类型(类，属性，或方法)的多次使用同一个注解 # JDK8之前 java 8之前也有重复使用注解的解决方案，但可读性不是很好，比...","head":[["meta",{"property":"og:url","content":"https://cactusli.net/posts/Java/Java8NewFeatures/Java8%20%E9%87%8D%E5%A4%8D%E6%B3%A8%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Cactus's Blog"}],["meta",{"property":"og:title","content":"Java8 重复注解"}],["meta",{"property":"og:description","content":"理解Java 8 重复注解需理解几个问题: Jdk8之前对重复注解是怎么做的? Jdk8对重复注解添加了什么支持? Java8 重复注解 什么是重复注解 JDK8之前 Jdk8重复注解 总结 # 什么是重复注解 允许在同一申明类型(类，属性，或方法)的多次使用同一个注解 # JDK8之前 java 8之前也有重复使用注解的解决方案，但可读性不是很好，比..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T03:29:54.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Java8 新特性"}],["meta",{"property":"article:published_time","content":"2024-03-17T15:06:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T03:29:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java8 重复注解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-17T15:06:55.000Z\\",\\"dateModified\\":\\"2024-03-21T03:29:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cactus li\\",\\"url\\":\\"https://cactusli.net\\"}]}"]]},"headers":[{"level":2,"title":"# 什么是重复注解","slug":"什么是重复注解","link":"#什么是重复注解","children":[{"level":3,"title":"# JDK8之前","slug":"jdk8之前","link":"#jdk8之前","children":[]},{"level":3,"title":"# Jdk8重复注解","slug":"jdk8重复注解","link":"#jdk8重复注解","children":[]}]},{"level":2,"title":"# 总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1710139794000,"updatedTime":1710991794000,"contributors":[{"name":"lixuanfengs","email":"1183895890@qq.com","commits":2}]},"readingTime":{"minutes":1.38,"words":415},"filePathRelative":"posts/Java/Java8NewFeatures/Java8 重复注解.md","localizedDate":"2024年3月17日","excerpt":"<blockquote>\\n<p>理解Java 8 重复注解需理解几个问题:</p>\\n<ul>\\n<li>Jdk8之前对重复注解是怎么做的?</li>\\n<li>Jdk8对重复注解添加了什么支持?</li>\\n</ul>\\n</blockquote>\\n<ul>\\n<li>Java8 重复注解\\n<ul>\\n<li>什么是重复注解\\n<ul>\\n<li><a href=\\"#jdk8%E4%B9%8B%E5%89%8D\\">JDK8之前</a></li>\\n<li><a href=\\"#jdk8%E9%87%8D%E5%A4%8D%E6%B3%A8%E8%A7%A3\\">Jdk8重复注解</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E6%80%BB%E7%BB%93\\">总结</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{p as comp,r as data};
