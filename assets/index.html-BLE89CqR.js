import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as i,e as l}from"./app-CH05aeyc.js";const a="/blog-pages/recommedation/01.jpg",o="/blog-pages/recommedation/02.png",n="/blog-pages/recommedation/03_Lambda.png",r="/blog-pages/recommedation/04.png",p="/blog-pages/recommedation/05.png",s={},d=l('<h2 id="一、推荐系统概念" tabindex="-1"><a class="header-anchor" href="#一、推荐系统概念"><span>一、推荐系统概念</span></a></h2><p>个性化推荐（推荐系统）经历了多年的发展，已经成为互联网产品的标配，也是 AI 成功落地的分支之一，在电商（淘宝、京东）、资讯（今日头条、微博）、音乐（网易云音乐、QQ 音乐）、短视频（抖音、快手）等热门应用中，推荐系统都是核心组件之一。</p><ul><li>推荐系统产生的背景</li></ul><p>（1）信息过载。（2）用户需求不明确</p><ol><li>分类目录（1990 年代）：覆盖少量热门网站。 Hao123，Yahoo</li><li>搜索引擎（2000 年代）：通过搜索词明确需求。 Googel，Baidu</li><li>推荐系统（2010 年代）：不需要用户提供明确的需求，通过分析用户的历史行为给用户的兴趣进行建模，从而给用户推荐能够满足他们兴趣和需求的信息。</li></ol><ul><li>什么是推荐系统</li></ul><p>没有明确需求的用户访问了我们的服务，且服务的物品对用户构成了信息过载，系统通过一定的规则对物品进行排序，并将排在前面的物品展示给用户，这样的系统就是推荐系统。</p><h3 id="_1-1-推荐系统-vs-搜索系统" tabindex="-1"><a class="header-anchor" href="#_1-1-推荐系统-vs-搜索系统"><span>1.1 推荐系统 VS 搜索系统</span></a></h3><table><thead><tr><th></th><th>搜索</th><th>推荐</th></tr></thead><tbody><tr><td>行为方式</td><td>主动</td><td>被动</td></tr><tr><td>意图</td><td>明确</td><td>模糊</td></tr><tr><td>个性化</td><td>弱</td><td>强</td></tr><tr><td>流量分布</td><td>马太效应</td><td>长尾效应</td></tr><tr><td>目标</td><td>快速满足</td><td>持续服务</td></tr><tr><td>评估指标</td><td>简明</td><td>复杂</td></tr></tbody></table><ul><li>马太效应</li></ul><p>马太效应是指，强者愈强，弱者愈弱，这样的一种现象。 在社会学家和经济学家的口中，反映着富的更富，穷的更穷，一种两极分化的社会现象。 在搜索引擎中，是指被搜索的多的，内容越多，被搜索的少的，内容越少。 与二八法则类似，但又不完全相同。</p><ul><li>长尾效应 The long tail effect</li></ul><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从人们需求的角度来看，大多数需求集中在头部，这部分我们就可以称之为流行。而分布在尾部的需求是个性化的、零散的、小量的需求，这部分的差异化需求会在需求曲线上形成一条长长的尾巴。</p><p>所谓的长尾效应就在于差异化需求的数量上，将所有非主流的市场累加起来就会形成一个比流行市场还要大的市场。</p><h3 id="_1-2-推荐系统的作用" tabindex="-1"><a class="header-anchor" href="#_1-2-推荐系统的作用"><span>1.2 推荐系统的作用</span></a></h3><ul><li>高效的连接用户和物品，发现长尾商品</li><li>留住用户和内容生产者，实现商业目标</li></ul><h3 id="_1-3-推荐系统的工作原理" tabindex="-1"><a class="header-anchor" href="#_1-3-推荐系统的工作原理"><span>1.3 推荐系统的工作原理</span></a></h3><p><strong>基于流行度的推荐：</strong> 什么最火就推荐什么。</p><p><strong>基于内容相似性的协同过滤：</strong> 利用“物品”的品质或内在属性进行推荐。比如音乐的流派、类型；电影的风格、类别；小说的类型、流派等等。不需要依赖用户对项目的评价，更多的需要用机器学习的方法从关于内容的特征描述的事例中得到用户感兴趣的资料。</p><p><strong>基于用户行为的协同过滤：</strong> （1）物以类聚，物品协同算法。如果有很多用户都对某两个物品有相似的偏好，那么说明这个物品是“相似”的，通过推荐用户喜欢过的物品的相似物品来提供个性化推荐。 （2）人以群分，用户协同算法。找到与用户兴趣相同的用户（有过类似的行为），将这些兴趣相同的用户浏览过的物品推荐给用户。</p><p><strong>混合算法：</strong> 多种算法共同作用。</p><p><strong>基于模型的推荐：</strong> 逻辑回归、FM、树模型、深度学习。</p><p><strong>因子分解：</strong> SVD。</p><h3 id="_1-4-推荐系统-vs-web-系统" tabindex="-1"><a class="header-anchor" href="#_1-4-推荐系统-vs-web-系统"><span>1.4 推荐系统 VS Web 系统</span></a></h3><p>（1）Web 系统</p><ol><li>处理复杂逻辑，处理高并发，实现高可用，为用户提供稳定的服务，构建一个稳定的信息流通的服务。</li><li>对结果有确定的预期。</li></ol><p>（2）推荐系统</p><ol><li>追求指标增长，留存率/阅读时间/GMV（Gross Merchandise Volume 电商网站成交金额）/视频网站</li><li>结果是概率问题。</li></ol><h2 id="二、推荐系统设计" tabindex="-1"><a class="header-anchor" href="#二、推荐系统设计"><span>二、推荐系统设计</span></a></h2><h3 id="_2-1-推荐系统要素" tabindex="-1"><a class="header-anchor" href="#_2-1-推荐系统要素"><span>2.1 推荐系统要素</span></a></h3><ul><li>UI 和 UE（前端界面）</li><li>数据（Lambda 架构）</li><li>业务知识</li><li>推荐算法</li></ul><h3 id="_2-2-推荐系统简略架构" tabindex="-1"><a class="header-anchor" href="#_2-2-推荐系统简略架构"><span>2.2 推荐系统简略架构</span></a></h3><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-3-大数据-lambda-架构" tabindex="-1"><a class="header-anchor" href="#_2-3-大数据-lambda-架构"><span>2.3 大数据 Lambda 架构</span></a></h3><p>由 Twitter 工程师 Nathan Marz 提出。Lambda 系统架构提供了一个结合实时数据和 Hadoop 预先计算的数据环境和混合平台，提供一个实时的数据视图。</p><ul><li><p>分层架构</p><ul><li><p>批处理层</p><ul><li>数据不可变，可以进行任何计算，可水平扩展</li><li>高延迟，根据计算量和数据量的不同，几分钟~几小时</li><li>日志收集 Flume</li><li>分布式存储 Hadoop</li><li>分布式计算 Hadoop MapReduce &amp; spark</li><li>视图存储数据库 <ul><li>NoSQL（HBase/Cassandra）</li><li>Redis/Memcache</li><li>MySQL</li></ul></li></ul></li><li><p>实时处理层</p><ul><li>流式处理，持续计算</li><li>存储和分析某个窗口期内的数据</li><li>最终的正确性（Eventual Accuracy）</li><li>实时数据收集 Flume &amp; Kafka</li><li>实时数据分析 Spark Streaming/Storm/Flink</li></ul></li><li><p>服务层</p><ul><li>支持随机读</li><li>需要在非常短的时间内返回结果</li><li>读取批处理层和实时处理层结果并对其归并</li></ul></li></ul></li></ul><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-4-推荐算法架构" tabindex="-1"><a class="header-anchor" href="#_2-4-推荐算法架构"><span>2.4 推荐算法架构</span></a></h3><ol><li><p>召回阶段（海选）</p><ul><li>召回决定了最终推荐的天花板</li><li>常用算法： <ul><li>协同过滤</li><li>基于内容</li><li>基于隐含语义</li></ul></li></ul></li><li><p>排序阶段</p><ul><li>召回决定了推荐结果的天花板，排序逼近这个极限，决定了最终推荐的效果</li><li>CTR 预估（点击率预估，使用 LR 算法）估计用户是否会点击某个商品，需要用户的点击数据</li></ul></li><li><p>策略调整</p></li></ol><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-5-推荐系统完整架构" tabindex="-1"><a class="header-anchor" href="#_2-5-推荐系统完整架构"><span>2.5 推荐系统完整架构</span></a></h3><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',43),c=[d];function h(g,m){return i(),t("div",null,c)}const b=e(s,[["render",h],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/zh/intelligence/recommendationSystem/","title":"推荐系统基础 - 01","lang":"zh-CN","frontmatter":{"title":"推荐系统基础 - 01","order":0,"author":"AOSAI","date":"2023-09-27T00:00:00.000Z","category":["推荐系统"],"tag":["推荐系统"],"sticky":false,"star":false,"footer":"等我攒够六便士，就去寻找月亮","copyright":"AOSAI","description":"一、推荐系统概念 个性化推荐（推荐系统）经历了多年的发展，已经成为互联网产品的标配，也是 AI 成功落地的分支之一，在电商（淘宝、京东）、资讯（今日头条、微博）、音乐（网易云音乐、QQ 音乐）、短视频（抖音、快手）等热门应用中，推荐系统都是核心组件之一。 推荐系统产生的背景 （1）信息过载。（2）用户需求不明确 分类目录（1990 年代）：覆盖少量热门...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog-pages/zh/intelligence/recommendationSystem/"}],["meta",{"property":"og:site_name","content":"青裁的博客"}],["meta",{"property":"og:title","content":"推荐系统基础 - 01"}],["meta",{"property":"og:description","content":"一、推荐系统概念 个性化推荐（推荐系统）经历了多年的发展，已经成为互联网产品的标配，也是 AI 成功落地的分支之一，在电商（淘宝、京东）、资讯（今日头条、微博）、音乐（网易云音乐、QQ 音乐）、短视频（抖音、快手）等热门应用中，推荐系统都是核心组件之一。 推荐系统产生的背景 （1）信息过载。（2）用户需求不明确 分类目录（1990 年代）：覆盖少量热门..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog-pages/recommedation/01.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-12T15:46:44.000Z"}],["meta",{"property":"article:author","content":"AOSAI"}],["meta",{"property":"article:tag","content":"推荐系统"}],["meta",{"property":"article:published_time","content":"2023-09-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-12T15:46:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"推荐系统基础 - 01\\",\\"image\\":[\\"https://mister-hope.github.io/blog-pages/recommedation/01.jpg\\",\\"https://mister-hope.github.io/blog-pages/recommedation/02.png\\",\\"https://mister-hope.github.io/blog-pages/recommedation/03_Lambda.png\\",\\"https://mister-hope.github.io/blog-pages/recommedation/04.png\\",\\"https://mister-hope.github.io/blog-pages/recommedation/05.png\\"],\\"datePublished\\":\\"2023-09-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-12T15:46:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AOSAI\\"}]}"]]},"headers":[{"level":2,"title":"一、推荐系统概念","slug":"一、推荐系统概念","link":"#一、推荐系统概念","children":[{"level":3,"title":"1.1 推荐系统 VS 搜索系统","slug":"_1-1-推荐系统-vs-搜索系统","link":"#_1-1-推荐系统-vs-搜索系统","children":[]},{"level":3,"title":"1.2 推荐系统的作用","slug":"_1-2-推荐系统的作用","link":"#_1-2-推荐系统的作用","children":[]},{"level":3,"title":"1.3 推荐系统的工作原理","slug":"_1-3-推荐系统的工作原理","link":"#_1-3-推荐系统的工作原理","children":[]},{"level":3,"title":"1.4 推荐系统 VS Web 系统","slug":"_1-4-推荐系统-vs-web-系统","link":"#_1-4-推荐系统-vs-web-系统","children":[]}]},{"level":2,"title":"二、推荐系统设计","slug":"二、推荐系统设计","link":"#二、推荐系统设计","children":[{"level":3,"title":"2.1 推荐系统要素","slug":"_2-1-推荐系统要素","link":"#_2-1-推荐系统要素","children":[]},{"level":3,"title":"2.2 推荐系统简略架构","slug":"_2-2-推荐系统简略架构","link":"#_2-2-推荐系统简略架构","children":[]},{"level":3,"title":"2.3 大数据 Lambda 架构","slug":"_2-3-大数据-lambda-架构","link":"#_2-3-大数据-lambda-架构","children":[]},{"level":3,"title":"2.4 推荐算法架构","slug":"_2-4-推荐算法架构","link":"#_2-4-推荐算法架构","children":[]},{"level":3,"title":"2.5 推荐系统完整架构","slug":"_2-5-推荐系统完整架构","link":"#_2-5-推荐系统完整架构","children":[]}]}],"git":{"createdTime":1720799204000,"updatedTime":1720799204000,"contributors":[{"name":"AOSAI","email":"1213860588@qq.com","commits":1}]},"readingTime":{"minutes":5.07,"words":1522},"filePathRelative":"zh/intelligence/recommendationSystem/README.md","localizedDate":"2023年9月27日","excerpt":"<h2>一、推荐系统概念</h2>\\n<p>个性化推荐（推荐系统）经历了多年的发展，已经成为互联网产品的标配，也是 AI 成功落地的分支之一，在电商（淘宝、京东）、资讯（今日头条、微博）、音乐（网易云音乐、QQ 音乐）、短视频（抖音、快手）等热门应用中，推荐系统都是核心组件之一。</p>\\n<ul>\\n<li>推荐系统产生的背景</li>\\n</ul>\\n<p>（1）信息过载。（2）用户需求不明确</p>\\n<ol>\\n<li>分类目录（1990 年代）：覆盖少量热门网站。 Hao123，Yahoo</li>\\n<li>搜索引擎（2000 年代）：通过搜索词明确需求。 Googel，Baidu</li>\\n<li>推荐系统（2010 年代）：不需要用户提供明确的需求，通过分析用户的历史行为给用户的兴趣进行建模，从而给用户推荐能够满足他们兴趣和需求的信息。</li>\\n</ol>","autoDesc":true}');export{b as comp,f as data};
