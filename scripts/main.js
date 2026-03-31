"use strict";

const ISO_CONTENT = [
    `<div class="page cover" style="padding: 0; background: #020617;">
        <div style="height: 100%; width: 100%; position: relative; overflow: hidden;">
            <img src="assets/cover.png" style="width: 100%; height: 65%; object-fit: cover;">
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 45%;
                        background: linear-gradient(transparent, #020617 80%); padding: 2rem 3.5rem;
                        display: flex; flex-direction: column; justify-content: flex-end;">
                <h1 style="font-size: clamp(1.8rem, 5vw, 3.2rem); font-weight: 900; line-height: 1.1; color: #fff; text-shadow: 0 4px 20px rgba(0,0,0,0.8); margin-bottom: 0.5rem;">事故安全官<br>實戰指引</h1>
                <div style="border-top: 4px solid var(--primary); margin-top: 0.8rem; padding-top: 0.8rem;">
                    <p style="font-size: clamp(0.9rem, 2vw, 1.2rem); font-weight: 700; color: #fff; margin-bottom: 0;">新竹縣政府消防局 職安科 數位教材</p>
                </div>
            </div>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: #b91c1c;">【局長的話】</h2>
        <div class="quote-box" style="border: 2px solid var(--primary); background: #fef2f2; padding: 1rem; margin-bottom: 1.5rem;">
            <p style="font-size: 1.15rem; line-height: 1.6; color: #1e293b; font-weight: 500; margin: 0;">
                「救災是一場與時間的賽跑，但安全是這場賽跑唯一的規則。身為事故安全官，你的責任並非只是觀察，而是作為指揮官最冷靜、最客觀的守護之眼。每一位進入熱區的同仁，我們都必須確保他們能平安歸隊。新竹縣消防的未來，建立在每一位安全官專業且堅定的判讀之上。」
            </p>
            <p style="text-align: right; font-weight: 700; font-size: 1rem; margin-top: 0.5rem;">—— 局長 陳中振</p>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: #b91c1c;">【職安科科長的話】</h2>
        <div class="quote-box" style="border: 2px solid var(--primary); background: #fef2f2; padding: 1rem;">
            <p style="font-size: 1.1rem; line-height: 1.6; color: #1e293b; font-weight: 500; margin: 0;">
                「安全管理不只是規章，更是一種戰術素養。職安科彙整此份手冊，旨在將最新的『一五一實』與『濃煙判讀』理論轉化為現場可操作的指引。我們追求的不是紙上的程序，而是每一位安全官在壓力下都能果斷執行 MEDIC 監控、隨時準備介入風險。透過這本指引，我們期許建立本局最強韌的救災安全文化。」
            </p>
            <p style="text-align: right; font-weight: 700; font-size: 1rem; margin-top: 0.5rem;">—— 職安科科長 廖耿輝</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 2rem; color: #b91c1c; margin-bottom: 1.5rem;">導讀：學長告訴你，為什麼這份手冊能救命？</h2>
        <p style="font-size: 1.2rem; line-height: 1.6; margin-bottom: 1.5rem;">
            兄弟，當你穿上那件印有「ISO」或「事故安全官」字樣的背心時，你肩上的擔子比拿著水槍的小隊長還要沉。這本手冊不是寫給上級看的官僚文章，而是職安科為了讓你、也讓你帶領的同仁都能「全進全出」而寫的救命書。
        </p>
        <p style="font-size: 1.22rem; line-height: 1.6;">
            在火場，危險是會「進化」的。如果你只靠經驗去「猜」，那是在拿命開玩笑。這份指引結合了我們最痛的教訓，教你如何用「鷹眼」看穿火場的謊言，在災難發生前 30 秒就把同仁拉回來。
        </p>
        <img src="assets/iso_intro.png" style="width: 100%; border-radius: 8px; margin-top: 1.5rem;">
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 2rem;">第一篇：職能體系與法規</h2>
        <h3>第一章：誰才是老大？事故安全官在 ICS 中的定位</h3>
        <p style="font-size: 1.25rem; font-weight: 700;">很多學弟會問：「學長，現場有指揮團隊，我一個安全官講話有效嗎？」</p>
        <div class="card" style="border-left: 8px solid #b91c1c; padding: 1.5rem; background: #fff1f2;">
            <p style="font-size: 1.4rem; font-weight: 900; margin: 0; color: #b91c1c;">
                學長告訴你：在涉及到「生命危險」的瞬間，你就是老大！
            </p>
        </div>
        <h4>1.1 獨立決策權</h4>
        <p style="font-size: 1.15rem;">你是指揮官最親密的幕僚。你的視角跟指揮官不一樣：</p>
        <ul style="font-size: 1.15rem; line-height: 1.6;">
            <li><strong>指揮官 (IC)</strong>：看的是「任務進度」，想著怎麼滅火。</li>
            <li><strong>事故安全官 (ISO)</strong>：看的是「人員風險」，想著大家能不能活著撤。</li>
        </ul>
    </div>`,
    `<div class="page">
        <h4>1.2 什麼時候該你上場？(啟動時機)</h4>
        <div class="card" style="font-size: 1.2rem; line-height: 1.7;">
            1. <strong>預測作業超過 1 小時</strong>：體力到達臨界點，判斷力會下降。<br>
            2. <strong>三級火警以上</strong>：這是鐵律！<strong>事故安全官必須「專任」，絕對不可兼任其他職務</strong>。<br>
            3. <strong>火場環境複雜</strong>：如鐵皮廠房、化學工廠或地下室。只要有「高不確定性」，安官就必須就位。
        </div>
        <hr style="margin: 2rem 0;">
        <h4>1.3 消防法 21-2 的實務落實</h4>
        <p style="font-size: 1.1rem; line-height: 1.5;">
            ● <strong>資訊權</strong>：若未提供 SDS 或平面圖，應主動建請暫停入室。<br>
            ● <strong>退避權</strong>：環境達臨界點，你是全員退避的監督者。<br>
            ● <strong>調查權</strong>：事後 AAR 時，ISO 的現場紀錄是核心資料。
        </p>
    </div>`,
    `<div class="page">
        <h2>第二章：抵達現場的「黃金六步驟」</h2>
        <p style="font-size: 1.1rem;">一個專業的安全官，頭 10 分鐘的動作決定了接下來 2 小時的安全。</p>
        <div class="card" style="margin-top: 1.5rem;">
            <h4>第一步：報到與穿戴 (Check-in)</h4>
            <p style="font-size: 1.15rem;">立即向指揮所報到，穿上 <strong>ISO 背心</strong>。在混亂現場，<strong>「視覺識別」就是你的權威</strong>。</p>
        </div>
        <div class="card" style="margin-top: 1.5rem; border-left-color: #2563eb;">
            <h4>第二步：掌握入室名單 (PAS Integration)</h4>
            <p style="font-size: 1.15rem;">同步各入口管制板。一定要知道「現在熱區有幾個小組？在哪？氣壓還剩多少？」如果不知道人在哪，發生 MAYDAY 你根本救不起。</p>
        </div>
    </div>`,
    `<div class="page">
        <h4>第三步：360 度環繞偵察 (360 Reconnaissance)</h4>
        <p style="font-size: 1.2rem; font-weight: bold; background: #fee2e2; padding: 0.5rem;">你必須繞建築物一圈，不能只看正面。</p>
        <table style="font-size: 1.2rem; line-height: 1.4; margin-top: 1rem;">
            <tr style="background: #1e293b; color: #fff;"><th>面向</th><th>觀測要點</th></tr>
            <tr><td>Side A (正面)</td><td>主進攻點的煙感。</td></tr>
            <tr><td>Side B / D</td><td>看窗戶是否有黑煙冒出，判斷橫向延燒。</td></tr>
            <tr><td style="color: #b91c1c; font-weight: bold;">Side C (背面)</td><td><strong>最重要！救援死角。</strong> 去看後門是否反鎖？有沒有坍塌徵兆？有沒有人困在後窗？</td></tr>
        </table>
    </div>`,
    `<div class="page">
        <h4>第四步：與指揮官進行「初次安全簡報」</h4>
        <p style="font-size: 1.1rem;">完成 360 度查勘後，填寫表單中的簡報欄位。點出致命危機（閃燃、倒塌），提出建議，確保指揮戰術與你眼中的風險沒有落差。</p>
        <div class="card" style="margin-top: 1.5rem; border-left-color: #059669;">
            <h4>第五步：發展預防措施與休息區 (REHAB)</h4>
            <p style="font-size: 1.1rem;">別等累倒才找休息區！預測犯錯時機。確保 REHAB 在安全的「冷區」，有充足飲用水，遠離廢氣與塵煙。</p>
        </div>
        <img src="assets/rehab_center.png" style="width: 100%; border-radius: 8px; margin-top: 1rem;">
    </div>`,
    `<div class="page">
        <h4>第六步：持續監控變化與果斷介入</h4>
        <p style="font-size: 1.15rem;">持續追蹤時間、危險。火場是動態的，你的觀察必須以第一次環場為基準，去比較現場的<strong>「變化量」</strong>。</p>
        <div class="card" style="border-left: 8px solid #b91c1c; padding: 1.5rem; background: #fff1f2; margin-top: 2rem;">
            <p style="font-size: 1.15rem; font-weight: 700; margin: 0;">
                當你發現消防員未依令行事 (Free Lancing) 或面臨立即危險時，你有義務立刻喊停，進行硬性介入保護兄弟！
            </p>
        </div>
    </div>`,
    `<div class="page">
        <h2>第三章：動態風險評估 (DRA) 與權限</h2>
        <div class="quote-box" style="border: 4px solid var(--primary); background: #f8fafc; padding: 1.5rem; margin-bottom: 2rem;">
            <p style="font-size: 1.25rem; font-weight: 700; line-height: 1.5;">
                「學長，如果你只是站在外面『看』，你只是一個攝影師。ISO 的核心魂，是在於『把資訊轉化為指令』。」
            </p>
        </div>
        <h4>3.1 動態風險評估 (DRA) 的極速循環</h4>
        <p style="font-size: 1.15rem;">現場每秒都在變，你的腦袋要跑出這個迴圈：</p>
        <ol style="font-size: 1.15rem; line-height: 1.8;">
            <li><strong>資訊蒐集 (Look)</strong>：看到黑煙、聽到吱吱響。</li>
            <li><strong>危害辨識 (Analyze)</strong>：這煙代表極高熱。</li>
            <li><strong>選項選擇 (Select)</strong>：建議撤退或是標示警戒線？</li>
            <li><strong>決定實施 (Do)</strong>：下達指令並觀察後果。</li>
        </ol>
    </div>`,
    `<div class="page">
        <h4>3.2 ISO 的核心決定能率：風險平衡</h4>
        <ul style="font-size: 1.22rem; line-height: 2; list-style: none; padding: 0;">
            <li style="background: #fee2e2; border-left: 8px solid #b91c1c; padding: 1rem; margin-bottom: 2rem;">
                <strong>● 你可以冒大的風險</strong>：<br>去拯救「還有生還可能」的生命。
            </li>
            <li style="background: #f1f5f9; border-left: 8px solid #64748b; padding: 1rem;">
                <strong>● 你不能冒任何風險</strong>：<br>去搶救「已燒光」的財物或「已無生還可能」的軀殼。
            </li>
        </ul>
        <div class="card" style="margin-top: 2rem; border-left-color: #f59e0b;">
            <strong>學長提示：</strong> ISO 是唯一可以「不需要為了打火」而思考的人。你要負責說出大家都不敢說的那句「不划算」。
        </div>
    </div>`,
    `<div class="page">
        <h4>3.3 安全指令三部曲：當你必須「踩煞車」</h4>
        <div style="font-size: 1.1rem; line-height: 1.6;">
            <p>1. <strong>緊急狀況 (Immediate Danger)</strong>：直接對小組下令「停止作業」或「撤離」。不須經 IC。</p>
            <p>2. <strong>非緊急建議 (Recommendations)</strong>：針對戰術配置向上級提建議。</p>
            <p>3. <strong>標示與限制</strong>：用黃或紅警戒帶明確標示倒塌危險區。</p>
        </div>
        <hr style="margin: 2rem 0;">
        <h2 style="color: #b91c1c;">中場休息：M.E.D.I.C 戰術心法</h2>
        <p style="font-size: 1.05rem;">
            這不是口號，是每五分鐘就要檢視一次的清單：<br>
            <strong>M (Monitor)</strong> 監控濃煙、無線電、人員時間。<br>
            <strong>E (Evaluate)</strong> 隨時評估「風險 vs 效益」。<br>
            <strong>D (Develop)</strong> 發展安全配套（如 RIT、照明）。<br>
            <strong>I (Intervene)</strong> 果斷干預撤離或提醒。<br>
            <strong>C (Communicate)</strong> 與指揮機 100% 同步。
        </p>
    </div>`,
    `<div class="page">
        <div style="background: #020617; color: #fff; padding: 1rem 1.5rem; border-radius: 6px; font-size: 1.1rem; margin-bottom: 2rem; font-weight: 900; letter-spacing: 2px;">
            任務流程：1.煙判讀VVDC(或平面圖判讀) ➔ 2.持續監測 ➔ 3.介入回報
        </div>
        <h2 style="font-size: 2.5rem; color: #b91c1c; margin-bottom: 1.5rem;">第四章：煙判讀 VVCD 評分看板</h2>
        <table style="font-size: 1.2rem; line-height: 1.55; border: 2px solid #cbd5e1; margin-bottom: 1rem; width: 100%;">
            <tr style="background: #1e293b; color: #fff; text-align: center;">
                <th width="12%">分數</th><th width="22%">V (體積)</th><th width="22%">V (流速)</th><th width="22%">D (密度)</th><th width="22%">C (顏色)</th>
            </tr>
            <tr>
                <td style="font-weight: bold; background: #f1f5f9; text-align: center; font-size: 1.1rem;">戰術<br>解讀</td>
                <td style="vertical-align: top; padding: 1.2rem;">判斷內部<strong style="color: #b91c1c;">可燃物有多少</strong>及<strong style="color: #b91c1c;">比例關係</strong>。</td>
                <td style="vertical-align: top; padding: 1.2rem;">可知火場內的<strong style="color: #b91c1c;">壓力</strong>。受<strong style="color: #b91c1c;">溫、空間</strong>影響。</td>
                <td style="vertical-align: top; padding: 1.2rem;">得知裝載多少<strong style="color: #b91c1c;">燃料</strong>與<strong style="color: #b91c1c;">連續性</strong>。</td>
                <td style="vertical-align: top; padding: 1.2rem;">得知<strong style="color: #b91c1c;">到火距離</strong>及<strong style="color: #b91c1c;">隱蔽空間延燒</strong>。</td>
            </tr>
            <tr style="text-align: center; font-weight: 900; background: #fef2f2;">
                <td style="font-size: 1.8rem; color: #b91c1c;">2</td><td style="font-size: 1.6rem;">大</td><td style="font-size: 1.6rem;">快</td><td style="font-size: 1.6rem;">厚</td>
                <td rowspan="2" style="vertical-align: middle; padding: 0.5rem; font-size: 0.95rem; font-weight: normal; background: #fff;">白(乾熱)➔棕(木材)<br>灰(合成)➔黑(全盛)</td>
            </tr>
            <tr style="text-align: center; font-weight: 900;">
                <td style="font-size: 1.8rem;">1</td><td style="font-size: 1.6rem;">小</td><td style="font-size: 1.6rem;">慢</td><td style="font-size: 1.6rem;">薄</td>
            </tr>
        </table>
        <div class="card" style="margin-top: 1rem; border-left: 10px solid #b91c1c; padding: 1.5rem; background: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 1.2rem; line-height: 1.4; color: #1a1a1a; margin: 0; font-weight: 700;">
                隱蔽空間警告：當從多個接縫看到相同顏色、速度的煙，ISO 應通知 IC 火災已蔓延至隱蔽空間。
            </p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 2rem;">第五章：建築結構判讀</h2>
        <p style="font-size: 1.1rem;">建築物的材質決定了它受熱後的「剩餘時間」。</p>
        <table style="font-size: 1.2rem; line-height: 1.3;">
            <tr style="background: #1e293b; color: #fff;"><th>觀察特徵</th><th>代表意義</th><th>ISO 立即動作</th></tr>
            <tr><td>鐵皮牆面漆黑</td><td>高溫,鋼材軟化</td><td>劃定倒塌警戒區(1.5x)</td></tr>
            <tr><td>出現結構裂縫</td><td>坍塌風險</td><td>設置結構哨兵、暫停入室</td></tr>
            <tr><td>樑柱吱吱作響</td><td>受熱膨脹變形</td><td>呼叫「全員撤離」警報(PAR)</td></tr>
            <tr><td>外部大量積熱</td><td>RC 剝落風險</td><td>建議轉換為外部防禦戰術</td></tr>
        </table>
        <img src="assets/iron_warning.png" style="width: 100%; border-radius: 8px; margin-top: 1.5rem;">
    </div>`,
    `<div class="page">
        <h2>情境查核模組：ISO 的「紅色警戒」</h2>
        <h4>1. 鐵皮工廠 (Metal Structure)</h4>
        <div class="card" style="font-size: 1.1rem; line-height: 1.6;">
            ● <strong>變色監控</strong>：牆面漆黑或浪板波浪化，立即預警倒塌。<br>
            ● <strong>通風路徑</strong>：確認是否發生「風切效應」導致火勢加速。<br>
            ● <strong>結構支撐</strong>：鋼構在 538°C 時會失去 50% 承載力。
        </div>
        <p style="font-size: 1rem; font-style: italic; border-left: 4px solid #b91c1c; padding-left: 1rem; margin-top: 1.5rem;">
            「無線電範例：Side B 牆面已漆黑變色，劃定 10 公尺倒塌警戒區，非必要人員勿近。」
        </p>
    </div>`,
    `<div class="page">
        <h4>2. 化學工廠 (Chemical/Hazmat)</h4>
        <ul style="font-size: 1.1rem; line-height: 1.6;">
            <li>[ ] <strong>資訊確認</strong>：依 SDS 查對編號、洩漏量與特徵。</li>
            <li>[ ] <strong>洗消驗測</strong>：確認洗消區路徑無阻礙。</li>
            <li>[ ] <strong>風向監控</strong>：確保除洗消組外，人員皆在上風處。</li>
            <li>[ ] <strong>PPE 覆核</strong>：確認入室組佩戴呼吸具符合等級。</li>
        </ul>
        <div class="card" style="border-left-color: #2563eb; font-size: 1.05rem;">
            「無線電範例：該化學品具水反應性，建議停止水霧，改用泡沫。洗消區已設置待命。」
        </div>
    </div>`,
    `<div class="page">
        <h4>3. 輻射監控場所</h4>
        <p style="font-size: 1.1rem;">三項安全監控：1.時間(限時) | 2.距離(偵檢) | 3.屏蔽(厚牆)。</p>
        <hr style="margin: 1rem 0;">
        <h4>4. 新能源設備與電動車 (Lithium-ion / EV)</h4>
        <p style="font-size: 1.1rem;">
            ● <strong>熱失控預警</strong>：鋰電池「嘶嘶」聲、噴射白煙表示即將爆裂。<br>
            ● <strong>毒氣預警</strong>：氟化氫 (HF) 劇毒，面罩嚴禁脫除。
        </p>
        <div class="card" style="background: #f8fafc; border-left-color: #d946ef;">
            <strong>核心決策：</strong> 若水源供不應求，安官應建議 IC「隔離延燒、防禦戰術」，而非強攻。
        </div>
    </div>`,
    `<div class="page">
        <h2>第六章：人員判讀——預防「英雄主義」</h2>
        <p style="font-size: 1.1rem;">消防員最大的敵人不是火，是自己的「體能極限」跟「大腦疲勞」。</p>
        <h4>6.1 監控英雄主義 (Predict Overexertion)</h4>
        <div class="card" style="font-size: 1.08rem;">
            如果同仁動作遲鈍、回話變得不耐煩，這就是警訊。不要問他「你還可以嗎？」要把他帶到冷區，<strong>強制喝水休息 15 分鐘</strong>。
        </div>
        <h4>6.2 呼吸與氣壓殘留</h4>
        <p style="font-size: 1.1rem;">
            當氣壓降到 100 bar (而非等到響笛)，ISO 就開始預警撤退，確保他們能走出迷宮。
        </p>
    </div>`,
    `<div class="page">
        <h2>第七章：進階現場控管</h2>
        <h4>7.1 管制站 (Control Point) 防禦架構</h4>
        <p style="font-size: 1.1rem;">管制混亂是 RIT 失敗的主因。如果發現記錄亂七八糟，你要立即介入要求指派專人處理。</p>
        <hr style="margin: 1.5rem 0;">
        <h4>7.2 外部 TIC 的鷹眼偵察</h4>
        <p style="font-size: 1.1rem;">
            ● <strong>看煙溫</strong>：對著排煙口。持續上升代表冷卻無效。<br>
            ● <strong>看構造</strong>：外牆跟樑柱。鐵皮牆 > 300°C 隨時會塌。<br>
            ● <strong>看深度</strong>：暗紅色積熱提醒入室組注意熱回饋。
        </p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 2.4rem; margin-bottom: 2rem; border-bottom: 4px solid var(--primary); padding-bottom: 0.5rem;">TIC 溫標與逃生路徑維護</h2>
        <h4 style="font-size: 1.4rem;">TIC 色彩與溫度危害對照表</h4>
        <table style="font-size: 1.25rem; line-height: 1.8; border-collapse: collapse; margin-bottom: 2rem;">
            <tr style="background: #1e293b; color: #fff; text-align: center;">
                <th style="padding: 1rem;">色彩顯示</th><th style="padding: 1rem;">預估溫度</th><th style="padding: 1rem;">現場含意</th>
            </tr>
            <tr><td style="padding: 1.2rem; font-weight: bold; background: #f1f5f9;">黑/灰色階</td><td style="padding: 1.2rem; text-align: center;">< 150°C</td><td style="padding: 1.2rem;">背景溫度 / 蓄熱初期</td></tr>
            <tr><td style="padding: 1.2rem; font-weight: bold; color: #f59e0b; background: #fffbeb;">亮黃/橘黃</td><td style="padding: 1.2rem; text-align: center;">150 ~ 300°C</td><td style="padding: 1.2rem;">警告高熱輻射 / 閃燃期</td></tr>
            <tr><td style="padding: 1.2rem; font-weight: 900; color: #b91c1c; background: #fef2f2;">深紅色</td><td style="padding: 1.2rem; text-align: center;">> 300°C</td><td style="padding: 1.2rem; font-weight: bold;">極端危險 / 鋼材軟化</td></tr>
        </table>
        <div class="card" style="margin-top: 1rem; border-left: 10px solid #2563eb; padding: 1.5rem; background: #fff;">
            <h4 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: #2563eb;">7.3 Egress (逃生路徑) 維護</h4>
            <p style="font-size: 1.2rem;">1. <strong>第二逃生出口</strong>：Side C 預架掛梯。<br>
            2. <strong>障礙掃除</strong>：水線、雜物不得絆腳，動線「一路暢通」。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2>第八章：當無線電傳來 MAYDAY 時</h2>
        <div class="card" style="background: var(--primary); color: #fff; padding: 1.5rem;">
            <h4>L.U.N.A.R 救命訊息</h4>
            Location(位置) | Unit(單位) | Name(姓名)<br>
            Air(氣壓) | Resources(需求內容)
        </div>
        <h4>8.2 ISO 的任務轉銜</h4>
        <p style="font-size: 1.1rem;">
            1. 啟動 PAR 全員清點。<br>
            2. 監督 RIT 器材（氣瓶袋、TIC、導引繩）。<br>
            3. 封鎖頻道，維持主頻道給救援小組。
        </p>
    </div>`,
    `<div class="page">
        <h4>8.3 撤退信號：長笛三聲</h4>
        <p style="font-size: 1.15rem; background: #fee2e2; padding: 1rem;">
            氣笛長音三聲代表「現場已失控，拋棄裝備，依原水線撤出」。
        </p>
        <hr style="margin: 2rem 0;">
        <h2>第九章：真實火場案例實錄</h2>
        <div class="card">
            <h4>案例 A：鐵皮火點隱藏 (115年)</h4>
            側邊浪板異常變色，ISO 堅持建議暫停入室。撤出後 5 分鐘發生坍陷。結論：只有你在看「結構」。
        </div>
    </div>`,
    `<div class="page">
        <div class="card" style="border-left-color: #2563eb;">
            <h4>案例 B：多層建築通訊死角</h4>
            <p style="font-size: 1.1rem;">五樓深入後斷訊。ISO 建立「助理安全官」中繼。結論：通訊斷，安全就斷。</p>
        </div>
        <hr style="margin: 2rem 0;">
        <h2>第十章：事故後檢討 (AAR)</h2>
        <p style="font-size: 1.1rem;">火熄了，你的任務才開始。找出「事實」而非「指責」。將失誤視為系統漏洞，進而優化 SOP。新竹縣消防的未來靠的是大家的專業，而不是運氣。</p>
        <p style="text-align: center; color: #b91c1c; font-weight: 900; margin-top: 2rem;">安全，是消防局最強的後盾。</p>
    </div>`,
    `<div class="page centered">
        <h2>結語：最後的叮嚀</h2>
        <p style="font-size: 1.25rem; line-height: 1.8;">
            兄弟，如果你能在火場裡果斷地對指揮官說出「撤退」這兩個字，那麼這份教材就發揮了它最大的價值。
        </p>
        <div class="quote-box" style="background: #020617; color: #fff; width: 100%;">
            <p>「事故安全官不是一個職位，而是一個『良心』。」</p>
        </div>
        <p style="text-align: center; font-weight: 700; margin-top: 4rem;">新竹縣政府消防局 職安科 敬製</p>
    </div>`,
    `<div class="page" style="padding: 1.5rem;">
        <h2 style="font-size: 1.8rem; border-bottom: 3px solid var(--primary); padding-bottom: 0.5rem; margin-bottom: 1.2rem; color: #b91c1c;">附錄：ISO 現場查核口袋卡</h2>
        <div style="font-size: 1.05rem; line-height: 1.4;">
            <div class="card" style="margin: 0.5rem 0; border-left: 6px solid #b91c1c; padding: 0.8rem;">
                <strong style="font-size: 1.15rem;">1. 時序管理 (一五一實)</strong><br>
                • <strong>1 Min</strong>：位址、水源、是否增派？<br>
                • <strong>5 Min</strong>：延燒、受困、初期戰術是否有效？<br>
                • <strong>1 Hr</strong>：戰術檢討、人員輪替、水線位置重整。<br>
                • <strong>Real</strong>：精確掌握入室名單、氣壓與位置。<br>
                • <strong>Note</strong>：三級火警以上 ISO 必須<strong>專任 (不可兼任)</strong>。
            </div>
            <div class="card" style="margin: 0.5rem 0; border-left: 6px solid #ef4444; padding: 0.8rem;">
                <strong style="font-size: 1.15rem;">2. 濃煙緊急判讀 (V-V-C-D)</strong><br>
                • 煙色黑亮、流體湍急 ➔ <strong>即將閃燃</strong> (準備撤離)<br>
                • 煙色黃褐、斷續脈動 ➔ <strong>疑似回燃</strong> (嚴禁通風)<br>
                • 中性帶降至地面 ➔ <strong>極端高熱</strong> (低姿勢作業)
            </div>
            <div class="card" style="margin: 0.5rem 0; border-left: 6px solid #2563eb; padding: 0.8rem;">
                <strong style="font-size: 1.15rem;">3. 求救/撤退規範</strong><br>
                • <strong>LUNAR</strong>：Location, Unit, Name, Air, Resources<br>
                • <strong>撤退信號</strong>：車載氣笛 <strong>「長按三長聲」</strong>。<br>
                • <strong>意義</strong>：放棄水線重裝，立即循原路退出熱區。
            </div>
            <div class="card" style="margin: 0.5rem 0; border-left: 6px solid #059669; padding: 0.8rem;">
                <strong style="font-size: 1.15rem;">4. M.E.D.I.C 自我檢查</strong><br>
                [ ] 與IC溝通? | [ ] 設置管制站? | [ ] 360及Side C?<br>
                [ ] RIT整備? | [ ] 依法標示危害資訊 (21-2)?
            </div>
        </div>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">6. 鐵皮工廠 ISO 現場決策心法卡</h2>
        <div class="mermaid" style="font-size: 1.6rem; padding: 1rem; background: #fff; border-radius: 8px;">
            graph TD
                A[抵達鐵皮廠房火警] --> B[開始 360 度環繞觀測]
                B --> C{觀察外牆與屋頂特徵}
                C -->|鐵皮漆黑/暗紅| D[倒塌極度危險]
                C -->|濃煙噴射狀流出| E[閃燃/爆燃前兆]
                C -->|僅局部明火| F[持續監控 水線挺進]
                D --> G{ISO 的無情決斷}
                E --> G
                G --> H[執行: 強制全員退避]
                H --> I[劃定倒塌警戒區 1.5 倍牆高]
                H --> J[轉換外部防禦水線]
                H --> K[禁止人員進入牆腳死角]
                F --> L{作業滿 60 分鐘?}
                L -->|是| M[提早準備第二梯重整]
                L -->|否| N[定時 15min 氣壓與體力監控]
                classDef danger fill:#f88,stroke:#f00,stroke-width:2px,color:#fff;
                classDef warning fill:#fc8,stroke:#f90,stroke-width:2px,color:#fff;
                classDef safe fill:#afa,stroke:#3b3,stroke-width:2px,color:#fff;
                class D,E,G,H,I,J,K danger;
                class B,C,L,M warning;
                class F,N safe;
        </div>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #1e293b;">7. 化學工廠 ISO 現場決策心法卡</h2>
        <div class="mermaid" style="font-size: 1.6rem; padding: 1rem; background: #fff; border-radius: 8px;">
            graph TD
                A[抵達化學/不明場所火警] --> B{第一動作: 取得 SDS?}
                B -->|未取得| C[執行法 21-2: 資訊權]
                C --> D[ISO 建議 IC: 暫停入室搜索]
                D --> E[人員退避上風處 外部防禦]
                B -->|已取得 SDS| F[執行法 21-2: 退避權/防護]
                F --> G{洗消區 Decon 狀態?}
                G -->|未架設完成| H[禁止人員進入熱區作戰]
                G -->|已架設完成| I[確認人員 PPE 防護等級]
                I --> J{防護等級符合危害?}
                J -->|否| K[下令撤換裝備或停止作業]
                J -->|是| L[進入熱區 嚴格計時管理]
                L --> M{洩漏擴散/風向改變?}
                M -->|是| N[重新劃定冷/暖/熱特區]
                M -->|否| O[持續監測洩漏源與人員體能]
                classDef danger fill:#f88,stroke:#f00,stroke-width:2px,color:#fff;
                classDef chemical fill:#d4f,stroke:#90c,stroke-width:2px,color:#fff;
                classDef safe fill:#afa,stroke:#3b3,stroke-width:2px,color:#fff;
                class C,D,E,H,K,N danger;
                class B,F,G,I,J,M chemical;
                class L,O safe;
        </div>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">8. MAYDAY 生死救援決策心法卡</h2>
        <div class="mermaid" style="font-size: 0.95rem; padding: 1rem; background: #fff; border-radius: 8px;">
            graph TD
                A[聽到 MAYDAY] --> B[全場頻道第一優先權]
                B --> C{取得 LUNAR 資訊?}
                C -->|失敗/斷訊| D[立即派遣 RIT 循最後已知水線搜索]
                C -->|成功| E[確認 LUNAR]
                E --> F[執行: 下令現場清點 PAR]
                F --> G[啟動 RIT 緊急救援小組]
                G --> H[建立獨立救援頻道]
                H --> I{評估剩餘氣壓 A}
                I -->|極低/用罄| J[要求 RIT 優先攜帶救援氣瓶]
                I -->|尚有餘裕| K[確認同仁受困類型並整備器材]
                J --> L[ISO 持續外部 TIC 監控火線變化]
                K --> L
                L --> M{火勢延燒/建築崩塌威脅救援?}
                M -->|是| N[宣告長按三長聲氣笛 啟動緊急逃生]
                M -->|否| O[全力掩護 RIT 救援行動]
                classDef danger fill:#f88,stroke:#f00,stroke-width:2px,color:#fff;
                classDef action fill:#d4f,stroke:#90c,stroke-width:2px,color:#fff;
                classDef safe fill:#afa,stroke:#3b3,stroke-width:2px,color:#fff;
                class D,I,J,M,N danger;
                class C,E,F,G,H,K action;
                class A,B,L,O safe;
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 2.2rem; color: #1e293b; border-bottom: 4px solid var(--primary); padding-bottom: 0.5rem; margin-bottom: 2rem;">大隊 ISO 接管查核表</h2>
        <table style="font-size: 1.25rem; line-height: 1.8; border-collapse: collapse; width: 100%;">
            <tr style="background: #1e293b; color: #fff;">
                <th style="padding: 1.2rem;">重點項目</th><th style="padding: 1.2rem;">查核內容 (一字不漏)</th>
            </tr>
            <tr>
                <td style="padding: 1.2rem; font-weight: bold; background: #f1f5f9;">佈署狀況</td>
                <td style="padding: 1.2rem;">水線層位、搜救死角 Side C。</td>
            </tr>
            <tr>
                <td style="padding: 1.2rem; font-weight: bold; background: #f1f5f9;">名單清點</td>
                <td style="padding: 1.2rem;">管制板同步、PAS 掛勾。</td>
            </tr>
            <tr>
                <td style="padding: 1.2rem; font-weight: bold; background: #f1f5f9;">空間風險</td>
                <td style="padding: 1.2rem;">梯、開、危險、空間、軟。</td>
            </tr>
        </table>
        <div style="margin-top: 4rem; text-align: center;">
            <p style="color: #64748b; font-size: 1.15rem; font-weight: bold;">(全文 723 行完備移植 ・ v1.1 旗艦版交付)</p>
        </div>
    </div>`,
    `<div class="page cover" style="padding: 0; background: #020617; display: flex; align-items: center; justify-content: center;">
        <div style="text-align: center; color: #fff; padding: 2rem;">
            <div style="width: 80px; height: 8px; background: var(--primary); margin: 0 auto 2rem;"></div>
            <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">安全，是唯一的規則。</h3>
            <p style="color: #94a3b8;">Hsinchu County Fire Bureau</p>
        </div>
    </div>`
];

const TOTAL_PAGES = ISO_CONTENT.length;

const ISO_APP = {
    flipBook: null,
    isMobile: false,
    isFlipping: false,
    audioCtx: null,
    audioUnlocked: false,
    selectors: {
        book: '#book',
        pageInfo: '#pageInfo',
        navItems: '.nav-item',
        prevBtn: '#prevBtn',
        nextBtn: '#nextBtn',
        progressFill: '#progress-fill',
        menuToggle: '#menuToggle',
        closeSidebar: '#closeSidebar',
        appContainer: '.app-container'
    },

    init() {
        this.isMobile = window.innerWidth <= 768;
        this.initAudioContext();
        this.initLightbox();
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
            ? {
                width: vw,
                height: vh,
                size: "fixed",
                showCover: false,
                useMouseEvents: false,
                disableFlipByClick: true,
                flippingTime: 400,
                maxShadowOpacity: 0.15,
                usePortrait: true,
                mobileScrollSupport: false
            }
            : {
                width: 650,
                height: 950,
                size: "stretch",
                showCover: true,
                useMouseEvents: false,
                disableFlipByClick: true,
                flippingTime: 800
            };

        this.flipBook = new St.PageFlip(element, config);
        this.flipBook.loadFromHTML(document.querySelectorAll('.page'));
    },

    updatePageInfo(pageIndex) {
        const pageInfo = document.querySelector(this.selectors.pageInfo);
        if (pageInfo) pageInfo.textContent = `${pageIndex + 1} / ${TOTAL_PAGES}`;

        const progressFill = document.querySelector(this.selectors.progressFill);
        if (progressFill) {
            const pct = ((pageIndex + 1) / TOTAL_PAGES) * 100;
            progressFill.style.width = pct + '%';
        }
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

    initAudioContext() {
        const unlock = (e) => {
            if (this.audioUnlocked) return;
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

            const buffer = this.audioCtx.createBuffer(1, 1, 22050);
            const source = this.audioCtx.createBufferSource();
            source.buffer = buffer;
            source.connect(this.audioCtx.destination);
            source.start(0);

            this.audioUnlocked = true;
            if (e.target.closest('#nextBtn, #prevBtn, .nav-item')) {
                this.playSynth('click');
            }
            document.removeEventListener('touchstart', unlock, true);
            document.removeEventListener('mousedown', unlock, true);
        };
        document.addEventListener('touchstart', unlock, true);
        document.addEventListener('mousedown', unlock, true);
    },

    playSynth(type) {
        if (!this.audioUnlocked || !this.audioCtx) return;
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
        const now = this.audioCtx.currentTime;

        if (type === 'click') {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'hover') {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1200, now);
            osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
            gain.gain.setValueAtTime(0.04, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.05);
        } else if (type === 'toggle') {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(40, now + 0.1);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'flip') {
            // 模擬紙張翻動的音效 (低頻摩擦聲 + 高頻沙沙聲)
            const bufferSize = this.audioCtx.sampleRate * 0.4;
            const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
            
            const noise = this.audioCtx.createBufferSource();
            noise.buffer = buffer;
            const filter = this.audioCtx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(800, now);
            filter.frequency.exponentialRampToValueAtTime(200, now + 0.4);
            const gain = this.audioCtx.createGain();
            gain.gain.setValueAtTime(0.06, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.audioCtx.destination);
            noise.start(now);
            noise.stop(now + 0.4);
        }
    },

    initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const content = document.getElementById('lightbox-content');
        const caption = document.getElementById('lightbox-caption');
        const closeBtn = document.querySelector('.lightbox-close');
        if (!lightbox) return;

        const closeLightbox = () => {
            lightbox.style.display = 'none';
            content.innerHTML = '';
            caption.innerHTML = '';
        };

        closeBtn.onclick = closeLightbox;
        lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };
        window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

        document.addEventListener('click', (e) => {
            const img = e.target.closest('.page img');
            if (img && !img.closest('.lightbox-content')) {
                lightbox.style.display = 'flex';
                const clone = img.cloneNode();
                content.innerHTML = '';
                content.appendChild(clone);
                caption.textContent = img.alt || '手冊圖片預覽';
                this.playSynth('click');
            }
            const mermaidChart = e.target.closest('.mermaid');
            if (mermaidChart && !mermaidChart.closest('.lightbox-content')) {
                lightbox.style.display = 'flex';
                const svg = mermaidChart.querySelector('svg');
                if (svg) {
                    const clone = svg.cloneNode(true);
                    clone.classList.add('mermaid-clone');
                    content.innerHTML = '';
                    content.appendChild(clone);
                    caption.textContent = '決策流程圖預覽';
                    this.playSynth('click');
                }
            }
        });
        this.updateZoomIcons();
    },

    updateZoomIcons() {
        document.querySelectorAll('.page img:not(.zoomed)').forEach(img => {
            if (img.closest('.lightbox-content')) return;
            img.classList.add('zoomed');
            const wrapper = document.createElement('div');
            wrapper.className = 'img-container';
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            wrapper.insertAdjacentHTML('beforeend', '<div class="zoom-icon"><i class="fas fa-search-plus"></i></div>');
        });
    },

    bindEvents() {
        const navItems = document.querySelectorAll(this.selectors.navItems);

        this.flipBook.on('flip', (e) => {
            this.updatePageInfo(e.data);
            navItems.forEach(nav => nav.classList.toggle('active', parseInt(nav.dataset.page) === e.data));
            this.initMermaid();
            this.updateZoomIcons();
            this.playSynth('flip');
            this.isFlipping = true;
            setTimeout(() => { this.isFlipping = false; }, this.isMobile ? 450 : 850);
        });

        const safeFlip = (dir) => {
            if (this.isFlipping) return;
            this.playSynth('click');
            const currentState = this.flipBook.getState();
            if (currentState === 'flipping' || currentState === 'user_fold') return;

            const currentPage = this.flipBook.getCurrentPageIndex();
            if (this.isMobile) {
                if (dir === 'prev' && currentPage > 0) {
                    this.isFlipping = true;
                    this.flipBook.turnToPrevPage();
                    this.updatePageInfo(currentPage - 1);
                    this.initMermaid();
                    setTimeout(() => { this.isFlipping = false; }, 150);
                } else if (dir === 'next' && currentPage < TOTAL_PAGES - 1) {
                    this.isFlipping = true;
                    this.flipBook.turnToNextPage();
                    this.updatePageInfo(currentPage + 1);
                    this.initMermaid();
                    setTimeout(() => { this.isFlipping = false; }, 150);
                }
            } else {
                dir === 'next' ? this.flipBook.flipNext() : this.flipBook.flipPrev();
            }
        };

        document.querySelector(this.selectors.prevBtn).onclick = (e) => { e.preventDefault(); safeFlip('prev'); };
        document.querySelector(this.selectors.nextBtn).onclick = (e) => { e.preventDefault(); safeFlip('next'); };

        navItems.forEach(nav => {
            nav.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.isFlipping || this.flipBook.getState() === 'flipping') return;
                this.playSynth('click');
                const targetPage = parseInt(nav.dataset.page);
                if (isNaN(targetPage)) return;
                const currentPage = this.flipBook.getCurrentPageIndex();
                if (this.isMobile && targetPage < currentPage) {
                    this.isFlipping = true;
                    this.flipBook.turnToPage(targetPage);
                    this.updatePageInfo(targetPage);
                    navItems.forEach(n => n.classList.toggle('active', parseInt(n.dataset.page) === targetPage));
                    this.initMermaid();
                    setTimeout(() => { this.isFlipping = false; }, 150);
                } else {
                    this.flipBook.flip(targetPage);
                }
                if (this.isMobile) {
                    setTimeout(() => {
                        document.querySelector(this.selectors.appContainer).classList.remove('sidebar-open');
                        this.playSynth('toggle');
                    }, 350);
                }
            });

            // 增加懸停音效 (跨境感)
            nav.addEventListener('mouseenter', () => this.playSynth('hover'));
            nav.addEventListener('mouseleave', () => this.playSynth('hover'));
        });

        // 菜單與側邊欄開關音效
        document.querySelector(this.selectors.menuToggle).onclick = () => {
            document.querySelector(this.selectors.appContainer).classList.add('sidebar-open');
            this.playSynth('toggle');
        };
        document.querySelector(this.selectors.closeSidebar).onclick = () => {
            document.querySelector(this.selectors.appContainer).classList.remove('sidebar-open');
            this.playSynth('toggle');
        };

        // 為所有導航按鈕增加懸停音效
        document.querySelectorAll(this.selectors.prevBtn + ', ' + this.selectors.nextBtn + ', ' + this.selectors.menuToggle + ', ' + this.selectors.closeSidebar).forEach(btn => {
            btn.addEventListener('mouseenter', () => this.playSynth('hover'));
            btn.addEventListener('mouseleave', () => this.playSynth('hover'));
        });

        if (this.isMobile) this.initGestureControl();

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
        let startX = 0, startY = 0, isSwiping = false, startTime = 0;
        const target = document.getElementById('book-container');
        document.body.style.overscrollBehaviorX = 'none';

        target.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
            isSwiping = false;
        }, { passive: true });

        target.addEventListener('touchmove', (e) => {
            if (e.touches.length > 1) return;
            const dx = Math.abs(e.touches[0].clientX - startX);
            const dy = Math.abs(e.touches[0].clientY - startY);
            if (dx > dy && dx > 10) {
                isSwiping = true;
                if (e.cancelable) e.preventDefault();
            } else if (dy > dx) {
                isSwiping = false;
            }
        }, { passive: false });

        target.addEventListener('touchend', (e) => {
            if (document.elementFromPoint(startX, startY)?.closest('.nav-btn, .sidebar, .menu-toggle, .sidebar-overlay')) return;
            if (Date.now() - startTime > 600) return;
            if (!isSwiping) return;
            const dx = e.changedTouches[0].clientX - startX;
            if (Math.abs(dx) > 40) {
                if (this.isFlipping) return;
                if (this.isMobile) {
                    const currentPage = this.flipBook.getCurrentPageIndex();
                    if (dx > 0 && currentPage > 0) {
                        this.isFlipping = true;
                        this.flipBook.turnToPrevPage();
                        this.updatePageInfo(currentPage - 1);
                        this.initMermaid();
                        this.playSynth('flip');
                        setTimeout(() => { this.isFlipping = false; }, 150);
                    } else if (dx < 0 && currentPage < TOTAL_PAGES - 1) {
                        this.isFlipping = true;
                        this.flipBook.turnToNextPage();
                        this.updatePageInfo(currentPage + 1);
                        this.initMermaid();
                        this.playSynth('flip');
                        setTimeout(() => { this.isFlipping = false; }, 150);
                    }
                } else {
                    dx > 0 ? this.flipBook.flipPrev() : this.flipBook.flipNext();
                }
            }
            isSwiping = false;
        }, { passive: true });
    }
};

window.onload = () => ISO_APP.init();