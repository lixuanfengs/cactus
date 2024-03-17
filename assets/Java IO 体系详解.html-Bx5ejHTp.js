import{_ as a,o as e,c as t,h as l}from"./app-DZ1NtzUf.js";const i={},o=l('<blockquote><p>本文主要梳理Java IO/NIO/AIO的知识体系。</p></blockquote><ul><li>Java IO 体系详解 <ul><li><a href="#%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">知识体系</a></li><li><a href="#%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0">相关文章</a></li><li><a href="#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0">参考文章</a></li></ul></li></ul><h2 id="知识体系" tabindex="-1"><a class="header-anchor" href="#知识体系"><span><a href="#%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">#</a> 知识体系</span></a></h2><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-io-overview2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span><a href="#%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0">#</a> 相关文章</span></a></h2><blockquote><p><strong>A. Java进阶 - IO框架之知识体系</strong>：首先了解下Java IO框架包含什么，同时推荐下如何学习IO框架。@pdai</p></blockquote><ul><li>Java IO/NIO/AIO - Overview <ul><li>本文主要梳理Java IO/NIO/AIO的知识体系</li></ul></li></ul><blockquote><p><strong>B. Java进阶 - IO框架之基础IO</strong>：其次对Java基础IO框架进行梳理，包括其分类，使用和源码详解。@pdai</p></blockquote><ul><li>Java IO - 分类(传输，操作) <ul><li>本文主要从<code>传输方式</code>和<code>数据操作</code>两个方面分析Java IO的分类</li></ul></li><li>Java IO - 设计模式(装饰者模式) <ul><li>Java I/O 使用了装饰者模式来实现</li></ul></li><li>Java IO - 源码: InputStream <ul><li>本文主要从JDK源码角度分析InputStream</li></ul></li><li>Java IO - 源码: OutputStream <ul><li>本文主要从JDK源码角度分析 OutputStream</li></ul></li><li>Java IO - 常见类使用 <ul><li>本文主要介绍Java IO常见类的使用，包括：磁盘操作，字节操作，字符操作，对象操作和网络操作</li></ul></li></ul><blockquote><p><strong>C. Java进阶 - IO框架之NIO/AIO等</strong>：然后再对Unix IO模型学习，引入到Java BIO/NIO/AIO相关知识详解。@pdai</p></blockquote><ul><li>IO 模型 - Unix IO 模型 <ul><li>本文主要简要介绍 Unix I/O 5种模型，并对5大模型比较，并重点为后续章节解释IO多路复用做铺垫</li></ul></li><li>Java IO - BIO 详解 <ul><li>BIO就是: blocking IO。最容易理解、最容易实现的IO工作方式，应用程序向操作系统请求网络IO操作，这时应用程序会一直等待；另一方面，操作系统收到请求后，也会等待，直到网络上有数据传到监听端口；操作系统在收集数据后，会把数据发送给应用程序；最后应用程序受到数据，并解除等待状态</li></ul></li><li>Java NIO - 基础详解 <ul><li>新的输入/输出 (NIO) 库是在 JDK 1.4 中引入的，弥补了原来的 I/O 的不足，提供了高速的、面向块的 I/O</li></ul></li><li>Java NIO - IO多路复用详解 <ul><li>本文主要对IO多路复用，Ractor模型以及Java NIO对其的支持</li></ul></li><li>Java AIO - 异步IO详解 <ul><li>本文主要对异步IO和Java中对AIO的支持详解。@pdai</li></ul></li></ul><blockquote><p><strong>D. Java进阶 - IO框架之开源框架</strong>：最后再对常用的开源框架进行分析和详解。@pdai</p></blockquote><ul><li><a href="">Java NIO - 零拷贝实现</a>这里转一篇Java NIO 零拷贝的实现文章，在此之前建议先理解什么是Linux中零拷贝，可以先看这篇文章。本文从源码着手分析了 Java NIO 对零拷贝的实现，主要包括基于内存映射（mmap）方式的 MappedByteBuffer 以及基于 sendfile 方式的 FileChannel。最后在篇末简单的阐述了一下 Netty 中的零拷贝机制，以及 RocketMQ 和 Kafka 两种消息队列在零拷贝实现方式上的区别。</li><li><a href="">Java N(A)IO - 框架: Netty</a><ul><li>Netty是一个高性能、异步事件驱动的NIO框架，提供了对TCP、UDP和文件传输的支持。作为当前最流行的NIO框架，Netty在互联网领域、大数据分布式计算领域、游戏行业、通信行业等获得了广泛的应用，一些业界著名的开源组件也基于Netty构建，比如RPC框架、zookeeper等</li></ul></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span><a href="#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0">#</a> 参考文章</span></a></h2>',14),n=[o];function r(O,I){return e(),t("div",null,n)}const c=a(i,[["render",r],["__file","Java IO 体系详解.html.vue"]]),u=JSON.parse(`{"path":"/posts/Java/IO-NIO-AIO/Java%20IO%20%E4%BD%93%E7%B3%BB%E8%AF%A6%E8%A7%A3.html","title":"Java IO 体系详解","lang":"zh-CN","frontmatter":{"title":"Java IO 体系详解","subtitle":"Java，Java开发，Java 体系","date":"2024-03-11T14:35:26.000Z","category":["Java"],"tag":["Java","IO"],"order":1,"description":"本文主要梳理Java IO/NIO/AIO的知识体系。 Java IO 体系详解 知识体系 相关文章 参考文章 # 知识体系 imgimg # 相关文章 A. Java进阶 - IO框架之知识体系：首先了解下Java IO框架包含什么，同时推荐下如何学习IO框架。@pdai Java IO/NIO/AIO - Overview 本文主要梳理Java I...","head":[["meta",{"property":"og:url","content":"https://cactusli.net/posts/Java/IO-NIO-AIO/Java%20IO%20%E4%BD%93%E7%B3%BB%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Cactus's Blog"}],["meta",{"property":"og:title","content":"Java IO 体系详解"}],["meta",{"property":"og:description","content":"本文主要梳理Java IO/NIO/AIO的知识体系。 Java IO 体系详解 知识体系 相关文章 参考文章 # 知识体系 imgimg # 相关文章 A. Java进阶 - IO框架之知识体系：首先了解下Java IO框架包含什么，同时推荐下如何学习IO框架。@pdai Java IO/NIO/AIO - Overview 本文主要梳理Java I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lixuanfengs.github.io/blog-images/vp/Java/java-io-overview2.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T09:29:14.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java IO 体系详解"}],["meta",{"property":"article:author","content":"Cactus li"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"IO"}],["meta",{"property":"article:published_time","content":"2024-03-11T14:35:26.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-17T09:29:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java IO 体系详解\\",\\"image\\":[\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-io-overview2.png\\"],\\"datePublished\\":\\"2024-03-11T14:35:26.000Z\\",\\"dateModified\\":\\"2024-03-17T09:29:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cactus li\\",\\"url\\":\\"https://cactusli.net\\"}]}"]]},"headers":[{"level":2,"title":"# 知识体系","slug":"知识体系","link":"#知识体系","children":[]},{"level":2,"title":"# 相关文章","slug":"相关文章","link":"#相关文章","children":[]},{"level":2,"title":"# 参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1710139794000,"updatedTime":1710667754000,"contributors":[{"name":"lixuanfengs","email":"1183895890@qq.com","commits":2}]},"readingTime":{"minutes":3.01,"words":904},"filePathRelative":"posts/Java/IO-NIO-AIO/Java IO 体系详解.md","localizedDate":"2024年3月11日","excerpt":"<blockquote>\\n<p>本文主要梳理Java IO/NIO/AIO的知识体系。</p>\\n</blockquote>\\n<ul>\\n<li>Java IO 体系详解\\n<ul>\\n<li><a href=\\"#%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB\\">知识体系</a></li>\\n<li><a href=\\"#%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0\\">相关文章</a></li>\\n<li><a href=\\"#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0\\">参考文章</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{c as comp,u as data};
