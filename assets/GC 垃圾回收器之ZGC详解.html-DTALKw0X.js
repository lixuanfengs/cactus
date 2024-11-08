import{_ as a,c as s,f as l,o as e}from"./app-DgJc46tw.js";const t={};function n(h,i){return e(),s("div",null,i[0]||(i[0]=[l(`<blockquote><p>GC（The Z Garbage Collector）是JDK 11中推出的一款低延迟垃圾回收器, 是JDK 11+ 最为重要的更新之一，适用于<strong>大内存低延迟</strong>服务的内存管理和回收。在梳理相关知识点时，发现美团技术团队分享的文章<a href="https://tech.meituan.com/2020/08/06/new-zgc-practice-in-meituan.html" target="_blank" rel="noopener noreferrer">新一代垃圾回收器ZGC的探索与实践在新窗口打开</a>比较完善（包含G1收集器停顿时间瓶颈，原理，优化等）, 这里分享给你，帮你构建ZGC相关的知识体系。</p></blockquote><ul><li>GC 垃圾回收器之ZGC详解 <ul><li><a href="#zgc%E6%A6%82%E8%BF%B0">ZGC概述</a></li><li>GC之痛 <ul><li>CMS与G1停顿时间瓶颈 <ul><li><a href="#%E6%A0%87%E8%AE%B0%E9%98%B6%E6%AE%B5%E5%81%9C%E9%A1%BF%E5%88%86%E6%9E%90">标记阶段停顿分析</a></li><li><a href="#%E6%B8%85%E7%90%86%E9%98%B6%E6%AE%B5%E5%81%9C%E9%A1%BF%E5%88%86%E6%9E%90">清理阶段停顿分析</a></li><li><a href="#%E5%A4%8D%E5%88%B6%E9%98%B6%E6%AE%B5%E5%81%9C%E9%A1%BF%E5%88%86%E6%9E%90">复制阶段停顿分析</a></li></ul></li></ul></li><li>ZGC原理 <ul><li><a href="#%E5%85%A8%E5%B9%B6%E5%8F%91%E7%9A%84zgc">全并发的ZGC</a></li><li>ZGC关键技术 <ul><li><a href="#%E7%9D%80%E8%89%B2%E6%8C%87%E9%92%88">着色指针</a></li><li><a href="#%E8%AF%BB%E5%B1%8F%E9%9A%9C">读屏障</a></li></ul></li><li><a href="#zgc%E5%B9%B6%E5%8F%91%E5%A4%84%E7%90%86%E6%BC%94%E7%A4%BA">ZGC并发处理演示</a></li></ul></li><li>ZGC调优实践 <ul><li>调优基础知识 <ul><li><a href="#%E7%90%86%E8%A7%A3zgc%E9%87%8D%E8%A6%81%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0">理解ZGC重要配置参数</a></li><li><a href="#%E7%90%86%E8%A7%A3zgc%E8%A7%A6%E5%8F%91%E6%97%B6%E6%9C%BA">理解ZGC触发时机</a></li><li><a href="#%E7%90%86%E8%A7%A3zgc%E6%97%A5%E5%BF%97">理解ZGC日志</a></li><li><a href="#%E7%90%86%E8%A7%A3zgc%E5%81%9C%E9%A1%BF%E5%8E%9F%E5%9B%A0">理解ZGC停顿原因</a></li></ul></li><li>调优案例 <ul><li><a href="#%E6%A1%88%E4%BE%8B%E4%B8%80%E7%A7%92%E6%9D%80%E6%B4%BB%E5%8A%A8%E4%B8%AD%E6%B5%81%E9%87%8F%E7%AA%81%E5%A2%9E%E5%87%BA%E7%8E%B0%E6%80%A7%E8%83%BD%E6%AF%9B%E5%88%BA">案例一：秒杀活动中流量突增，出现性能毛刺</a></li><li><a href="#%E6%A1%88%E4%BE%8B%E4%BA%8C%E5%8E%8B%E6%B5%8B%E6%97%B6%E6%B5%81%E9%87%8F%E9%80%90%E6%B8%90%E5%A2%9E%E5%A4%A7%E5%88%B0%E4%B8%80%E5%AE%9A%E7%A8%8B%E5%BA%A6%E5%90%8E%E5%87%BA%E7%8E%B0%E6%80%A7%E8%83%BD%E6%AF%9B%E5%88%BA">案例二：压测时，流量逐渐增大到一定程度后，出现性能毛刺</a></li><li><a href="#%E6%A1%88%E4%BE%8B%E4%B8%89-%E5%8D%95%E6%AC%A1gc%E5%81%9C%E9%A1%BF%E6%97%B6%E9%97%B430ms%E4%B8%8E%E9%A2%84%E6%9C%9F%E5%81%9C%E9%A1%BF10ms%E5%B7%A6%E5%8F%B3%E6%9C%89%E8%BE%83%E5%A4%A7%E5%B7%AE%E8%B7%9D">案例三： 单次GC停顿时间30ms，与预期停顿10ms左右有较大差距</a></li><li><a href="#%E6%A1%88%E4%BE%8B%E5%9B%9B%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%90%8E%E8%BF%90%E8%A1%8C%E6%97%B6%E9%97%B4%E8%B6%8A%E9%95%BF%E5%8D%95%E6%AC%A1gc%E6%97%B6%E9%97%B4%E8%B6%8A%E9%95%BF%E9%87%8D%E5%90%AF%E5%90%8E%E6%81%A2%E5%A4%8D">案例四：服务启动后，运行时间越长，单次GC时间越长，重启后恢复</a></li></ul></li></ul></li><li>升级ZGC效果 <ul><li><a href="#%E5%BB%B6%E8%BF%9F%E9%99%8D%E4%BD%8E">延迟降低</a></li><li><a href="#%E5%90%9E%E5%90%90%E4%B8%8B%E9%99%8D">吞吐下降</a></li></ul></li><li><a href="#%E6%80%BB%E7%BB%93">总结</a></li><li><a href="#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE">参考文献</a></li></ul></li></ul><h2 id="zgc概述" tabindex="-1"><a class="header-anchor" href="#zgc概述"><span><a href="#zgc%E6%A6%82%E8%BF%B0">#</a> ZGC概述</span></a></h2><blockquote><p>ZGC（The Z Garbage Collector）是JDK 11中推出的一款低延迟垃圾回收器，它的设计目标包括：</p></blockquote><ul><li>停顿时间不超过10ms；</li><li>停顿时间不会随着堆的大小，或者活跃对象的大小而增加（对程序吞吐量影响小于15%）；</li><li>支持8MB~4TB级别的堆（未来支持16TB）。</li></ul><p>从设计目标来看，我们知道ZGC适用于<strong>大内存低延迟</strong>服务的内存管理和回收。本文主要介绍ZGC在低延时场景中的应用和卓越表现，文章内容主要分为四部分：</p><ol><li><strong>GC之痛</strong>：介绍实际业务中遇到的GC痛点，并分析CMS收集器和G1收集器停顿时间瓶颈；</li><li><strong>ZGC原理</strong>：分析ZGC停顿时间比G1或CMS更短的本质原因，以及背后的技术原理；</li><li><strong>ZGC调优实践</strong>：重点分享对ZGC调优的理解，并分析若干个实际调优案例；</li><li><strong>升级ZGC效果</strong>：展示在生产环境应用ZGC取得的效果。</li></ol><h2 id="gc之痛" tabindex="-1"><a class="header-anchor" href="#gc之痛"><span><a href="#gc%E4%B9%8B%E7%97%9B">#</a> GC之痛</span></a></h2><blockquote><p>很多低延迟高可用Java服务的系统可用性经常受GC停顿的困扰。GC停顿指垃圾回收期间STW（Stop The World），当STW时，所有应用线程停止活动，等待GC停顿结束。</p></blockquote><p>以美团风控服务为例，部分上游业务要求风控服务65ms内返回结果，并且可用性要达到99.99%。但因为GC停顿，我们未能达到上述可用性目标。当时使用的是CMS垃圾回收器，单次Young GC 40ms，一分钟10次，接口平均响应时间30ms。通过计算可知，有（40ms + 30ms) * 10次 / 60000ms = 1.12%的请求的响应时间会增加0 ~ 40ms不等，其中30ms * 10次 / 60000ms = 0.5%的请求响应时间会增加40ms。可见，GC停顿对响应时间的影响较大。为了降低GC停顿对系统可用性的影响，我们从降低单次GC时间和降低GC频率两个角度出发进行了调优，还测试过G1垃圾回收器，但这三项措施均未能降低GC对服务可用性的影响。</p><h3 id="cms与g1停顿时间瓶颈" tabindex="-1"><a class="header-anchor" href="#cms与g1停顿时间瓶颈"><span><a href="#cms%E4%B8%8Eg1%E5%81%9C%E9%A1%BF%E6%97%B6%E9%97%B4%E7%93%B6%E9%A2%88">#</a> CMS与G1停顿时间瓶颈</span></a></h3><blockquote><p>在介绍ZGC之前，首先回顾一下CMS和G1的GC过程以及停顿时间的瓶颈。CMS新生代的Young GC、G1和ZGC都基于标记-复制算法，但算法具体实现的不同就导致了巨大的性能差异。</p></blockquote><p>标记-复制算法应用在CMS新生代（ParNew是CMS默认的新生代垃圾回收器）和G1垃圾回收器中。标记-复制算法可以分为三个阶段：</p><ul><li><strong>标记阶段</strong>，即从GC Roots集合开始，标记活跃对象；</li><li><strong>转移阶段</strong>，即把活跃对象复制到新的内存地址上；</li><li><strong>重定位阶段</strong>，因为转移导致对象的地址发生了变化，在重定位阶段，所有指向对象旧地址的指针都要调整到对象新的地址上。</li></ul><p>下面以G1为例，通过G1中标记-复制算法过程（G1的Young GC和Mixed GC均采用该算法），分析G1停顿耗时的主要瓶颈。G1垃圾回收周期如下图所示：</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>G1的混合回收过程可以分为标记阶段、清理阶段和复制阶段。</p><h4 id="标记阶段停顿分析" tabindex="-1"><a class="header-anchor" href="#标记阶段停顿分析"><span><a href="#%E6%A0%87%E8%AE%B0%E9%98%B6%E6%AE%B5%E5%81%9C%E9%A1%BF%E5%88%86%E6%9E%90">#</a> 标记阶段停顿分析</span></a></h4><ul><li><strong>初始标记阶段</strong>：初始标记阶段是指从GC Roots出发标记全部直接子节点的过程，该阶段是STW的。由于GC Roots数量不多，通常该阶段耗时非常短。</li><li><strong>并发标记阶段</strong>：并发标记阶段是指从GC Roots开始对堆中对象进行可达性分析，找出存活对象。该阶段是并发的，即应用线程和GC线程可以同时活动。并发标记耗时相对长很多，但因为不是STW，所以我们不太关心该阶段耗时的长短。</li><li><strong>再标记阶段</strong>：重新标记那些在并发标记阶段发生变化的对象。该阶段是STW的。</li></ul><h4 id="清理阶段停顿分析" tabindex="-1"><a class="header-anchor" href="#清理阶段停顿分析"><span><a href="#%E6%B8%85%E7%90%86%E9%98%B6%E6%AE%B5%E5%81%9C%E9%A1%BF%E5%88%86%E6%9E%90">#</a> 清理阶段停顿分析</span></a></h4><ul><li><strong>清理阶段</strong>清点出有存活对象的分区和没有存活对象的分区，该阶段不会清理垃圾对象，也不会执行存活对象的复制。该阶段是STW的。</li></ul><h4 id="复制阶段停顿分析" tabindex="-1"><a class="header-anchor" href="#复制阶段停顿分析"><span><a href="#%E5%A4%8D%E5%88%B6%E9%98%B6%E6%AE%B5%E5%81%9C%E9%A1%BF%E5%88%86%E6%9E%90">#</a> 复制阶段停顿分析</span></a></h4><ul><li><strong>复制算法</strong>中的转移阶段需要分配新内存和复制对象的成员变量。转移阶段是STW的，其中内存分配通常耗时非常短，但对象成员变量的复制耗时有可能较长，这是因为复制耗时与存活对象数量与对象复杂度成正比。对象越复杂，复制耗时越长。</li></ul><p>四个STW过程中，初始标记因为只标记GC Roots，耗时较短。再标记因为对象数少，耗时也较短。清理阶段因为内存分区数量少，耗时也较短。转移阶段要处理所有存活的对象，耗时会较长。因此，<strong>G1停顿时间的瓶颈主要是标记-复制中的转移阶段STW</strong>。为什么转移阶段不能和标记阶段一样并发执行呢？主要是G1未能解决转移过程中准确定位对象地址的问题。</p><p>G1的Young GC和CMS的Young GC，其标记-复制全过程STW，这里不再详细阐述。</p><h2 id="zgc原理" tabindex="-1"><a class="header-anchor" href="#zgc原理"><span><a href="#zgc%E5%8E%9F%E7%90%86">#</a> ZGC原理</span></a></h2><h3 id="全并发的zgc" tabindex="-1"><a class="header-anchor" href="#全并发的zgc"><span><a href="#%E5%85%A8%E5%B9%B6%E5%8F%91%E7%9A%84zgc">#</a> 全并发的ZGC</span></a></h3><blockquote><p>与CMS中的ParNew和G1类似，<strong>ZGC也采用标记-复制算法</strong>，不过ZGC对该算法做了重大改进：<strong>ZGC在标记、转移和重定位阶段几乎都是并发</strong>的，这是ZGC实现停顿时间小于10ms目标的最关键原因。</p></blockquote><p>ZGC垃圾回收周期如下图所示：</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>ZGC只有三个STW阶段：初始标记，再标记，初始转移。其中，初始标记和初始转移分别都只需要扫描所有GC Roots，其处理时间和GC Roots的数量成正比，一般情况耗时非常短；再标记阶段STW时间很短，最多1ms，超过1ms则再次进入并发标记阶段。即，ZGC几乎所有暂停都只依赖于GC Roots集合大小，停顿时间不会随着堆的大小或者活跃对象的大小而增加。与ZGC对比，G1的转移阶段完全STW的，且停顿时间随存活对象的大小增加而增加。</p><h3 id="zgc关键技术" tabindex="-1"><a class="header-anchor" href="#zgc关键技术"><span><a href="#zgc%E5%85%B3%E9%94%AE%E6%8A%80%E6%9C%AF">#</a> ZGC关键技术</span></a></h3><p>ZGC通过着色指针和读屏障技术，解决了转移过程中准确访问对象的问题，实现了并发转移。大致原理描述如下：并发转移中“并发”意味着GC线程在转移对象的过程中，应用线程也在不停地访问对象。假设对象发生转移，但对象地址未及时更新，那么应用线程可能访问到旧地址，从而造成错误。而在ZGC中，应用线程访问对象将触发“读屏障”，如果发现对象被移动了，那么“读屏障”会把读出来的指针更新到对象的新地址上，这样应用线程始终访问的都是对象的新地址。那么，JVM是如何判断对象被移动过呢？就是利用对象引用的地址，即着色指针。下面介绍着色指针和读屏障技术细节。</p><h4 id="着色指针" tabindex="-1"><a class="header-anchor" href="#着色指针"><span><a href="#%E7%9D%80%E8%89%B2%E6%8C%87%E9%92%88">#</a> 着色指针</span></a></h4><blockquote><p>着色指针是一种将信息存储在指针中的技术。</p></blockquote><p>ZGC仅支持64位系统，它把64位虚拟地址空间划分为多个子空间，如下图所示：</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>其中，[0~4TB) 对应Java堆，[4TB ~ 8TB) 称为M0地址空间，[8TB ~ 12TB) 称为M1地址空间，[12TB ~ 16TB) 预留未使用，[16TB ~ 20TB) 称为Remapped空间。</p><p>当应用程序创建对象时，首先在堆空间申请一个虚拟地址，但该虚拟地址并不会映射到真正的物理地址。ZGC同时会为该对象在M0、M1和Remapped地址空间分别申请一个虚拟地址，且这三个虚拟地址对应同一个物理地址，但这三个空间在同一时间有且只有一个空间有效。ZGC之所以设置三个虚拟地址空间，是因为它使用“空间换时间”思想，去降低GC停顿时间。“空间换时间”中的空间是虚拟空间，而不是真正的物理空间。后续章节将详细介绍这三个空间的切换过程。</p><p>与上述地址空间划分相对应，ZGC实际仅使用64位地址空间的第041位，而第4245位存储元数据，第47~63位固定为0。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>ZGC将对象存活信息存储在42~45位中，这与传统的垃圾回收并将对象存活信息放在对象头中完全不同。</p><h4 id="读屏障" tabindex="-1"><a class="header-anchor" href="#读屏障"><span><a href="#%E8%AF%BB%E5%B1%8F%E9%9A%9C">#</a> 读屏障</span></a></h4><blockquote><p>读屏障是JVM向应用代码插入一小段代码的技术。当应用线程从堆中读取对象引用时，就会执行这段代码。需要注意的是，仅“从堆中读取对象引用”才会触发这段代码。</p></blockquote><p>读屏障示例：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> o </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">FieldA</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   // 从堆中读取引用，需要加入屏障</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Load</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> barrier</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> o  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 无需加入屏障，因为不是从堆中读取引用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">o</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dosomething</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 无需加入屏障，因为不是从堆中读取引用</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">  obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">FieldB</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //无需加入屏障，因为不是对象引用</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ZGC中读屏障的代码作用：在对象标记和转移过程中，用于确定对象的引用地址是否满足条件，并作出相应动作。</p><h3 id="zgc并发处理演示" tabindex="-1"><a class="header-anchor" href="#zgc并发处理演示"><span><a href="#zgc%E5%B9%B6%E5%8F%91%E5%A4%84%E7%90%86%E6%BC%94%E7%A4%BA">#</a> ZGC并发处理演示</span></a></h3><p>接下来详细介绍ZGC一次垃圾回收周期中地址视图的切换过程：</p><ul><li><strong>初始化</strong>：ZGC初始化之后，整个内存空间的地址视图被设置为Remapped。程序正常运行，在内存中分配对象，满足一定条件后垃圾回收启动，此时进入标记阶段。</li><li><strong>并发标记阶段</strong>：第一次进入标记阶段时视图为M0，如果对象被GC标记线程或者应用线程访问过，那么就将对象的地址视图从Remapped调整为M0。所以，在标记阶段结束之后，对象的地址要么是M0视图，要么是Remapped。如果对象的地址是M0视图，那么说明对象是活跃的；如果对象的地址是Remapped视图，说明对象是不活跃的。</li><li><strong>并发转移阶段</strong>：标记结束后就进入转移阶段，此时地址视图再次被设置为Remapped。如果对象被GC转移线程或者应用线程访问过，那么就将对象的地址视图从M0调整为Remapped。</li></ul><p>其实，在标记阶段存在两个地址视图M0和M1，上面的过程显示只用了一个地址视图。<strong>之所以设计成两个，是为了区别前一次标记和当前标记</strong>。也即，第二次进入并发标记阶段后，地址视图调整为M1，而非M0。</p><p>着色指针和读屏障技术不仅应用在并发转移阶段，还应用在并发标记阶段：将对象设置为已标记，传统的垃圾回收器需要进行一次内存访问，并将对象存活信息放在对象头中；而在ZGC中，只需要设置指针地址的第42~45位即可，并且因为是寄存器访问，所以速度比访问内存更快。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="zgc调优实践" tabindex="-1"><a class="header-anchor" href="#zgc调优实践"><span><a href="#zgc%E8%B0%83%E4%BC%98%E5%AE%9E%E8%B7%B5">#</a> ZGC调优实践</span></a></h2><blockquote><p>ZGC不是“银弹”，需要根据服务的具体特点进行调优。网络上能搜索到实战经验较少，调优理论需自行摸索，我们在此阶段也耗费了不少时间，最终才达到理想的性能。本文的一个目的是列举一些使用ZGC时常见的问题，帮助大家使用ZGC提高服务可用性。</p></blockquote><h3 id="调优基础知识" tabindex="-1"><a class="header-anchor" href="#调优基础知识"><span><a href="#%E8%B0%83%E4%BC%98%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">#</a> 调优基础知识</span></a></h3><h4 id="理解zgc重要配置参数" tabindex="-1"><a class="header-anchor" href="#理解zgc重要配置参数"><span><a href="#%E7%90%86%E8%A7%A3zgc%E9%87%8D%E8%A6%81%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0">#</a> 理解ZGC重要配置参数</span></a></h4><blockquote><p>以我们服务在生产环境中ZGC参数配置为例，说明各个参数的作用：</p></blockquote><p>重要参数配置样例：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Xms10G </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Xmx10G</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">XX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ReservedCodeCacheSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">256m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">XX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">InitialCodeCacheSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">256m </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">XX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">UnlockExperimentalVMOptions </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">XX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">UseZGC</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">XX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ConcGCThreads</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">XX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ParallelGCThreads</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">XX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ZCollectionInterval</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">120</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">XX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ZAllocationSpikeTolerance</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">XX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">UnlockDiagnosticVMOptions </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">XX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ZProactive</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Xlog</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">safepoint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">classhisto</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">trace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">age</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">gc</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">info</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">file</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">opt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">logs</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">logs</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">gc</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-%</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">log</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">tid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">tags</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">filecount</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">filesize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">50m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-Xms -Xmx</code>：堆的最大内存和最小内存，这里都设置为10G，程序的堆内存将保持10G不变。</li><li><code>-XX:ReservedCodeCacheSize -XX:InitialCodeCacheSize</code>：设置CodeCache的大小， JIT编译的代码都放在CodeCache中，一般服务64m或128m就已经足够。我们的服务因为有一定特殊性，所以设置的较大，后面会详细介绍。</li><li><code>-XX:+UnlockExperimentalVMOptions -XX:+UseZGC</code>：启用ZGC的配置。</li><li><code>-XX:ConcGCThreads</code>：并发回收垃圾的线程。默认是总核数的12.5%，8核CPU默认是1。调大后GC变快，但会占用程序运行时的CPU资源，吞吐会受到影响。</li><li><code>-XX:ParallelGCThreads</code>：STW阶段使用线程数，默认是总核数的60%。</li><li><code>-XX:ZCollectionInterval</code>：ZGC发生的最小时间间隔，单位秒。</li><li><code>-XX:ZAllocationSpikeTolerance</code>：ZGC触发自适应算法的修正系数，默认2，数值越大，越早的触发ZGC。</li><li><code>-XX:+UnlockDiagnosticVMOptions -XX:-ZProactive</code>：是否启用主动回收，默认开启，这里的配置表示关闭。</li><li><code>-Xlog</code>：设置GC日志中的内容、格式、位置以及每个日志的大小。</li></ul><h4 id="理解zgc触发时机" tabindex="-1"><a class="header-anchor" href="#理解zgc触发时机"><span><a href="#%E7%90%86%E8%A7%A3zgc%E8%A7%A6%E5%8F%91%E6%97%B6%E6%9C%BA">#</a> 理解ZGC触发时机</span></a></h4><blockquote><p>相比于CMS和G1的GC触发机制，ZGC的GC触发机制有很大不同。ZGC的核心特点是并发，GC过程中一直有新的对象产生。如何保证在GC完成之前，新产生的对象不会将堆占满，是ZGC参数调优的第一大目标。因为在ZGC中，当垃圾来不及回收将堆占满时，会导致正在运行的线程停顿，持续时间可能长达秒级之久。</p></blockquote><p>ZGC有多种GC触发机制，总结如下：</p><ul><li><strong>阻塞内存分配请求触发</strong>：当垃圾来不及回收，垃圾将堆占满时，会导致部分线程阻塞。我们应当避免出现这种触发方式。日志中关键字是“Allocation Stall”。</li><li><strong>基于分配速率的自适应算法</strong>：最主要的GC触发方式，其算法原理可简单描述为”ZGC根据近期的对象分配速率以及GC时间，计算出当内存占用达到什么阈值时触发下一次GC”。自适应算法的详细理论可参考彭成寒《新一代垃圾回收器ZGC设计与实现》一书中的内容。通过ZAllocationSpikeTolerance参数控制阈值大小，该参数默认2，数值越大，越早的触发GC。我们通过调整此参数解决了一些问题。日志中关键字是“Allocation Rate”。</li><li><strong>基于固定时间间隔</strong>：通过ZCollectionInterval控制，适合应对突增流量场景。流量平稳变化时，自适应算法可能在堆使用率达到95%以上才触发GC。流量突增时，自适应算法触发的时机可能会过晚，导致部分线程阻塞。我们通过调整此参数解决流量突增场景的问题，比如定时活动、秒杀等场景。日志中关键字是“Timer”。</li><li><strong>主动触发规则</strong>：类似于固定间隔规则，但时间间隔不固定，是ZGC自行算出来的时机，我们的服务因为已经加了基于固定时间间隔的触发机制，所以通过-ZProactive参数将该功能关闭，以免GC频繁，影响服务可用性。 日志中关键字是“Proactive”。</li><li><strong>预热规则</strong>：服务刚启动时出现，一般不需要关注。日志中关键字是“Warmup”。</li><li><strong>外部触发</strong>：代码中显式调用System.gc()触发。 日志中关键字是“System.gc()”。</li><li><strong>元数据分配触发</strong>：元数据区不足时导致，一般不需要关注。 日志中关键字是“Metadata GC Threshold”。</li></ul><h4 id="理解zgc日志" tabindex="-1"><a class="header-anchor" href="#理解zgc日志"><span><a href="#%E7%90%86%E8%A7%A3zgc%E6%97%A5%E5%BF%97">#</a> 理解ZGC日志</span></a></h4><p>一次完整的GC过程，需要注意的点已在图中标出。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-6.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>注意：该日志过滤了进入安全点的信息。正常情况，在一次GC过程中还穿插着进入安全点的操作。</p><p>GC日志中每一行都注明了GC过程中的信息，关键信息如下：</p><ul><li><strong>Start</strong>：开始GC，并标明的GC触发的原因。上图中触发原因是自适应算法。</li><li><strong>Phase-Pause Mark Start</strong>：初始标记，会STW。</li><li><strong>Phase-Pause Mark End</strong>：再次标记，会STW。</li><li><strong>Phase-Pause Relocate Start</strong>：初始转移，会STW。</li><li><strong>Heap信息</strong>：记录了GC过程中Mark、Relocate前后的堆大小变化状况。High和Low记录了其中的最大值和最小值，我们一般关注High中Used的值，如果达到100%，在GC过程中一定存在内存分配不足的情况，需要调整GC的触发时机，更早或者更快地进行GC。</li><li><strong>GC信息统计</strong>：可以定时的打印垃圾收集信息，观察10秒内、10分钟内、10个小时内，从启动到现在的所有统计信息。利用这些统计信息，可以排查定位一些异常点。</li></ul><p>日志中内容较多，关键点已用红线标出，含义较好理解，更详细的解释大家可以自行在网上查阅资料。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-7.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="理解zgc停顿原因" tabindex="-1"><a class="header-anchor" href="#理解zgc停顿原因"><span><a href="#%E7%90%86%E8%A7%A3zgc%E5%81%9C%E9%A1%BF%E5%8E%9F%E5%9B%A0">#</a> 理解ZGC停顿原因</span></a></h4><p>我们在实战过程中共发现了6种使程序停顿的场景，分别如下：</p><ul><li><strong>GC时，初始标记</strong>：日志中Pause Mark Start。</li><li><strong>GC时，再标记</strong>：日志中Pause Mark End。</li><li><strong>GC时，初始转移</strong>：日志中Pause Relocate Start。</li><li><strong>内存分配阻塞</strong>：当内存不足时线程会阻塞等待GC完成，关键字是”Allocation Stall”。</li></ul><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-8.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><strong>安全点</strong>：所有线程进入到安全点后才能进行GC，ZGC定期进入安全点判断是否需要GC。先进入安全点的线程需要等待后进入安全点的线程直到所有线程挂起。</li><li><strong>dump线程、内存</strong>：比如jstack、jmap命令。</li></ul><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-9.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-10.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="调优案例" tabindex="-1"><a class="header-anchor" href="#调优案例"><span><a href="#%E8%B0%83%E4%BC%98%E6%A1%88%E4%BE%8B">#</a> 调优案例</span></a></h3><p>我们维护的服务名叫Zeus，它是美团的规则平台，常用于风控场景中的规则管理。规则运行是基于开源的表达式执行引擎Aviator。Aviator内部将每一条表达式转化成Java的一个类，通过调用该类的接口实现表达式逻辑。</p><p>Zeus服务内的规则数量超过万条，且每台机器每天的请求量几百万。这些客观条件导致Aviator生成的类和方法会产生很多的ClassLoader和CodeCache，这些在使用ZGC时都成为过GC的性能瓶颈。接下来介绍两类调优案例。</p><blockquote><p><strong>第一类：内存分配阻塞，系统停顿可达到秒级</strong></p></blockquote><h4 id="案例一-秒杀活动中流量突增-出现性能毛刺" tabindex="-1"><a class="header-anchor" href="#案例一-秒杀活动中流量突增-出现性能毛刺"><span><a href="#%E6%A1%88%E4%BE%8B%E4%B8%80-%E7%A7%92%E6%9D%80%E6%B4%BB%E5%8A%A8%E4%B8%AD%E6%B5%81%E9%87%8F%E7%AA%81%E5%A2%9E-%E5%87%BA%E7%8E%B0%E6%80%A7%E8%83%BD%E6%AF%9B%E5%88%BA">#</a> 案例一：秒杀活动中流量突增，出现性能毛刺</span></a></h4><p>日志信息：对比出现性能毛刺时间点的GC日志和业务日志，发现JVM停顿了较长时间，且停顿时GC日志中有大量的“Allocation Stall”日志。</p><p>分析：这种案例多出现在“自适应算法”为主要GC触发机制的场景中。ZGC是一款并发的垃圾回收器，GC线程和应用线程同时活动，在GC过程中，还会产生新的对象。GC完成之前，新产生的对象将堆占满，那么应用线程可能因为申请内存失败而导致线程阻塞。当秒杀活动开始，大量请求打入系统，但自适应算法计算的GC触发间隔较长，导致GC触发不及时，引起了内存分配阻塞，导致停顿。</p><p>解决方法：</p><p>（1）开启”基于固定时间间隔“的GC触发机制：-XX:ZCollectionInterval。比如调整为5秒，甚至更短。 （2）增大修正系数-XX:ZAllocationSpikeTolerance，更早触发GC。ZGC采用正态分布模型预测内存分配速率，模型修正系数ZAllocationSpikeTolerance默认值为2，值越大，越早的触发GC，Zeus中所有集群设置的是5。</p><h4 id="案例二-压测时-流量逐渐增大到一定程度后-出现性能毛刺" tabindex="-1"><a class="header-anchor" href="#案例二-压测时-流量逐渐增大到一定程度后-出现性能毛刺"><span><a href="#%E6%A1%88%E4%BE%8B%E4%BA%8C-%E5%8E%8B%E6%B5%8B%E6%97%B6-%E6%B5%81%E9%87%8F%E9%80%90%E6%B8%90%E5%A2%9E%E5%A4%A7%E5%88%B0%E4%B8%80%E5%AE%9A%E7%A8%8B%E5%BA%A6%E5%90%8E-%E5%87%BA%E7%8E%B0%E6%80%A7%E8%83%BD%E6%AF%9B%E5%88%BA">#</a> 案例二：压测时，流量逐渐增大到一定程度后，出现性能毛刺</span></a></h4><p>日志信息：平均1秒GC一次，两次GC之间几乎没有间隔。</p><p>分析：GC触发及时，但内存标记和回收速度过慢，引起内存分配阻塞，导致停顿。</p><p>解决方法：增大-XX:ConcGCThreads， 加快并发标记和回收速度。ConcGCThreads默认值是核数的1/8，8核机器，默认值是1。该参数影响系统吞吐，如果GC间隔时间大于GC周期，不建议调整该参数。</p><blockquote><p><strong>第二类：GC Roots 数量大，单次GC停顿时间长</strong></p></blockquote><h4 id="案例三-单次gc停顿时间30ms-与预期停顿10ms左右有较大差距" tabindex="-1"><a class="header-anchor" href="#案例三-单次gc停顿时间30ms-与预期停顿10ms左右有较大差距"><span><a href="#%E6%A1%88%E4%BE%8B%E4%B8%89-%E5%8D%95%E6%AC%A1gc%E5%81%9C%E9%A1%BF%E6%97%B6%E9%97%B430ms-%E4%B8%8E%E9%A2%84%E6%9C%9F%E5%81%9C%E9%A1%BF10ms%E5%B7%A6%E5%8F%B3%E6%9C%89%E8%BE%83%E5%A4%A7%E5%B7%AE%E8%B7%9D">#</a> 案例三： 单次GC停顿时间30ms，与预期停顿10ms左右有较大差距</span></a></h4><p>日志信息：观察ZGC日志信息统计，“Pause Roots ClassLoaderDataGraph”一项耗时较长。</p><p>分析：dump内存文件，发现系统中有上万个ClassLoader实例。我们知道ClassLoader属于GC Roots一部分，且ZGC停顿时间与GC Roots成正比，GC Roots数量越大，停顿时间越久。再进一步分析，ClassLoader的类名表明，这些ClassLoader均由Aviator组件生成。分析Aviator源码，发现Aviator对每一个表达式新生成类时，会创建一个ClassLoader，这导致了ClassLoader数量巨大的问题。在更高Aviator版本中，该问题已经被修复，即仅创建一个ClassLoader为所有表达式生成类。</p><p>解决方法：升级Aviator组件版本，避免生成多余的ClassLoader。</p><h4 id="案例四-服务启动后-运行时间越长-单次gc时间越长-重启后恢复" tabindex="-1"><a class="header-anchor" href="#案例四-服务启动后-运行时间越长-单次gc时间越长-重启后恢复"><span><a href="#%E6%A1%88%E4%BE%8B%E5%9B%9B-%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%90%8E-%E8%BF%90%E8%A1%8C%E6%97%B6%E9%97%B4%E8%B6%8A%E9%95%BF-%E5%8D%95%E6%AC%A1gc%E6%97%B6%E9%97%B4%E8%B6%8A%E9%95%BF-%E9%87%8D%E5%90%AF%E5%90%8E%E6%81%A2%E5%A4%8D">#</a> 案例四：服务启动后，运行时间越长，单次GC时间越长，重启后恢复</span></a></h4><p>日志信息：观察ZGC日志信息统计，“Pause Roots CodeCache”的耗时会随着服务运行时间逐渐增长。</p><p>分析：CodeCache空间用于存放Java热点代码的JIT编译结果，而CodeCache也属于GC Roots一部分。通过添加-XX:+PrintCodeCacheOnCompilation参数，打印CodeCache中的被优化的方法，发现大量的Aviator表达式代码。定位到根本原因，每个表达式都是一个类中一个方法。随着运行时间越长，执行次数增加，这些方法会被JIT优化编译进入到Code Cache中，导致CodeCache越来越大。</p><p>解决方法：JIT有一些参数配置可以调整JIT编译的条件，但对于我们的问题都不太适用。我们最终通过业务优化解决，删除不需要执行的Aviator表达式，从而避免了大量Aviator方法进入CodeCache中。</p><p>值得一提的是，我们并不是在所有这些问题都解决后才全量部署所有集群。即使开始有各种各样的毛刺，但计算后发现，有各种问题的ZGC也比之前的CMS对服务可用性影响小。所以从开始准备使用ZGC到全量部署，大概用了2周的时间。在之后的3个月时间里，我们边做业务需求，边跟进这些问题，最终逐个解决了上述问题，从而使ZGC在各个集群上达到了一个更好表现。</p><h2 id="升级zgc效果" tabindex="-1"><a class="header-anchor" href="#升级zgc效果"><span><a href="#%E5%8D%87%E7%BA%A7zgc%E6%95%88%E6%9E%9C">#</a> 升级ZGC效果</span></a></h2><h3 id="延迟降低" tabindex="-1"><a class="header-anchor" href="#延迟降低"><span><a href="#%E5%BB%B6%E8%BF%9F%E9%99%8D%E4%BD%8E">#</a> 延迟降低</span></a></h3><p>TP(Top Percentile)是一项衡量系统延迟的指标：TP999表示99.9%请求都能被响应的最小耗时；TP99表示99%请求都能被响应的最小耗时。</p><p>在Zeus服务不同集群中，ZGC在低延迟（TP999 &lt; 200ms）场景中收益较大：</p><ul><li>TP999：下降12142ms，下降幅度18%74%。</li><li>TP99：下降528ms，下降幅度10%47%。</li></ul><p>超低延迟（TP999 &lt; 20ms）和高延迟（TP999 &gt; 200ms）服务收益不大，原因是这些服务的响应时间瓶颈不是GC，而是外部依赖的性能。</p><h3 id="吞吐下降" tabindex="-1"><a class="header-anchor" href="#吞吐下降"><span><a href="#%E5%90%9E%E5%90%90%E4%B8%8B%E9%99%8D">#</a> 吞吐下降</span></a></h3><p>对吞吐量优先的场景，ZGC可能并不适合。例如，Zeus某离线集群原先使用CMS，升级ZGC后，系统吞吐量明显降低。究其原因有二：</p><ul><li>第一，ZGC是单代垃圾回收器，而CMS是分代垃圾回收器。单代垃圾回收器每次处理的对象更多，更耗费CPU资源；</li><li>第二，ZGC使用读屏障，读屏障操作需耗费额外的计算资源。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><a href="#%E6%80%BB%E7%BB%93">#</a> 总结</span></a></h2><p>ZGC作为下一代垃圾回收器，性能非常优秀。ZGC垃圾回收过程几乎全部是并发，实际STW停顿时间极短，不到10ms。这得益于其采用的着色指针和读屏障技术。</p><p>Zeus在升级JDK 11+ZGC中，通过将风险和问题分类，然后各个击破，最终顺利实现了升级目标，GC停顿也几乎不再影响系统可用性。</p><p>最后推荐大家升级ZGC，Zeus系统因为业务特点，遇到了较多问题，而风控其他团队在升级时都非常顺利。</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span><a href="#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE">#</a> 参考文献</span></a></h2><ul><li><a href="https://wiki.openjdk.java.net/display/zgc/Main" target="_blank" rel="noopener noreferrer">ZGC官网</a></li></ul>`,118)]))}const r=a(t,[["render",n],["__file","GC 垃圾回收器之ZGC详解.html.vue"]]),g=JSON.parse(`{"path":"/posts/Java/JVM/GC%20%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E5%99%A8%E4%B9%8BZGC%E8%AF%A6%E8%A7%A3.html","title":"GC 垃圾回收器之ZGC详解","lang":"zh-CN","frontmatter":{"title":"GC 垃圾回收器之ZGC详解","subtitle":"Java，Java开发，Java 体系","date":"2024-03-17T17:08:41.000Z","category":["Java"],"tag":["Java","JVM"],"order":10,"description":"GC（The Z Garbage Collector）是JDK 11中推出的一款低延迟垃圾回收器, 是JDK 11+ 最为重要的更新之一，适用于大内存低延迟服务的内存管理和回收。在梳理相关知识点时，发现美团技术团队分享的文章新一代垃圾回收器ZGC的探索与实践在新窗口打开比较完善（包含G1收集器停顿时间瓶颈，原理，优化等）, 这里分享给你，帮你构建ZGC...","head":[["meta",{"property":"og:url","content":"https://cactusli.net/posts/Java/JVM/GC%20%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E5%99%A8%E4%B9%8BZGC%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Cactus's Blog"}],["meta",{"property":"og:title","content":"GC 垃圾回收器之ZGC详解"}],["meta",{"property":"og:description","content":"GC（The Z Garbage Collector）是JDK 11中推出的一款低延迟垃圾回收器, 是JDK 11+ 最为重要的更新之一，适用于大内存低延迟服务的内存管理和回收。在梳理相关知识点时，发现美团技术团队分享的文章新一代垃圾回收器ZGC的探索与实践在新窗口打开比较完善（包含G1收集器停顿时间瓶颈，原理，优化等）, 这里分享给你，帮你构建ZGC..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-22T05:15:06.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2024-03-17T17:08:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-22T05:15:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GC 垃圾回收器之ZGC详解\\",\\"image\\":[\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-1.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-2.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-3.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-4.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-5.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-6.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-7.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-8.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-9.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-jvm-zgc-10.png\\"],\\"datePublished\\":\\"2024-03-17T17:08:41.000Z\\",\\"dateModified\\":\\"2024-03-22T05:15:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cactus li\\",\\"url\\":\\"https://cactusli.net\\"}]}"]]},"headers":[{"level":2,"title":"# ZGC概述","slug":"zgc概述","link":"#zgc概述","children":[]},{"level":2,"title":"# GC之痛","slug":"gc之痛","link":"#gc之痛","children":[{"level":3,"title":"# CMS与G1停顿时间瓶颈","slug":"cms与g1停顿时间瓶颈","link":"#cms与g1停顿时间瓶颈","children":[]}]},{"level":2,"title":"# ZGC原理","slug":"zgc原理","link":"#zgc原理","children":[{"level":3,"title":"# 全并发的ZGC","slug":"全并发的zgc","link":"#全并发的zgc","children":[]},{"level":3,"title":"# ZGC关键技术","slug":"zgc关键技术","link":"#zgc关键技术","children":[]},{"level":3,"title":"# ZGC并发处理演示","slug":"zgc并发处理演示","link":"#zgc并发处理演示","children":[]}]},{"level":2,"title":"# ZGC调优实践","slug":"zgc调优实践","link":"#zgc调优实践","children":[{"level":3,"title":"# 调优基础知识","slug":"调优基础知识","link":"#调优基础知识","children":[]},{"level":3,"title":"# 调优案例","slug":"调优案例","link":"#调优案例","children":[]}]},{"level":2,"title":"# 升级ZGC效果","slug":"升级zgc效果","link":"#升级zgc效果","children":[{"level":3,"title":"# 延迟降低","slug":"延迟降低","link":"#延迟降低","children":[]},{"level":3,"title":"# 吞吐下降","slug":"吞吐下降","link":"#吞吐下降","children":[]}]},{"level":2,"title":"# 总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"# 参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1710139794000,"updatedTime":1711084506000,"contributors":[{"name":"lixuanfengs","email":"1183895890@qq.com","commits":2}]},"readingTime":{"minutes":23.71,"words":7112},"filePathRelative":"posts/Java/JVM/GC 垃圾回收器之ZGC详解.md","localizedDate":"2024年3月17日","excerpt":"<blockquote>\\n<p>GC（The Z Garbage Collector）是JDK 11中推出的一款低延迟垃圾回收器, 是JDK 11+ 最为重要的更新之一，适用于<strong>大内存低延迟</strong>服务的内存管理和回收。在梳理相关知识点时，发现美团技术团队分享的文章<a href=\\"https://tech.meituan.com/2020/08/06/new-zgc-practice-in-meituan.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">新一代垃圾回收器ZGC的探索与实践在新窗口打开</a>比较完善（包含G1收集器停顿时间瓶颈，原理，优化等）, 这里分享给你，帮你构建ZGC相关的知识体系。</p>\\n</blockquote>","autoDesc":true}`);export{r as comp,g as data};
