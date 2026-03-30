"use strict";

const ISO_CONTENT = [
    `<div class="page cover" style="padding: 0; background: #020617;">
        <div style="height: 100%; width: 100%; position: relative; overflow: hidden;">
            <img src="assets/rit_cover.png" style="width: 100%; height: 65%; object-fit: cover;">
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 45%;
                        background: linear-gradient(transparent, #020617 80%); padding: 2rem 3.5rem;
                        display: flex; flex-direction: column; justify-content: flex-end;">
                <h1 style="font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 900; line-height: 1.1; color: #fff; text-shadow: 0 4px 20px rgba(0,0,0,0.8); margin-bottom: 0.5rem;">RIT 救助技術<br>實戰指引</h1>
                <div style="border-top: 4px solid var(--primary); margin-top: 0.8rem; padding-top: 0.8rem;">
                    <p style="font-size: clamp(0.9rem, 2vw, 1.2rem); font-weight: 700; color: #fff; margin-bottom: 0;">新竹縣政府消防局 RIT 數位教材</p>
                </div>
            </div>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">1. 組織與安全之道</h2>
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: #b91c1c;">【局長的話】</h2>
        <div class="quote-box" style="border: 2px solid #2563eb; background: #eff6ff; padding: 1rem;">
            <p style="font-size: 1.15rem; line-height: 1.6; color: #1e293b; font-weight: 500; margin: 0;">
                「消防不僅是勇敢，更是專業。在面對零能見度的高壓場域，經驗傳承與標準化訓練是守護同仁的唯一堡壘。讓每一位兄弟都能安全走出火場，是我們永不妥協的承諾。」
            </p>
            <p style="text-align: right; font-weight: 700; font-size: 1rem; margin-top: 0.5rem;">—— 局長 陳中振</p>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: #b91c1c;">【職安科科長的話】</h2>
        <div class="quote-box" style="border: 2px solid var(--primary); background: #fef2f2; padding: 1rem;">
            <p style="font-size: 1.15rem; line-height: 1.6; color: #1e293b; font-weight: 500; margin: 0;">
                「作為全台首創的職安專責單位，我們的核心目標是建立科學化與高效率的救援體系。RIT 機制不僅是救人，更是建立一道系統性的最後保線。」
            </p>
            <p style="text-align: right; font-weight: 700; font-size: 1rem; margin-top: 0.5rem;">—— 職安科科長 廖耿輝</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">2. FASTboard：移動救援平台</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1rem;">FASTboard 針對極限環境開發，設計邏輯圍繞「狹小空間效率」與「患者安全」。</p>
        <table style="font-size: 1.05rem; line-height: 1.45; width: 100%; border-collapse: collapse;">
            <tr style="background: #1e293b; color: #fff;"><th style="padding: 8px;">特徵</th><th style="padding: 8px;">規格/設計邏輯</th></tr>
            <tr><td style="padding: 8px; font-weight: bold;">尺寸</td><td style="padding: 8px;">45"×18"。利於在狹窄轉角進行低半徑轉彎。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">把手</td><td style="padding: 8px;">4吋離地、8吋寬。確保穿戴厚重手套時可多人協作。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">織帶</td><td style="padding: 8px;">Kevlar 芳綸織帶 (5500磅)。抗火場高溫。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">視覺</td><td style="padding: 8px;">光致發光 (Photoluminescent)。全黑環境下提供定位。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">幾何</td><td style="padding: 8px;">45度斜角。對抗翻滾並輔助跨越障礙物。</td></tr>
        </table>
        <div class="quote-box" style="margin-top: 1rem; border-left: 4px solid #2563eb;">
            <p style="font-size: 0.95rem; margin: 0;"><strong>教官筆記：</strong>板體錐形設計與底部導軌是為了在樓梯與雜物堆上實現「機械利益」最大化。</p>
        </div>
        <img src="assets/rit_fastboard.png" style="width: 100%; border-radius: 8px; margin-top: 1.2rem; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.6rem; margin-bottom: 1.2rem;">3. 組件功能與 Reset 整備程序</h2>
        <div class="card" style="margin-bottom: 1.2rem;">
            <h4>核心組件</h4>
            <ul style="font-size: 1.05rem; line-height: 1.5;">
                <li><strong>拖拉系統：</strong>內建 24 呎結繩，每 12-15 吋設有結節。</li>
                <li><strong>吊掛吊索 (Bridles)：</strong>色彩管理。<strong>紅色對接頭部、藍色對接底部</strong>。</li>
            </ul>
        </div>
        <h4 style="color: #b91c1c; margin-bottom: 0.8rem;">Ready-State Maintenance (整備程序)</h4>
        <div style="font-size: 1.1rem; line-height: 1.6;">
            <p>1. <strong>織帶收納：</strong>拉直後「小幅度捏擠 (Pinch)」，順著開口塞入。</p>
            <p>2. <strong>Tri-link 定位：</strong>三角連結環平放後向上折入保護槽。</p>
            <p>3. <strong>掛勾防震：</strong>大勾環塞入專用魔鬼氈帶，防止晃動。</p>
        </div>
        <div class="quote-box" style="margin-top: 1.5rem; background: #fffbe9; border-left: 5px solid #f59e0b;">
            <p style="font-size: 1rem; margin: 0;"><strong>PRO TIP：</strong>器材整備度 (Ready-State) 直接決定了發生 Mayday 時的反應速度。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">4. RIT 核心戰技：打包與收納</h2>
        <p style="font-size: 1.1rem;">在零能見度下，成員必須展現極致的肌肉記憶。</p>
        <div class="card" style="border-left-color: #2563eb;">
            <h4>單人打包與「肢體收納」戰術</h4>
            <ol style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>高位放置：</strong>版體位置應高於受困者，確保重心偏下。</li>
                <li><strong>掃動翻轉 (The Sweep)：</strong>利用 SCBA 氣瓶作為「傾斜支點」。</li>
                <li><strong>肢體收納 (Packaging Arms)：</strong>手部橫跨並向前掃過受困者肘部，將受困者手臂完全收納於板體內，徹底排除「掛礙風險 (Snag hazards)」。</li>
            </ol>
        </div>
        <h4 style="margin-top: 1.5rem;">固定系統之強度選擇</h4>
        <p style="font-size: 1.1rem; line-height: 1.5;">
            ● <strong>Lashing System：</strong>勾環跨過肩部，避開面罩與氣瓶。<br>
            ● <strong>連結點提示：</strong>優先連結至<strong>三角連結環 (Tri-link)</strong>，其強度遠高於公牛環。
        </p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">5. 垂直與水平位移技術</h2>
        <h4 style="color: #b91c1c;">垂直 Lift-out 關鍵安全細節</h4>
        <div class="card" style="font-size: 1.1rem;">
            <p><strong>Handle Wrap (把手繞繩)：</strong>操作 imperative！拖拉繩在連結系統前，<strong>必須先繞過 FASTboard 前把手</strong>。此動作能鎖定拉力，防止升降時擠壓受困者胸腔。</p>
        </div>
        <h4 style="margin-top: 1.5rem;">Pike and Pivot (矛與軸) 操作邏輯</h4>
        <p style="font-size: 1.1rem; line-height: 1.6;">當板體抵達邊緣準備轉入水平面時：</p>
        <ol style="font-size: 1.1rem; line-height: 1.6;">
            <li><strong>鎖定系統：</strong>暫停主拉力，鎖定安全。</li>
            <li><strong>切換機械利益 (MA)：</strong>將拉力從頭部切換至「藍色吊索 (Blue Bridal)」。</li>
            <li><strong>軸心旋轉：</strong>由底部施力，進行<strong> Pivot</strong>，確保受困者平順推入平台。</li>
        </ol>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">6. 科技輔助搜索戰術</h2>
        <h4>Cruant Autoroll V6 Max</h4>
        <p style="font-size: 1.1rem;">在濃煙中，失去搜索繩等於失去生存希望。</p>
        <ul style="font-size: 1.1rem; line-height: 1.6;">
            <li><strong>AutoRoll 邏輯：</strong>1.3M 鎖定與 6M 延伸，減少繩索垂墜。</li>
            <li><strong>實體連結：</strong>搜索員必須掛載於身，確保不走失。</li>
        </ul>
        <h4 style="margin-top: 1rem;">TIC 熱顯像儀「三點掃描法」</h4>
        <div class="card" style="font-size: 1.05rem; margin-bottom: 1rem; border-left: 5px solid #b91c1c;">
            <strong>1. 天花板：</strong>判斷火勢流向、是否有閃燃風險。<br>
            <strong>2. 中性帶/窗戶：</strong>判斷逃生出口與通風狀態。<br>
            <strong>3. 地面：</strong>定位受困者、搜索障礙物。
        </div>
        <img src="assets/rit_tic_search.png" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">7. TIC 空間搜索決策流程卡</h2>
        <div class="mermaid" style="font-size: 1.5rem; padding: 1.5rem; background: #fff; border-radius: 12px;">
            graph TD
                A[啟動 TIC 空間掃描] --> B{環境能見度?}
                B -->|零能見度| C[切換高靈敏度模式]
                B -->|低能見度| D[搜尋熱熱源與排氣流向]
                C --> E[360度上下左右環繞掃描]
                D --> E
                E --> F{發現目標?}
                F -->|是| G[雷射定位目標位址]
                F -->|否| H[與搜索繩 AutoRoll 配合推進]
                G --> I[彙整回報: 目標數量/特徵]
                H --> J[檢查中性帶高度與熱積聚]
                I --> K[引導 RIT 小組進入打包]
                classDef danger fill:#f88,stroke:#f00,stroke-width:2px,color:#fff;
                classDef action fill:#44f,stroke:#00a,stroke-width:2px,color:#fff;
                class G,I,K danger;
                class C,D,E,H action;
        </div>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">8. FASTboard 救援打包決策卡</h2>
        <div class="mermaid" style="font-size: 1rem; padding: 1rem; background: #fff; border-radius: 12px;">
            graph TD
                A[接觸受困消防員] --> B{姿勢判定?}
                B -->|臉朝下 Face Down| C[掃動翻轉 The Sweep]
                B -->|臉朝上 Face Up| D[直接執行高位放置]
                C --> E[執行肢體收納 Sweep Forward]
                D --> E
                E --> F[套入 Lashing System 固定]
                F --> G{位移路徑?}
                G -->|水平拖拉| H[連接 Tri-link 連結點]
                G -->|垂直升降| I[執行 Handle Wrap 把手繞繩]
                I --> J[連接 紅色吊索 Red Bridal]
                H --> K[執行 RIT 動態撤出]
                J --> K
                classDef focus fill:#f96,stroke:#f60,stroke-width:2px;
                class C,E,I focus;
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">9. 職安基石：耗氧監測與防護</h2>
        <div class="card" style="margin-bottom: 1.5rem;">
            <h4>耗氧量監測</h4>
            <p style="font-size: 1.1rem; line-height: 1.6;">
                高強度作業下，氣壓消耗約為 <strong>7-10 bar/min</strong>。<br>
                <strong>操作指令：</strong>根據個人測試數據設定「退路警戒值」，透過有意識的呼吸調整延長生命線。
            </p>
        </div>
        <h4>脂溶性污染物 (Lipid-soluble) 防護</h4>
        <p style="font-size: 1.1rem; line-height: 1.6;">
            火場微粒極易滲透裝備與皮膚。<strong>任務結束後嚴禁僅以清水沖洗</strong>。<br>
            <strong>SOP：</strong>必須使用專業洗劑進行深層除汙，確保同仁健康。
        </p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">10. RIT 戰術關鍵心法 (SOP)</h2>
        <div class="card" style="margin-bottom: 1rem; border-left: 6px solid #b91c1c; background: #fff1f2;">
            <strong style="font-size: 1.15rem;">1. 求救通報：LUNAR</strong><br>
            • <strong>L</strong>ocation | <strong>U</strong>nit | <strong>N</strong>ame | <strong>A</strong>ir | <strong>R</strong>esources
        </div>
        <div class="card" style="margin-bottom: 1rem; border-left: 6px solid #2563eb; background: #eff6ff;">
            <strong style="font-size: 1.15rem;">2. 濃煙判讀：V-V-C-D</strong><br>
            判斷火場穩定性 (Volume, Velocity, Color, Density)。<br>
            • 煙速湍急、色黑亮 ➔ <strong>即將閃燃</strong>。
        </div>
        <div class="card" style="margin-bottom: 1rem; border-left: 6px solid #059669; background: #ecfdf5;">
            <strong style="font-size: 1.15rem;">3. 自我管理：M.E.D.I.C</strong><br>
            • <strong>M</strong>onit | <strong>E</strong>valuate | <strong>D</strong>evelop | <strong>I</strong>mplement | <strong>C</strong>ommunicate
        </div>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">11. A.W.A.R.E. 救援優先序</h2>
        <div class="mermaid" style="font-size: 1.1rem; padding: 1.5rem; background: #fff; border-radius: 12px;">
            graph TD
                A[接觸受困消防員] --> B(A - Air: 建立冗餘供氣)
                B --> C(W - Water: 建立防禦水線)
                C --> D(A - A Radio: 確保獨立通訊頻道)
                D --> E(R - Radio: 維持與 IC 定時與持續通訊)
                E --> F(E - Extrication: 最終移出程序)
                style B fill:#fee2e2,stroke:#ef4444
                style C fill:#dbeafe,stroke:#3b82f6
                style D fill:#fef3c7,stroke:#f59e0b
                style F fill:#dcfce7,stroke:#22c55e
        </div>
        <div style="text-align: left; margin-top: 1.5rem; font-size: 1rem; line-height: 1.5;">
            <p>● <strong>建立空氣：</strong>接觸後立即檢查受困者面罩狀態與殘壓。<br>
            ● <strong>建立水線：</strong>在撤離路徑上佈署保護性水線，確保「退路安全」。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">12. 定向搜索模式 Oriented Search</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1rem;">確保「領航員」永遠不離開搜索繩或牆壁，防範團隊入迷。</p>
        <div class="card" style="background: #020617; color: #fff; padding: 1.2rem;">
            <ul style="line-height: 1.8;">
                <li><strong>領航員 (Oriented Member)：</strong>守住門口或搜索繩，維持方位。</li>
                <li><strong>搜索員 (Searcher)：</strong>以領航員為圓心，進行扇形搜索。</li>
                <li><strong>團隊聯繫：</strong>成員間必須維持「實體接觸」或「聲音聯繫」。</li>
                <li><strong>導航基準：</strong>利用水線公母頭判斷前進與後退方向。</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">13. 氣壓管理：1/3 規則與 NUC</h2>
        <div class="card" style="border-left-color: #f59e0b; margin-bottom: 1.5rem;">
            <h4>1/3 氣體管理規則</h4>
            <ul style="font-size: 1.1rem; line-height: 1.8;">
                <li><strong>1/3 入室搜索：</strong>抵達目標並進行定位。</li>
                <li><strong>1/3 緊急撤離：</strong>將自救與隊友撤離至安全區。</li>
                <li><strong>1/3 最終預留：</strong>應對不可預見的延誤或阻礙。</li>
            </ul>
        </div>
        <h4 style="color: #b91c1c;">NUC (Never Under Center) 心法</h4>
        <p style="font-size: 1.1rem; line-height: 1.6;">
            <strong>絕對紅線：</strong>氣壓絕對不可低於警戒中心點。一旦抵達臨界值，不論搜索進度，<strong>必須強制撤離</strong>。這是對隊友生命的最底線尊重。
        </p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">14. Mayday：自我救助戰術</h2>
        <div class="card" style="margin-bottom: 1.5rem;">
            <h4 style="color: #2563eb;">游泳通過 (Swim Through)</h4>
            <p style="font-size: 1.1rem; line-height: 1.6;">
                面對雜亂電線或狹窄縫隙時，手部應模仿游泳動作，順著背板與氣瓶邊緣向後撥開障礙物，保持身体重心向前推進。
            </p>
        </div>
        <div class="card">
            <h4 style="color: #059669;">SCBA 部分脫卸技術</h4>
            <p style="font-size: 1.1rem; line-height: 1.6;">
                在極狹窄空間中，可鬆開單側肩帶，將氣瓶由背部轉至側前方。<strong>注意：</strong>全程嚴禁脫開面罩與肺閥，維持供氣連續性。
            </p>
        </div>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2.2rem; color: #b91c1c;">15. 結語：從技術到承諾</h2>
        <p style="font-size: 1.25rem; line-height: 1.8; margin-top: 1.5rem;">
            RIT 不是單項器材的展示，而是一場關於「消防生存文化」的深層改革。
        </p>
        <div class="quote-box" style="background: #020617; color: #fff; width: 100%; padding: 2rem;">
            <p style="font-size: 1.4rem; font-weight: 900; margin: 0;">「在最艱難的時刻，把兄弟帶回家。」</p>
        </div>
        <p style="text-align: center; font-weight: 700; margin-top: 3rem;">這不僅是技術的訓練，更是我們對彼此最深重的承諾。</p>
        <p style="text-align: center; color: #94a3b8; font-size: 1rem; margin-top: 2rem;">新竹縣政府消防局 實作技術小組 敬製</p>
    </div>`,
    `<div class="page cover" style="padding: 0; background: #020617; display: flex; align-items: center; justify-content: center;">
        <div style="text-align: center; color: #fff; padding: 2rem;">
            <div style="width: 80px; height: 8px; background: var(--primary); margin: 0 auto 2rem;"></div>
            <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">安全歸隊，唯一的歸途。</h3>
            <p style="color: #94a3b8;">Hsinchu County Fire Bureau</p>
        </div>
    </div>`
];

const TOTAL_PAGES = ISO_CONTENT.length;

const ISO_APP = {
    flipBook: null,
    isMobile: false,
    isFlipping: false,
    selectors: {
        book: '#book',
        pageInfo: '#pageInfo',
        navItems: '.nav-item',
        prevBtn: '#prevBtn',
        nextBtn: '#nextBtn',
        menuToggle: '#menuToggle',
        closeSidebar: '#closeSidebar',
        appContainer: '.app-container'
    },

    init() {
        this.isMobile = window.innerWidth <= 768;
        if (window.mermaid) {
            window.mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose' });
        }
        this.addSidebarOverlay();
        this.renderContent();
        this.initEngine();
        this.bindEvents();
        this.initMermaid();
        this.updatePageInfo(0);
    },

    addSidebarOverlay() {
        const container = document.querySelector(this.selectors.appContainer);
        if (!container) return;
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.addEventListener('click', () => container.classList.remove('sidebar-open'));
        container.appendChild(overlay);
    },

    renderContent() {
        const container = document.querySelector(this.selectors.book);
        if (!container) return;
        ISO_CONTENT.forEach(html => container.insertAdjacentHTML('beforeend', html));
    },

    initEngine() {
        const element = document.querySelector(this.selectors.book);
        const vw = document.getElementById('book-container').clientWidth;
        const vh = document.getElementById('book-container').clientHeight;
        const config = this.isMobile
            ? { width: vw, height: vh, size: "fixed", minWidth: 1200, showCover: true, useMouseEvents: true, disableFlipByClick: false, flippingTime: 400, maxShadowOpacity: 0.15, usePortrait: true, mobileScrollSupport: true }
            : { width: 650, height: 950, size: "stretch", showCover: true, useMouseEvents: false, disableFlipByClick: true, flippingTime: 800 };

        this.flipBook = new St.PageFlip(element, config);
        this.flipBook.loadFromHTML(document.querySelectorAll('.page'));
    },


    updatePageInfo(pageIndex) {
        const pageInfo = document.querySelector(this.selectors.pageInfo);
        if (pageInfo) pageInfo.textContent = `${pageIndex + 1} / ${TOTAL_PAGES}`;
    },

    initMermaid() {
        if (!window.mermaid) return;
        const targets = document.querySelectorAll('.mermaid:not([data-processed="true"])');
        setTimeout(() => {
            targets.forEach((el, i) => {
                const rect = el.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) return;
                if (!el.id) el.id = 'mermaid-' + Date.now() + '-' + i;
                try { window.mermaid.init(undefined, [el]); } catch (e) { /* skip */ }
                el.setAttribute('data-processed', 'true');
            });
        }, 850);
    },

    bindEvents() {
        const navItems = document.querySelectorAll(this.selectors.navItems);

        this.flipBook.on('flip', (e) => {
            this.updatePageInfo(e.data);
            navItems.forEach(nav => nav.classList.toggle('active', parseInt(nav.dataset.page) === e.data));
            this.initMermaid();
            // Debounce flip lock
            this.isFlipping = true;
            setTimeout(() => { this.isFlipping = false; }, this.isMobile ? 450 : 850);
        });

        const safeFlip = (dir) => {
            if (this.isFlipping) return;
            if (this.flipBook.getState() !== 'read') return;
            dir === 'next' ? this.flipBook.flipNext() : this.flipBook.flipPrev();
        };

        const prevBtn = document.querySelector(this.selectors.prevBtn);
        const nextBtn = document.querySelector(this.selectors.nextBtn);

        // Unified touch+click: use flag to prevent double-fire from touch->click
        let touchFired = false;
        const addBtnEvents = (btn, dir) => {
            btn.addEventListener('touchstart', (e) => { e.preventDefault(); }, { passive: false });
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                touchFired = true;
                safeFlip(dir);
                setTimeout(() => { touchFired = false; }, 300);
            }, { passive: false });
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!touchFired) safeFlip(dir);
            });
        };
        addBtnEvents(prevBtn, 'prev');
        addBtnEvents(nextBtn, 'next');

        // Block StPageFlip drag in the middle 60% on mobile so users can scroll perfectly
        const blockMiddleDrag = (e) => {
            if (!this.isMobile) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const vw = window.innerWidth;
            if (clientX > vw * 0.2 && clientX < vw * 0.8) {
                e.stopPropagation();
            }
        };
        document.querySelectorAll('.page').forEach(page => {
            page.addEventListener('touchstart', blockMiddleDrag, { passive: true });
            page.addEventListener('pointerdown', blockMiddleDrag, { passive: true });
            page.addEventListener('mousedown', blockMiddleDrag, { passive: true });
        });

        navItems.forEach(nav => {
            nav.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(nav.dataset.page);
                if (isNaN(page)) return;
                this.flipBook.flip(page);
                if (this.isMobile) {
                    setTimeout(() => document.querySelector(this.selectors.appContainer).classList.remove('sidebar-open'), 350);
                }
            });
        });

        document.querySelector(this.selectors.menuToggle).onclick = () => document.querySelector(this.selectors.appContainer).classList.add('sidebar-open');
        document.querySelector(this.selectors.closeSidebar).onclick = () => document.querySelector(this.selectors.appContainer).classList.remove('sidebar-open');

        if (this.isMobile) this.initGestureControl();

        // Handle orientation/resize changes
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const wasMobile = this.isMobile;
                this.isMobile = window.innerWidth <= 768;
                if (wasMobile !== this.isMobile) location.reload();
            }, 300);
        });
    },

    initGestureControl() {
        let startX = 0, startY = 0, isSwiping = false;
        const target = document.getElementById('book-container');
        document.body.style.overscrollBehaviorX = 'none';

        target.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isSwiping = false;
        }, { passive: true });

        target.addEventListener('touchmove', (e) => {
            if (e.touches.length > 1) return; // Allow pinch to zoom
            const vw = window.innerWidth;
            // Native free scroll in the middle 60% zone without intercepting horizontal blocks
            if (startX > vw * 0.2 && startX < vw * 0.8) return; 

            const dx = Math.abs(e.touches[0].clientX - startX);
            const dy = Math.abs(e.touches[0].clientY - startY);
            if (dx > dy && dx > 15) {
                isSwiping = true;
                if (e.cancelable) e.preventDefault();
            }
        }, { passive: false });

        target.addEventListener('touchend', (e) => {
            if (document.elementFromPoint(startX, startY)?.closest('.nav-btn, .sidebar, .menu-toggle, .sidebar-overlay')) return;
            if (!isSwiping) return;
            
            const vw = window.innerWidth;
            if (startX > vw * 0.2 && startX < vw * 0.8) return; // Do not custom-flip if touch started in middle zone

            const dx = e.changedTouches[0].clientX - startX;
            if (Math.abs(dx) > 50) {
                if (this.isFlipping) return;
                dx > 0 ? this.flipBook.flipPrev() : this.flipBook.flipNext();
            }
            isSwiping = false;
        }, { passive: true });
    }
};

window.onload = () => ISO_APP.init();