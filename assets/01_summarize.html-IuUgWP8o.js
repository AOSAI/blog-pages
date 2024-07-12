import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as p,f as t,w as a,a as e,e as r,b as i,o as s}from"./app-BggJgk5u.js";const c="/blog-pages/machinelearning/one/01-1.png",g="/blog-pages/machinelearning/one/01-2.png",h="/blog-pages/machinelearning/one/01-3.png",d="/blog-pages/machinelearning/one/01-4.png",m={},u=e("h2",{id:"_1-什么是机器学习-what-is-machine-learning",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-什么是机器学习-what-is-machine-learning"},[e("span",null,"1.什么是机器学习（What is Machine Learning）")])],-1),_=e("h3",{id:"_1-1-定义-definition",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-定义-definition"},[e("span",null,"1.1 定义（Definition）")])],-1),f=e("p",null,"阿瑟·萨缪尔在 1959 年的时候给出了这样一个定义：“在没有明确设置的情况下，是计算机具有学习能力的研究领域。”称为机器学习。",-1),b=e("p",null,"这位教授当年编写了一个跳棋程序，让电脑自己对抗自己，对战上万次，终于程序学习到了什么样的布局最容易获胜，最终学会了下棋。这个事件可以称得上是，人工智能领域的开始。",-1),v=r('<p>Mitchell 教授在 98 年的时候，将机器学习重新定义为：“计算机从经验 E 中学习解决某一任务 T，进行某一性能度量 P，通过 P 测定计算机在解决任务 T 上的表现因 E 而提高”</p><p>对于跳棋游戏，经验 E 就是让程序和它自己下几万次跳棋，任务 T 就是玩跳棋，性能度量 P 就是与新对手玩跳棋时赢的概率。</p><h3 id="_1-2-普适分类及推广" tabindex="-1"><a class="header-anchor" href="#_1-2-普适分类及推广"><span>1.2 普适分类及推广</span></a></h3><ul><li><p>机器学习（Machine Learning）</p><ul><li>监督学习（Supervised Learning）</li><li>无监督学习（Unsupervised Learning）</li></ul></li><li><p>强化学习（Reinforcement Learning）</p></li><li><p>深度学习（Deep Learning）</p></li><li><p>推荐系统（Recommender Systems）</p></li></ul><h2 id="_2-监督学习-supervised-learning" tabindex="-1"><a class="header-anchor" href="#_2-监督学习-supervised-learning"><span>2.监督学习（Supervised Learning）</span></a></h2><p>监督学习的前提是 Right answers given，也就是说，我们构建的数据集，其中全部都是正确答案。通过这些正确答案，我们找到一种方式去拟合这些数据，从而得到更多合理的预测，这就是监督学习。</p><p>常见的监督学习有两类任务：</p>',7),y=e("p",null,"预测连续的数值输出。例如直线、曲线等。",-1),x=r('<p>预测离散的数值输出。比如非好即坏的布尔值类型数据。</p><p>单说概念的话可能会比较朦胧，我们来看看吴恩达教授举出的例子。</p><figure><img src="'+c+'" alt="" width="560" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这是一个房价预测的案例，只有一个“特征”房子大小（size），通过房子大小去预测房价（price）。先前我们说了，监督学习的前提是数据集（样本）的答案正确，所以图中画红 X 的点，都是某一个地方的真实房价关系。我们要通过一种线性关系，来表示这个房价随房屋面积的走势。</p><p>通过九年义务教育的熏陶，我们一看图就知道，这肯定是对数函数最贴合数据对吧。但这是我们人通过思考和经验得出来的结论，在此处我们先假设用直线函数来表示：y = wx + b，w 表示斜率，b 表示直线与 y 轴交汇点。</p><p>我们义务教育学过，通过两点来确定一条直线对吧，这么多点（数据），我们怎么找到一条合适的直线，让其尽可能的接近所有的数据呢？这就涉及到了《概率论与数理统计》这门课的知识。简单的理解，就是我们把所有的点对这条直线做垂线，使垂线的距离之和最小，就是最合适的直线。</p><p>这就是回归问题，具体的计算的实现之后会有，这里我们再看另一个分类的例子。</p><figure><img src="'+g+'" alt="" width="560" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这是一个肿瘤预测的案例，我们通过肿瘤的大小（一个特征），来预测肿瘤是良性的还是恶性的。我们看到肿瘤越小良性的更多，肿瘤越大恶性的越多。从概率上来说通常是这么回事儿，但是这种预测真的需要非常慎重，所以我们来看看下面这张图。</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这张图我们通过肿瘤的大小、病人的年龄（两个特征），来预测肿瘤的好坏。通过图我们发现，年龄也是对肿瘤的好坏有影响的，同样的肿瘤大小，年龄越大的人恶性的概率越高。</p><p>在实际的模型中，特征值一般会很多，比如这个肿瘤预测，还会有：肿块的厚度、肿瘤细胞大小的均匀性、肿瘤细胞形状的均匀性等。</p><p>我们可以把每一个特征都看作一个变量 x，写作 x<sub>i</sub>，预测的结果看作 y，我们寻找合适的 w<sub>i</sub> 和 b 的过程，就可以看作是机器学习的过程。</p><h2 id="_3-无监督学习-unsupervised-learning" tabindex="-1"><a class="header-anchor" href="#_3-无监督学习-unsupervised-learning"><span>3.无监督学习（Unsupervised Learning）</span></a></h2><p>其实很好理解，监督学习是我们给出了正确答案，无监督学习即我们不给答案，需要机器自己去寻找某一些特征，把相似的东西提取出来。</p><figure><img src="'+d+'" alt="" width="560" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>举一个简单的例子，我们要让机器识别出狗。如果是监督学习，我们需要把数据集中全部存入狗的照片，让机器取提取狗的特征进行学习，这样进行测试的时候，符合狗特征的就判定为狗，这样就是分类问题。</p><p>但如果，数据集我们使用上万张动物的照片，让程序自动去提取特征分类，在训练量足够大、特征量足够充分的时候，也是能达到同样效果的，哪怕机器不知道这个东西叫狗，他也能找出近似的狗的图片，这就是聚类问题。</p><p>我们来看常见的无监督学习的算法：</p>',19),L=e("p",null,"比如：组织大型的计算机集群、社交网络分析（哪些人认识、或属于一个圈子）、市场细分、天文数据分析、星系形成分析……",-1),w=e("p",null,[i("两个麦克风，称其为 m1、m2，放置在不同的地方，两个不同位置的人同一时间进行说话，假设两人为 x1、x2，说话的时候两只麦克风都能接收到两个人的声音，只不过因为距离原因，声音的大小等属性不一样，通过"),e("strong",null,"奇异值分解"),i("，将声音分离，这就是鸡尾酒会算法。")],-1),M=e("p",null,"这个例子我很容易想到，音乐文件中的人声分离，以前很多歌曲都是没有单独出伴奏的，我们就只能通过剔除人声、提取音乐这样的方式得到伴奏。我用过 IZotope RX9，它是一个免费的音频处理软件，我试过一次完美提取伴奏，真的难以想象的完美，人声全部剔除，并且连和声都无损的保留下来了，还挺好奇它背后的算法是什么样的。",-1);function T(z,A){const n=l("font");return s(),p("div",null,[u,_,t(n,{color:"green"},{default:a(()=>[i("Arthur Samuel(1959). Machine Learning: Field of study that gives computers the ability to learn without being explicitly programmed.")]),_:1}),f,b,t(n,{color:"green"},{default:a(()=>[i("Tom Mitchell(1998). Well-posed Learning Problem: A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its performance on T, as measured by P, improves with experience E.")]),_:1}),v,t(n,{color:"blue"},{default:a(()=>[i("1. 回归问题（Regression）")]),_:1}),y,t(n,{color:"blue"},{default:a(()=>[i("2. 分类问题（Classification）")]),_:1}),x,t(n,{color:"blue"},{default:a(()=>[i("1. 聚类算法（Clustering Algorithm）")]),_:1}),L,t(n,{color:"blue"},{default:a(()=>[i("2. 鸡尾酒会算法（Cocktail Party Algorithm）")]),_:1}),w,M])}const k=o(m,[["render",T],["__file","01_summarize.html.vue"]]),O=JSON.parse('{"path":"/zh/intelligence/MachineLearning/01_summarize.html","title":"机器学习概述（Overview of Machine Learning）","lang":"zh-CN","frontmatter":{"title":"机器学习概述（Overview of Machine Learning）","order":1,"author":"AOSAI","date":"2023-10-29T00:00:00.000Z","category":["机器学习"],"tag":["机器学习"],"description":"1.什么是机器学习（What is Machine Learning） 1.1 定义（Definition） 阿瑟·萨缪尔在 1959 年的时候给出了这样一个定义：“在没有明确设置的情况下，是计算机具有学习能力的研究领域。”称为机器学习。 这位教授当年编写了一个跳棋程序，让电脑自己对抗自己，对战上万次，终于程序学习到了什么样的布局最容易获胜，最终学会了...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog-pages/zh/intelligence/MachineLearning/01_summarize.html"}],["meta",{"property":"og:site_name","content":"青裁的博客"}],["meta",{"property":"og:title","content":"机器学习概述（Overview of Machine Learning）"}],["meta",{"property":"og:description","content":"1.什么是机器学习（What is Machine Learning） 1.1 定义（Definition） 阿瑟·萨缪尔在 1959 年的时候给出了这样一个定义：“在没有明确设置的情况下，是计算机具有学习能力的研究领域。”称为机器学习。 这位教授当年编写了一个跳棋程序，让电脑自己对抗自己，对战上万次，终于程序学习到了什么样的布局最容易获胜，最终学会了..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog-pages/machinelearning/one/01-1.png =560x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-12T15:46:44.000Z"}],["meta",{"property":"article:author","content":"AOSAI"}],["meta",{"property":"article:tag","content":"机器学习"}],["meta",{"property":"article:published_time","content":"2023-10-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-12T15:46:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"机器学习概述（Overview of Machine Learning）\\",\\"image\\":[\\"https://mister-hope.github.io/blog-pages/machinelearning/one/01-1.png =560x\\",\\"https://mister-hope.github.io/blog-pages/machinelearning/one/01-2.png =560x\\",\\"https://mister-hope.github.io/blog-pages/machinelearning/one/01-3.png\\",\\"https://mister-hope.github.io/blog-pages/machinelearning/one/01-4.png =560x\\"],\\"datePublished\\":\\"2023-10-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-12T15:46:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AOSAI\\"}]}"]]},"headers":[{"level":2,"title":"1.什么是机器学习（What is Machine Learning）","slug":"_1-什么是机器学习-what-is-machine-learning","link":"#_1-什么是机器学习-what-is-machine-learning","children":[{"level":3,"title":"1.1 定义（Definition）","slug":"_1-1-定义-definition","link":"#_1-1-定义-definition","children":[]},{"level":3,"title":"1.2 普适分类及推广","slug":"_1-2-普适分类及推广","link":"#_1-2-普适分类及推广","children":[]}]},{"level":2,"title":"2.监督学习（Supervised Learning）","slug":"_2-监督学习-supervised-learning","link":"#_2-监督学习-supervised-learning","children":[]},{"level":2,"title":"3.无监督学习（Unsupervised Learning）","slug":"_3-无监督学习-unsupervised-learning","link":"#_3-无监督学习-unsupervised-learning","children":[]}],"git":{"createdTime":1720799204000,"updatedTime":1720799204000,"contributors":[{"name":"AOSAI","email":"1213860588@qq.com","commits":1}]},"readingTime":{"minutes":5.92,"words":1776},"filePathRelative":"zh/intelligence/MachineLearning/01_summarize.md","localizedDate":"2023年10月29日","excerpt":"<h2>1.什么是机器学习（What is Machine Learning）</h2>\\n<h3>1.1 定义（Definition）</h3>\\n<p>阿瑟·萨缪尔在 1959 年的时候给出了这样一个定义：“在没有明确设置的情况下，是计算机具有学习能力的研究领域。”称为机器学习。</p>\\n<p>这位教授当年编写了一个跳棋程序，让电脑自己对抗自己，对战上万次，终于程序学习到了什么样的布局最容易获胜，最终学会了下棋。这个事件可以称得上是，人工智能领域的开始。</p>\\n<p>Mitchell 教授在 98 年的时候，将机器学习重新定义为：“计算机从经验 E 中学习解决某一任务 T，进行某一性能度量 P，通过 P 测定计算机在解决任务 T 上的表现因 E 而提高”</p>","autoDesc":true}');export{k as comp,O as data};
