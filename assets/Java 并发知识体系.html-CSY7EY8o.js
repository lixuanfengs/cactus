import{_ as l,o as i,c as e,e as a}from"./app-B2horSXh.js";const o={},t=a('<blockquote><p>Java 并发相关知识体系详解，包含理论基础，线程基础，synchronized，volatile，final关键字, JUC框架等内容。</p></blockquote><ul><li>Java 并发知识体系 <ul><li><a href="#%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">知识体系</a></li><li><a href="#%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0">相关文章</a></li><li><a href="#%E5%8F%82%E8%80%83%E6%96%87%E6%A1%A3">参考文档</a></li></ul></li></ul><h2 id="知识体系" tabindex="-1"><a class="header-anchor" href="#知识体系"><span><a href="#%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">#</a> 知识体系</span></a></h2><figure><img src="https://lixuanfengs.github.io/blog-images/vp/Java/java-concurrent-overview-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span><a href="#%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0">#</a> 相关文章</span></a></h2><blockquote><p><strong>A. Java进阶 - Java 并发之基础</strong>：首先全局的了解并发的知识体系，同时了解并发理论基础和线程基础，并发关键字等，这些是你理解Java并发框架的基础。</p></blockquote><ul><li>Java 并发 - 理论基础 <ul><li>多线程的出现是要解决什么问题的?</li><li>线程不安全是指什么? 举例说明</li><li>并发出现线程不安全的本质什么? 可见性，原子性和有序性。</li><li>Java是怎么解决并发问题的? 3个关键字，JMM和8个Happens-Before</li><li>线程安全是不是非真即假? 不是</li><li>线程安全有哪些实现思路?</li><li>如何理解并发和并行的区别?</li></ul></li><li>Java 并发 - 线程基础 <ul><li>线程有哪几种状态? 分别说明从一种状态到另一种状态转变有哪些方式?</li><li>通常线程有哪几种使用方式?</li><li>基础线程机制有哪些?</li><li>线程的中断方式有哪些?</li><li>线程的互斥同步方式有哪些? 如何比较和选择?</li><li>线程之间有哪些协作方式?</li></ul></li><li>Java并发 - Java中所有的锁 <ul><li>Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。</li></ul></li><li>关键字: synchronized详解 <ul><li>Synchronized可以作用在哪里? 分别通过对象锁和类锁进行举例。</li><li>Synchronized本质上是通过什么保证线程安全的? 分三个方面回答：加锁和释放锁的原理，可重入原理，保证可见性原理。</li><li>Synchronized由什么样的缺陷? Java Lock是怎么弥补这些缺陷的。</li><li>Synchronized和Lock的对比，和选择?</li><li>Synchronized在使用时有何注意事项?</li><li>Synchronized修饰的方法在抛出异常时,会释放锁吗?</li><li>多个线程等待同一个Synchronized锁的时候，JVM如何选择下一个获取锁的线程?</li><li>Synchronized使得同时只有一个线程可以执行，性能比较差，有什么提升的方法?</li><li>我想更加灵活地控制锁的释放和获取(现在释放锁和获取锁的时机都被规定死了)，怎么办?</li><li>什么是锁的升级和降级? 什么是JVM里的偏斜锁、轻量级锁、重量级锁?</li><li>不同的JDK中对Synchronized有何优化?</li></ul></li><li>关键字: volatile详解 <ul><li>volatile关键字的作用是什么?</li><li>volatile能保证原子性吗?</li><li>之前32位机器上共享的long和double变量的为什么要用volatile? 现在64位机器上是否也要设置呢?</li><li>i++为什么不能保证原子性?</li><li>volatile是如何实现可见性的? 内存屏障。</li><li>volatile是如何实现有序性的? happens-before等</li><li>说下volatile的应用场景?</li></ul></li><li>关键字: final详解 <ul><li>所有的final修饰的字段都是编译期常量吗?</li><li>如何理解private所修饰的方法是隐式的final?</li><li>说说final类型的类如何拓展? 比如String是final类型，我们想写个MyString复用所有String中方法，同时增加一个新的toMyString()的方法，应该如何做?</li><li>final方法可以被重载吗? 可以</li><li>父类的final方法能不能够被子类重写? 不可以</li><li>说说final域重排序规则?</li><li>说说final的原理?</li><li>使用 final 的限制条件和局限性?</li><li>看本文最后的一个思考题</li></ul></li></ul><blockquote><p><strong>B. Java进阶 - Java 并发之J.U.C框架</strong>：然后需要对J.U.C框架五大类详细解读，包括：Lock框架，并发集合, 原子类, 线程池和工具类。</p></blockquote><ul><li>JUC - 类汇总和学习指南 <ul><li>JUC框架包含几个部分?</li><li>每个部分有哪些核心的类?</li><li>最最核心的类有哪些?</li></ul></li></ul><blockquote><p><strong>B.1 Java进阶 - Java 并发之J.U.C框架【1/5】：CAS及原子类</strong>：从最核心的CAS, Unsafe和原子类开始分析。</p></blockquote><ul><li>JUC原子类: CAS, Unsafe和原子类详解 <ul><li>线程安全的实现方法有哪些?</li><li>什么是CAS?</li><li>CAS使用示例，结合AtomicInteger给出示例?</li><li>CAS会有哪些问题?</li><li>针对这这些问题，Java提供了哪几个解决的?</li><li>AtomicInteger底层实现? CAS+volatile</li><li>请阐述你对Unsafe类的理解?</li><li>说说你对Java原子类的理解? 包含13个，4组分类，说说作用和使用场景。</li><li>AtomicStampedReference是什么?</li><li>AtomicStampedReference是怎么解决ABA的? 内部使用Pair来存储元素值及其版本号</li><li>java中还有哪些类可以解决ABA的问题? AtomicMarkableReference</li></ul></li></ul><blockquote><p><strong>B.2 Java进阶 - Java 并发之J.U.C框架【2/5】：锁</strong>：然后分析JUC中锁。</p></blockquote><ul><li>JUC锁: LockSupport详解 <ul><li>为什么LockSupport也是核心基础类? AQS框架借助于两个类：Unsafe(提供CAS操作)和LockSupport(提供park/unpark操作)</li><li>写出分别通过wait/notify和LockSupport的park/unpark实现同步?</li><li>LockSupport.park()会释放锁资源吗? 那么Condition.await()呢?</li><li>Thread.sleep()、Object.wait()、Condition.await()、LockSupport.park()的区别? 重点</li><li>如果在wait()之前执行了notify()会怎样?</li><li>如果在park()之前执行了unpark()会怎样?</li></ul></li><li>JUC锁: 锁核心类AQS详解 <ul><li>什么是AQS? 为什么它是核心?</li><li>AQS的核心思想是什么? 它是怎么实现的? 底层数据结构等</li><li>AQS有哪些核心的方法?</li><li>AQS定义什么样的资源获取方式? AQS定义了两种资源获取方式：<code>独占</code>(只有一个线程能访问执行，又根据是否按队列的顺序分为<code>公平锁</code>和<code>非公平锁</code>，如<code>ReentrantLock</code>) 和<code>共享</code>(多个线程可同时访问执行，如<code>Semaphore</code>、<code>CountDownLatch</code>、 <code>CyclicBarrier</code> )。<code>ReentrantReadWriteLock</code>可以看成是组合式，允许多个线程同时对某一资源进行读。</li><li>AQS底层使用了什么样的设计模式? 模板</li><li>AQS的应用示例?</li></ul></li><li>JUC锁: ReentrantLock详解 <ul><li>什么是可重入，什么是可重入锁? 它用来解决什么问题?</li><li>ReentrantLock的核心是AQS，那么它怎么来实现的，继承吗? 说说其类内部结构关系。</li><li>ReentrantLock是如何实现公平锁的?</li><li>ReentrantLock是如何实现非公平锁的?</li><li>ReentrantLock默认实现的是公平还是非公平锁?</li><li>使用ReentrantLock实现公平和非公平锁的示例?</li><li>ReentrantLock和Synchronized的对比?</li></ul></li><li>JUC锁: ReentrantReadWriteLock详解 <ul><li>为了有了ReentrantLock还需要ReentrantReadWriteLock?</li><li>ReentrantReadWriteLock底层实现原理?</li><li>ReentrantReadWriteLock底层读写状态如何设计的? 高16位为读锁，低16位为写锁</li><li>读锁和写锁的最大数量是多少?</li><li>本地线程计数器ThreadLocalHoldCounter是用来做什么的?</li><li>缓存计数器HoldCounter是用来做什么的?</li><li>写锁的获取与释放是怎么实现的?</li><li>读锁的获取与释放是怎么实现的?</li><li>RentrantReadWriteLock为什么不支持锁升级?</li><li>什么是锁的升降级? RentrantReadWriteLock为什么不支持锁升级?</li></ul></li></ul><blockquote><p><strong>B.3 Java进阶 - Java 并发之J.U.C框架【3/5】：集合</strong>：再理解JUC中重要的支持并发的集合。</p></blockquote><ul><li>JUC集合: ConcurrentHashMap详解 <ul><li>为什么HashTable慢? 它的并发度是什么? 那么ConcurrentHashMap并发度是什么?</li><li>ConcurrentHashMap在JDK1.7和JDK1.8中实现有什么差别? JDK1.8解決了JDK1.7中什么问题</li><li>ConcurrentHashMap JDK1.7实现的原理是什么? 分段锁机制</li><li>ConcurrentHashMap JDK1.8实现的原理是什么? 数组+链表+红黑树，CAS</li><li>ConcurrentHashMap JDK1.7中Segment数(concurrencyLevel)默认值是多少? 为何一旦初始化就不可再扩容?</li><li>ConcurrentHashMap JDK1.7说说其put的机制?</li><li>ConcurrentHashMap JDK1.7是如何扩容的? rehash(注：segment 数组不能扩容，扩容是 segment 数组某个位置内部的数组 HashEntry&lt;K,V&gt;[] 进行扩容)</li><li>ConcurrentHashMap JDK1.8是如何扩容的? tryPresize</li><li>ConcurrentHashMap JDK1.8链表转红黑树的时机是什么? 临界值为什么是8?</li><li>ConcurrentHashMap JDK1.8是如何进行数据迁移的? transfer</li></ul></li><li>JUC集合: CopyOnWriteArrayList详解 <ul><li>请先说说非并发集合中Fail-fast机制?</li><li>再为什么说ArrayList查询快而增删慢?</li><li>对比ArrayList说说CopyOnWriteArrayList的增删改查实现原理? COW基于拷贝</li><li>再说下弱一致性的迭代器原理是怎么样的? <code>COWIterator&lt;E&gt;</code></li><li>CopyOnWriteArrayList为什么并发安全且性能比Vector好?</li><li>CopyOnWriteArrayList有何缺陷，说说其应用场景?</li></ul></li><li>JUC集合: ConcurrentLinkedQueue详解 <ul><li>要想用线程安全的队列有哪些选择? Vector，<code>Collections.synchronizedList( List&lt;T&gt; list)</code>, ConcurrentLinkedQueue等</li><li>ConcurrentLinkedQueue实现的数据结构?</li><li>ConcurrentLinkedQueue底层原理? 全程无锁(CAS)</li><li>ConcurrentLinkedQueue的核心方法有哪些? offer()，poll()，peek()，isEmpty()等队列常用方法</li><li>说说ConcurrentLinkedQueue的HOPS(延迟更新的策略)的设计?</li><li>ConcurrentLinkedQueue适合什么样的使用场景?</li></ul></li><li>JUC集合: BlockingQueue详解 <ul><li>什么是BlockingDeque?</li><li>BlockingQueue大家族有哪些? ArrayBlockingQueue, DelayQueue, LinkedBlockingQueue, SynchronousQueue...</li><li>BlockingQueue适合用在什么样的场景?</li><li>BlockingQueue常用的方法?</li><li>BlockingQueue插入方法有哪些? 这些方法(<code>add(o)</code>,<code>offer(o)</code>,<code>put(o)</code>,<code>offer(o, timeout, timeunit)</code>)的区别是什么?</li><li>BlockingDeque 与BlockingQueue有何关系，请对比下它们的方法?</li><li>BlockingDeque适合用在什么样的场景?</li><li>BlockingDeque大家族有哪些?</li><li>BlockingDeque 与BlockingQueue实现例子?</li></ul></li></ul><blockquote><p><strong>B.4 Java进阶 - Java 并发之J.U.C框架【4/5】：线程池</strong>：再者分析JUC中非常常用的线程池等。</p></blockquote><ul><li>JUC线程池: FutureTask详解 <ul><li>FutureTask用来解决什么问题的? 为什么会出现?</li><li>FutureTask类结构关系怎么样的?</li><li>FutureTask的线程安全是由什么保证的?</li><li>FutureTask结果返回机制?</li><li>FutureTask内部运行状态的转变?</li><li>FutureTask通常会怎么用? 举例说明。</li></ul></li><li>JUC线程池: ThreadPoolExecutor详解 <ul><li>为什么要有线程池?</li><li>Java是实现和管理线程池有哪些方式? 请简单举例如何使用。</li><li>为什么很多公司不允许使用Executors去创建线程池? 那么推荐怎么使用呢?</li><li>ThreadPoolExecutor有哪些核心的配置参数? 请简要说明</li><li>ThreadPoolExecutor可以创建哪是哪三种线程池呢?</li><li>当队列满了并且worker的数量达到maxSize的时候，会怎么样?</li><li>说说ThreadPoolExecutor有哪些RejectedExecutionHandler策略? 默认是什么策略?</li><li>简要说下线程池的任务执行机制? execute –&gt; addWorker –&gt;runworker (getTask)</li><li>线程池中任务是如何提交的?</li><li>线程池中任务是如何关闭的?</li><li>在配置线程池的时候需要考虑哪些配置因素?</li><li>如何监控线程池的状态?</li></ul></li><li>JUC线程池: ScheduledThreadPool详解 <ul><li>ScheduledThreadPoolExecutor要解决什么样的问题?</li><li>ScheduledThreadPoolExecutor相比ThreadPoolExecutor有哪些特性?</li><li>ScheduledThreadPoolExecutor有什么样的数据结构，核心内部类和抽象类?</li><li>ScheduledThreadPoolExecutor有哪两个关闭策略? 区别是什么?</li><li>ScheduledThreadPoolExecutor中scheduleAtFixedRate 和 scheduleWithFixedDelay区别是什么?</li><li>为什么ThreadPoolExecutor 的调整策略却不适用于 ScheduledThreadPoolExecutor?</li><li>Executors 提供了几种方法来构造 ScheduledThreadPoolExecutor?</li></ul></li><li>JUC线程池: Fork/Join框架详解 <ul><li>Fork/Join主要用来解决什么样的问题?</li><li>Fork/Join框架是在哪个JDK版本中引入的?</li><li>Fork/Join框架主要包含哪三个模块? 模块之间的关系是怎么样的?</li><li>ForkJoinPool类继承关系?</li><li>ForkJoinTask抽象类继承关系? 在实际运用中，我们一般都会继承 RecursiveTask 、RecursiveAction 或 CountedCompleter 来实现我们的业务需求，而不会直接继承 ForkJoinTask 类。</li><li>整个Fork/Join 框架的执行流程/运行机制是怎么样的?</li><li>具体阐述Fork/Join的分治思想和work-stealing 实现方式?</li><li>有哪些JDK源码中使用了Fork/Join思想?</li><li>如何使用Executors工具类创建ForkJoinPool?</li><li>写一个例子: 用ForkJoin方式实现1+2+3+...+100000?</li><li>Fork/Join在使用时有哪些注意事项? 结合JDK中的斐波那契数列实例具体说明。</li></ul></li></ul><blockquote><p><strong>B.5 Java进阶 - Java 并发之J.U.C框架【5/5】：工具类</strong>：最后来看下JUC中有哪些工具类，以及线程隔离术ThreadLocal。</p></blockquote><ul><li>JUC工具类: CountDownLatch详解 <ul><li>什么是CountDownLatch?</li><li>CountDownLatch底层实现原理?</li><li>CountDownLatch一次可以唤醒几个任务? 多个</li><li>CountDownLatch有哪些主要方法? await(),countDown()</li><li>CountDownLatch适用于什么场景?</li><li>写道题：实现一个容器，提供两个方法，add，size 写两个线程，线程1添加10个元素到容器中，线程2实现监控元素的个数，当个数到5个时，线程2给出提示并结束? 使用CountDownLatch 代替wait notify 好处。</li></ul></li><li>JUC工具类: CyclicBarrier详解 <ul><li>什么是CyclicBarrier?</li><li>CyclicBarrier底层实现原理?</li><li>CountDownLatch和CyclicBarrier对比?</li><li>CyclicBarrier的核心函数有哪些?</li><li>CyclicBarrier适用于什么场景?</li></ul></li><li>JUC工具类: Semaphore详解 <ul><li>什么是Semaphore?</li><li>Semaphore内部原理?</li><li>Semaphore常用方法有哪些? 如何实现线程同步和互斥的?</li><li>Semaphore适合用在什么场景?</li><li>单独使用Semaphore是不会使用到AQS的条件队列?</li><li>Semaphore中申请令牌(acquire)、释放令牌(release)的实现?</li><li>Semaphore初始化有10个令牌，11个线程同时各调用1次acquire方法，会发生什么?</li><li>Semaphore初始化有10个令牌，一个线程重复调用11次acquire方法，会发生什么?</li><li>Semaphore初始化有1个令牌，1个线程调用一次acquire方法，然后调用两次release方法，之后另外一个线程调用acquire(2)方法，此线程能够获取到足够的令牌并继续运行吗?</li><li>Semaphore初始化有2个令牌，一个线程调用1次release方法，然后一次性获取3个令牌，会获取到吗?</li></ul></li><li>JUC工具类: Phaser详解 <ul><li>Phaser主要用来解决什么问题?</li><li>Phaser与CyclicBarrier和CountDownLatch的区别是什么?</li><li>如果用CountDownLatch来实现Phaser的功能应该怎么实现?</li><li>Phaser运行机制是什么样的?</li><li>给一个Phaser使用的示例?</li></ul></li><li>JUC工具类: Exchanger详解 <ul><li>Exchanger主要解决什么问题?</li><li>对比SynchronousQueue，为什么说Exchanger可被视为 SynchronousQueue 的双向形式?</li><li>Exchanger在不同的JDK版本中实现有什么差别?</li><li>Exchanger实现机制?</li><li>Exchanger已经有了slot单节点，为什么会加入arena node数组? 什么时候会用到数组?</li><li>arena可以确保不同的slot在arena中是不会相冲突的，那么是怎么保证的呢?</li><li>什么是伪共享，Exchanger中如何体现的?</li><li>Exchanger实现举例</li></ul></li><li>Java 并发 - ThreadLocal详解 <ul><li>什么是ThreadLocal? 用来解决什么问题的?</li><li>说说你对ThreadLocal的理解</li><li>ThreadLocal是如何实现线程隔离的?</li><li>为什么ThreadLocal会造成内存泄露? 如何解决</li><li>还有哪些使用ThreadLocal的应用场景?</li></ul></li></ul><blockquote><p><strong>C. Java进阶 - Java 并发之 本质与模式</strong>：最后站在更高的角度看其本质(协作，分工和互斥)，同时总结上述知识点所使用的模式。</p></blockquote><ul><li><a href="">Java 并发 - 并发的本质：协作,分工和互斥</a></li><li><a href="">Java 并发 - 并发的模式梳理</a></li></ul>',21),r=[t];function n(c,u){return i(),e("div",null,r)}const s=l(o,[["render",n],["__file","Java 并发知识体系.html.vue"]]),h=JSON.parse(`{"path":"/posts/Java/ThreadConcurrency/Java%20%E5%B9%B6%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB.html","title":"Java 并发知识体系","lang":"zh-CN","frontmatter":{"title":"Java 并发知识体系","subtitle":"Java，Java开发，Java 体系","date":"2024-03-06T10:15:26.000Z","category":["Java"],"tag":["Java","Thread","concurrency"],"order":1,"description":"Java 并发相关知识体系详解，包含理论基础，线程基础，synchronized，volatile，final关键字, JUC框架等内容。 Java 并发知识体系 知识体系 相关文章 参考文档 # 知识体系 imgimg # 相关文章 A. Java进阶 - Java 并发之基础：首先全局的了解并发的知识体系，同时了解并发理论基础和线程基础，并发关键字...","head":[["meta",{"property":"og:url","content":"https://cactusli.net/posts/Java/ThreadConcurrency/Java%20%E5%B9%B6%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB.html"}],["meta",{"property":"og:site_name","content":"Cactus's Blog"}],["meta",{"property":"og:title","content":"Java 并发知识体系"}],["meta",{"property":"og:description","content":"Java 并发相关知识体系详解，包含理论基础，线程基础，synchronized，volatile，final关键字, JUC框架等内容。 Java 并发知识体系 知识体系 相关文章 参考文档 # 知识体系 imgimg # 相关文章 A. Java进阶 - Java 并发之基础：首先全局的了解并发的知识体系，同时了解并发理论基础和线程基础，并发关键字..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lixuanfengs.github.io/blog-images/vp/Java/java-concurrent-overview-1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T06:05:48.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java 并发知识体系"}],["meta",{"property":"article:author","content":"Cactus li"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Thread"}],["meta",{"property":"article:tag","content":"concurrency"}],["meta",{"property":"article:published_time","content":"2024-03-06T10:15:26.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-08T06:05:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 并发知识体系\\",\\"image\\":[\\"https://lixuanfengs.github.io/blog-images/vp/Java/java-concurrent-overview-1.png\\"],\\"datePublished\\":\\"2024-03-06T10:15:26.000Z\\",\\"dateModified\\":\\"2024-03-08T06:05:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cactus li\\",\\"url\\":\\"https://cactusli.net\\"}]}"]]},"headers":[{"level":2,"title":"# 知识体系","slug":"知识体系","link":"#知识体系","children":[]},{"level":2,"title":"# 相关文章","slug":"相关文章","link":"#相关文章","children":[]}],"git":{"createdTime":1709869916000,"updatedTime":1709877948000,"contributors":[{"name":"lixuanfengs","email":"1183895890@qq.com","commits":2}]},"readingTime":{"minutes":12.44,"words":3731},"filePathRelative":"posts/Java/ThreadConcurrency/Java 并发知识体系.md","localizedDate":"2024年3月6日","excerpt":"<blockquote>\\n<p>Java 并发相关知识体系详解，包含理论基础，线程基础，synchronized，volatile，final关键字, JUC框架等内容。</p>\\n</blockquote>\\n<ul>\\n<li>Java 并发知识体系\\n<ul>\\n<li><a href=\\"#%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB\\">知识体系</a></li>\\n<li><a href=\\"#%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0\\">相关文章</a></li>\\n<li><a href=\\"#%E5%8F%82%E8%80%83%E6%96%87%E6%A1%A3\\">参考文档</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{s as comp,h as data};
