import{_ as e,o as a,c as t,h as i}from"./app-DZ1NtzUf.js";const l={},r=i('<blockquote><p>本文主要从<code>传输方式</code>和<code>数据操作</code>两个方面分析Java IO的分类。</p></blockquote><ul><li>IO 分类(传输，操作) <ul><li>IO理解分类 - 从传输方式上 <ul><li><a href="#%E5%AD%97%E8%8A%82%E6%B5%81">字节流</a></li><li><a href="#%E5%AD%97%E7%AC%A6%E6%B5%81">字符流</a></li><li><a href="#%E5%AD%97%E8%8A%82%E6%B5%81%E5%92%8C%E5%AD%97%E7%AC%A6%E6%B5%81%E7%9A%84%E5%8C%BA%E5%88%AB">字节流和字符流的区别</a></li><li><a href="#%E5%AD%97%E8%8A%82%E8%BD%AC%E5%AD%97%E7%AC%A6inputoutputstreamreaderwriter">字节转字符Input/OutputStreamReader/Writer</a></li></ul></li><li>IO理解分类 - 从数据操作上 <ul><li><a href="#%E6%96%87%E4%BB%B6file">文件(file)</a></li><li>[数组(<a href="#%E6%95%B0%E7%BB%84">])</a></li><li><a href="#%E7%AE%A1%E9%81%93%E6%93%8D%E4%BD%9C">管道操作</a></li><li><a href="#%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">基本数据类型</a></li><li><a href="#%E7%BC%93%E5%86%B2%E6%93%8D%E4%BD%9C">缓冲操作</a></li><li><a href="#%E6%89%93%E5%8D%B0">打印</a></li><li><a href="#%E5%AF%B9%E8%B1%A1%E5%BA%8F%E5%88%97%E5%8C%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96">对象序列化反序列化</a></li><li><a href="#%E8%BD%AC%E6%8D%A2">转换</a></li></ul></li></ul></li></ul><h2 id="io理解分类-从传输方式上" tabindex="-1"><a class="header-anchor" href="#io理解分类-从传输方式上"><span><a href="#io%E7%90%86%E8%A7%A3%E5%88%86%E7%B1%BB-%E4%BB%8E%E4%BC%A0%E8%BE%93%E6%96%B9%E5%BC%8F%E4%B8%8A">#</a> IO理解分类 - 从传输方式上</span></a></h2><p>从数据传输方式或者说是运输方式角度看，可以将 IO 类分为:</p><ul><li>字节流</li><li>字符流</li></ul><p><code>字节</code>是个计算机看的，<code>字符</code>才是给人看的</p><h3 id="字节流" tabindex="-1"><a class="header-anchor" href="#字节流"><span><a href="#%E5%AD%97%E8%8A%82%E6%B5%81">#</a> 字节流</span></a></h3><p>(整体结构如下，部分派生类有缺失)</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-io-category-1-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="字符流" tabindex="-1"><a class="header-anchor" href="#字符流"><span><a href="#%E5%AD%97%E7%AC%A6%E6%B5%81">#</a> 字符流</span></a></h3><p>(整体结构如下，部分派生类有缺失)</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-io-category-2-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="字节流和字符流的区别" tabindex="-1"><a class="header-anchor" href="#字节流和字符流的区别"><span><a href="#%E5%AD%97%E8%8A%82%E6%B5%81%E5%92%8C%E5%AD%97%E7%AC%A6%E6%B5%81%E7%9A%84%E5%8C%BA%E5%88%AB">#</a> 字节流和字符流的区别</span></a></h3><ul><li>字节流读取单个字节，字符流读取单个字符(一个字符根据编码的不同，对应的字节也不同，如 UTF-8 编码中文汉字是 3 个字节，GBK编码中文汉字是 2 个字节。)</li><li>字节流用来处理二进制文件(图片、MP3、视频文件)，字符流用来处理文本文件(可以看做是特殊的二进制文件，使用了某种编码，人可以阅读)。</li></ul><blockquote><p>简而言之，字节是给计算机看的，字符才是给人看的。</p></blockquote><h3 id="字节转字符input-outputstreamreader-writer" tabindex="-1"><a class="header-anchor" href="#字节转字符input-outputstreamreader-writer"><span><a href="#%E5%AD%97%E8%8A%82%E8%BD%AC%E5%AD%97%E7%AC%A6input-outputstreamreader-writer">#</a> 字节转字符Input/OutputStreamReader/Writer</span></a></h3><p>编码就是把字符转换为字节，而解码是把字节重新组合成字符。</p><p>如果编码和解码过程使用不同的编码方式那么就出现了乱码。</p><ul><li>GBK 编码中，中文字符占 2 个字节，英文字符占 1 个字节；</li><li>UTF-8 编码中，中文字符占 3 个字节，英文字符占 1 个字节；</li><li>UTF-16be 编码中，中文字符和英文字符都占 2 个字节。</li></ul><p>UTF-16be 中的 be 指的是 Big Endian，也就是大端。相应地也有 UTF-16le，le 指的是 Little Endian，也就是小端。</p><p>Java 使用双字节编码 UTF-16be，这不是指 Java 只支持这一种编码方式，而是说 char 这种类型使用 UTF-16be 进行编码。char 类型占 16 位，也就是两个字节，Java 使用这种双字节编码是为了让一个中文或者一个英文都能使用一个 char 来存储。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-io-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="io理解分类-从数据操作上" tabindex="-1"><a class="header-anchor" href="#io理解分类-从数据操作上"><span><a href="#io%E7%90%86%E8%A7%A3%E5%88%86%E7%B1%BB-%E4%BB%8E%E6%95%B0%E6%8D%AE%E6%93%8D%E4%BD%9C%E4%B8%8A">#</a> IO理解分类 - 从数据操作上</span></a></h2><p>从数据来源或者说是操作对象角度看，IO 类可以分为:</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-io-category-3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="文件-file" tabindex="-1"><a class="header-anchor" href="#文件-file"><span><a href="#%E6%96%87%E4%BB%B6-file">#</a> 文件(file)</span></a></h3><p>FileInputStream、FileOutputStream、FileReader、FileWriter</p><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span><a href="#%E6%95%B0%E7%BB%84">#</a> 数组([])</span></a></h3><ul><li>字节数组(byte[]): ByteArrayInputStream、ByteArrayOutputStream</li><li>字符数组(char[]): CharArrayReader、CharArrayWriter</li></ul><h3 id="管道操作" tabindex="-1"><a class="header-anchor" href="#管道操作"><span><a href="#%E7%AE%A1%E9%81%93%E6%93%8D%E4%BD%9C">#</a> 管道操作</span></a></h3><p>PipedInputStream、PipedOutputStream、PipedReader、PipedWriter</p><h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型"><span><a href="#%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">#</a> 基本数据类型</span></a></h3><p>DataInputStream、DataOutputStream</p><h3 id="缓冲操作" tabindex="-1"><a class="header-anchor" href="#缓冲操作"><span><a href="#%E7%BC%93%E5%86%B2%E6%93%8D%E4%BD%9C">#</a> 缓冲操作</span></a></h3><p>BufferedInputStream、BufferedOutputStream、BufferedReader、BufferedWriter</p><h3 id="打印" tabindex="-1"><a class="header-anchor" href="#打印"><span><a href="#%E6%89%93%E5%8D%B0">#</a> 打印</span></a></h3><p>PrintStream、PrintWriter</p><h3 id="对象序列化反序列化" tabindex="-1"><a class="header-anchor" href="#对象序列化反序列化"><span><a href="#%E5%AF%B9%E8%B1%A1%E5%BA%8F%E5%88%97%E5%8C%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96">#</a> 对象序列化反序列化</span></a></h3><p>ObjectInputStream、ObjectOutputStream</p><h3 id="转换" tabindex="-1"><a class="header-anchor" href="#转换"><span><a href="#%E8%BD%AC%E6%8D%A2">#</a> 转换</span></a></h3><p>InputStreamReader、OutputStreamWriter</p>',41),n=[r];function E(p,o){return a(),t("div",null,n)}const u=e(l,[["render",E],["__file","IO 分类(传输，操作).html.vue"]]),s=JSON.parse(`{"path":"/posts/Java/IO-NIO-AIO/IO%20%E5%88%86%E7%B1%BB(%E4%BC%A0%E8%BE%93%EF%BC%8C%E6%93%8D%E4%BD%9C).html","title":"IO 分类(传输，操作)","lang":"zh-CN","frontmatter":{"title":"IO 分类(传输，操作)","subtitle":"Java，Java开发，Java 体系","date":"2024-03-11T14:36:26.000Z","category":["Java"],"tag":["Java","IO"],"order":2,"description":"本文主要从传输方式和数据操作两个方面分析Java IO的分类。 IO 分类(传输，操作) IO理解分类 - 从传输方式上 字节流 字符流 字节流和字符流的区别 字节转字符Input/OutputStreamReader/Writer IO理解分类 - 从数据操作上 文件(file) [数组(]) 管道操作 基本数据类型 缓冲操作 打印 对象序列化反序列...","head":[["meta",{"property":"og:url","content":"https://cactusli.net/posts/Java/IO-NIO-AIO/IO%20%E5%88%86%E7%B1%BB(%E4%BC%A0%E8%BE%93%EF%BC%8C%E6%93%8D%E4%BD%9C).html"}],["meta",{"property":"og:site_name","content":"Cactus's Blog"}],["meta",{"property":"og:title","content":"IO 分类(传输，操作)"}],["meta",{"property":"og:description","content":"本文主要从传输方式和数据操作两个方面分析Java IO的分类。 IO 分类(传输，操作) IO理解分类 - 从传输方式上 字节流 字符流 字节流和字符流的区别 字节转字符Input/OutputStreamReader/Writer IO理解分类 - 从数据操作上 文件(file) [数组(]) 管道操作 基本数据类型 缓冲操作 打印 对象序列化反序列..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lixuanfengs.github.io/blog-images/vp/Java/java-io-category-1-1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T09:29:14.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"IO 分类(传输，操作)"}],["meta",{"property":"article:author","content":"Cactus li"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"IO"}],["meta",{"property":"article:published_time","content":"2024-03-11T14:36:26.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-17T09:29:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IO 分类(传输，操作)\\",\\"image\\":[\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-io-category-1-1.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-io-category-2-1.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-io-1.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-io-category-3.png\\"],\\"datePublished\\":\\"2024-03-11T14:36:26.000Z\\",\\"dateModified\\":\\"2024-03-17T09:29:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cactus li\\",\\"url\\":\\"https://cactusli.net\\"}]}"]]},"headers":[{"level":2,"title":"# IO理解分类 - 从传输方式上","slug":"io理解分类-从传输方式上","link":"#io理解分类-从传输方式上","children":[{"level":3,"title":"# 字节流","slug":"字节流","link":"#字节流","children":[]},{"level":3,"title":"# 字符流","slug":"字符流","link":"#字符流","children":[]},{"level":3,"title":"# 字节流和字符流的区别","slug":"字节流和字符流的区别","link":"#字节流和字符流的区别","children":[]},{"level":3,"title":"# 字节转字符Input/OutputStreamReader/Writer","slug":"字节转字符input-outputstreamreader-writer","link":"#字节转字符input-outputstreamreader-writer","children":[]}]},{"level":2,"title":"# IO理解分类 - 从数据操作上","slug":"io理解分类-从数据操作上","link":"#io理解分类-从数据操作上","children":[{"level":3,"title":"# 文件(file)","slug":"文件-file","link":"#文件-file","children":[]},{"level":3,"title":"# 数组([])","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"# 管道操作","slug":"管道操作","link":"#管道操作","children":[]},{"level":3,"title":"# 基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[]},{"level":3,"title":"# 缓冲操作","slug":"缓冲操作","link":"#缓冲操作","children":[]},{"level":3,"title":"# 打印","slug":"打印","link":"#打印","children":[]},{"level":3,"title":"# 对象序列化反序列化","slug":"对象序列化反序列化","link":"#对象序列化反序列化","children":[]},{"level":3,"title":"# 转换","slug":"转换","link":"#转换","children":[]}]}],"git":{"createdTime":1710139794000,"updatedTime":1710667754000,"contributors":[{"name":"lixuanfengs","email":"1183895890@qq.com","commits":2}]},"readingTime":{"minutes":2.95,"words":884},"filePathRelative":"posts/Java/IO-NIO-AIO/IO 分类(传输，操作).md","localizedDate":"2024年3月11日","excerpt":"<blockquote>\\n<p>本文主要从<code>传输方式</code>和<code>数据操作</code>两个方面分析Java IO的分类。</p>\\n</blockquote>\\n<ul>\\n<li>IO 分类(传输，操作)\\n<ul>\\n<li>IO理解分类 - 从传输方式上\\n<ul>\\n<li><a href=\\"#%E5%AD%97%E8%8A%82%E6%B5%81\\">字节流</a></li>\\n<li><a href=\\"#%E5%AD%97%E7%AC%A6%E6%B5%81\\">字符流</a></li>\\n<li><a href=\\"#%E5%AD%97%E8%8A%82%E6%B5%81%E5%92%8C%E5%AD%97%E7%AC%A6%E6%B5%81%E7%9A%84%E5%8C%BA%E5%88%AB\\">字节流和字符流的区别</a></li>\\n<li><a href=\\"#%E5%AD%97%E8%8A%82%E8%BD%AC%E5%AD%97%E7%AC%A6inputoutputstreamreaderwriter\\">字节转字符Input/OutputStreamReader/Writer</a></li>\\n</ul>\\n</li>\\n<li>IO理解分类 - 从数据操作上\\n<ul>\\n<li><a href=\\"#%E6%96%87%E4%BB%B6file\\">文件(file)</a></li>\\n<li>[数组(<a href=\\"#%E6%95%B0%E7%BB%84\\">])</a></li>\\n<li><a href=\\"#%E7%AE%A1%E9%81%93%E6%93%8D%E4%BD%9C\\">管道操作</a></li>\\n<li><a href=\\"#%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B\\">基本数据类型</a></li>\\n<li><a href=\\"#%E7%BC%93%E5%86%B2%E6%93%8D%E4%BD%9C\\">缓冲操作</a></li>\\n<li><a href=\\"#%E6%89%93%E5%8D%B0\\">打印</a></li>\\n<li><a href=\\"#%E5%AF%B9%E8%B1%A1%E5%BA%8F%E5%88%97%E5%8C%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96\\">对象序列化反序列化</a></li>\\n<li><a href=\\"#%E8%BD%AC%E6%8D%A2\\">转换</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{u as comp,s as data};
