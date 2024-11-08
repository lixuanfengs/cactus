import{_ as i,c as s,f as e,o as n}from"./app-DgJc46tw.js";const l={};function t(h,a){return n(),s("div",null,a[0]||(a[0]=[e(`<blockquote><p>JavaFX主要致力于富客户端开发，以弥补swing的缺陷，主要提供图形库与media库，支持audio,video,graphics,animation,3D等，同时采用现代化的css方式支持界面设计。同时又采用XUI方式以XML方式设计UI界面，达到显示与逻辑的分离。与android这方面确实有点相似性。@pdai</p></blockquote><ul><li>Java8 JavaFx 2.0 <ul><li><a href="#javafx%E5%8E%86%E5%8F%B2">JavaFX历史</a></li><li>JavaFx8的新特性 <ul><li><a href="#%E5%85%A8%E6%96%B0%E7%8E%B0%E4%BB%A3%E4%B8%BB%E9%A2%98modena">全新现代主题: Modena</a></li><li><a href="#javafx-3d">JavaFX 3D</a></li><li><a href="#%E5%AF%8C%E6%96%87%E6%9C%AC">富文本</a></li><li><a href="#treetableview">TreeTableView</a></li><li><a href="#%E6%97%A5%E6%9C%9F%E6%8E%A7%E4%BB%B6datepicker">日期控件DatePicker</a></li><li><a href="#%E7%94%A8%E4%BA%8E-css-%E7%BB%93%E6%9E%84%E7%9A%84%E5%85%AC%E5%85%B1-api">用于 CSS 结构的公共 API</a></li><li><a href="#webview-%E5%A2%9E%E5%BC%BA%E5%8A%9F%E8%83%BD">WebView 增强功能</a></li><li><a href="#javafx-scene-builder-20">JavaFX Scene Builder 2.0</a></li></ul></li><li><a href="#javafx-8%E5%BC%80%E5%8F%912048%E6%B8%B8%E6%88%8F">JavaFX 8开发2048游戏</a></li><li><a href="#%E6%80%BB%E7%BB%93">总结</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ul></li></ul><h2 id="javafx历史" tabindex="-1"><a class="header-anchor" href="#javafx历史"><span><a href="#javafx%E5%8E%86%E5%8F%B2">#</a> JavaFX历史</span></a></h2><p>跟java在服务器端和web端成绩相比，桌面一直是java的软肋，于是Sun公司在2008年推出JavaFX，弥补桌面软件的缺陷，请看下图JavaFX一路走过来的改进</p><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java8-javafx-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>从上图看出，一开始推出时候，开发者需使用一种名为JavaFX Script的静态的、声明式的编程语言来开发JavaFX应用程序。因为JavaFX Script将会被编译为Java bytecode，程序员可以使用Java代码代替。</p><p>JavaFX 2.0之后的版本摒弃了JavaFX Script语言，而作为一个Java API来使用。因此使用JavaFX平台实现的应用程序将直接通过标准Java代码来实现。</p><p>JavaFX 2.0 包含非常丰富的 UI 控件、图形和多媒体特性用于简化可视化应用的开发，WebView可直接在应用中嵌入网页；另外 2.0 版本允许使用 FXML 进行 UI 定义，这是一个脚本化基于 XML 的标识语言。</p><p>从JDK 7u6开始，JavaFx就与JDK捆绑在一起了，JavaFX团队称，下一个版本将是8.0，目前所有的工作都已经围绕8.0库进行。这是因为JavaFX将捆绑在Java 8中，因此该团队决定跳过几个版本号，迎头赶上Java 8。</p><h2 id="javafx8的新特性" tabindex="-1"><a class="header-anchor" href="#javafx8的新特性"><span><a href="#javafx8%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">#</a> JavaFx8的新特性</span></a></h2><h4 id="全新现代主题-modena" tabindex="-1"><a class="header-anchor" href="#全新现代主题-modena"><span><a href="#%E5%85%A8%E6%96%B0%E7%8E%B0%E4%BB%A3%E4%B8%BB%E9%A2%98-modena">#</a> 全新现代主题: Modena</span></a></h4><p>新的Modena主题来替换原来的Caspian主题。不过在Application的start()方法中，可以通过setUserAgentStylesheet(STYLESHEET_CASPIAN)来继续使用Caspian主题。</p><p>参考<a href="http://fxexperience.com/2013/03/modena-theme-update/" target="_blank" rel="noopener noreferrer">http://fxexperience.com/2013/03/modena-theme-update/</a></p><h4 id="javafx-3d" tabindex="-1"><a class="header-anchor" href="#javafx-3d"><span><a href="#javafx-3d">#</a> JavaFX 3D</span></a></h4><p>在JavaFX8中提供了3D图像处理API，包括Shape3D (Box, Cylinder, MeshView, Sphere子类),SubScene, Material, PickResult, LightBase (AmbientLight 和PointLight子类),SceneAntialiasing等。Camera类也得到了更新。从JavaDoc中可以找到更多信息。</p><h4 id="富文本" tabindex="-1"><a class="header-anchor" href="#富文本"><span><a href="#%E5%AF%8C%E6%96%87%E6%9C%AC">#</a> 富文本</span></a></h4><p>强化了富文本的支持</p><h4 id="treetableview" tabindex="-1"><a class="header-anchor" href="#treetableview"><span><a href="#treetableview">#</a> TreeTableView</span></a></h4><h4 id="日期控件datepicker" tabindex="-1"><a class="header-anchor" href="#日期控件datepicker"><span><a href="#%E6%97%A5%E6%9C%9F%E6%8E%A7%E4%BB%B6datepicker">#</a> 日期控件DatePicker</span></a></h4><p>增加日期控件</p><h4 id="用于-css-结构的公共-api" tabindex="-1"><a class="header-anchor" href="#用于-css-结构的公共-api"><span><a href="#%E7%94%A8%E4%BA%8E-css-%E7%BB%93%E6%9E%84%E7%9A%84%E5%85%AC%E5%85%B1-api">#</a> 用于 CSS 结构的公共 API</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">CSS 样式设置是 JavaFX 的一项主要特性</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">CSS 已专门在私有 API 中实现(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">com</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sun</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">javafx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">css</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 软件包)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">多种工具(例如 </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Scene</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Builder)需要 CSS 公共 </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">API</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">开发人员将能够定义自定义 CSS 样式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="webview-增强功能" tabindex="-1"><a class="header-anchor" href="#webview-增强功能"><span><a href="#webview-%E5%A2%9E%E5%BC%BA%E5%8A%9F%E8%83%BD">#</a> WebView 增强功能</span></a></h4><ul><li>Nashorn JavaScript 引擎 <a href="https://blogs.oracle.com/nashorn/entry/open_for_business" target="_blank" rel="noopener noreferrer">https://blogs.oracle.com/nashorn/entry/open_for_business</a></li><li>WebSocket <a href="http://javafx-jira.kenai.com/browse/RT-14947" target="_blank" rel="noopener noreferrer">http://javafx-jira.kenai.com/browse/RT-14947</a></li><li>Web Workers <a href="http://javafx-jira.kenai.com/browse/RT-9782" target="_blank" rel="noopener noreferrer">http://javafx-jira.kenai.com/browse/RT-9782</a></li></ul><h4 id="javafx-scene-builder-2-0" tabindex="-1"><a class="header-anchor" href="#javafx-scene-builder-2-0"><span><a href="#javafx-scene-builder-2-0">#</a> JavaFX Scene Builder 2.0</span></a></h4><p>可视化工具，加速JavaFX图形界面的开发，下载地址</p><p>JavaFX Scene Builder如同NetBeans一般，通过拖拽的方式配置界面，待完成界面之後，保存为FXML格式文件，此文件以XML描述物件配置，再交由JavaFX程式处理，因此可減少直接以JavaFX编写界面的困難度。</p><p>JavaFX Scene Builder 2.0新增JavaFX Theme预览功能，菜单「Preview」→「JavaFX Theme」选择不同的主題，包括:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Modena</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (FX8)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Modena</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Touch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (FX8)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Modena</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> High</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Contrast – </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Black</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> on </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">White</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (FX8)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Modena</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> High</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Contrast – </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">White</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> on </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Black</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (FX8)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Modena</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> High</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Contrast – </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Yellow</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> on </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Black</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (FX8)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Caspian</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (FX2)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Caspian</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Embedded</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (FX2)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Caspian</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Embedded</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> QVGA</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (FX2)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javafx-8开发2048游戏" tabindex="-1"><a class="header-anchor" href="#javafx-8开发2048游戏"><span><a href="#javafx-8%E5%BC%80%E5%8F%912048%E6%B8%B8%E6%88%8F">#</a> JavaFX 8开发2048游戏</span></a></h2><p>2048虽然不像前段时间那么火了，但个人还是非常喜欢玩2048，空闲时间都忍不住来一发，感谢 Gabriele Cirulli 发明了这了不起 (并且会上瘾)的2048游戏，因为是用MIT协议开源出来，各种语言版本的2048游戏横空出世，下图是用JavaFX 8来开发的一款2048。</p><p>所用到的技术</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Lambda</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> expressions</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Stream</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> API</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">JavaFX </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">JavaFX</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> CSS</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> basics</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">JavaFX</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> animationsfx2048相关类的说明</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Game2048</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">游戏主类</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">GameManager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">包含游戏界面布局(Board)以及</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Grid的操作</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(GridOperator)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Board</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">包含labels ，分数，grid ，</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Tile</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Tile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">游戏中的数字块</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">GridOperator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Grid操作类</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Direction 位置帮助类</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">RecordManager，SessionManager，纪录游戏分数，会话类</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里是源码地址，<a href="http://xn--git-y28d6owz84kksflna244b34fk1ap82c3u4eyqyd.oschina.net/benhail/javase8-sample/tree/master/src/main/java/javase8sample/chapter13/javafx8/fx2048" target="_blank" rel="noopener noreferrer">大家感兴趣的可以去学习下git.oschina.net/benhail/javase8-sample/tree/master/src/main/java/javase8sample/chapter13/javafx8/fx2048</a></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><a href="#%E6%80%BB%E7%BB%93">#</a> 总结</span></a></h2><p>比起AWT和SWING，JavaFX的优势很明显，各大主流IDE已经支持JavaFX的开发了，最佳的工具莫过于NetBeans，且随着lambda带来的好处，JavaFX的事件处理简洁了不少，以前需要写匿名函数类。另外JavaFX开源以来，JavaFX的生态环境也越来越活跃了，包括各种教程，嵌入式尝试，还有一些开源项目，比如: ControlsFX，JRebirth，DataFX Flow，mvvmFX，TestFX 等等。还有JavaFX是可以运行在Android和ios上面，这个很赞！</p><p>好了，总结到这里也差不多了，在RIA平台上面，有HTML5、Flex和微软的Sliverlight，JavaFX能否表现优秀，在于大家的各位，只要我们多用JavaFX，那么JavaFX也会越来越优秀，任何语言都是这样, THE END .</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span><a href="#%E5%8F%82%E8%80%83">#</a> 参考</span></a></h2>`,38)]))}const p=i(l,[["render",t],["__file","Java8 JavaFx 2.0.html.vue"]]),d=JSON.parse(`{"path":"/posts/Java/Java8NewFeatures/Java8%20JavaFx%202.0.html","title":"Java8 JavaFx 2.0","lang":"zh-CN","frontmatter":{"title":"Java8 JavaFx 2.0","subtitle":"Java，Java开发，Java 体系","date":"2024-03-17T15:06:55.000Z","category":["Java"],"tag":["Java","Java8 新特性"],"order":12,"description":"JavaFX主要致力于富客户端开发，以弥补swing的缺陷，主要提供图形库与media库，支持audio,video,graphics,animation,3D等，同时采用现代化的css方式支持界面设计。同时又采用XUI方式以XML方式设计UI界面，达到显示与逻辑的分离。与android这方面确实有点相似性。@pdai Java8 JavaFx 2.0...","head":[["meta",{"property":"og:url","content":"https://cactusli.net/posts/Java/Java8NewFeatures/Java8%20JavaFx%202.0.html"}],["meta",{"property":"og:site_name","content":"Cactus's Blog"}],["meta",{"property":"og:title","content":"Java8 JavaFx 2.0"}],["meta",{"property":"og:description","content":"JavaFX主要致力于富客户端开发，以弥补swing的缺陷，主要提供图形库与media库，支持audio,video,graphics,animation,3D等，同时采用现代化的css方式支持界面设计。同时又采用XUI方式以XML方式设计UI界面，达到显示与逻辑的分离。与android这方面确实有点相似性。@pdai Java8 JavaFx 2.0..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lixuanfengs.github.io/blog-images/vp/Java/java8-javafx-1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T03:29:54.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Java8 新特性"}],["meta",{"property":"article:published_time","content":"2024-03-17T15:06:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T03:29:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java8 JavaFx 2.0\\",\\"image\\":[\\"https://lixuanfengs.github.io/blog-images/vp/Java/java8-javafx-1.png\\"],\\"datePublished\\":\\"2024-03-17T15:06:55.000Z\\",\\"dateModified\\":\\"2024-03-21T03:29:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cactus li\\",\\"url\\":\\"https://cactusli.net\\"}]}"]]},"headers":[{"level":2,"title":"# JavaFX历史","slug":"javafx历史","link":"#javafx历史","children":[]},{"level":2,"title":"# JavaFx8的新特性","slug":"javafx8的新特性","link":"#javafx8的新特性","children":[]},{"level":2,"title":"# JavaFX 8开发2048游戏","slug":"javafx-8开发2048游戏","link":"#javafx-8开发2048游戏","children":[]},{"level":2,"title":"# 总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"# 参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1710139794000,"updatedTime":1710991794000,"contributors":[{"name":"lixuanfengs","email":"1183895890@qq.com","commits":2}]},"readingTime":{"minutes":4.72,"words":1415},"filePathRelative":"posts/Java/Java8NewFeatures/Java8 JavaFx 2.0.md","localizedDate":"2024年3月17日","excerpt":"<blockquote>\\n<p>JavaFX主要致力于富客户端开发，以弥补swing的缺陷，主要提供图形库与media库，支持audio,video,graphics,animation,3D等，同时采用现代化的css方式支持界面设计。同时又采用XUI方式以XML方式设计UI界面，达到显示与逻辑的分离。与android这方面确实有点相似性。@pdai</p>\\n</blockquote>\\n<ul>\\n<li>Java8 JavaFx 2.0\\n<ul>\\n<li><a href=\\"#javafx%E5%8E%86%E5%8F%B2\\">JavaFX历史</a></li>\\n<li>JavaFx8的新特性\\n<ul>\\n<li><a href=\\"#%E5%85%A8%E6%96%B0%E7%8E%B0%E4%BB%A3%E4%B8%BB%E9%A2%98modena\\">全新现代主题: Modena</a></li>\\n<li><a href=\\"#javafx-3d\\">JavaFX 3D</a></li>\\n<li><a href=\\"#%E5%AF%8C%E6%96%87%E6%9C%AC\\">富文本</a></li>\\n<li><a href=\\"#treetableview\\">TreeTableView</a></li>\\n<li><a href=\\"#%E6%97%A5%E6%9C%9F%E6%8E%A7%E4%BB%B6datepicker\\">日期控件DatePicker</a></li>\\n<li><a href=\\"#%E7%94%A8%E4%BA%8E-css-%E7%BB%93%E6%9E%84%E7%9A%84%E5%85%AC%E5%85%B1-api\\">用于 CSS 结构的公共 API</a></li>\\n<li><a href=\\"#webview-%E5%A2%9E%E5%BC%BA%E5%8A%9F%E8%83%BD\\">WebView 增强功能</a></li>\\n<li><a href=\\"#javafx-scene-builder-20\\">JavaFX Scene Builder 2.0</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#javafx-8%E5%BC%80%E5%8F%912048%E6%B8%B8%E6%88%8F\\">JavaFX 8开发2048游戏</a></li>\\n<li><a href=\\"#%E6%80%BB%E7%BB%93\\">总结</a></li>\\n<li><a href=\\"#%E5%8F%82%E8%80%83\\">参考</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{p as comp,d as data};
