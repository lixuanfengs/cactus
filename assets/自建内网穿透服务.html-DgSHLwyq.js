import{_ as p,e as d,o,c as s,b as e,g as a,f as n,w as l,h as t}from"./app-Q5-15NNO.js";const c={},b=e("h2",{id:"自建内网穿透服务-easytier",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自建内网穿透服务-easytier"},[e("span",null,"自建内网穿透服务 EasyTier")])],-1),u=e("p",null,"一个简单、安全、去中心化的内网穿透 VPN 组网方案，使用 Rust 语言和 Tokio 框架实现。",-1),g=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装"},[e("span",null,"安装")])],-1),h=e("p",null,[e("strong",null,"下载预编译的二进制文件")],-1),m={href:"https://github.com/KKRainbow/EasyTier/releases",target:"_blank",rel:"noopener noreferrer"},v={href:"http://crates.io",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>cargo install easytier</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),f=t(`<li><p><strong>通过源码安装</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>cargo install --git https://github.com/KKRainbow/EasyTier.git</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1),y=e("h2",{id:"快速开始",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速开始"},[e("span",null,"快速开始")])],-1),_=e("blockquote",null,[e("p",null,"下文仅描述命令行工具的使用，图形界面程序可参考下述概念自行配置。")],-1),w={href:"https://github.com/EasyTier/EasyTier/blob/main/README_CN.md#%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"双节点组网",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#双节点组网"},[e("span",null,"双节点组网")])],-1),E=e("p",null,"假设双节点的网络拓扑如下",-1),z={class:"details-reset details-overlay details-overlay-dark",style:{"box-sizing":"border-box",display:"contents","margin-top":"0px","margin-bottom":"16px"}},B=e("summary",{role:"button","aria-label":"Open dialog",class:"btn my-2 mr-2 p-0 d-inline-flex","aria-haspopup":"dialog",style:{"box-sizing":"border-box",display:"inline-flex !important",cursor:"pointer",position:"relative",padding:"0px !important","font-size":"14px","font-weight":"var(--base-text-weight-medium, 500)","line-height":"20px","white-space":"nowrap","vertical-align":"middle","user-select":"none","border-width":"1px","border-style":"solid","border-color":"var(--button-default-borderColor-rest, var(--color-btn-border))","border-image":"initial","border-radius":"6px",appearance:"none",color:"var(--button-default-fgColor-rest, var(--color-btn-text))","background-color":"var(--button-default-bgColor-rest, var(--color-btn-bg))","box-shadow":"var(--button-default-shadow-resting, var(--color-btn-shadow)),var(--button-default-shadow-inset, var(--color-btn-inset-shadow))",transition:"color 80ms cubic-bezier(0.33, 1, 0.68, 1) 0s, background-color, box-shadow, border-color","margin-right":"var(--base-size-8, 8px) !important","margin-top":"var(--base-size-8, 8px) !important","margin-bottom":"var(--base-size-8, 8px) !important","list-style":"none"}},[e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",class:"octicon m-2"},[e("path",{"fill-rule":"evenodd",d:"M3.72 3.72a.75.75 0 011.06 1.06L2.56 7h10.88l-2.22-2.22a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H2.56l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5z"})])],-1),C={style:{"box-sizing":"border-box"}},T={"aria-label":"Close dialog","data-close-dialog":"",type:"button","data-view-component":"true",class:"Link--muted btn-link position-absolute render-full-screen-close",style:{"box-sizing":"border-box",font:"inherit",margin:"0px",overflow:"visible","text-transform":"none",appearance:"button",cursor:"pointer","border-radius":"0px",display:"inline-block",padding:"4px",color:"var(--fgColor-muted) !important","text-decoration":"none","white-space":"nowrap","user-select":"none","background-color":"transparent",border:"0px",position:"absolute !important",top:"0px",right:"0px","z-index":"1"}},A={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",style:{display:"inline-block","vertical-align":"text-bottom"},class:"octicon octicon-x"},R=e("path",{"fill-rule":"evenodd",d:"M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"},null,-1),L=[R],P=e("div",{class:"Box-body border-0",role:"presentation",style:{"box-sizing":"border-box","border-top":"0px !important","border-right":"0px !important","border-bottom":"var(--borderWidth-thin) solid var(--borderColor-default)","border-left":"0px !important","border-image":"initial !important",padding:"var(--stack-padding-normal)","border-bottom-left-radius":"var(--borderRadius-medium)","border-bottom-right-radius":"var(--borderRadius-medium)","margin-bottom":"calc(var(--borderWidth-thin)*-1)"}},null,-1),W=e("iframe",{role:"presentation",class:"render-viewer",sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-popups",src:"https://viewscreen.githubusercontent.com/markdown/mermaid?docs_host=https%3A%2F%2Fdocs.github.com&color_mode=light#6489ba4b-0f5d-4f8f-8d8d-8e451f037dd1",name:"6489ba4b-0f5d-4f8f-8d8d-8e451f037dd1","data-content":'{"data":"flowchart LR\\n\\nsubgraph 节点 A IP 22.1.1.1\\nnodea[EasyTier\\\\n10.144.144.1]\\nend\\n\\nsubgraph 节点 B\\nnodeb[EasyTier\\\\n10.144.144.2]\\nend\\n\\nnodea &lt;-----&gt; nodeb\\n\\n"}',style:{"box-sizing":"border-box",display:"block",width:"1012px",height:"219px",border:"0px"}},null,-1),D=t(`<p>在节点 A 上执行：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo easytier-core --ipv4 10.144.144.1</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行成功会有如下打印。</p>`,3),G={href:"https://github.com/EasyTier/EasyTier/blob/main/assets/image-2.png",target:"_blank",rel:"noopener noreferrer"},I=e("img",{src:"https://lixuanfengs.github.io/blog-images/vp/web/image-2.png",alt:"alt text",tabindex:"0",loading:"lazy"},null,-1),F=e("figcaption",null,"alt text",-1),N=t(`<li><p>在节点 B 执行</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo easytier-core --ipv4 10.144.144.2 --peers udp://22.1.1.1:11010</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1),K=t(`<p>测试联通性</p><p>两个节点应成功连接并能够在虚拟子网内通信</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>ping 10.144.144.2</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 easytier-cli 查看子网中的节点信息</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>easytier-cli peer</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),M={href:"https://github.com/EasyTier/EasyTier/blob/main/assets/image.png",target:"_blank",rel:"noopener noreferrer"},V=e("img",{src:"https://lixuanfengs.github.io/blog-images/vp/web/image.png",alt:"alt text",tabindex:"0",loading:"lazy"},null,-1),Z=e("figcaption",null,"alt text",-1),H=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>easytier-cli route</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),O={href:"https://github.com/EasyTier/EasyTier/blob/main/assets/image-1.png",target:"_blank",rel:"noopener noreferrer"},X=e("img",{src:"https://lixuanfengs.github.io/blog-images/vp/web/image-1.png",alt:"alt text",tabindex:"0",loading:"lazy"},null,-1),S=e("figcaption",null,"alt text",-1),q=t(`<hr><h3 id="多节点组网" tabindex="-1"><a class="header-anchor" href="#多节点组网"><span>多节点组网</span></a></h3><p>基于刚才的双节点组网例子，如果有更多的节点需要加入虚拟网络，可以使用如下命令。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo easytier-core --ipv4 10.144.144.2 --peers udp://22.1.1.1:11010</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code>--peers </code> 参数可以填写任意一个已经在虚拟网络中的节点的监听地址。</p><hr><h3 id="子网代理-点对网-配置" tabindex="-1"><a class="header-anchor" href="#子网代理-点对网-配置"><span>子网代理（点对网）配置</span></a></h3><p>假设网络拓扑如下，节点 B 想将其可访问的子网 10.1.1.0/24 共享给其他节点。</p>`,8),Q={class:"details-reset details-overlay details-overlay-dark",style:{"box-sizing":"border-box",display:"contents","margin-top":"0px","margin-bottom":"16px"}},j=e("summary",{role:"button","aria-label":"Open dialog",class:"btn my-2 mr-2 p-0 d-inline-flex","aria-haspopup":"dialog",style:{"box-sizing":"border-box",display:"inline-flex !important",cursor:"pointer",position:"relative",padding:"0px !important","font-size":"14px","font-weight":"var(--base-text-weight-medium, 500)","line-height":"20px","white-space":"nowrap","vertical-align":"middle","user-select":"none","border-width":"1px","border-style":"solid","border-color":"var(--button-default-borderColor-rest, var(--color-btn-border))","border-image":"initial","border-radius":"6px",appearance:"none",color:"var(--button-default-fgColor-rest, var(--color-btn-text))","background-color":"var(--button-default-bgColor-rest, var(--color-btn-bg))","box-shadow":"var(--button-default-shadow-resting, var(--color-btn-shadow)),var(--button-default-shadow-inset, var(--color-btn-inset-shadow))",transition:"color 80ms cubic-bezier(0.33, 1, 0.68, 1) 0s, background-color, box-shadow, border-color","margin-right":"var(--base-size-8, 8px) !important","margin-top":"var(--base-size-8, 8px) !important","margin-bottom":"var(--base-size-8, 8px) !important","list-style":"none"}},[e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",class:"octicon m-2"},[e("path",{"fill-rule":"evenodd",d:"M3.72 3.72a.75.75 0 011.06 1.06L2.56 7h10.88l-2.22-2.22a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H2.56l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5z"})])],-1),U={style:{"box-sizing":"border-box"}},J={"aria-label":"Close dialog","data-close-dialog":"",type:"button","data-view-component":"true",class:"Link--muted btn-link position-absolute render-full-screen-close",style:{"box-sizing":"border-box",font:"inherit",margin:"0px",overflow:"visible","text-transform":"none",appearance:"button",cursor:"pointer","border-radius":"0px",display:"inline-block",padding:"4px",color:"var(--fgColor-muted) !important","text-decoration":"none","white-space":"nowrap","user-select":"none","background-color":"transparent",border:"0px",position:"absolute !important",top:"0px",right:"0px","z-index":"1"}},$={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",style:{display:"inline-block","vertical-align":"text-bottom"},class:"octicon octicon-x"},Y=e("path",{"fill-rule":"evenodd",d:"M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"},null,-1),ee=[Y],ae=e("div",{class:"Box-body border-0",role:"presentation",style:{"box-sizing":"border-box","border-top":"0px !important","border-right":"0px !important","border-bottom":"var(--borderWidth-thin) solid var(--borderColor-default)","border-left":"0px !important","border-image":"initial !important",padding:"var(--stack-padding-normal)","border-bottom-left-radius":"var(--borderRadius-medium)","border-bottom-right-radius":"var(--borderRadius-medium)","margin-bottom":"calc(var(--borderWidth-thin)*-1)"}},null,-1),ne=e("iframe",{role:"presentation",class:"render-viewer",sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-popups",src:"https://viewscreen.githubusercontent.com/markdown/mermaid?docs_host=https%3A%2F%2Fdocs.github.com&color_mode=light#153b060c-5e66-4827-a7db-1f2d71665237",name:"153b060c-5e66-4827-a7db-1f2d71665237","data-content":'{"data":"flowchart LR\\n\\nsubgraph 节点 A IP 22.1.1.1\\nnodea[EasyTier\\\\n10.144.144.1]\\nend\\n\\nsubgraph 节点 B\\nnodeb[EasyTier\\\\n10.144.144.2]\\nend\\n\\nid1[[10.1.1.0/24]]\\n\\nnodea &lt;--&gt; nodeb &lt;-.-&gt; id1\\n\\n"}',style:{"box-sizing":"border-box",display:"block",width:"1012px",height:"219px",border:"0px"}},null,-1),te=t(`<p>则节点 B 的 easytier 启动参数为（新增 -n 参数）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo easytier-core --ipv4 10.144.144.2 -n 10.1.1.0/24</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子网代理信息会自动同步到虚拟网络的每个节点，各个节点会自动配置相应的路由，节点 A 可以通过如下命令检查子网代理是否生效。</p><ol><li><p>检查路由信息是否已经同步，proxy_cidrs 列展示了被代理的子网。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>easytier-cli route</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/EasyTier-01.png" alt="EasyTier-01" tabindex="0" loading="lazy"><figcaption>EasyTier-01</figcaption></figure></li><li><p>测试节点 A 是否可访问被代理子网下的节点</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>ping 10.1.1.2</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><hr><h3 id="无公网ip组网" tabindex="-1"><a class="header-anchor" href="#无公网ip组网"><span>无公网IP组网</span></a></h3><p>EasyTier 支持共享公网节点进行组网。目前已部署共享的公网节点 <code>tcp://easytier.public.kkrainbow.top:11010</code>。</p><p>使用共享节点时，需要每个入网节点提供相同的 <code>--network-name</code> 和 <code>--network-secret</code> 参数，作为网络的唯一标识。</p><p>以双节点为例，节点 A 执行：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo easytier-core -i 10.144.144.1 --network-name abc --network-secret abc -e tcp://easytier.public.kkrainbow.top:11010</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>节点 B 执行</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo easytier-core --ipv4 10.144.144.2 --network-name abc --network-secret abc -e tcp://easytier.public.kkrainbow.top:11010</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行成功后，节点 A 即可通过虚拟 IP 10.144.144.2 访问节点 B。</p><hr><h3 id="使用-wireguard-客户端接入" tabindex="-1"><a class="header-anchor" href="#使用-wireguard-客户端接入"><span>使用 WireGuard 客户端接入</span></a></h3><p>EasyTier 可以用作 WireGuard 服务端，让任意安装了 WireGuard 客户端的设备访问 EasyTier 网络。对于目前 EasyTier 不支持的平台 （如 iOS、Android 等），可以使用这种方式接入 EasyTier 网络。</p><p>假设网络拓扑如下：</p>`,17),ie={class:"details-reset details-overlay details-overlay-dark",style:{"box-sizing":"border-box",display:"contents","margin-top":"0px","margin-bottom":"16px"}},oe=e("summary",{role:"button","aria-label":"Open dialog",class:"btn my-2 mr-2 p-0 d-inline-flex","aria-haspopup":"dialog",style:{"box-sizing":"border-box",display:"inline-flex !important",cursor:"pointer",position:"relative",padding:"0px !important","font-size":"14px","font-weight":"var(--base-text-weight-medium, 500)","line-height":"20px","white-space":"nowrap","vertical-align":"middle","user-select":"none","border-width":"1px","border-style":"solid","border-color":"var(--button-default-borderColor-rest, var(--color-btn-border))","border-image":"initial","border-radius":"6px",appearance:"none",color:"var(--button-default-fgColor-rest, var(--color-btn-text))","background-color":"var(--button-default-bgColor-rest, var(--color-btn-bg))","box-shadow":"var(--button-default-shadow-resting, var(--color-btn-shadow)),var(--button-default-shadow-inset, var(--color-btn-inset-shadow))",transition:"color 80ms cubic-bezier(0.33, 1, 0.68, 1) 0s, background-color, box-shadow, border-color","margin-right":"var(--base-size-8, 8px) !important","margin-top":"var(--base-size-8, 8px) !important","margin-bottom":"var(--base-size-8, 8px) !important","list-style":"none"}},[e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",class:"octicon m-2"},[e("path",{"fill-rule":"evenodd",d:"M3.72 3.72a.75.75 0 011.06 1.06L2.56 7h10.88l-2.22-2.22a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H2.56l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5z"})])],-1),se={style:{"box-sizing":"border-box"}},re={"aria-label":"Close dialog","data-close-dialog":"",type:"button","data-view-component":"true",class:"Link--muted btn-link position-absolute render-full-screen-close",style:{"box-sizing":"border-box",font:"inherit",margin:"0px",overflow:"visible","text-transform":"none",appearance:"button",cursor:"pointer","border-radius":"0px",display:"inline-block",padding:"4px",color:"var(--fgColor-muted) !important","text-decoration":"none","white-space":"nowrap","user-select":"none","background-color":"transparent",border:"0px",position:"absolute !important",top:"0px",right:"0px","z-index":"1"}},le={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",style:{display:"inline-block","vertical-align":"text-bottom"},class:"octicon octicon-x"},de=e("path",{"fill-rule":"evenodd",d:"M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"},null,-1),pe=[de],ce=e("div",{class:"Box-body border-0",role:"presentation",style:{"box-sizing":"border-box","border-top":"0px !important","border-right":"0px !important","border-bottom":"var(--borderWidth-thin) solid var(--borderColor-default)","border-left":"0px !important","border-image":"initial !important",padding:"var(--stack-padding-normal)","border-bottom-left-radius":"var(--borderRadius-medium)","border-bottom-right-radius":"var(--borderRadius-medium)","margin-bottom":"calc(var(--borderWidth-thin)*-1)"}},null,-1),be=e("iframe",{role:"presentation",class:"render-viewer",sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-popups",src:"https://viewscreen.githubusercontent.com/markdown/mermaid?docs_host=https%3A%2F%2Fdocs.github.com&color_mode=light#82be70ad-845b-436e-9826-4bbc4c7fc84b",name:"82be70ad-845b-436e-9826-4bbc4c7fc84b","data-content":'{"data":"flowchart LR\\n\\nios[[iPhone \\\\n 安装 WireGuard]]\\n\\nsubgraph 节点 A IP 22.1.1.1\\nnodea[EasyTier\\\\n10.144.144.1]\\nend\\n\\nsubgraph 节点 B\\nnodeb[EasyTier\\\\n10.144.144.2]\\nend\\n\\nid1[[10.1.1.0/24]]\\n\\nios &lt;-.-&gt; nodea &lt;--&gt; nodeb &lt;-.-&gt; id1\\n"}',style:{"box-sizing":"border-box",display:"block",width:"1012px",height:"219px",border:"0px"}},null,-1),ue=t(`<p>我们需要 iPhone 通过节点 A 访问 EasyTier 网络，则可进行如下配置：</p><p>在节点 A 的 easytier-core 命令中，加入 --vpn-portal 参数，指定 WireGuard 服务监听的端口，以及 WireGuard 网络使用的网段。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span># 以下参数的含义为： 监听 0.0.0.0:11013 端口，WireGuard 使用 10.14.14.0/24 网段</span></span>
<span class="line"><span>sudo easytier-core --ipv4 10.144.144.1 --vpn-portal wg://0.0.0.0:11013/10.14.14.0/24</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>easytier-core 启动成功后，使用 easytier-cli 获取 WireGuard Client 的配置。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>$&gt; easytier-cli vpn-portal</span></span>
<span class="line"><span>portal_name: wireguard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>############### client_config_start ###############</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Interface]</span></span>
<span class="line"><span>PrivateKey = 9VDvlaIC9XHUvRuE06hD2CEDrtGF+0lDthgr9SZfIho=</span></span>
<span class="line"><span>Address = 10.14.14.0/32 # should assign an ip from this cidr manually</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Peer]</span></span>
<span class="line"><span>PublicKey = zhrZQg4QdPZs8CajT3r4fmzcNsWpBL9ImQCUsnlXyGM=</span></span>
<span class="line"><span>AllowedIPs = 10.144.144.0/24,10.14.14.0/24</span></span>
<span class="line"><span>Endpoint = 0.0.0.0:11013 # should be the public ip(or domain) of the vpn server</span></span>
<span class="line"><span>PersistentKeepalive = 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>############### client_config_end ###############</span></span>
<span class="line"><span></span></span>
<span class="line"><span>connected_clients:</span></span>
<span class="line"><span>[]</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Client Config 前，需要将 Interface Address 和 Peer Endpoint 分别修改为客户端的 IP 和 EasyTier 节点的 IP。将配置文件导入 WireGuard 客户端，即可访问 EasyTier 网络。</p><hr><h3 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置"><span>其他配置</span></a></h3><p>可使用 <code>easytier-core --help</code> 查看全部配置项</p>`,9);function ge(he,me){const i=d("ExternalLinkIcon"),r=d("details-dialog");return o(),s("div",null,[b,u,g,e("ol",null,[e("li",null,[h,e("p",null,[a("访问 "),e("a",m,[a("GitHub Release 页面"),n(i)]),a(" 下载适用于您操作系统的二进制文件。Release 压缩包中同时包含命令行程序和图形界面程序。")])]),e("li",null,[e("p",null,[e("strong",null,[a("通过 "),e("a",v,[a("crates.io"),n(i)]),a(" 安装")])]),x]),f]),y,_,e("p",null,[a("确保已按照 "),e("a",w,[a("安装指南"),n(i)]),a(" 安装 EasyTier，并且 easytier-core 和 easytier-cli 两个命令都已经可用。")]),k,E,e("details",z,[B,n(r,{class:"Box Box--overlay render-full-screen d-flex flex-column anim-fade-in fast","aria-label":"mermaid rendered container",role:"dialog","aria-modal":"true",style:{"box-sizing":"border-box",position:"fixed",margin:"10vh auto",top:"0px",left:"0px",transform:"translateX(-50%)","z-index":"999","max-height":"80vh","max-width":"90vw",width:"34px",overflow:"auto",display:"none","background-color":"var(--bgColor-default)","background-clip":"padding-box","border-color":"var(--borderColor-default)","box-shadow":"rgba(0, 0, 0, 0.4) 0px 0px 18px","animation-name":"fade-in","animation-duration":"300ms","animation-timing-function":"ease-in-out","flex-direction":"column !important","border-radius":"var(--borderRadius-medium)","border-style":"solid","border-width":"var(--borderWidth-thin)",height:"auto",padding:"16px"}},{default:l(()=>[e("div",C,[e("button",T,[(o(),s("svg",A,L))]),P])]),_:1})]),W,e("ol",null,[e("li",null,[D,e("figure",null,[e("a",G,[I,n(i)]),F])]),N,e("li",null,[K,e("figure",null,[e("a",M,[V,n(i)]),Z]),H,e("figure",null,[e("a",O,[X,n(i)]),S])])]),q,e("details",Q,[j,n(r,{class:"Box Box--overlay render-full-screen d-flex flex-column anim-fade-in fast","aria-label":"mermaid rendered container",role:"dialog","aria-modal":"true",style:{"box-sizing":"border-box",position:"fixed",margin:"10vh auto",top:"0px",left:"0px",transform:"translateX(-50%)","z-index":"999","max-height":"80vh","max-width":"90vw",width:"34px",overflow:"auto",display:"none","background-color":"var(--bgColor-default)","background-clip":"padding-box","border-color":"var(--borderColor-default)","box-shadow":"rgba(0, 0, 0, 0.4) 0px 0px 18px","animation-name":"fade-in","animation-duration":"300ms","animation-timing-function":"ease-in-out","flex-direction":"column !important","border-radius":"var(--borderRadius-medium)","border-style":"solid","border-width":"var(--borderWidth-thin)",height:"auto",padding:"16px"}},{default:l(()=>[e("div",U,[e("button",J,[(o(),s("svg",$,ee))]),ae])]),_:1})]),ne,te,e("details",ie,[oe,n(r,{class:"Box Box--overlay render-full-screen d-flex flex-column anim-fade-in fast","aria-label":"mermaid rendered container",role:"dialog","aria-modal":"true",style:{"box-sizing":"border-box",position:"fixed",margin:"10vh auto",top:"0px",left:"0px",transform:"translateX(-50%)","z-index":"999","max-height":"80vh","max-width":"90vw",width:"34px",overflow:"auto",display:"none","background-color":"var(--bgColor-default)","background-clip":"padding-box","border-color":"var(--borderColor-default)","box-shadow":"rgba(0, 0, 0, 0.4) 0px 0px 18px","animation-name":"fade-in","animation-duration":"300ms","animation-timing-function":"ease-in-out","flex-direction":"column !important","border-radius":"var(--borderRadius-medium)","border-style":"solid","border-width":"var(--borderWidth-thin)",height:"auto",padding:"16px"}},{default:l(()=>[e("div",se,[e("button",re,[(o(),s("svg",le,pe))]),ce])]),_:1})]),be,ue])}const xe=p(c,[["render",ge],["__file","自建内网穿透服务.html.vue"]]),fe=JSON.parse(`{"path":"/tutorial/%E7%B3%BB%E7%BB%9F%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C/%E8%87%AA%E5%BB%BA%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E6%9C%8D%E5%8A%A1.html","title":"Docker 部署 cactus-vue-pro","lang":"zh-CN","frontmatter":{"title":"Docker 部署 cactus-vue-pro","subtitle":"Docker 部署 cactus-vue-pro","date":"2024-04-03T15:36:20.000Z","category":["cactus-vue-pro"],"tag":["cactus-vue-pro"],"order":3,"description":"自建内网穿透服务 EasyTier 一个简单、安全、去中心化的内网穿透 VPN 组网方案，使用 Rust 语言和 Tokio 框架实现。 安装 下载预编译的二进制文件 访问 GitHub Release 页面 下载适用于您操作系统的二进制文件。Release 压缩包中同时包含命令行程序和图形界面程序。 通过 crates.io 安装 通过源码安装 快速...","head":[["meta",{"property":"og:url","content":"https://cactusli.net/tutorial/%E7%B3%BB%E7%BB%9F%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C/%E8%87%AA%E5%BB%BA%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E6%9C%8D%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"Cactus's Blog"}],["meta",{"property":"og:title","content":"Docker 部署 cactus-vue-pro"}],["meta",{"property":"og:description","content":"自建内网穿透服务 EasyTier 一个简单、安全、去中心化的内网穿透 VPN 组网方案，使用 Rust 语言和 Tokio 框架实现。 安装 下载预编译的二进制文件 访问 GitHub Release 页面 下载适用于您操作系统的二进制文件。Release 压缩包中同时包含命令行程序和图形界面程序。 通过 crates.io 安装 通过源码安装 快速..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lixuanfengs.github.io/blog-images/vp/web/image-2.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T02:08:16.000Z"}],["meta",{"property":"article:author","content":"Cactus li"}],["meta",{"property":"article:tag","content":"cactus-vue-pro"}],["meta",{"property":"article:published_time","content":"2024-04-03T15:36:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-11T02:08:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker 部署 cactus-vue-pro\\",\\"image\\":[\\"https://lixuanfengs.github.io/blog-images/vp/web/image-2.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/image.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/image-1.png\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/EasyTier-01.png\\"],\\"datePublished\\":\\"2024-04-03T15:36:20.000Z\\",\\"dateModified\\":\\"2024-05-11T02:08:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cactus li\\",\\"url\\":\\"https://cactusli.net\\"}]}"]]},"headers":[{"level":2,"title":"自建内网穿透服务 EasyTier","slug":"自建内网穿透服务-easytier","link":"#自建内网穿透服务-easytier","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[{"level":3,"title":"双节点组网","slug":"双节点组网","link":"#双节点组网","children":[]},{"level":3,"title":"多节点组网","slug":"多节点组网","link":"#多节点组网","children":[]},{"level":3,"title":"子网代理（点对网）配置","slug":"子网代理-点对网-配置","link":"#子网代理-点对网-配置","children":[]},{"level":3,"title":"无公网IP组网","slug":"无公网ip组网","link":"#无公网ip组网","children":[]},{"level":3,"title":"使用 WireGuard 客户端接入","slug":"使用-wireguard-客户端接入","link":"#使用-wireguard-客户端接入","children":[]},{"level":3,"title":"其他配置","slug":"其他配置","link":"#其他配置","children":[]}]}],"git":{"createdTime":1715393296000,"updatedTime":1715393296000,"contributors":[{"name":"lixuanfengs","email":"1183895890@qq.com","commits":1}]},"readingTime":{"minutes":10.24,"words":3073},"filePathRelative":"tutorial/系统开发手册/自建内网穿透服务.md","localizedDate":"2024年4月3日","excerpt":"<h2>自建内网穿透服务 EasyTier</h2>\\n<p>一个简单、安全、去中心化的内网穿透 VPN 组网方案，使用 Rust 语言和 Tokio 框架实现。</p>\\n<h2>安装</h2>\\n<ol>\\n<li>\\n<p><strong>下载预编译的二进制文件</strong></p>\\n<p>访问 <a href=\\"https://github.com/KKRainbow/EasyTier/releases\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">GitHub Release 页面</a> 下载适用于您操作系统的二进制文件。Release 压缩包中同时包含命令行程序和图形界面程序。</p>\\n</li>\\n<li>\\n<p><strong>通过 <a href=\\"http://crates.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">crates.io</a> 安装</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color:#282c34;color:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>cargo install easytier</span></span>\\n<span class=\\"line\\"><span></span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p><strong>通过源码安装</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color:#282c34;color:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>cargo install --git https://github.com/KKRainbow/EasyTier.git</span></span>\\n<span class=\\"line\\"><span></span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","autoDesc":true}`);export{xe as comp,fe as data};
