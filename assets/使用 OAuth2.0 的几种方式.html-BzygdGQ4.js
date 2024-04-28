import{_ as s,e as t,o as i,c as l,b as e,g as a,f as p,h as c}from"./app-CZhytFZO.js";const o={},d=e("h2",{id:"rfc-6749",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rfc-6749"},[e("span",null,"RFC 6749")])],-1),r={href:"https://tools.ietf.org/html/rfc6749",target:"_blank",rel:"noopener noreferrer"},u=c(`<blockquote><p>OAuth 引入了一个授权层，用来分离两种不同的角色：客户端和资源所有者。......资源所有者同意以后，资源服务器可以向客户端颁发令牌。客户端通过令牌，去请求数据。</p></blockquote><p>这段话的意思就是，**OAuth 的核心就是向第三方应用颁发令牌。**然后，RFC 6749 接着写道：</p><blockquote><p>（由于互联网有多种场景，）本标准定义了获得令牌的四种授权方式（authorization grant ）。</p></blockquote><p>也就是说，**OAuth 2.0 规定了四种获得令牌的流程。你可以选择最适合自己的那一种，向第三方应用颁发令牌。**下面就是这四种授权方式。</p><blockquote><ul><li>授权码（authorization-code）</li><li>隐藏式（implicit）</li><li>密码式（password）：</li><li>客户端凭证（client credentials）</li></ul></blockquote><p>注意，不管哪一种授权方式，第三方应用申请令牌之前，都必须先到系统备案，说明自己的身份，然后会拿到两个身份识别码：客户端 ID（client ID）和客户端密钥（client secret）。这是为了防止令牌被滥用，没有备案过的第三方应用，是不会拿到令牌的。</p><h2 id="第一种授权方式-授权码" tabindex="-1"><a class="header-anchor" href="#第一种授权方式-授权码"><span>第一种授权方式：授权码</span></a></h2><p><strong>授权码（authorization code）方式，指的是第三方应用先申请一个授权码，然后再用该码获取令牌。</strong></p><p>这种方式是最常用的流程，安全性也最高，它适用于那些有后端的 Web 应用。授权码通过前端传送，令牌则是储存在后端，而且所有与资源服务器的通信都在后端完成。这样的前后端分离，可以避免令牌泄漏。</p><p>第一步，A 网站提供一个链接，用户点击后就会跳转到 B 网站，授权用户数据给 A 网站使用。下面就是 A 网站跳转 B 网站的一个示意链接。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; https://b.com/oauth/authorize?</span></span>
<span class="line"><span>&gt;   response_type=code&amp;</span></span>
<span class="line"><span>&gt;   client_id=CLIENT_ID&amp;</span></span>
<span class="line"><span>&gt;   redirect_uri=CALLBACK_URL&amp;</span></span>
<span class="line"><span>&gt;   scope=read</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面 URL 中，<code>response_type</code>参数表示要求返回授权码（<code>code</code>），<code>client_id</code>参数让 B 知道是谁在请求，<code>redirect_uri</code>参数是 B 接受或拒绝请求后的跳转网址，<code>scope</code>参数表示要求的授权范围（这里是只读）。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/3bf6164800a54ec86fed4cda4ad94c79.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>第二步，用户跳转后，B 网站会要求用户登录，然后询问是否同意给予 A 网站授权。用户表示同意，这时 B 网站就会跳回<code>redirect_uri</code>参数指定的网址。跳转时，会传回一个授权码，就像下面这样。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; https://a.com/callback?code=AUTHORIZATION_CODE</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面 URL 中，<code>code</code>参数就是授权码。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/f0ee84487acbbb6d39cc5082f36cf124.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>第三步，A 网站拿到授权码以后，就可以在后端，向 B 网站请求令牌。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; https://b.com/oauth/token?</span></span>
<span class="line"><span>&gt;  client_id=CLIENT_ID&amp;</span></span>
<span class="line"><span>&gt;  client_secret=CLIENT_SECRET&amp;</span></span>
<span class="line"><span>&gt;  grant_type=authorization_code&amp;</span></span>
<span class="line"><span>&gt;  code=AUTHORIZATION_CODE&amp;</span></span>
<span class="line"><span>&gt;  redirect_uri=CALLBACK_URL</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面 URL 中，<code>client_id</code>参数和<code>client_secret</code>参数用来让 B 确认 A 的身份（<code>client_secret</code>参数是保密的，因此只能在后端发请求），<code>grant_type</code>参数的值是<code>AUTHORIZATION_CODE</code>，表示采用的授权方式是授权码，<code>code</code>参数是上一步拿到的授权码，<code>redirect_uri</code>参数是令牌颁发后的回调网址。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/740d3ddeba01542873821d4d1305ffab.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>第四步，B 网站收到请求以后，就会颁发令牌。具体做法是向<code>redirect_uri</code>指定的网址，发送一段 JSON 数据。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; {    </span></span>
<span class="line"><span>&gt;   &quot;access_token&quot;:&quot;ACCESS_TOKEN&quot;,</span></span>
<span class="line"><span>&gt;   &quot;token_type&quot;:&quot;bearer&quot;,</span></span>
<span class="line"><span>&gt;   &quot;expires_in&quot;:2592000,</span></span>
<span class="line"><span>&gt;   &quot;refresh_token&quot;:&quot;REFRESH_TOKEN&quot;,</span></span>
<span class="line"><span>&gt;   &quot;scope&quot;:&quot;read&quot;,</span></span>
<span class="line"><span>&gt;   &quot;uid&quot;:100101,</span></span>
<span class="line"><span>&gt;   &quot;info&quot;:{...}</span></span>
<span class="line"><span>&gt; }</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面 JSON 数据中，<code>access_token</code>字段就是令牌，A 网站在后端拿到了。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/1dc31da50cae3cf77cbb2dabe4aadfb5.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="第二种方式-隐藏式" tabindex="-1"><a class="header-anchor" href="#第二种方式-隐藏式"><span>第二种方式：隐藏式</span></a></h2><p>有些 Web 应用是纯前端应用，没有后端。这时就不能用上面的方式了，必须将令牌储存在前端。<strong>RFC 6749 就规定了第二种方式，允许直接向前端颁发令牌。这种方式没有授权码这个中间步骤，所以称为（授权码）&quot;隐藏式&quot;（implicit）。</strong></p><p>第一步，A 网站提供一个链接，要求用户跳转到 B 网站，授权用户数据给 A 网站使用。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; https://b.com/oauth/authorize?</span></span>
<span class="line"><span>&gt;   response_type=token&amp;</span></span>
<span class="line"><span>&gt;   client_id=CLIENT_ID&amp;</span></span>
<span class="line"><span>&gt;   redirect_uri=CALLBACK_URL&amp;</span></span>
<span class="line"><span>&gt;   scope=read</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面 URL 中，<code>response_type</code>参数为<code>token</code>，表示要求直接返回令牌。</p><p>第二步，用户跳转到 B 网站，登录后同意给予 A 网站授权。这时，B 网站就会跳回<code>redirect_uri</code>参数指定的跳转网址，并且把令牌作为 URL 参数，传给 A 网站。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; https://a.com/callback#token=ACCESS_TOKEN</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面 URL 中，<code>token</code>参数就是令牌，A 网站因此直接在前端拿到令牌。</p><p>注意，令牌的位置是 URL 锚点（fragment），而不是查询字符串（querystring），这是因为 OAuth 2.0 允许跳转网址是 HTTP 协议，因此存在&quot;中间人攻击&quot;的风险，而浏览器跳转时，锚点不会发到服务器，就减少了泄漏令牌的风险。</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/web/ce5e3e0634aa94482ee3fe68af2e0184.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这种方式把令牌直接传给前端，是很不安全的。因此，只能用于一些安全要求不高的场景，并且令牌的有效期必须非常短，通常就是会话期间（session）有效，浏览器关掉，令牌就失效了。</p><h2 id="第三种方式-密码式" tabindex="-1"><a class="header-anchor" href="#第三种方式-密码式"><span>第三种方式：密码式</span></a></h2><p><strong>如果你高度信任某个应用，RFC 6749 也允许用户把用户名和密码，直接告诉该应用。该应用就使用你的密码，申请令牌，这种方式称为&quot;密码式&quot;（password）。</strong></p><p>第一步，A 网站要求用户提供 B 网站的用户名和密码。拿到以后，A 就直接向 B 请求令牌。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; https://oauth.b.com/token?</span></span>
<span class="line"><span>&gt;   grant_type=password&amp;</span></span>
<span class="line"><span>&gt;   username=USERNAME&amp;</span></span>
<span class="line"><span>&gt;   password=PASSWORD&amp;</span></span>
<span class="line"><span>&gt;   client_id=CLIENT_ID</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面 URL 中，<code>grant_type</code>参数是授权方式，这里的<code>password</code>表示&quot;密码式&quot;，<code>username</code>和<code>password</code>是 B 的用户名和密码。</p><p>第二步，B 网站验证身份通过后，直接给出令牌。注意，这时不需要跳转，而是把令牌放在 JSON 数据里面，作为 HTTP 回应，A 因此拿到令牌。</p><p>这种方式需要用户给出自己的用户名/密码，显然风险很大，因此只适用于其他授权方式都无法采用的情况，而且必须是用户高度信任的应用。</p><h2 id="第四种方式-凭证式" tabindex="-1"><a class="header-anchor" href="#第四种方式-凭证式"><span>第四种方式：凭证式</span></a></h2><p><strong>最后一种方式是凭证式（client credentials），适用于没有前端的命令行应用，即在命令行下请求令牌。</strong></p><p>第一步，A 应用在命令行向 B 发出请求。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; https://oauth.b.com/token?</span></span>
<span class="line"><span>&gt;   grant_type=client_credentials&amp;</span></span>
<span class="line"><span>&gt;   client_id=CLIENT_ID&amp;</span></span>
<span class="line"><span>&gt;   client_secret=CLIENT_SECRET</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面 URL 中，<code>grant_type</code>参数等于<code>client_credentials</code>表示采用凭证式，<code>client_id</code>和<code>client_secret</code>用来让 B 确认 A 的身份。</p><p>第二步，B 网站验证通过以后，直接返回令牌。</p><p>这种方式给出的令牌，是针对第三方应用的，而不是针对用户的，即有可能多个用户共享同一个令牌。</p><h2 id="令牌的使用" tabindex="-1"><a class="header-anchor" href="#令牌的使用"><span>令牌的使用</span></a></h2><p>A 网站拿到令牌以后，就可以向 B 网站的 API 请求数据了。</p><p>此时，每个发到 API 的请求，都必须带有令牌。具体做法是在请求的头信息，加上一个<code>Authorization</code>字段，令牌就放在这个字段里面。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; curl -H &quot;Authorization: Bearer ACCESS_TOKEN&quot; \\</span></span>
<span class="line"><span>&gt; &quot;https://api.b.com&quot;</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面命令中，<code>ACCESS_TOKEN</code>就是拿到的令牌。</p><h2 id="更新令牌" tabindex="-1"><a class="header-anchor" href="#更新令牌"><span>更新令牌</span></a></h2><p>令牌的有效期到了，如果让用户重新走一遍上面的流程，再申请一个新的令牌，很可能体验不好，而且也没有必要。OAuth 2.0 允许用户自动更新令牌。</p><p>具体方法是，B 网站颁发令牌的时候，一次性颁发两个令牌，一个用于获取数据，另一个用于获取新的令牌（refresh token 字段）。令牌到期前，用户使用 refresh token 发一个请求，去更新令牌。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&gt; https://b.com/oauth/token?</span></span>
<span class="line"><span>&gt;   grant_type=refresh_token&amp;</span></span>
<span class="line"><span>&gt;   client_id=CLIENT_ID&amp;</span></span>
<span class="line"><span>&gt;   client_secret=CLIENT_SECRET&amp;</span></span>
<span class="line"><span>&gt;   refresh_token=REFRESH_TOKEN</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面 URL 中，<code>grant_type</code>参数为<code>refresh_token</code>表示要求更新令牌，<code>client_id</code>参数和<code>client_secret</code>参数用于确认身份，<code>refresh_token</code>参数就是用于更新令牌的令牌。B 网站验证通过以后，就会颁发新的令牌。</p>`,60);function b(g,m){const n=t("ExternalLinkIcon");return i(),l("div",null,[d,e("p",null,[a("OAuth 2.0 的标准是 "),e("a",r,[a("RFC 6749"),p(n)]),a(" 文件。该文件先解释了 OAuth 是什么。")]),u])}const v=s(o,[["render",b],["__file","使用 OAuth2.0 的几种方式.html.vue"]]),_=JSON.parse(`{"path":"/tutorial/OAuth2.0-%E6%95%99%E7%A8%8B/%E4%BD%BF%E7%94%A8%20OAuth2.0%20%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"使用 OAuth2.0 的几种方式","lang":"zh-CN","frontmatter":{"title":"使用 OAuth2.0 的几种方式","subtitle":"使用 OAuth2.0 的几种方式","date":"2024-04-12T10:54:20.000Z","category":["OAuth2.0"],"tag":["OAuth2.0"],"order":2,"description":"RFC 6749 OAuth 2.0 的标准是 RFC 6749 文件。该文件先解释了 OAuth 是什么。 OAuth 引入了一个授权层，用来分离两种不同的角色：客户端和资源所有者。......资源所有者同意以后，资源服务器可以向客户端颁发令牌。客户端通过令牌，去请求数据。 这段话的意思就是，**OAuth 的核心就是向第三方应用颁发令牌。**然后，...","head":[["meta",{"property":"og:url","content":"https://cactusli.net/tutorial/OAuth2.0-%E6%95%99%E7%A8%8B/%E4%BD%BF%E7%94%A8%20OAuth2.0%20%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Cactus's Blog"}],["meta",{"property":"og:title","content":"使用 OAuth2.0 的几种方式"}],["meta",{"property":"og:description","content":"RFC 6749 OAuth 2.0 的标准是 RFC 6749 文件。该文件先解释了 OAuth 是什么。 OAuth 引入了一个授权层，用来分离两种不同的角色：客户端和资源所有者。......资源所有者同意以后，资源服务器可以向客户端颁发令牌。客户端通过令牌，去请求数据。 这段话的意思就是，**OAuth 的核心就是向第三方应用颁发令牌。**然后，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lixuanfengs.github.io/blog-images/vp/web/3bf6164800a54ec86fed4cda4ad94c79.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T08:34:44.000Z"}],["meta",{"property":"article:author","content":"Cactus li"}],["meta",{"property":"article:tag","content":"OAuth2.0"}],["meta",{"property":"article:published_time","content":"2024-04-12T10:54:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-28T08:34:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 OAuth2.0 的几种方式\\",\\"image\\":[\\"https://lixuanfengs.github.io/blog-images/vp/web/3bf6164800a54ec86fed4cda4ad94c79.jpg\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/f0ee84487acbbb6d39cc5082f36cf124.jpg\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/740d3ddeba01542873821d4d1305ffab.jpg\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/1dc31da50cae3cf77cbb2dabe4aadfb5.jpg\\",\\"https://lixuanfengs.github.io/blog-images/vp/web/ce5e3e0634aa94482ee3fe68af2e0184.jpg\\"],\\"datePublished\\":\\"2024-04-12T10:54:20.000Z\\",\\"dateModified\\":\\"2024-04-28T08:34:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cactus li\\",\\"url\\":\\"https://cactusli.net\\"}]}"]]},"headers":[{"level":2,"title":"RFC 6749","slug":"rfc-6749","link":"#rfc-6749","children":[]},{"level":2,"title":"第一种授权方式：授权码","slug":"第一种授权方式-授权码","link":"#第一种授权方式-授权码","children":[]},{"level":2,"title":"第二种方式：隐藏式","slug":"第二种方式-隐藏式","link":"#第二种方式-隐藏式","children":[]},{"level":2,"title":"第三种方式：密码式","slug":"第三种方式-密码式","link":"#第三种方式-密码式","children":[]},{"level":2,"title":"第四种方式：凭证式","slug":"第四种方式-凭证式","link":"#第四种方式-凭证式","children":[]},{"level":2,"title":"令牌的使用","slug":"令牌的使用","link":"#令牌的使用","children":[]},{"level":2,"title":"更新令牌","slug":"更新令牌","link":"#更新令牌","children":[]}],"git":{"createdTime":1714293284000,"updatedTime":1714293284000,"contributors":[{"name":"lixuanfengs","email":"1183895890@qq.com","commits":1}]},"readingTime":{"minutes":6.69,"words":2007},"filePathRelative":"tutorial/OAuth2.0-教程/使用 OAuth2.0 的几种方式.md","localizedDate":"2024年4月12日","excerpt":"<h2>RFC 6749</h2>\\n<p>OAuth 2.0 的标准是 <a href=\\"https://tools.ietf.org/html/rfc6749\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RFC 6749</a> 文件。该文件先解释了 OAuth 是什么。</p>\\n<blockquote>\\n<p>OAuth 引入了一个授权层，用来分离两种不同的角色：客户端和资源所有者。......资源所有者同意以后，资源服务器可以向客户端颁发令牌。客户端通过令牌，去请求数据。</p>\\n</blockquote>\\n<p>这段话的意思就是，**OAuth 的核心就是向第三方应用颁发令牌。**然后，RFC 6749 接着写道：</p>","autoDesc":true}`);export{v as comp,_ as data};
