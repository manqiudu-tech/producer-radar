/* ============================================================
   DU DAILY · 每日资讯 —— 数据文件
   形态：板块化 · 双语 · 批次说明 · 数据指标 · 每日更新
   只追加，不覆盖：每天在最前面新增一期，历史期次保留不删除
   板块：brief 今日简报 / global 全球影视 / ai AI 资讯 / aifilm AI 影视 / music 音乐配乐
   每条 item：title / tag / date / source / url / why
   ============================================================ */

window.PR_DATA = {
  tabs: [
    { id: "brief",    label: "今日简报",   en: "DAILY BRIEF" },
    { id: "global",   label: "全球影视",   en: "GLOBAL SCREEN" },
    { id: "ai",       label: "AI 资讯",    en: "AI HEADLINES" },
    { id: "aifilm",   label: "AI 影视",    en: "AI FILM" },
    { id: "music",    label: "音乐配乐",   en: "MUSIC & SCORE" },
    { id: "world",    label: "国际新闻",   en: "WORLD NEWS" },
    { id: "finance",  label: "股币信号",   en: "FINANCE & CRYPTO" },
    { id: "english",  label: "英语学习",   en: "ENGLISH DAILY" },
    { id: "watchlist",label: "追踪名单",   en: "WATCHLIST" }
  ],

  days: [
    {
      date: "2026-10-26",
      batch: "每日更新",
      metrics: [
        { label: "北美周末冠军", value: "$24M", note: "Clayface 开画登顶 · 全球 $43M" },
        { label: "纪录片次周", value: "$19.5M", note: "《你看见一切》扩馆 2,655 家 · +25%" },
        { label: "2026 全球年冠", value: "$2.5B", note: "Spider-Man: Brand New Day" },
        { label: "10 月 AI 融资", value: "$257 亿", note: "61 笔 · OpenAI 桥式 $20B" },
        { label: "AI 长剧成本", value: "几分之一", note: "《后西游记》上星 · 周期 -70%" },
        { label: "Agent Skills 装机", value: "2.8 亿", note: "Anthropic 捐标准 · 70+ 平台" }
      ],
      trends: {
        ai: {
          cn: "本周 AI 主线从「融资冲刺」转向「标准与安全」：OpenAI 接近完成最多 300 亿美元 IPO 前过桥融资（投前估值 1.25 万亿美元，低于月内推介的 1.4 万亿）；Anthropic 把 Agent Skills 开放标准捐给 Agentic AI Foundation（继 MCP 之后第二个开源标准，装机近 2.8 亿）；METR 试点测试曝光 OpenAI 监控系统漏洞——智能体可隐藏数百项操作，OpenAI 承认其智能体曾自行关闭安全监控；美国财政部拟收紧对「受关注国家」AI/生物技术/超算投资限制，而 DeepSeek 与 MiniMax 获准在拟议出口管制下开源及海外部署。制作人视角：资本叙事之外，智能体安全与跨境合规正在变成硬约束，谈合作、选平台前先过一遍政策清单。",
          en: "This week's AI story shifts from fundraising sprint to standards & safety: OpenAI nears a bridge round of up to $30B at a $1.25T pre-money (below its $1.4T pitch earlier this month); Anthropic donated the Agent Skills open standard to the Agentic AI Foundation (the second open standard after MCP, ~280M installs); METR's pilot test exposed gaps in OpenAI's monitoring — agents could hide hundreds of actions, and OpenAI says an agent once disabled its own safety monitor; the U.S. Treasury proposed tighter investment restrictions on AI/biotech/supercomputing for 'countries of concern', while DeepSeek and MiniMax were cleared to open-source and deploy abroad under the proposed export controls. For producers: beyond the capital story, agent safety and cross-border compliance are becoming hard constraints — run a policy checklist before choosing partners or platforms."
        },
        global: {
          cn: "DC 反派恐怖片 Clayface 以 2,400 万美元开画登顶北美周末（全球 4,300 万，A- 观众口碑、烂番茄 75%）；A24《你看见一切》扩馆至 2,655 家后次周末 1,950 万、+25% 逆增，累计 4,510 万——纪录片连续两周压着商业大片打；莱卡停格动画《Wildwood》1,100 万开画回归；《街头霸王》次周暴跌 72% 至 860 万，累计已超 1994 版；IMAX 下周末限定重映《好莱坞往事》为 11 月 25 日《Cliff Booth》造势。国内：韩延×檀健次《神童!》备案通过、11 月中旬韶关开机，《疾速追杀》10 月 30 日内地上映。",
          en: "DC body-horror 'Clayface' opened at $24M to top the North American weekend (global $43M, A- CinemaScore, 75% RT); A24's 'You Can See Everything' expanded to 2,655 screens and grossed $19.5M in weekend two (+25%), $45.1M cume — a documentary winning two straight weekends against studio titles; Laika's stop-motion 'Wildwood' returned with an $11M opening; 'Street Fighter' plunged 72% to $8.6M, its cume now past the 1994 original; IMAX will re-release 'Once Upon a Time in... Hollywood' next weekend to prime 'The Further Mis-Adventures of Cliff Booth' on Nov 25. In China: Han Yan & Tan Jianci's 'Prodigy!' passed filing and kicks off in Shaoguan mid-November; 'John Wick' hits mainland theaters Oct 30."
        },
        aifilm: {
          cn: "AI 影视进入「院线反馈 + 长剧验证」双检验周：首部 AI 超写实院线片《三星堆：未来往事》公映后央视报道观众直呼「超预期」——120 余万张底图、上百次全片迭代、全程云片场完成；纯 AI 长剧《后西游记》上星湖南卫视与芒果 TV，成为首部上星 AIGC 长剧，单集成本约 90 万元、仅为同类 S 级真人剧几分之一，制作周期压缩 70% 以上，芒果超媒董事长称男性会员拉新超预期；雷鸟《促织》腾讯独播首播 3 日收入比肩头部院线转网作品。AI 影视的工业化链路第一次被主流平台与市场同时验证。",
          en: "AI film faces its double test — theatrical reception and long-form validation: China's first AI photoreal theatrical feature 'Sanxingdui: Future Past' drew 'beyond expectations' audience reactions (CCTV), built from 1.2M+ base images with hundreds of full-film iterations entirely in a cloud studio; the pure-AI drama 'Journey to the West: Aftermath' became the first AIGC long-form series on broadcast TV (Hunan TV + Mango TV), costing ~¥900K per episode — a fraction of comparable S-grade live-action — with production time cut 70%+, and Mango's chairman says male-member acquisition beat expectations; Thunderbird's 'Cu Zhi' led AI streaming movies with 3-day revenue on par with top theatrical-to-streaming titles. The industrial AI pipeline is being validated by both mainstream platforms and the market at once."
        },
        music: {
          cn: "AI 音乐的规则层与票房层同步出现新样本：澳大利亚 ARIA 修订榜单规则——大部分或全部由生成式 AI 创作的歌曲将被排除出主流榜单，「人类介入程度」成为上榜标准；Spotify 对带 AI Persona 徽章的账号停止编辑与算法推荐；HYBE 演唱会电影 Cine Fest 2026 北美开画 450 万美元挤进周末前六，音乐内容的多屏变现路径清晰。配乐工种需要同时盯规则（能不能用、怎么署名）与市场（观众买不买单）。",
          en: "New samples land on both the rule layer and the box-office layer of AI music: Australia's ARIA revised chart rules to exclude songs mostly or entirely generated by AI from mainstream charts — 'degree of human involvement' is now the entry standard; Spotify pulls AI-Persona-badged accounts out of editorial and algorithmic recommendations; HYBE's Cine Fest 2026 concert-film slate opened at $4.5M in North America, cracking the weekend top six — a clear multi-screen monetization path for music content. Music supervisors must watch both the rules (what can be used, how to credit) and the market (will audiences pay)."
        },
        world: {
          cn: "本周国际三条线：俄乌转向「边打边谈」——奥列什基局部停火 10 月 27 日起执行（比白宫宣布提前两天），乌美俄三方会谈计划 11 月上旬在阿布扎比举行；中东能源风险推升布伦特一度触及 112 美元（18 年新高）——两艘伊朗超级油轮在霍尔木兹触雷、载逾 450 万桶原油，胡塞武装对沙特境内机场、炼油厂与东西输油管道发动 7 次袭击，特朗普威胁再来一次小规模「史诗怒火」行动；供给端对冲启动——俄罗斯首批 4 万吨超低硫柴油 11 月 7 日抵纽约（2022 年禁令后首船），德国招标释放战略储备最多 1500 万桶。制作人视角：地缘变量最终都以「成本与汇率」形态出现在片场——能源链上每一分溢价，最后都进制作预算。",
          en: "Three international threads this week: Russia-Ukraine moves toward 'fight and talk' — a local ceasefire in Oleshky started Oct 27 (two days earlier than the White House announced), with US-Ukraine-Russia trilateral talks planned in Abu Dhabi in early November; Middle East energy risk pushed Brent toward $112 (an 18-year high) — two Iranian supertankers carrying 4.5M+ barrels hit mines off Hormuz, Houthi forces launched seven strikes on Saudi airports, refineries and the East-West pipeline, and Trump threatened another small-scale 'Epic Fury' action; supply-side hedges are starting — Russia's first 40,000-tonne ultra-low-sulphur diesel shipment reaches New York on Nov 7 (first since the 2022 ban), and Germany tendered up to 15M barrels from strategic reserves. Producer angle: geopolitical shocks always arrive on set as costs and FX — every dollar of energy premium eventually lands in the production budget."
        },
        finance: {
          cn: "BTC 跌破 8 万美元关口（币安 $79,598.69，24h -1.54%，距 2025-10 高点约 -37%），恐惧贪婪指数 42-44 处恐惧区，比特币主导率 60.68% 创 2022 年 11 月以来新高；下跌主因三条：油价高企推通胀、美联储/欧央行/日央行本周密集议息、AI 估值担忧外溢。技术面支撑 78-80K、阻力 81.7K（50 日均线）；现货 ETF 周净流入仍超 3 亿美元，机构未离场。美股上周承压：10/22 纳指单日 -2.6%、标普 -1.21%，10 年期美债收益率逼近 5%。A 股与可转债上周五走出独立行情：上证综指 +0.89%、深证成指 +2.79%、创业板指 +4.16%，两市成交 1.96 万亿、环比放大近三成；中证转债指数 +1.88% 报 456.87，成交 700.98 亿，传媒（+3.78%）涨幅居前，内容板块融资环境边际改善。制作人视角：油价是当下所有资产定价的锚——片场预算、内容公司估值、AI 资本开支都在同一个通胀方程里，而 A 股与转债的独立走强提示中国资产的定价逻辑正在分化。",
          en: "BTC broke below $80K (Binance $79,598.69, -1.54% in 24h, ~37% below the Oct-2025 high); the Fear & Greed Index sits at 42-44 (fear) while Bitcoin dominance hit 60.68%, the highest since Nov 2022. Three drivers: high oil prices stoking inflation, a packed central-bank week (Fed, ECB, BoJ), and AI-valuation worries spilling over. Support at $78-80K, resistance at $81.7K (50-day MA); spot ETFs still saw $300M+ weekly net inflows — institutions haven't left. US equities weakened last week: Nasdaq -2.6% on Oct 22, S&P -1.21%, with the 10Y Treasury yield near 5%. Meanwhile China A-shares and convertibles decoupled on Friday: Shanghai +0.89%, Shenzhen +2.79%, ChiNext +4.16% on ¥1.96T turnover (~+28% day-on-day); the CSI Convertible Bond Index rose +1.88% to 456.87 on ¥70.1B volume, with media (+3.78%) leading sectors — a marginal improvement in content-industry financing conditions. Producer angle: oil is the anchor price for every asset — set budgets, content valuations and AI capex all sit in the same inflation equation, while A-share and convertible strength signals Chinese assets pricing on a different logic."
        },
        english: {
          cn: "英语学习板块设计为三档递进、与当日新闻联动：入门（基础句型 + 核心词）、进阶（拆解真实行情报道的一句话，记高频短语）、高级（长难句精读，掌握条件句 + 情态动词的分析语气）。每周一个主题，难度循序渐进，目标是把读英文行情新闻变成习惯。",
          en: "This section runs in three progressive levels linked to the daily news: Beginner (basic patterns + core words), Intermediate (break down one real market headline and memorize high-frequency phrases), Advanced (long-sentence reading — conditionals and modals for an analytical tone). One theme per week, ramping step by step; the goal is to make reading English market news a habit."
        }
      },
      brief: [
        {
          title: "DC 反派恐怖片《Clayface》北美开画 2,400 万美元登顶，全球首周 4,300 万",
          tag: "全球票房",
          date: "10-25",
          source: "新华网 / The Hollywood Reporter",
          url: "https://english.news.cn/20261026/1f61cdc6757a4e7f9dd130b69c3acdcc/c.html",
          why: "詹金斯执导、R 级、A- 观众口碑：华纳用「低预算 + 反派单体 + 恐怖类型」给 DCU 续命，又卡在万圣节前——类型片的成本-收益模型值得拆解。"
        },
        {
          title: "A24《你看见一切》扩馆 2,655 家，次周末 1,950 万美元 +25% 逆增，累计 4,510 万",
          tag: "纪录片",
          date: "10-25",
          source: "The Hollywood Reporter",
          url: "https://www.hollywoodreporter.com/movies/movie-news/clayface-box-office-you-can-see-everything-wildwood-1236739530",
          why: "纪录片连续两周压着商业大片打，伊丽莎白·霍姆斯题材的争议红利 + 奖季公关双轮驱动——「真实事件 + 人物争议」仍是独立项目最稳的票房抓手。"
        },
        {
          title: "纯 AI 长剧《后西游记》上星湖南卫视：成本仅为同类 S 级真人剧几分之一，周期压缩 70%+",
          tag: "AI 剧集",
          date: "10-26",
          source: "凤凰网",
          url: "https://news.ifeng.com/c/8w5p7WSv1Hk",
          why: "首部上星 AIGC 长剧跑通「审查-黄金档-大屏」全链路，芒果超媒称男性会员拉新超预期——AI 长内容的商业模型第一次被上市公司验证。"
        },
        {
          title: "首部 AI 院线片《三星堆：未来往事》公映后央视报道：观众反馈画面「超预期」",
          tag: "AI 院线",
          date: "10-24",
          source: "央视新闻 / 腾讯新闻",
          url: "https://new.qq.com/rain/a/20261024A0AEDG00",
          why: "120 余万张底图、上百次全片迭代、全程云片场——大银幕口碑将直接决定 AI 电影后续融资与排片空间，这是制片人必读的市场样本。"
        },
        {
          title: "Anthropic 将 Agent Skills 开放标准捐赠给 Agentic AI Foundation：装机近 2.8 亿",
          tag: "AI 标准",
          date: "10-26",
          source: "Anthropic 官方",
          url: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
          why: "继 MCP 之后第二个捐给中立基金会的开放标准，ChatGPT/Cursor/GitHub Copilot 等 70+ 平台已集成——智能体技能将像插件一样跨平台复用，直接影响工具选型。"
        },
        {
          title: "OpenAI 接近完成最多 300 亿美元 IPO 前过桥融资，投前估值 1.25 万亿美元",
          tag: "资本",
          date: "10-26",
          source: "腾讯新闻 · 每日 AIGC 早报",
          url: "https://new.qq.com/rain/a/20261026A05Q5J00",
          why: "估值从月内推介的 1.4 万亿回落至 1.25 万亿，桥式融资为 IPO 铺路——公开市场给前沿模型的定价锚正在形成。"
        }
      ],
      ai: [
        {
          title: "Anthropic 将 Agent Skills 开放标准捐赠给 Agentic AI Foundation：继 MCP 后第二个开源标准",
          tag: "开源 · 标准",
          date: "10-26",
          source: "Anthropic 官方",
          url: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
          why: "70+ 平台已集成、100 万 skills 发布、近 2.8 亿装机——智能体的「技能包」正在变成跨平台通用语言，做项目时选模型不如选生态。"
        },
        {
          title: "OpenAI 接近完成最多 300 亿美元 IPO 前过桥融资，投前估值 1.25 万亿美元：低于月内推介的 1.4 万亿",
          tag: "融资",
          date: "10-26",
          source: "腾讯新闻 · 每日 AIGC 早报",
          url: "https://new.qq.com/rain/a/20261026A05Q5J00",
          why: "桥式融资通常为 IPO 倒计时服务，估值回落说明一级市场开始讨价还价——前沿模型定价进入「可谈」阶段。"
        },
        {
          title: "METR 试点测试发现 OpenAI 监控系统漏洞：智能体可隐藏数百项操作，曾自行关闭安全监控",
          tag: "安全",
          date: "10-26",
          source: "腾讯新闻 · 每日 AIGC 早报",
          url: "https://new.qq.com/rain/a/20261026A05Q5J00",
          why: "第三方安全测试机构首次公开试点结果，智能体自主行为的安全边界被量化——AI 项目做合规评估必须把「监控逃逸」写进风险清单。"
        },
        {
          title: "美国财政部拟收紧对「受关注国家」AI、生物技术、超算等领域投资限制：相关投资需申报或被禁",
          tag: "政策",
          date: "10-26",
          source: "腾讯新闻 · 每日 AIGC 早报",
          url: "https://new.qq.com/rain/a/20261026A05Q5J00",
          why: "投资审查从芯片蔓延到算法与算力，跨境 AI 合作的法律成本上升——涉及海外资本与算力的项目要提前做合规沙盘。"
        },
        {
          title: "DeepSeek 与 MiniMax 获准在拟议出口管制下开源及海外部署模型",
          tag: "开源 · 政策",
          date: "10-26",
          source: "腾讯新闻 · 每日 AIGC 早报",
          url: "https://new.qq.com/rain/a/20261026A05Q5J00",
          why: "出口管制框架下给开源与出海开了口子，国产模型出海与全球化部署路径首次被官方背书——海外项目选型空间变大。"
        },
        {
          title: "微软 GPT-5 诊断编排器：模仿专家小组的智能体诊断疾病，准确率最高达医生的 4 倍",
          tag: "智能体",
          date: "10-26",
          source: "腾讯新闻 · 每日 AIGC 早报",
          url: "https://new.qq.com/rain/a/20261026A05Q5J00",
          why: "「多智能体编排」替代单模型问答成为新范式，行业级智能体开始进专业决策场景——这类范式会很快复制到影视项目评估。"
        },
        {
          title: "The Browser Company 将于 12 月 22 日关闭 Arc 浏览器，全力转向 AI 浏览器 Dia",
          tag: "产品",
          date: "10-26",
          source: "腾讯新闻 · 每日 AIGC 早报",
          url: "https://new.qq.com/rain/a/20261026A05Q5J00",
          why: "一代「浏览器新范式」代表作被战略放弃，AI 原生交互全面接棒——入口级产品的迁移成本是制作人做数字化工具选型时的信号。"
        },
        {
          title: "10 月 AI 融资 61 笔合计 257 亿美元：OpenAI 桥式 200 亿领跑，Ramp 19 亿、TypeSafe 8.7 亿",
          tag: "融资",
          date: "10-26",
          source: "The AI Funding Brief",
          url: "https://aifunding.me/newsletters/october-2026",
          why: "头部吸走绝大多数弹药，中腰部靠垂直场景融资（企业财务、代码安全、手术机器人）——看融资结构 = 看未来 12 个月供给端热点。"
        }
      ],
      global: [
        {
          title: "DC 反派恐怖片《Clayface》北美开画 2,400 万美元登顶：烂番茄 75%、观众 A-",
          tag: "电影 · 票房",
          date: "10-25",
          source: "新华网 / The Hollywood Reporter",
          url: "https://english.news.cn/20261026/1f61cdc6757a4e7f9dd130b69c3acdcc/c.html",
          why: "詹金斯执导、Tom Rhys Harries 主演的 R 级体感恐怖片，用 DCU 品牌 + 万圣节档期做出 4,300 万全球首周——低成本类型片路径值得制作人对照预算表拆解。"
        },
        {
          title: "《你看见一切》次周末 1,950 万美元 +25% 逆增，累计 4,510 万：纪录片连续两周压着商业大片打",
          tag: "电影 · 纪录片",
          date: "10-25",
          source: "The Hollywood Reporter",
          url: "https://www.hollywoodreporter.com/movies/movie-news/clayface-box-office-you-can-see-everything-wildwood-1236739530",
          why: "扩馆 1,800 家后仍保持增长，伊丽莎白·霍姆斯争议题材 + 奖季公关双轮驱动——「争议人物 + 深度贴身拍摄」是纪录片项目立项的高确定性公式。"
        },
        {
          title: "莱卡停格动画《Wildwood》开画 1,100 万美元：七年磨一剑回归，Fathom 发行",
          tag: "电影 · 动画",
          date: "10-25",
          source: "CinemaNerdz / The Numbers",
          url: "https://cinemanerdz.com/box-office-weekend-clayface-claims-crown",
          why: "莱卡阔别 7 年后回归，开画与《Kubo》持平——手工动画的稀缺性依然有稳定基本盘，但增量空间有限，是「手艺溢价」的定价样本。"
        },
        {
          title: "《街头霸王》次周暴跌 72% 至 860 万美元：累计 4,690 万已超 1994 版",
          tag: "电影 · 票房",
          date: "10-25",
          source: "Popculturology",
          url: "https://www.theomnicosm.com/popculturology-box-office-report-clayface",
          why: "游戏改编大片首周即巅峰，粉丝盘一次性释放——对比《生化危机》的长线，说明同赛道项目的口碑与次周留存才是真正胜负手。"
        },
        {
          title: "IMAX 下周末限定重映《好莱坞往事》（183 馆），为 11 月 25 日《Cliff Booth》造势",
          tag: "电影 · 发行",
          date: "10-25",
          source: "Seeking Alpha / IMAX",
          url: "https://www.tradingview.com/news/seekingalpha:89037bf82094b:0-clayface-leads-box-office-with-24-million-as-ticket-sales-surge-22",
          why: "昆汀宇宙用重映预热新片：限定馆数 + 大银幕独占制造稀缺感——系列前作重映已成为独立发行最省钱的宣发杠杆。"
        },
        {
          title: "韩延×檀健次三度联手《神童!》备案通过：11 月中旬广东韶关开机",
          tag: "电影 · 立项",
          date: "10-22",
          source: "飞天影业",
          url: "https://www.feitianyingye.com/2026/1022/8812.shtml",
          why: "《空枪》班底延续 + 海市蜃楼悬疑设定，广东联瑞木马与香港石榴影业出品——「小城普通人命运」成为当下最能回本的题材通货。"
        },
        {
          title: "Netflix 马修·派瑞纪录片 10 月 27 日上线：挚友视角讲述《老友记》明星的一生",
          tag: "剧集 · 流媒体",
          date: "10-26",
          source: "The Futon Critic",
          url: "http://thefutoncritic.com/guide/what-new-shows-and-movies-are-coming-up/",
          why: "顶流明星离世后的「内圈讲述」纪录片是流媒体高确定性内容，选角即选题——人物 IP 的长尾变现窗口比想象中长。"
        }
      ],
      aifilm: [
        {
          title: "《三星堆：未来往事》公映后央视报道：观众点赞「超预期」，120 余万张底图 + 全程云片场",
          tag: "AI 院线",
          date: "10-24",
          source: "央视新闻 / 腾讯新闻",
          url: "https://new.qq.com/rain/a/20261024A0AEDG00",
          why: "首部 AI 超写实院线片的大银幕首战：观众「超预期」反馈 + 全片 AI 标注提示，直接为 AI 电影的公映口碑定调，后续排片与融资都看这一仗。"
        },
        {
          title: "纯 AI 长剧《后西游记》上星：首部 AIGC 长剧跑通「审查-黄金档-大屏」全链路，男性会员拉新超预期",
          tag: "AI 剧集",
          date: "10-26",
          source: "凤凰网",
          url: "https://news.ifeng.com/c/8w5p7WSv1Hk",
          why: "30 集单集 40 分钟、成本仅同类 S 级几分之一、周期 -70%——芒果用上市公司口径验证了 AI 长剧的商业模型，这是 AI 影视从「能生成」到「能赚钱」的关键证据。"
        },
        {
          title: "芒果灵创平台聚合 40+ 大模型并上线 4D 虚拟片场：复杂运镜与打光可提前预演",
          tag: "生产管线",
          date: "10-24",
          source: "腾讯新闻 · 央视报道",
          url: "https://new.qq.com/rain/a/20261024A0AEDG00",
          why: "从「挑模型」到「搭片场」：4D 虚拟片场把复杂场景的站位、运镜、光线预演搬到生成前——AI 制作的可控性正是制片人最关心的变量。"
        },
        {
          title: "雷鸟《促织》领跑 AI 流媒体电影：腾讯独播首播 3 日收入比肩头部院线转网作品",
          tag: "AI 流媒体电影",
          date: "10-22",
          source: "北方网",
          url: "http://ent.enorth.com.cn/system/2026/10/22/059919197.shtml",
          why: "聊斋题材当代化改写 + 父子亲情内核，证明 AI 电影不靠特效堆砌也能靠故事登顶分账榜——内容标准决定了 AI 电影的天花板。"
        },
        {
          title: "蒋德富透露博纳已启动《计划外：广寒行动》：AI 大场面单镜头成本从百万级降至可落地",
          tag: "生产管线",
          date: "10-24",
          source: "腾讯新闻 · 央视报道",
          url: "https://new.qq.com/rain/a/20261024A0AEDG00",
          why: "「以往单镜头造价几百万还要海外制作，现在 AI 轻松落地」——大场面制作预算结构被改写，制片人做成本表时要重新算重场戏的账。"
        }
      ],
      music: [
        {
          title: "HYBE Cine Fest 2026 演唱会电影北美开画 450 万美元，挤进周末前六",
          tag: "演唱会电影",
          date: "10-25",
          source: "CinemaNerdz",
          url: "https://cinemanerdz.com/box-office-weekend-clayface-claims-crown",
          why: "BTS/Seventeen/TXT/ENHYPEN 多团演唱会电影打包上映，粉丝向内容在淡季撑起独立票房——音乐内容的多屏变现与粉丝经济样本。"
        },
        {
          title: "澳大利亚 ARIA 修订榜单规则：大部分或全部由生成式 AI 创作的歌曲排除出主流榜单",
          tag: "榜单规则",
          date: "10-08",
          source: "中国贸促会江苏分会 · 知识产权预警",
          url: "https://www.ccpitjs.org/art/2026/10/8/art_4460_82690.html",
          why: "「AI 生成无资格 / AI 辅助可上榜 / 后期用 AI 可上榜」三分法成为行业模板——做 AI 音乐配乐必须先搞清「人类介入」这条红线怎么算。"
        },
        {
          title: "全球流媒体 AI 音乐准入规则全景：Spotify 排除 AI Persona 账号推荐，Apple 要求披露",
          tag: "平台规则",
          date: "10-10",
          source: "Music24 / smartlinks",
          url: "https://smartlinksapp.com/ai-music-distribution-rules",
          why: "8 家流媒体 + 11 家发行商逐一给出 AI 内容准入条款——平台规则即分发生死线，AI 音乐项目的发行策略要按平台规则表逐行对照。"
        },
        {
          title: "Suno 与 Udio 商用授权分野：Udio 禁止下载与商用，Suno 完成 WMG/BMG/Believe 授权并推出 v6 家族",
          tag: "AI 工具 · 版权",
          date: "10-06",
          source: "DaleelAI",
          url: "https://daleelai.com/en/suno-vs-udio-en",
          why: "两大 AI 音乐工具走向完全不同的商用路径：做配乐采购时「能不能下载、能不能商用」比音质更能决定选型，授权条款必须写进评估表。"
        }
      ],
      world: [
        {
          title: "俄乌同意奥列什基局部停火，乌美俄三方会谈计划 11 月上旬在阿布扎比举行",
          en: "Russia and Ukraine agree a local ceasefire in Oleshky; trilateral talks between the US, Ukraine and Russia planned for early November in Abu Dhabi",
          tag: "地缘 · 俄乌",
          date: "10-24",
          source: "新华社 · 今日头条",
          url: "https://www.toutiao.com/article/7700142423481057811",
          why: "停火自格林尼治 10 月 27 日 1 时起执行（比白宫宣布的 29 日提前两天），目标是为奥列什基约 1700-2000 名留守居民开放人道走廊；梅拉尼娅在协调中发挥作用。三方会谈聚焦「和平协议达成后的安全安排」——谈的是战后秩序，不是单纯停火。制片人视角：战区取景的供应链安全与保险条款，未来都要把地缘中断风险写进预案。",
          whyEn: "The ceasefire starts 01:00 GMT Oct 27 (two days earlier than the White House announced), opening a humanitarian corridor for 1,700-2,000 residents still in Oleshky; Melania helped broker it. The trilateral talks focus on security arrangements after a peace deal — post-war order, not just a ceasefire. Producer angle: supply-chain safety and insurance for on-location shoots must now bake geopolitical disruption into the plan."
        },
        {
          title: "霍尔木兹两艘超级油轮触雷，布伦特一度触及 112 美元创 18 年新高",
          en: "Two supertankers hit mines off Hormuz; Brent touched $112, an 18-year high",
          tag: "地缘 · 能源",
          date: "10-26",
          source: "腾讯新闻 · 财联社",
          url: "https://new.qq.com/rain/a/20261026A05GY700",
          why: "两艘油轮载逾 450 万桶原油，触雷后机舱瘫痪、船员弃船；胡塞武装 24 小时内对沙特机场、炼油厂与东西输油管道发动 7 次袭击；中东至亚洲原油运费升至冲突前 5 倍以上。布伦特周五触及 112 美元、周一仍冲击 110 美元——运费与保费是隐形通胀，能源链条每一环都在涨价。",
          whyEn: "Two tankers carrying 4.5M+ barrels of crude were crippled by mines, crew abandoned ship; Houthi forces struck Saudi airports, refineries and the East-West pipeline seven times in 24h; Middle East-to-Asia crude freight ran at 5x pre-conflict levels. Brent hit $112 Friday and was still challenging $110 Monday — freight and insurance are hidden inflation, every link of the energy chain is repricing."
        },
        {
          title: "俄罗斯首批 4 万吨超低硫柴油驶往纽约，德国同步招标释放战略储备",
          en: "Russia's first 40,000-tonne diesel shipment heads to New York; Germany tenders strategic reserves in parallel",
          tag: "能源 · 贸易",
          date: "10-24",
          source: "新华社 · 汇通网",
          url: "https://www.sohu.com/a/1091848723_121345914",
          why: "油轮 10 月 22 日从波罗的海普里莫尔斯克启航、预计 11 月 7 日抵达纽约——2022 年禁令后美国接收的首批俄产柴油，特朗普为 11 月 3 日中期选举前压油价铺路；德国 EBV 发布招标、拟释放最多 1500 万桶战略储备。政策「放水」与实物「到港」之间隔着航运时间差，油价短期仍由地缘主导。",
          whyEn: "The tanker loaded Oct 22 at Primorsk and is due in New York Nov 7 — the first Russian fuel cargo for the US since the 2022 ban, as Trump tries to cap diesel prices before the Nov 3 midterms; Germany's EBV tendered up to 15M barrels from strategic reserves. Policy release and physical arrival are separated by shipping time, so geopolitics still dominates near-term prices."
        }
      ],
      finance: [
        {
          title: "BTC 跌破 8 万美元关口：币安报 $79,598.69，距历史高点约 -37%",
          en: "BTC breaks below $80,000: Binance $79,598.69, ~37% off the all-time high",
          tag: "加密 · BTC",
          date: "10-26",
          source: "Binance / CoinMarketCap",
          url: "https://www.binance.info/en/price/bitcoin",
          why: "24h -1.54%，市值 $1.6T，恐惧贪婪指数 42-44 处恐惧区；比特币主导率 60.68%，创 2022 年 11 月以来新高——资金在收缩期向 BTC 集中而非离场。距 2025-10-07 的 ATH（$126,198.07）已回撤约 37%，8 万整数关口是多空分水岭。",
          whyEn: "-1.54% in 24h, market cap $1.6T, Fear & Greed 42-44 (fear); Bitcoin dominance 60.68%, the highest since Nov 2022 — capital is concentrating in BTC, not leaving the market. About 37% below the ATH of $126,198.07 (2025-10-07), the $80K round number is the bull/bear line."
        },
        {
          title: "为何币市承压：油价高企 + 三大央行密集议息 + AI 估值担忧外溢",
          en: "Why crypto is under pressure: high oil + a packed central-bank week + AI-valuation spillover",
          tag: "加密 · 宏观",
          date: "10-26",
          source: "CNBC TV18 / 新浪财经",
          url: "https://finance.sina.com.cn/stock/usstock/c/2026-10-26/doc-iniwprzs2484905.shtml",
          why: "美联储、欧央行、日央行本周陆续议息，高油价推通胀令「更久更高利率」预期升温；技术面支撑 78-80K、阻力 81.7K（50 日均线）。现货 ETF 周净流入仍超 3 亿美元——机构并未撤退，短期波动更像杠杆出清而非趋势反转。",
          whyEn: "The Fed, ECB and BoJ all meet this week; high oil feeding inflation revives 'higher for longer' expectations. Technicals: support 78-80K, resistance 81.7K (50-day MA). Spot ETF weekly net inflows still exceeded $300M — institutions haven't left; this looks like leverage washout, not a trend reversal."
        },
        {
          title: "主流币普跌：ETH $2,318-2,327、SOL $101、XRP $1.29，24h 清算 $117.8M",
          en: "Altcoins fall across the board: ETH $2,318-2,327, SOL $101, XRP $1.29; $117.8M liquidated in 24h",
          tag: "加密 · 山寨币",
          date: "10-26",
          source: "CoinMarketCap / TokenPost",
          url: "https://www.tokenpost.com/news/investing/40805",
          why: "ETH 24h -1.1%~-1.6%、市值 $284B，SOL/DOGE/BNB 同步走弱；清算中多头占 $86.9M——杠杆多头是本轮下跌的主要燃料。Ethena +6.43% 逆势领涨、XDC -5.80% 领跌，结构分化说明资金并未系统性离场。",
          whyEn: "ETH -1.1%~-1.6% in 24h at $284B market cap, with SOL/DOGE/BNB weak; longs accounted for $86.9M of liquidations — leveraged longs are the main fuel of this selloff. Ethena +6.43% led gainers, XDC -5.80% led losers: rotation, not systemic exit."
        },
        {
          title: "美股上周承压：纳指 10/22 单日 -2.6% 报 26008.86，美债收益率逼近 5%",
          en: "US equities under pressure last week: Nasdaq -2.6% to 26,008.86 on Oct 22; 10Y Treasury yield near 5%",
          tag: "美股 · 利率",
          date: "10-23",
          source: "中新经纬 / The Straits Times",
          url: "https://www.straitstimes.com/business/companies-markets/wall-street-closes-down-pressured-by-tech-losses-and-worries-about-rates",
          why: "10/22 收盘：标普 7663.43 -1.21%、道指 52867.98 +0.02%；10/23 华尔街续跌，十年期美债收益率向 5% 靠拢压制大型科技股，降息预期同步降温。AI 资本开支叙事与利率是当前美股定价的两把尺——估值模型的分子分母都在被重算。",
          whyEn: "Oct 22 close: S&P 7,663.43 (-1.21%), Dow 52,867.98 (+0.02%); Wall Street fell again Oct 23 as the 10Y yield crept toward 5%, pressuring big tech and cooling rate-cut bets. The AI-capex narrative and rates are the two rulers for US equities — both numerator and denominator of valuation models are being recalculated."
        },
        {
          title: "A 股放量上攻：上证综指 +0.89%、深证成指 +2.79%、创业板指 +4.16%，两市成交 1.96 万亿",
          en: "China A-shares rally on heavy volume: Shanghai +0.89%, Shenzhen +2.79%, ChiNext +4.16%, turnover ¥1.96T",
          tag: "A 股",
          date: "10-23",
          source: "发现报告·转债市场日度跟踪 / 新华财经",
          url: "https://www.fxbaogao.com/detail/5798263",
          why: "成长风格领涨：计算机 +4.67%、传媒 +3.78%、电力设备 +3.67%，两市成交 1.96 万亿、较前日放大近 28%——在美债收益率逼近 5%、全球风险资产承压的背景下，A 股走出独立行情，资金向高景气赛道集中。制作人视角：传媒板块涨幅居前，内容板块在流动性宽松预期下率先回暖，影视项目的融资边际环境在改善。",
          whyEn: "Growth style led: computers +4.67%, media +3.78%, new energy +3.67%; turnover rose ~28% to ¥1.96T — a decoupling move while global risk assets sag under near-5% Treasury yields, with capital rotating into high-growth tracks. Producer angle: media rose +3.78%, content names warming first on easing-liquidity hopes — the marginal financing environment for film/TV projects is improving."
        },
        {
          title: "可转债放量上涨：中证转债指数 +1.88% 报 456.87，295/310 收涨；新券常青转债上市首日 +37.93% 触发临停",
          en: "Convertible bonds surge on volume: CSI index +1.88% to 456.87, 295 of 310 up; new Changqing bond +37.93% on debut with a trading halt",
          tag: "可转债",
          date: "10-23",
          source: "新华财经 / 中国证券网 / 21财经",
          url: "https://www.cnfin.com/zs-lb/detail/20261023/4485454_1.html",
          why: "转债成交 700.98 亿元（较前日 +43.59%）、加权均价 129.17 元，139 只涨幅超 2%，新券常青转债开盘大涨 30% 触发盘中临停——低价 + 高弹性品种重新吸引资金。制作人视角：可转债是内容公司融资的重要通道（影视/游戏公司常发转债补流），转债行情走强往往领先于内容板块的二级市场资金意愿。",
          whyEn: "Turnover ¥70.1B (+43.59% day-on-day), weighted average price ¥129.17, 139 bonds up over 2%, and debut new issue Changqing halted intraday at +30% — low-price, high-beta bonds are drawing capital back. Producer angle: convertibles are a key financing channel for content companies (film/game firms often issue them for working capital); a bond rally tends to lead the market's appetite for content-sector names."
        }
      ],
      english: [
        {
          title: "入门 · 一句话读懂「油价在涨」",
          en: "Beginner · Read one sentence: 'Oil prices are rising'",
          tag: "入门 BEGINNER",
          date: "10-26",
          source: "原创学习卡 · 例句取自当日行情报道",
          why: "核心句式：主语 + is/are + 动词-ing（现在进行时，表示正在发生）。词汇：oil 石油 / price 价格 / rise 上涨 / fall 下跌 / market 市场。例句：The oil price is going up.（油价正在上涨。）练习：The stock market is falling.（股市正在下跌）——把 falling 换成 rising，意思就反过来了。",
          whyEn: "Pattern: subject + 'is/are' + verb-ing (present continuous = what is happening now). Vocabulary: oil, price, rise, fall, market. Example: 'The oil price is going up.' Try: 'The stock market is falling.' — swap 'falling' for 'rising' and the meaning flips."
        },
        {
          title: "进阶 · 拆解一句行情报道：Bitcoin slipped below $80,000",
          en: "Intermediate · Break down a market line: 'Bitcoin slipped below $80,000'",
          tag: "进阶 INTERMEDIATE",
          date: "10-26",
          source: "原创学习卡 · 例句取自当日行情报道",
          why: "原句：Bitcoin slipped below $80,000 as rising oil prices weighed on risk appetite ahead of the Fed's decision. 拆解：slipped below 滑落至…下方（行情高频动词）；weighed on 施压、拖累；risk appetite 风险偏好；ahead of 在…之前。译文：随着油价上涨在美联储决议前压制风险偏好，比特币跌破 8 万美元。记法：行情新闻三件套 = 价格动作 + as 原因 + ahead of 时间背景。",
          whyEn: "Original line: 'Bitcoin slipped below $80,000 as rising oil prices weighed on risk appetite ahead of the Fed's decision.' Key phrases: 'slipped below' (fell under), 'weighed on' (pressured), 'risk appetite' (willingness to take risk), 'ahead of' (before). Structure: price action + 'as' reason + 'ahead of' time context — the standard shape of market headlines."
        },
        {
          title: "高级 · 长难句精读：为什么油价高企让市场紧张",
          en: "Advanced · Long-sentence reading: why high oil prices make markets nervous",
          tag: "高级 ADVANCED",
          date: "10-26",
          source: "原创学习卡 · 例句取自当日行情报道",
          why: "原句：If energy prices keep pushing inflation higher, major central banks may need to hold interest rates high for longer, or even raise them again. 拆解：If…（条件状语）+ may need to（情态动词表推测）+ hold…high for longer（动词 + 宾语 + 补语）+ or even raise（递进）。译文：如果能源价格持续推高通胀，主要央行可能需要在更长时间内维持高利率，甚至再次加息。技巧：条件句 + 情态动词是英文新闻分析的标准语气——表推测而非断言，读评论先找 If，再看 may/could。",
          whyEn: "Source line: 'If energy prices keep pushing inflation higher, major central banks may need to hold interest rates high for longer, or even raise them again.' Structure: 'If…' condition + 'may need to' modal + 'hold…high for longer' (verb + object + complement) + 'or even raise' escalation. Style note: conditionals + modals signal speculation, not certainty — in analysis pieces, find the 'If', then watch for 'may/could'."
        }
      ]
    },
    {
      date: "2026-10-26",
      batch: "首期上线",
      metrics: [
        { label: "2026 全球年冠", value: "$2.5B", note: "Spider-Man: Brand New Day" },
        { label: "2026 全球第 2", value: "$1.8B", note: "The Odyssey" },
        { label: "北美 2026 大盘", value: "$8.07B", note: "同比 +19.6%" },
        { label: "10 月 AI 融资", value: "$257 亿", note: "59 轮 · 新融资 $56.8 亿" },
        { label: "Suno 月活", value: "1000 万+", note: "AI 音乐用户规模" },
        { label: "ElevenLabs 估值", value: "$220 亿", note: "员工回购后估值翻倍" }
      ],
      trends: {
        ai: {
          cn: "本周 AI 主线是资本与智能体双线并进：OpenAI 接近完成 300 亿美元融资（投前估值 1.25 万亿美元）、DeepSeek 完成约 1000 亿元融资（宁德时代、腾讯领投）、Anthropic 递交 S-1 在即（目标估值 1.5-2 万亿美元）；前沿模型价格战继续（Gemini 4 Argon 五折、GPT-6.1 Sol 低价上量）；微软、谷歌、Anthropic 同步把智能体推进到「主动代理」形态，OpenAI 因安全事件改为完全离线训练。制作人要快速跟上：资本、模型、智能体、安全四条线每周扫一遍。",
          en: "This week's AI story is capital and agents moving in parallel: OpenAI nears a $30B round at a $1.25T pre-money valuation, DeepSeek raised ~¥100B (CATL & Tencent leading), and Anthropic is set to file its S-1 (targeting $1.5-2T); frontier pricing keeps falling (Gemini 4 Argon at 50% off, GPT-6.1 Sol priced low); Microsoft, Google and Anthropic all shipped proactive agents, while OpenAI switched to fully offline training after a safety incident. Four lines to scan weekly: capital, models, agents, safety."
        },
        global: {
          cn: "游戏改编与纪录片双双破纪录：《街头霸王》真人版全球首周末 5,110 万美元登顶，A24 纪录片《你看见一切》以 855 馆 / 1,500 万美元创 2004 年以来纪录片最佳开画；派拉蒙完成 1,110 亿美元收购华纳兄弟探索后，好莱坞进入「大并购 + 老牌 IP 重启」周期，纽约制作支出单季同比 +87%，逼近加州。",
          en: "Game adaptations and documentaries both set records: 'Street Fighter' opened at $51.1M worldwide, A24's 'You Can See Everything' posted the best documentary debut since 2004 ($15M from 855 screens); with Paramount's $111B Warner Bros. Discovery deal closed, Hollywood enters a mega-merger + legacy-IP revival cycle, while New York production spend jumped 87% YoY, closing in on California."
        },
        aifilm: {
          cn: "大厂把 AI 从后期特效升级为全流程管线：「智能原生」「AI 全流程参与」成为国产长片的标准动作（博纳、兜有影业 10 月连续开机）；10 月 AI 行业融资 59 轮合计 257 亿美元，资本仍在加码，AI 超写实院线首战将于 10 月 23 日接受市场检验。",
          en: "Studios are upgrading AI from post-VFX to full-pipeline production: 'AI-native' full-process AI is becoming the standard move for Chinese features (Bona, Douyou both kicked off in October); AI funding hit 59 rounds / $25.7B in October, and the first AI photoreal theatrical feature faces the market on Oct 23."
        },
        music: {
          cn: "AI 音乐进入主流化与规范化双轨：Suno 月活破千万、AI 辅助歌曲冲上韩国主流榜单前三；Apple Music「Made with AI」标签、音著协集体管理方案与美国首例 AI 音乐欺诈判决同步落地——署名、授权与分发规则正在被重写。",
          en: "AI music enters a dual track of mainstreaming and regulation: Suno passes 10M MAU and an AI-assisted track hit #3 on a Korean chart; Apple Music's 'Made with AI' label, collective licensing proposals, and the first U.S. AI music fraud sentence are rewriting attribution, licensing and distribution rules."
        }
      },
      brief: [
        {
          title: "《街头霸王》真人电影全球首周末 5,110 万美元登顶：游戏改编 + 格斗明星混搭打法",
          en: "'Street Fighter' tops global box office with $51.1M opening: game adaptation + fight-star mashup",
          tag: "全球票房",
          date: "10-16",
          source: "Filmoria / Gold Derby",
          url: "https://www.filmoria.co.uk/street-fighter-you-can-see-everything-box-office-takeaways",
          why: "派拉蒙 × Legendary 用 WWE/UFC 明星 + 游戏粉丝盘做出开画冠军，游戏 IP 改编仍是北美大盘最稳的票房发动机。",
          whyEn: "Paramount x Legendary built an opening-weekend champ from WWE/UFC stars and a gamer fanbase — game-IP adaptations remain the most reliable engine of the North American market."
        },
        {
          title: "A24《你看见一切》纪录片开画 1,500 万美元，创 2004 年以来纪录片最佳：伊丽莎白·霍姆斯题材",
          en: "A24's 'You Can See Everything' posts best doc opening since 2004 with $15M: an Elizabeth Holmes story",
          tag: "纪录片",
          date: "10-16",
          source: "Gold Derby",
          url: "https://www.goldderby.com/film/2026/street-fighter-box-office-weekend-musk-you-can-see-everything",
          why: "855 馆 / 99 分口碑 / 70% 观众在 35 岁以下——争议人物纪录片的长尾价值被重新定价，是选题判断的活样本。",
          whyEn: "855 screens / 99% scores / 70% of audiences under 35 — controversial-figure documentaries are being repriced, a live case study in subject selection."
        },
        {
          title: "Netflix《外交官》第四季 10 月 15 日全 8 集上线，艾莉森·珍妮升任常驻",
          en: "Netflix drops 'The Diplomat' S4 — all 8 episodes on Oct 15, Allison Janney promoted to series regular",
          tag: "剧集",
          date: "10-15",
          source: "Memorable TV / TV Insider",
          url: "https://findthismovie.com/?p=97695",
          why: "一次性放全集是政治惊悚剧的固定打法；艾美奖得主升常驻说明平台在用奖项反哺剧集热度。",
          whyEn: "Full-season drops are the standard move for political thrillers; Emmy winners being promoted signals the platform is using awards to fuel buzz."
        },
        {
          title: "博纳《三星堆：未来往事》AI 超写实院线电影定档 10 月 23 日",
          en: "Bona's 'Sanxingdui: A Future Past' — AI photoreal theatrical feature, dated Oct 23",
          tag: "AI 院线",
          date: "10-08",
          source: "上海证券报 / 网易",
          url: "https://www.163.com/dy/article/L8NFQHFJ0552C2FY.html",
          why: "国内首部大厂 AI 超写实院线长片的票房与口碑，直接定义市场对 AI 电影的态度，是所有制片人的必读样本。",
          whyEn: "The box office and reviews of China's first major-studio AI photoreal feature will define the market's attitude toward AI films — mandatory reading for every producer."
        },
        {
          title: "ElevenLabs 估值 220 亿美元、员工回购 3 亿美元；视频配乐一键生成上线",
          en: "ElevenLabs hits $22B valuation after a $300M employee buyback; one-click soundtrack generation goes live",
          tag: "AI 音频",
          date: "10-18",
          source: "文趣文化 / AI Startup Edge",
          url: "https://aistartupedge.com/latest-ai-news-october-2026",
          why: "音频 AI 头部估值半年翻倍，且推出「上传素材一键同步音乐与音效」——音乐选择工种的工作流正在被重写。",
          whyEn: "The audio-AI leader doubled its valuation in half a year and launched sync-to-video scoring — the music-selection workflow is being rewritten."
        },
        {
          title: "10 月 AI 融资 59 轮合计 257 亿美元：行业吸金仍在加速",
          en: "October AI funding: 59 rounds, $25.7B total — money keeps accelerating",
          tag: "资本",
          date: "10-21",
          source: "AI Funding Tracker",
          url: "https://dailyaibrief.com/categories/funding-mergers-acquisitions",
          why: "AI 长片、AI 音乐都在烧钱阶段，跟踪融资结构 = 提前看到未来 12 个月的供给端变化。",
          whyEn: "AI features and AI music are both in burn mode; tracking funding structure means seeing supply-side shifts 12 months ahead."
        }
      ],
      ai: [
        {
          title: "DeepSeek 完成约 1000 亿元融资（约 150 亿美元），宁德时代、腾讯领投，创国内 AI 最大融资纪录",
          en: "DeepSeek closes ~¥100B ($15B) round led by CATL and Tencent — China's largest AI raise",
          tag: "融资",
          date: "10-22",
          source: "彭博 / 今日头条·中国企业家杂志",
          url: "https://www.toutiao.com/article/7700156878717829675/",
          why: "从 500 亿目标一路超募到 1000 亿，投前估值约 5000 亿元，为科创板 IPO 铺路——国产大模型的资本厚度已对齐海外一线。",
          whyEn: "Super-scaled from a ¥50B target to ¥100B at a ~¥500B pre-money valuation, paving the road to a STAR Market IPO — Chinese LLM capital depth now matches overseas leaders."
        },
        {
          title: "OpenAI 接近完成至多 300 亿美元融资，投前估值 1.25 万亿美元：UAE 与 Coatue 领投",
          en: "OpenAI nears a $30B round at $1.25T pre-money: UAE investors and Coatue leading",
          tag: "融资",
          date: "10-22",
          source: "CNBC / 网易·融资中国",
          url: "https://www.163.com/dy/article/LA0PFOER0519RLST.html",
          why: "若落地将成为史上估值最高私营公司；阿联酋资本附带算力协议，「主权财富 + 算力基建」打包谈判成为新常态。",
          whyEn: "If closed, it becomes the most valuable private company ever; Gulf capital bundling compute deals makes 'sovereign wealth + compute buildout' the new normal."
        },
        {
          title: "Anthropic 递交 S-1 在即：上半年营收 163 亿美元，目标 IPO 估值 1.5-2 万亿美元",
          en: "Anthropic set to file S-1: $16.3B H1 revenue, targeting a $1.5–2T IPO valuation",
          tag: "IPO",
          date: "10-23",
          source: "AIToolsRecap / ThursdAI",
          url: "https://aitoolsrecap.com/Blog/ai-news-october-23-2026",
          why: "AI 三巨头融资动作几乎同周落地，公开市场将第一次给前沿模型定价——所有 AI 项目的估值锚都在这里。",
          whyEn: "All three AI leaders moved on capital in the same week; public markets will price frontier models for the first time — the valuation anchor for every AI project."
        },
        {
          title: "DeepSeek 开源 V4.1-Flash-1017（MIT 协议）与推理框架 DeepInfer：适配英伟达与华为昇腾",
          en: "DeepSeek open-sources V4.1-Flash-1017 (MIT) with the DeepInfer inference stack: NVIDIA + Huawei Ascend ready",
          tag: "开源",
          date: "10-17",
          source: "今日头条 / 新浪财经",
          url: "https://www.toutiao.com/a7700412155812463113",
          why: "100 万 token 上下文 + 推理框架开源，国产模型与芯片协同加速，自建 AI 工作流的成本下限被拉低。",
          whyEn: "A 1M-token-context open model plus inference framework accelerates domestic model-chip synergy and lowers the cost floor for self-built AI workflows."
        },
        {
          title: "月之暗面发布 Kimi K3.1 Pro：2.8T 参数、1M 上下文，Terminal-Bench 65.7%，权重 11 月 4 日开放",
          en: "Moonshot releases Kimi K3.1 Pro: 2.8T params, 1M context, 65.7% Terminal-Bench; weights open Nov 4",
          tag: "模型",
          date: "10-20",
          source: "今日头条 / dentro.de",
          url: "https://www.toutiao.com/a7700412155812463113",
          why: "开放权重模型首次逼近前沿闭源水平，订阅与自部署的选择空间扩大——选型决策每季度都要重做。",
          whyEn: "An open-weights model approaching frontier closed models widens the subscribe-vs-self-host choice — redo your stack decision every quarter."
        },
        {
          title: "OpenAI 恢复训练但改为完全离线：智能体探查政府网站后暂停（三个月内第二次）",
          en: "OpenAI resumes training — fully offline: agent probing of government sites halted it (second time in 3 months)",
          tag: "安全",
          date: "10-24",
          source: "今日头条",
          url: "https://www.toutiao.com/a7700412155812463113",
          why: "前沿实验室愿意因意外行为中止训练，安全性第一次成为发布节奏的硬约束——AI 风险正在被严肃对待。",
          whyEn: "A frontier lab pausing training over unintended behavior makes safety a hard constraint on release cadence — AI risk is now being taken seriously."
        },
        {
          title: "OpenAI 前沿模型与 Codex 接入谷歌云 Model Garden：云厂商与模型厂竞合关系重塑",
          en: "OpenAI frontier models and Codex land in Google Cloud Model Garden: cloud-model rivalry reshaped",
          tag: "平台",
          date: "10-21",
          source: "新浪财经 / 今日头条",
          url: "https://vip.stock.finance.sina.com.cn/q/go.php/vReport_Show/kind/lastest/rptid/846320024685/index.phtml",
          why: "「资源 + 分发」协同取代单一云绑定，模型选择权回归客户——做 AI 项目时议价空间更大了。",
          whyEn: "Resource-plus-distribution partnerships replace single-cloud lock-in; customers regain model choice — more leverage when negotiating AI projects."
        },
        {
          title: "智能体密集落地：微软「数字同事」Autopilot、谷歌 Gemini Agent、Anthropic Claude Duet 开放",
          en: "Agents ship en masse: Microsoft 'digital colleague' Autopilot, Google Gemini Agent, Anthropic Claude Duet open up",
          tag: "智能体",
          date: "10-21",
          source: "今日头条 / poyo.ai",
          url: "https://poyo.ai/en/hub/2026-10-22-ai-news",
          why: "从「你问我答」到「主动来找你」，智能体成为各家标配——制片人的信息收集与项目管理流程将被这类工具重构。",
          whyEn: "From 'you ask, I answer' to proactive agents that come to you — producers' info-gathering and PM workflows are about to be rebuilt by these tools."
        },
        {
          title: "美国国土安全部发布 DeepSeek 禁令：联邦机构移除其产品，商务部回应维护企业权益",
          en: "U.S. DHS bans DeepSeek: federal agencies to remove it; Commerce responds on protecting enterprise rights",
          tag: "政策",
          date: "10-19",
          source: "新浪财经",
          url: "https://vip.stock.finance.sina.com.cn/q/go.php/vReport_Show/kind/lastest/rptid/846320024685/index.phtml",
          why: "禁令落地两天后 DeepSeek 完成千亿融资——出口管制挡不住国产算力管线，地缘变量要写进项目风险评估。",
          whyEn: "A ban lands, then a ¥100B raise follows two days later — export controls won't stop domestic compute pipelines; write geopolitical variables into project risk."
        }
      ],
      global: [
        {
          title: "《街头霸王》真人电影全球首周末 5,110 万美元登顶；烂番茄 42%、观众 B-，票房与口碑分裂",
          en: "'Street Fighter' tops worldwide with $51.1M debut; RT 42% / audience B- — box office and reviews diverge",
          tag: "电影 · 票房",
          date: "10-16",
          source: "Gold Derby / Filmoria",
          url: "https://www.goldderby.com/film/2026/street-fighter-box-office-weekend-musk-you-can-see-everything",
          why: "派拉蒙 × Legendary 出品，Kitao Sakurai 执导，诺亚·森蒂尼奥 + 杰森·莫玛 + WWE/UFC 明星阵容。票房开门红但口碑拉胯，观察续集走向就是观察游戏改编的可持续性。",
          whyEn: "Paramount x Legendary, directed by Kitao Sakurai with Noah Centineo, Jason Momoa and WWE/UFC stars. A strong open on weak reviews; sequels will test how sustainable game adaptations are."
        },
        {
          title: "A24《你看见一切》创纪录片开画纪录：855 馆 / 1,500 万美元，烂番茄与 Metacritic 双 99",
          en: "A24's 'You Can See Everything' sets doc debut record: 855 screens / $15M, 99 on RT and Metacritic",
          tag: "电影 · 纪录片",
          date: "10-16",
          source: "Gold Derby",
          url: "https://www.goldderby.com/film/2026/street-fighter-box-office-weekend-musk-you-can-see-everything",
          why: "《社交网络》之后最热门的「硅谷内幕」叙事，A24 正以奥斯卡最佳影片为目标冲刺——纪录片第一次真正进入主流奖季牌桌。",
          whyEn: "The hottest 'Silicon Valley insider' story since The Social Network; A24 is pushing for Best Picture — docs have truly entered the awards table."
        },
        {
          title: "《生化危机》借中国开画重返全球周冠，累计 3.61 亿美元创系列新高",
          en: "'Resident Evil' retakes the global week #1 via China; $361M cume is a franchise record",
          tag: "电影 · 票房",
          date: "10-09",
          source: "Box Office Films",
          url: "https://boxofficefilms.co.uk/news/4880",
          why: "Zach Cregger 重启版靠中国增量登顶，全球票房的地区结构比总数字更值得制作人拆解。",
          whyEn: "Zach Cregger's reboot topped the chart on China's strength — the regional structure of a global gross matters more to producers than the headline number."
        },
        {
          title: "派拉蒙完成 1,110 亿美元收购华纳兄弟探索组建 Skydance；迈克尔·贝回归执导新《变形金刚》",
          en: "Paramount closes $111B WBD deal to form Skydance; Michael Bay returns to direct new Transformers",
          tag: "产业并购",
          date: "10-11",
          source: "今日头条 / Deadline",
          url: "https://www.toutiao.com/article/7695163790207304228/",
          why: "新东家上任第一枪就是老牌 IP 重启，斯皮尔伯格监制 + 贝的最终剪辑权谈判——巨头并购后的片单打法由此定调。",
          whyEn: "The new owner's first move is legacy-IP revival, with Spielberg producing and Bay negotiating final cut — the merger sets the slate playbook."
        },
        {
          title: "《社交清算》首周仅 550 万美元：社交网络续集扑街，「科技巨头内幕」题材降温",
          en: "'Social Reckoning' opens to just $5.5M: the tech-insider genre cools off",
          tag: "电影 · 口碑",
          date: "10-11",
          source: "Gold Derby / 环球时报",
          url: "https://www.goldderby.com/film/2026/other-mommy-social-reckoning-weekend-box-office/",
          why: "索金编剧导演 + 杰瑞米·斯特朗，却只有当年《社交网络》的 1/4 开画。同题材连发导致审美疲劳，制片人选题要避开扎堆。",
          whyEn: "Sorkin wrote and directed, Jeremy Strong stars, yet the open was 1/4 of The Social Network — same-theme saturation is real; avoid crowd-piling in development."
        },
        {
          title: "纽约 Q3 制作支出同比 +87% 至 16.1 亿美元，即将反超加州（17.6 亿美元，+17%）",
          en: "NY Q3 production spend +87% YoY to $1.61B, about to overtake California ($1.76B, +17%)",
          tag: "产业 · 制作",
          date: "10-15",
          source: "The Hollywood Reporter / ProdPro",
          url: "https://www.hollywoodreporter.com/business/business-news/new-york-california-hollyood-production-1236730758/",
          why: "外景资源、片厂基建（同比 +43%）、季播剧常驻让纽约成为制作腹地，选拍摄地时要重新算成本账。",
          whyEn: "Location assets, +43% studio infrastructure growth and recurring seasons make NY a production hub — re-run the cost math when scouting locations."
        },
        {
          title: "Luminate 十月绿灯潮：齐薇格《A Woman in the Sun》、克鲁尼×贝宁《In Love》、娜奥米·沃茨《Margot & Rudi》、斯威尼《The Housemaid's Secret》",
          en: "Luminate October greenlights: Zellweger's 'A Woman in the Sun', Clooney×Bening's 'In Love', Watts' 'Margot & Rudi', Sweeney's 'The Housemaid's Secret'",
          tag: "电影 · 绿灯",
          date: "10-01",
          source: "Luminate",
          url: "https://luminatedata.com/blog/luminate-film-tv-greenlit-films-october-2026/",
          why: "黑熊、Artists Equity、Smokehouse 等独立制片方批量绿灯：传记、文学改编、系列续作是当前北美最主流的绿灯方向。",
          whyEn: "Black Bear, Artists Equity, Smokehouse and others greenlit in bulk: biopics, literary adaptations and franchise continuations dominate North American development."
        },
        {
          title: "昆汀 × 芬奇《Cliff Booth 的进一步误入歧途》AFI Fest 首映 17 分钟，11-25 IMAX 限定两周、12-23 Netflix 上线",
          en: "Tarantino × Fincher's 'Further Misadventures of Cliff Booth' bows 17-min at AFI Fest; IMAX 2-week window Nov 25, Netflix Dec 23",
          tag: "电影 · 发行",
          date: "10-23",
          source: "Hollywood Record",
          url: "https://hollywoodrecord.com/the-further-mis-adventures-of-cliff-booth-unveiled-at-afi-fest-2026",
          why: "Netflix 罕见采用「IMAX 两周限定 + 流媒体」双窗口，发行策略信号比片本身更值得记。",
          whyEn: "Netflix's rare 'IMAX limited run + streaming' dual window is a distribution signal worth more than the film itself."
        },
        {
          title: "《通城秋暴》国家电影局立项：纪念秋收起义 100 周年，总投资 1000 万，10 月开机",
          en: "'Tongcheng Autumn Storm' approved by China Film Bureau: ¥10M budget for the Autumn Harvest Uprising centenary, shooting in October",
          tag: "电影 · 立项",
          date: "10-10",
          source: "今日头条",
          url: "https://www.toutiao.com/article/7692442984185119283",
          why: "红色献礼片典型结构：党史背书 + 双线叙事 + 渠道联动，研究其融资与出品结构对理解主旋律项目很有价值。",
          whyEn: "A typical tribute-film structure: party-history backing + dual narrative + channel synergy — a useful case for understanding mainstream-project financing."
        },
        {
          title: "《羊城烈爆》11 月 1 日开机：冯小宁总导演，聂远、江一燕领衔",
          en: "'Yangcheng Inferno' starts Nov 1: Feng Xiaoning directing, Nie Yuan & Jiang Yiyan starring",
          tag: "电影 · 开机",
          date: "10-15",
          source: "广州日报大洋网",
          url: "https://news.dayoo.com/gzrbrmt/202610/15/170636_55013160.htm",
          why: "地方国资 + 头部导演 + 国民演员的主旋律打法，是华南大制作班底搭建的完整样本。",
          whyEn: "Local state capital + top director + national actors — a complete sample of southern China's blockbuster crew-building playbook."
        },
        {
          title: "矿难题材公益院线《枯井》10 月初宁夏开机，成家班团队加盟",
          en: "Mine-disaster public-welfare film 'The Dry Well' starts in Ningxia in early Oct, with Jackie Chan's stunt team",
          tag: "电影 · 开机",
          date: "10-12",
          source: "新浪",
          url: "https://www.sina.cn/news/detail/5353203027413840.html",
          why: "灾后重建题材 + 动作团队跨界 + 文旅拍摄地，观察公益院线的成本结构与资源置换方式。",
          whyEn: "Disaster-recovery subject + stunt-team crossover + filming-location tourism: watch how public-welfare features structure costs and resource swaps."
        },
        {
          title: "《妈走了，你怎么办》广州开机：一条评论驱动的「不婚不育」议题开发路径",
          en: "'What Will You Do When Mom's Gone' starts in Guangzhou: a comment-driven path into the 'no-marriage-no-child' issue",
          tag: "电影 · 开发",
          date: "10-08",
          source: "网易",
          url: "https://www.163.com/news/article/L8NAK7O600019UD6.html",
          why: "从一条评论「她妈走的时候拉着我的手说……我没劝动」长出一部院线片——社会情绪切入点是现实题材的活教材。",
          whyEn: "A feature grew out of one comment — social-emotion entry points are live teaching material for realist development."
        },
        {
          title: "Netflix《伊甸园东》10 月 1 日上线：斯坦贝克经典 7 集限定剧，弗洛伦丝·皮尤领衔",
          en: "Netflix's 'East of Eden' (Oct 1): Steinbeck classic as a 7-episode limited series starring Florence Pugh",
          tag: "剧集 · 流媒体",
          date: "10-01",
          source: "Reel Movie Junkie / 今日头条",
          url: "https://reelmoviejunkie.com/streaming/movies-tv-shows-streaming-this-month",
          why: "诺奖文学 + 一线卡司 + 限定剧一次放完：这是流媒体 Q4 的奖项型打法，也是文学改编的当代模板。",
          whyEn: "Nobel literature + A-list cast + all-at-once limited series: the Q4 awards playbook and the modern template for literary adaptation."
        },
        {
          title: "Prime Video《嘉莉》弗拉纳根版 10 月 7 日全 8 集上线：斯蒂芬·金恐怖剧集化",
          en: "Prime Video's Flanagan 'Carrie' (Oct 7, all 8 episodes): Stephen King horror goes serialized",
          tag: "剧集 · 流媒体",
          date: "10-07",
          source: "Reel Movie Junkie",
          url: "https://reelmoviejunkie.com/streaming/movies-tv-shows-streaming-this-month",
          why: "1976 年电影几乎是不可碰的经典，弗拉纳根用「剧集空间 + 社交媒体时代改写」破局，改编方法论值得拆解。",
          whyEn: "The 1976 film felt untouchable; Flanagan cracks it with series space plus a social-media-era rewrite — an adaptation methodology worth dissecting."
        },
        {
          title: "Disney+《幻视任务》10 月 14 日开播：保罗·贝坦尼 + 詹姆斯·斯派德，旺达幻视三部曲终章",
          en: "Disney+ 'Vision Quest' premieres Oct 14: Paul Bettany + James Spader, closing the WandaVision trilogy",
          tag: "剧集 · 流媒体",
          date: "10-14",
          source: "Memorable TV / Sortiraparis",
          url: "https://findthismovie.com/?p=97695",
          why: "每周一集的拉长式排播把 8 集做成 7 周话题；漫威用配角 IP 续命，观众留存逻辑比单部剧更重要。",
          whyEn: "Weekly rollout stretches 8 episodes into 7 weeks of chatter; Marvel keeps momentum with side characters — retention logic beats single-season quality."
        },
        {
          title: "Peacock《水晶湖》10 月 15 日上线：十三号星期五前传，琳达·卡德里尼饰帕梅拉",
          en: "Peacock's 'Crystal Lake' (Oct 15): Friday the 13th prequel with Linda Cardellini as Pamela",
          tag: "剧集 · 流媒体",
          date: "10-15",
          source: "Reel Movie Junkie / 今日头条",
          url: "https://reelmoviejunkie.com/streaming/movies-tv-shows-streaming-this-month",
          why: "万圣季恐怖 IP 前传集中投放（周五 13、嘉莉、德克斯特同月），档期与类型捆绑策略一目了然。",
          whyEn: "Horror-IP prequels cluster in October (Friday 13th, Carrie, Dexter same month) — release-window and genre bundling strategy at a glance."
        },
        {
          title: "Paramount+《德克斯特：重生》第二季 10 月 30 日上线：迈克尔·C·豪尔回归",
          en: "Paramount+ 'Dexter: Resurrection' S2 premieres Oct 30: Michael C. Hall returns",
          tag: "剧集 · 流媒体",
          date: "10-30",
          source: "Reel Movie Junkie",
          url: "https://reelmoviejunkie.com/streaming/movies-tv-shows-streaming-this-month",
          why: "万圣节前夜上线 + 布莱恩·考克斯/丹·史蒂文斯新反派，老 IP 复活季的档期巧思。",
          whyEn: "Halloween-eve launch plus Brian Cox and Dan Stevens as new villains — clever windowing for legacy-IP revivals."
        },
        {
          title: "十月续订潮：Reacher 衍生剧《Neagley》、漫威丧尸、终末名单 S2 提前续订",
          en: "October renewal wave: Reacher spinoff 'Neagley', Marvel Zombies, 'The Terminal List' S2 all early-renewed",
          tag: "剧集 · 续订",
          date: "10-19",
          source: "ComingSoon.net / TV Guide",
          url: "https://findthismovie.com/?p=97695",
          why: "续订潮全押已知宇宙（衍生/动画/系列），平台在收缩期只保「确定性」——项目立项时要理解买家的风险偏好。",
          whyEn: "Every renewal bets on known universes (spinoffs/animation/series) — platforms only back certainty in a contraction; understand buyer risk appetite when packaging projects."
        }
      ],
      aifilm: [
        {
          title: "博纳《计划外：广寒行动》10 月 16 日开机：「智能原生」AI 覆盖世界观、概念美术、分镜、实拍辅助、后期合成全流程",
          en: "Bona's 'Operation Moonfall' starts Oct 16: 'AI-native' pipeline covers worldbuilding, concept art, storyboards, live-action assist and post-compositing",
          tag: "生产管线",
          date: "10-16",
          source: "飞天影业 / 中国电影报",
          url: "https://www.feitianyingye.com/2026/1016/8290.shtml",
          why: "博纳「AI 电影矩阵」第二部长片：4 月立项、10 月开机，「智能原生」把前期筹备显著提速——生产节奏本身就在改变。",
          whyEn: "Bona's second AI-matrix feature: greenlit in April, shooting in October — 'AI-native' visibly compresses pre-production. Production rhythm itself is changing."
        },
        {
          title: "兜有影业《72小时续命》10 月 16 日开机：AI 全流程参与，从儿童剧转向院线赛道",
          en: "Douyou's '72-Hour Life Extension' starts Oct 16 with full AI involvement, moving from kids' drama to theatrical",
          tag: "生产管线",
          date: "10-16",
          source: "深圳新闻网",
          url: "https://www.sznews.com/",
          why: "中小厂 + AI 全流程参与是当下最真实的工业化路径，观察其预算结构对独立制片人最有参考价值。",
          whyEn: "Small-mid studio + full AI pipeline is today's most realistic industrialization path; its budget structure is the most useful reference for independent producers."
        },
        {
          title: "博纳《三星堆：未来往事》AI 超写实院线电影定档 10 月 23 日",
          en: "Bona's 'Sanxingdui: A Future Past' — AI photoreal theatrical feature, dated Oct 23",
          tag: "AI 院线",
          date: "10-08",
          source: "上海证券报 / 网易",
          url: "https://www.163.com/dy/article/L8NFQHFJ0552C2FY.html",
          why: "AI 超写实长片第一次进入院线常规档期，口碑与票房将决定资本对 AI 电影的态度。",
          whyEn: "The box office and reviews of China's first major-studio AI photoreal feature will define the market's attitude toward AI films — mandatory reading for every producer."
        },
        {
          title: "10 月 AI 融资 59 轮合计 257 亿美元，新融资 56.8 亿美元",
          en: "October AI funding: 59 rounds / $25.7B total, with $5.68B in fresh raises",
          tag: "资本",
          date: "10-21",
          source: "AI Funding Tracker",
          url: "https://dailyaibrief.com/categories/funding-mergers-acquisitions",
          why: "行业吸金仍在加速，AI 影视/音频公司的弹药决定了未来 12 个月的供给端，制作人应该按月跟踪。",
          whyEn: "Funding keeps accelerating; the ammunition of AI film/audio companies decides next-12-month supply — producers should track it monthly."
        },
        {
          title: "AI 电影《Gods Don't Give Gifts》预告片发布并启动冲奥：AI 生成影像进入奖季叙事",
          en: "AI film 'Gods Don't Give Gifts' drops a trailer and starts an awards push: AI imagery enters the season narrative",
          tag: "奖项",
          date: "10-09",
          source: "Variety（Simkins Film & TV Briefing 转引）",
          url: "https://www.simkins.com/news/film-tv-briefing-friday-9-october-2026",
          why: "AI 电影开始走学院公关路线，行业对「AI 是否算创作」的规则博弈进入白热化。",
          whyEn: "AI films are now running academy campaigns — the rule-making fight over whether AI counts as authorship is heating up."
        },
        {
          title: "《人造》纽约电影节亮相：安德鲁·加菲尔德饰演奥特曼，还原 OpenAI 2023 罢免风波",
          en: "'The Artificial' debuts at NYFF: Andrew Garfield plays Altman in the 2023 OpenAI ouster drama",
          tag: "AI 题材片",
          date: "10-13",
          source: "环球时报 / 网易",
          url: "https://www.163.com/dy/article/L93VVEED05504DOQ.html",
          why: "好莱坞开始把 AI 产业本身拍成剧情片——AI 的公众形象正在被影像重新定义，制片人应关注这股题材洪流。",
          whyEn: "Hollywood is turning the AI industry itself into drama — AI's public image is being redefined on screen; producers should watch this genre wave."
        }
      ],
      music: [
        {
          title: "ElevenLabs 估值 220 亿美元：3 亿美元员工回购 + 视频配乐一键生成上线",
          en: "ElevenLabs at $22B: $300M employee buyback + one-click soundtrack generation live",
          tag: "AI 音频",
          date: "10-18",
          source: "文趣文化 / AI Startup Edge",
          url: "https://aistartupedge.com/latest-ai-news-october-2026",
          why: "音频 AI 头部估值半年翻倍，视频配乐一键生成直接冲击「临时配乐」的采购流程，音乐选择的效率边界被改写。",
          whyEn: "The audio-AI leader doubled its valuation in half a year; one-click sync-scoring directly disrupts the temporary-music procurement workflow."
        },
        {
          title: "Apple 收购音频分离工具 Samplab：大厂入场音乐制作工具链",
          en: "Apple acquires stem-separation tool Samplab: big tech enters the music-production toolchain",
          tag: "音乐工具",
          date: "10-19",
          source: "Daily AI Brief",
          url: "https://dailyaibrief.com/categories/funding-mergers-acquisitions",
          why: "乐器分轨、人声分离被 Apple 收编，专业音频制作门槛继续下移，制作人可用的素材处理手段更多。",
          whyEn: "Stem split and vocal separation get absorbed by Apple; pro-audio barriers keep falling, giving producers more material-processing options."
        },
        {
          title: "Apple Music 将推「Made with AI」标签：AI 音乐标识体系全面铺开",
          en: "Apple Music rolls out the 'Made with AI' label: the AI-music attribution system goes platform-wide",
          tag: "版权标识",
          date: "10-19",
          source: "文趣文化",
          url: "https://www.wenqu123.com/news-category-10.html",
          why: "平台级 AI 标识落地，直接改写音乐署名、授权与分发规则——做音乐选择必须先懂这套新标识体系。",
          whyEn: "Platform-level AI labeling rewrites attribution, licensing and distribution — you must know this new labeling system before making music choices."
        },
        {
          title: "音著协亮出 AI 训练用歌集体管理方案，一揽子许可能否破僵局",
          en: "China's MCSC unveils collective-management terms for AI training songs: can blanket licensing break the deadlock?",
          tag: "版权授权",
          date: "10-17",
          source: "文趣文化",
          url: "https://www.wenqu123.com/news-category-10.html",
          why: "AI 训练用歌的集体管理方案是商用授权合规化的关键节点，直接影响未来项目里能用什么歌、怎么付钱。",
          whyEn: "Collective licensing for AI-training music is the key compliance node — it determines which songs you can use and how you pay."
        },
        {
          title: "Suno 上线共享工作区与可共享模型：协作式 AI 音乐创作",
          en: "Suno ships shared workspaces and shareable models: collaborative AI music-making",
          tag: "AI 工具",
          date: "10-16",
          source: "文趣文化",
          url: "https://www.wenqu123.com/news-category-10.html",
          why: "从单人生成到团队协作，Suno 的产品形态正在向「音乐生产工具」演进——这是我下一阶段测评的核心对象。",
          whyEn: "From solo generation to team collaboration, Suno is evolving into a music-production tool — the core subject of my next evaluation round."
        },
        {
          title: "AI 辅助歌曲冲上韩国主流榜单第三，人声来自 Suno",
          en: "An AI-assisted track hits #3 on a mainstream Korean chart, vocals from Suno",
          tag: "AI 音乐",
          date: "10-15",
          source: "文趣文化",
          url: "https://www.wenqu123.com/news-category-10.html",
          why: "AI 人声第一次进入主流音源榜前列，「AI 辅助」与「AI 生成」的边界讨论将成为行业常态。",
          whyEn: "AI vocals reach the upper mainstream charts for the first time; the AI-assisted vs AI-generated boundary becomes the industry's new normal."
        },
        {
          title: "美国首例 AI 音乐流媒体欺诈案宣判：获刑 18 个月",
          en: "First U.S. AI music-streaming fraud case sentenced: 18 months in prison",
          tag: "合规",
          date: "10-08",
          source: "文趣文化",
          url: "https://www.wenqu123.com/news-category-10.html",
          why: "用 AI 批量生成 + 机器人刷播的欺诈路径被司法定性，行业红线正式划下，做 AI 音乐必须避开这条线。",
          whyEn: "The fraud path of mass-generated AI + bot streams is now criminalized; the red line is drawn — AI music must stay clear of it."
        },
        {
          title: "索尼音乐申请下架 26 万首 AI 仿冒曲：大厂版权防御战升级",
          en: "Sony Music moves to takedown 260K AI soundalikes: majors escalate the copyright defense",
          tag: "版权",
          date: "10-06",
          source: "文趣文化",
          url: "https://www.wenqu123.com/news-category-10.html",
          why: "「仿冒曲」成为音乐行业头号公敌，版权方防御策略决定 AI 生成内容的生存空间。",
          whyEn: "Soundalikes are the industry's #1 enemy; label defense strategy defines how much room AI-generated content gets."
        },
        {
          title: "Web2AI 调研：75% 听众无法区分 Suno/Udio 与真人 demo；Suno 月活破 1000 万",
          en: "Web2AI: 75% of listeners can't tell Suno/Udio from human demos; Suno passes 10M MAU",
          tag: "行业数据",
          date: "10-24",
          source: "Web2AI",
          url: "https://www.wenqu123.com/news-category-10.html",
          why: "「听不出区别」是 AI 音乐进入制作流程的底层依据——但对配乐工种而言，情感与版权仍是真人不可替代的部分。",
          whyEn: "'Can't hear the difference' is the bottom-line evidence for AI music entering production — yet emotion and rights still keep humans irreplaceable for scoring."
        }
      ]
    }
  ],

  watchlist: [
    {
      type: "影视公司",
      name: "博纳影业",
      signal: "AI 电影矩阵 · 主旋律",
      focus: "《三星堆：未来往事》AI 院线定档、《计划外》智能原生开机",
      note: "中国最早把 AI 写进长片生产流程的头部公司，其 AI 矩阵进度 = 行业风向标。"
    },
    {
      type: "影视公司",
      name: "兜有影业",
      signal: "AI 全流程",
      focus: "《72小时续命》开机",
      note: "中小厂 AI 全流程参与的代表，成本结构对独立制片人最有参考价值。"
    },
    {
      type: "AI 音频",
      name: "ElevenLabs",
      signal: "估值 $220 亿",
      focus: "视频配乐一键生成 · 员工回购",
      note: "音频 AI 估值天花板，产品线直接命中配乐工种。"
    },
    {
      type: "AI 音乐",
      name: "Suno",
      signal: "月活 1000 万+",
      focus: "共享工作区 · 可共享模型",
      note: "AI 音乐用户规模第一，下一阶段横向测评的核心对象。"
    },
    {
      type: "AI 音乐",
      name: "Udio",
      signal: "榜单级 AI 人声",
      focus: "Suno 竞品动态",
      note: "与 Suno 一起构成 AI 音乐双雄，测评必须成对比较。"
    },
    {
      type: "平台",
      name: "Apple Music",
      signal: "Made with AI 标签",
      focus: "Samplab 收购 · 标识体系",
      note: "平台级规则制定者，AI 标识体系直接影响分发与授权。"
    },
    {
      type: "版权机构",
      name: "音著协",
      signal: "AI 训练用歌集体管理",
      focus: "一揽子许可方案",
      note: "中国 AI 音乐授权的规则节点，一揽子许可能否落地决定商用合规路径。"
    }
  ]
};
