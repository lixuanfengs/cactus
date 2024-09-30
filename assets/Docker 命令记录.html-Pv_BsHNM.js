import{_ as t,c as o,f as r,o as d}from"./app-OgId0ijo.js";const s={};function n(c,e){return d(),o("div",null,e[0]||(e[0]=[r(`<h2 id="docker-入门" tabindex="-1"><a class="header-anchor" href="#docker-入门"><span>Docker 入门</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p><strong>官网安装：<a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/install/</a></strong></p><p><strong>利用脚本进行安装</strong>：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> curl</span><span style="color:#D19A66;"> -sSL</span><span style="color:#98C379;"> https://get.docker.com/</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">sh</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> sudo</span><span style="color:#98C379;"> chmod</span><span style="color:#D19A66;"> 777</span><span style="color:#98C379;"> /var/run/docker.sock</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>后台创建和运行容器</strong></p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> docker</span><span style="color:#98C379;"> run</span><span style="color:#D19A66;"> -d</span><span style="color:#D19A66;"> -p</span><span style="color:#98C379;"> 80:80</span><span style="color:#98C379;"> docker/getting-started</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><ul><li><code>-d</code> 以分离（后台）模式运行容器</li><li><code>-p 80:80</code> 将端口 80 映射到容器中的端口 80，格式：宿主机端口:容器端口</li><li><code>docker/getting-started</code> 要使用的镜像</li></ul></blockquote><p><strong>以交互式命令创建并运行容器</strong></p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> docker</span><span style="color:#98C379;"> run</span><span style="color:#D19A66;"> -it</span><span style="color:#D19A66;"> --rm</span><span style="color:#D19A66;"> -p</span><span style="color:#98C379;">  8001:8080</span><span style="color:#D19A66;"> --name</span><span style="color:#98C379;"> my-nginx</span><span style="color:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>如果要退出容器但是不关闭容器，按<em>Ctrl+P+Q</em>即可。</p><ul><li><code>-it</code> 交互式 bash 模式</li><li><code>--rm</code> 容器终止运行后自动删除容器文件</li><li><code>-p 8001:8080</code> 将 <code>8001</code> 端口映射到容器中的 <code>8080</code> 端口</li><li><code>--name my-nginx</code> 指定名称</li><li><code>nginx</code> 要使用的镜像</li></ul></blockquote><h3 id="一般命令" tabindex="-1"><a class="header-anchor" href="#一般命令"><span>一般命令</span></a></h3><table><thead><tr><th>命令</th><th>解释</th></tr></thead><tbody><tr><td><code>docker ps</code></td><td>列出正在运行的容器</td></tr><tr><td><code>docker ps -a</code></td><td>列出所有容器</td></tr><tr><td><code>docker ps -s</code></td><td>列出正在运行的容器 <em>(带 CPU / 内存)</em></td></tr><tr><td><code>docker images</code></td><td>列出所有镜像</td></tr><tr><td><code>docker exec -it &lt;container&gt; bash</code></td><td>连接到容器</td></tr><tr><td><code>docker logs &lt;container&gt;</code></td><td>显示容器的控制台日志</td></tr><tr><td><code>docker stop &lt;container&gt;</code></td><td>停止容器</td></tr><tr><td><code>docker restart &lt;container&gt;</code></td><td>重启一个容器</td></tr><tr><td><code>docker rm &lt;container&gt;</code></td><td>移除一个容器</td></tr><tr><td><code>docker port &lt;container&gt;</code></td><td>显示容器的端口映射</td></tr><tr><td><code>docker top &lt;container&gt;</code></td><td>列出进程</td></tr><tr><td><code>docker kill &lt;container&gt;</code></td><td>杀死一个容器</td></tr></tbody></table><h2 id="docker-容器命令" tabindex="-1"><a class="header-anchor" href="#docker-容器命令"><span>Docker 容器命令</span></a></h2><h3 id="启动和停止" tabindex="-1"><a class="header-anchor" href="#启动和停止"><span>启动和停止</span></a></h3><table><thead><tr><th>命令</th><th>解释</th></tr></thead><tbody><tr><td><code>docker start nginx-server</code></td><td>开始</td></tr><tr><td><code>docker stop nginx-server</code></td><td>停止</td></tr><tr><td><code>docker restart nginx-server</code></td><td>重启</td></tr><tr><td><code>docker pause nginx-server</code></td><td>暂停</td></tr><tr><td><code>docker unpause nginx-server</code></td><td>取消暂停</td></tr><tr><td><code>docker wait nginx-server</code></td><td>阻塞容器</td></tr><tr><td><code>docker kill nginx-server</code></td><td>发送 SIGKILL</td></tr><tr><td><code>docker attach nginx-server</code></td><td>连接到现有容器</td></tr></tbody></table><h3 id="查询容器信息" tabindex="-1"><a class="header-anchor" href="#查询容器信息"><span>查询容器信息</span></a></h3><table><thead><tr><th>命令</th><th>解释</th></tr></thead><tbody><tr><td><code>docker ps</code></td><td>列出正在运行的容器</td></tr><tr><td><code>docker ps -a</code></td><td>列出所有容器</td></tr><tr><td><code>docker logs nginx-server</code></td><td>容器日志</td></tr><tr><td><code>docker inspect nginx-server</code></td><td>检查容器</td></tr><tr><td><code>docker events nginx-server</code></td><td>容器事件</td></tr><tr><td><code>docker port nginx-server</code></td><td>公共端口</td></tr><tr><td><code>docker top nginx-server</code></td><td>运行进程</td></tr><tr><td><code>docker stats nginx-server</code></td><td>容器资源使用</td></tr><tr><td><code>docker diff nginx-server</code></td><td>列出对容器所做的更改</td></tr></tbody></table>`,18)]))}const l=t(s,[["render",n],["__file","Docker 命令记录.html.vue"]]),i=JSON.parse(`{"path":"/linuxs/Docker/Docker%20%E5%91%BD%E4%BB%A4%E8%AE%B0%E5%BD%95.html","title":"Docker 命令记录","lang":"zh-CN","frontmatter":{"title":"Docker 命令记录","subtitle":"Docker 命令记录","date":"2024-09-30T15:57:02.000Z","category":["Docker"],"tag":["Docker"],"order":1,"description":"Docker 入门 安装 官网安装：https://docs.docker.com/engine/install/ 利用脚本进行安装： 后台创建和运行容器 -d 以分离（后台）模式运行容器 -p 80:80 将端口 80 映射到容器中的端口 80，格式：宿主机端口:容器端口 docker/getting-started 要使用的镜像 以交互式命令创建并...","head":[["meta",{"property":"og:url","content":"https://cactusli.net/linuxs/Docker/Docker%20%E5%91%BD%E4%BB%A4%E8%AE%B0%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"Cactus's Blog"}],["meta",{"property":"og:title","content":"Docker 命令记录"}],["meta",{"property":"og:description","content":"Docker 入门 安装 官网安装：https://docs.docker.com/engine/install/ 利用脚本进行安装： 后台创建和运行容器 -d 以分离（后台）模式运行容器 -p 80:80 将端口 80 映射到容器中的端口 80，格式：宿主机端口:容器端口 docker/getting-started 要使用的镜像 以交互式命令创建并..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T08:11:28.000Z"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2024-09-30T15:57:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-30T08:11:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker 命令记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-30T15:57:02.000Z\\",\\"dateModified\\":\\"2024-09-30T08:11:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cactus li\\",\\"url\\":\\"https://cactusli.net\\"}]}"]]},"headers":[{"level":2,"title":"Docker 入门","slug":"docker-入门","link":"#docker-入门","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"一般命令","slug":"一般命令","link":"#一般命令","children":[]}]},{"level":2,"title":"Docker 容器命令","slug":"docker-容器命令","link":"#docker-容器命令","children":[{"level":3,"title":"启动和停止","slug":"启动和停止","link":"#启动和停止","children":[]},{"level":3,"title":"查询容器信息","slug":"查询容器信息","link":"#查询容器信息","children":[]}]}],"git":{"createdTime":1727683888000,"updatedTime":1727683888000,"contributors":[{"name":"lixuanfengs","email":"1183895890@qq.com","commits":1}]},"readingTime":{"minutes":1.71,"words":514},"filePathRelative":"linuxs/Docker/Docker 命令记录.md","localizedDate":"2024年9月30日","excerpt":"<h2>Docker 入门</h2>\\n<h3>安装</h3>\\n<p><strong>官网安装：<a href=\\"https://docs.docker.com/engine/install/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://docs.docker.com/engine/install/</a></strong></p>\\n<p><strong>利用脚本进行安装</strong>：</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"background-color:#282c34;color:#abb2bf\\"><pre class=\\"shiki one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF\\">$</span><span style=\\"color:#98C379\\"> curl</span><span style=\\"color:#D19A66\\"> -sSL</span><span style=\\"color:#98C379\\"> https://get.docker.com/</span><span style=\\"color:#ABB2BF\\"> | </span><span style=\\"color:#61AFEF\\">sh</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF\\">$</span><span style=\\"color:#98C379\\"> sudo</span><span style=\\"color:#98C379\\"> chmod</span><span style=\\"color:#D19A66\\"> 777</span><span style=\\"color:#98C379\\"> /var/run/docker.sock</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{l as comp,i as data};
