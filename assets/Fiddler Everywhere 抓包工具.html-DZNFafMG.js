import{_ as n,e as a,o as d,c as o,b as e,g as i,f as t,h as l}from"./app-BQ18GoMt.js";const s={},g=l('<h2 id="fiddler-everywhere-是什么" tabindex="-1"><a class="header-anchor" href="#fiddler-everywhere-是什么"><span>Fiddler Everywhere 是什么？</span></a></h2><p>Fiddler Everywhere 是一个网络流量监控和调试工具，由 Telerik（Progress Software的一个部门）开发。它是 Fiddler Classic 的继承者，提供了一个更新更现代的用户界面和一些增强功能，使其能够跨平台工作，支持 Windows、Mac 和 Linux 系统。</p><p><strong>主要功能包括：</strong></p><ol><li><strong>流量捕获和分析</strong>：Fiddler Everywhere 可以捕获来自浏览器和其他软件的 HTTP 和 HTTPS 网络流量，允许用户查看和分析请求和响应的详细内容。这对于调试网站和应用程序的网络请求、查找性能瓶颈或监控API调用非常有用。</li><li><strong>修改和重放请求</strong>：用户可以修改网络请求和响应，然后重新发送它们。这对于测试网络服务和应用程序如何响应不同的数据或行为非常有用。</li><li><strong>模拟网络条件</strong>：Fiddler Everywhere 可以模拟不同的网络环境，包括低带宽、高延迟等，以测试应用程序在各种网络条件下的表现。</li><li><strong>HTTPS 解密</strong>：提供 HTTPS 流量解密功能，允许用户查看加密通信的细节。</li><li><strong>团队协作</strong>：Fiddler Everywhere 提供了一些团队协作功能，例如共享捕获的流量数据和会话给团队成员，便于团队合作和问题解决。</li><li><strong>扩展性和自定义</strong>：用户可以使用 Fiddler Everywhere 的 API 和各种插件来扩展其功能，适应特定的使用案例。</li></ol><p><strong>使用场景</strong>：</p><ul><li><strong>开发者</strong>：调试和优化网站或应用程序的网络请求。</li><li><strong>测试人员</strong>：模拟不同的网络环境和条件来测试应用的弹性和性能。</li><li><strong>系统管理员</strong>：监控和审计网络请求安全。</li></ul><p>Fiddler Everywhere 是一个强大的工具，适用于任何需要深入理解或调试网络通信的专业人士。</p>',7),p={href:"https://www.telerik.com/download/fiddler-everywhere",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),c={href:"https://linux.do/uploads/short-url/n0gqGdlUiGMxbCtyimfpbaYroir.zip",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),f={href:"https://linux.do/uploads/short-url/gp3EzStDR40YHVl3MHSUx99fs2S.zip",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),b={href:"https://linux.do/uploads/short-url/jsdAKKozbVQpkvWOfl4Z8vdMSh1.zip",target:"_blank",rel:"noopener noreferrer"},w=e("br",null,null,-1),v={href:"https://linux.do/uploads/short-url/igzsRIo107hTqpOF5MignLaSznr.zip",target:"_blank",rel:"noopener noreferrer"},y=l('<h2 id="安装-fiddler-everywhere" tabindex="-1"><a class="header-anchor" href="#安装-fiddler-everywhere"><span>安装 Fiddler Everywhere</span></a></h2><p>下载 <code>全平台原生的补丁 </code>:</p><ul><li><p>Windows：双击直接运行，输入Fiddler Everywhere安装路径就可以。</p></li><li><p>Linux/MacOS：去Windows虚拟机上运行，把Fiddler.WebUi.dll复制到当前补丁目录生成修补后的文件，再替换回原文件。</p></li></ul><h3 id="安装完成后界面" tabindex="-1"><a class="header-anchor" href="#安装完成后界面"><span>安装完成后界面</span></a></h3><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/image-20240730102050470.png" alt="image-20240730102050470" tabindex="0" loading="lazy"><figcaption>image-20240730102050470</figcaption></figure><h2 id="开启https抓包功能" tabindex="-1"><a class="header-anchor" href="#开启https抓包功能"><span>开启HTTPS抓包功能</span></a></h2><p>安装好Fiddler后，默认情况下无法抓取HTTPS数据。启用此功能，请执行以下步骤：</p><h3 id="_1-点击fiddler右上角的设置图标-第一个选项就是https。" tabindex="-1"><a class="header-anchor" href="#_1-点击fiddler右上角的设置图标-第一个选项就是https。"><span>1. 点击Fiddler右上角的设置图标，第一个选项就是HTTPS。</span></a></h3><h3 id="_2-点击信任fiddler并勾选以下两个选项" tabindex="-1"><a class="header-anchor" href="#_2-点击信任fiddler并勾选以下两个选项"><span>2. 点击信任Fiddler并勾选以下两个选项：</span></a></h3><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/image-20240730102309022.png" alt="image-20240730102309022" tabindex="0" loading="lazy"><figcaption>image-20240730102309022</figcaption></figure><h3 id="_3-导出证书到桌面" tabindex="-1"><a class="header-anchor" href="#_3-导出证书到桌面"><span>3. 导出证书到桌面</span></a></h3><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/image-20240730102802692.png" alt="image-20240730102802692" tabindex="0" loading="lazy"><figcaption>image-20240730102802692</figcaption></figure><h3 id="_4-打开浏览器-这里以歌浏览器为例。" tabindex="-1"><a class="header-anchor" href="#_4-打开浏览器-这里以歌浏览器为例。"><span>4. 打开浏览器，这里以歌浏览器为例。</span></a></h3><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/image-20240730103026062.png" alt="image-20240730103026062" tabindex="0" loading="lazy"><figcaption>image-20240730103026062</figcaption></figure><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/image-20240730103216854.png" alt="image-20240730103216854" tabindex="0" loading="lazy"><figcaption>image-20240730103216854</figcaption></figure><blockquote><p>如图将刚导出到桌面的证书，导入到所使用的浏览器中。</p></blockquote><h2 id="抓取http-https数据" tabindex="-1"><a class="header-anchor" href="#抓取http-https数据"><span>抓取HTTP/HTTPS数据</span></a></h2><p>HTTPS是建立在HTTP之上的加密应用层协议。Fiddler能自动解密HTTPS传输的数据，将之还原为原始HTTP形式。</p><p>以站长自己的网站“仙人球博客”为例，打开一个页面后，在Fiddler左侧点击眼睛那个图标，页面会显示抓取到的HTTP/HTTPS请求信息，<code>一个页面可能会有很多个请求，可以在上方的搜索框中输入“cactusli.net”过滤你想要的请求</code>。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/image-20240730104436780.png" alt="image-20240730104436780" tabindex="0" loading="lazy"><figcaption>image-20240730104436780</figcaption></figure><blockquote><p>点击“Inspectors”后，可以看到HTTP请求和响应的详细格式。点击“raw”按钮，即可查看原始数据。请注意，原始请求数据是直接用于TCP套接字构成HTTP请求的，而响应数据通常会经过压缩以节省网络带宽，点击“解压缩”按钮后，可查看从TCP套接字读取的HTTP响应数据。</p></blockquote><p>再看一个抓取的 POST 接口的场景，可以很直观的看出接口的请求参数和相应数据：</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/image-20240730110125376.png" alt="image-20240730110125376" tabindex="0" loading="lazy"><figcaption>image-20240730110125376</figcaption></figure><h2 id="fiddler-的工作原理" tabindex="-1"><a class="header-anchor" href="#fiddler-的工作原理"><span>Fiddler 的工作原理</span></a></h2><p>Fiddler本质上是一个代理服务器。当浏览器访问页面时，它会将HTTP请求首先发送给Fiddler，Fiddler再将请求转发给浏览器服务器。当服务器返回数据时，Fiddler会获取这些数据，并将其传递给浏览器。因此，Fiddler可以清楚掌握浏览器与服务器之间交互的数据细节，帮助我们完成抓包工作。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/image-20240730111857780.png" alt="image-20240730111857780" tabindex="0" loading="lazy"><figcaption>image-20240730111857780</figcaption></figure>',26);function T(_,E){const r=a("ExternalLinkIcon");return d(),o("div",null,[g,e("blockquote",null,[e("p",null,[i("官网下载地址："),e("a",p,[i("https://www.telerik.com/download/fiddler-everywhere"),t(r)])]),e("p",null,[i("全平台原生的补丁："),h,e("a",c,[i("FiddlerEverywherePatcher-linux-x64_2024-07-29.zip"),t(r)]),i(" (3.7 MB)"),u,e("a",f,[i("FiddlerEverywherePatcher-osx-x64_2024-07-29.zip"),t(r)]),i(" (3.7 MB)"),m,e("a",b,[i("FiddlerEverywherePatcher-osx-arm64_2024-07-29.zip"),t(r)]),i(" (3.7 MB)"),w,e("a",v,[i("FiddlerEverywherePatcher-win-x64_2024-07-29.zip"),t(r)]),i(" (3.2 MB)")])]),y])}const F=n(s,[["render",T],["__file","Fiddler Everywhere 抓包工具.html.vue"]]),P=JSON.parse(`{"path":"/tutorial/%E6%8A%93%E5%8C%85%E5%B7%A5%E5%85%B7%E6%8C%87%E5%8D%97/Fiddler%20Everywhere%20%E6%8A%93%E5%8C%85%E5%B7%A5%E5%85%B7.html","title":"Fiddler Everywhere 抓包工具","lang":"zh-CN","frontmatter":{"title":"Fiddler Everywhere 抓包工具","subtitle":"Fiddler Everywhere 抓包工具","date":"2024-04-05T14:36:20.000Z","category":["Fiddler Everywhere"],"tag":["Fiddler Everywhere"],"order":1,"description":"Fiddler Everywhere 是什么？ Fiddler Everywhere 是一个网络流量监控和调试工具，由 Telerik（Progress Software的一个部门）开发。它是 Fiddler Classic 的继承者，提供了一个更新更现代的用户界面和一些增强功能，使其能够跨平台工作，支持 Windows、Mac 和 Linux 系统。...","head":[["meta",{"property":"og:url","content":"https://cactusli.net/tutorial/%E6%8A%93%E5%8C%85%E5%B7%A5%E5%85%B7%E6%8C%87%E5%8D%97/Fiddler%20Everywhere%20%E6%8A%93%E5%8C%85%E5%B7%A5%E5%85%B7.html"}],["meta",{"property":"og:site_name","content":"Cactus's Blog"}],["meta",{"property":"og:title","content":"Fiddler Everywhere 抓包工具"}],["meta",{"property":"og:description","content":"Fiddler Everywhere 是什么？ Fiddler Everywhere 是一个网络流量监控和调试工具，由 Telerik（Progress Software的一个部门）开发。它是 Fiddler Classic 的继承者，提供了一个更新更现代的用户界面和一些增强功能，使其能够跨平台工作，支持 Windows、Mac 和 Linux 系统。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lixuanfengs.github.io/blog-images/vp/web/image-20240730102050470.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-30T03:19:29.000Z"}],["meta",{"property":"article:author","content":"Cactus li"}],["meta",{"property":"article:tag","content":"Fiddler Everywhere"}],["meta",{"property":"article:published_time","content":"2024-04-05T14:36:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-30T03:19:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fiddler Everywhere 抓包工具\\",\\"image\\":[\\"https://lixuanfengs.github.io/blog-images/vp/web/image-20240730102050470.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/image-20240730102309022.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/image-20240730102802692.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/image-20240730103026062.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/image-20240730103216854.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/image-20240730104436780.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/image-20240730110125376.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/image-20240730111857780.png\\"],\\"datePublished\\":\\"2024-04-05T14:36:20.000Z\\",\\"dateModified\\":\\"2024-07-30T03:19:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cactus li\\",\\"url\\":\\"https://cactusli.net\\"}]}"]]},"headers":[{"level":2,"title":"Fiddler Everywhere 是什么？","slug":"fiddler-everywhere-是什么","link":"#fiddler-everywhere-是什么","children":[]},{"level":2,"title":"安装 Fiddler Everywhere","slug":"安装-fiddler-everywhere","link":"#安装-fiddler-everywhere","children":[{"level":3,"title":"安装完成后界面","slug":"安装完成后界面","link":"#安装完成后界面","children":[]}]},{"level":2,"title":"开启HTTPS抓包功能","slug":"开启https抓包功能","link":"#开启https抓包功能","children":[{"level":3,"title":"1. 点击Fiddler右上角的设置图标，第一个选项就是HTTPS。","slug":"_1-点击fiddler右上角的设置图标-第一个选项就是https。","link":"#_1-点击fiddler右上角的设置图标-第一个选项就是https。","children":[]},{"level":3,"title":"2. 点击信任Fiddler并勾选以下两个选项：","slug":"_2-点击信任fiddler并勾选以下两个选项","link":"#_2-点击信任fiddler并勾选以下两个选项","children":[]},{"level":3,"title":"3.  导出证书到桌面","slug":"_3-导出证书到桌面","link":"#_3-导出证书到桌面","children":[]},{"level":3,"title":"4. 打开浏览器，这里以歌浏览器为例。","slug":"_4-打开浏览器-这里以歌浏览器为例。","link":"#_4-打开浏览器-这里以歌浏览器为例。","children":[]}]},{"level":2,"title":"抓取HTTP/HTTPS数据","slug":"抓取http-https数据","link":"#抓取http-https数据","children":[]},{"level":2,"title":"Fiddler 的工作原理","slug":"fiddler-的工作原理","link":"#fiddler-的工作原理","children":[]}],"git":{"createdTime":1722309569000,"updatedTime":1722309569000,"contributors":[{"name":"lixuanfengs","email":"1183895890@qq.com","commits":1}]},"readingTime":{"minutes":3.94,"words":1183},"filePathRelative":"tutorial/抓包工具指南/Fiddler Everywhere 抓包工具.md","localizedDate":"2024年4月5日","excerpt":"<h2>Fiddler Everywhere 是什么？</h2>\\n<p>Fiddler Everywhere 是一个网络流量监控和调试工具，由 Telerik（Progress Software的一个部门）开发。它是 Fiddler Classic 的继承者，提供了一个更新更现代的用户界面和一些增强功能，使其能够跨平台工作，支持 Windows、Mac 和 Linux 系统。</p>\\n<p><strong>主要功能包括：</strong></p>\\n<ol>\\n<li><strong>流量捕获和分析</strong>：Fiddler Everywhere 可以捕获来自浏览器和其他软件的 HTTP 和 HTTPS 网络流量，允许用户查看和分析请求和响应的详细内容。这对于调试网站和应用程序的网络请求、查找性能瓶颈或监控API调用非常有用。</li>\\n<li><strong>修改和重放请求</strong>：用户可以修改网络请求和响应，然后重新发送它们。这对于测试网络服务和应用程序如何响应不同的数据或行为非常有用。</li>\\n<li><strong>模拟网络条件</strong>：Fiddler Everywhere 可以模拟不同的网络环境，包括低带宽、高延迟等，以测试应用程序在各种网络条件下的表现。</li>\\n<li><strong>HTTPS 解密</strong>：提供 HTTPS 流量解密功能，允许用户查看加密通信的细节。</li>\\n<li><strong>团队协作</strong>：Fiddler Everywhere 提供了一些团队协作功能，例如共享捕获的流量数据和会话给团队成员，便于团队合作和问题解决。</li>\\n<li><strong>扩展性和自定义</strong>：用户可以使用 Fiddler Everywhere 的 API 和各种插件来扩展其功能，适应特定的使用案例。</li>\\n</ol>","autoDesc":true}`);export{F as comp,P as data};
