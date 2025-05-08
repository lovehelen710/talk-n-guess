// 80 個主題（含 16 個 18禁）
const topics = [
    // 一般 64 題
    { category: "一般", topic: "自拍" },
    { category: "一般", topic: "約會" },
    { category: "一般", topic: "染髮" },
    { category: "一般", topic: "野餐" },
    { category: "一般", topic: "畢業旅行" },
    { category: "一般", topic: "搬家" },
    { category: "一般", topic: "考試" },
    { category: "一般", topic: "失戀" },
    { category: "一般", topic: "養寵物" },
    { category: "一般", topic: "追星" },
    { category: "一般", topic: "打工" },
    { category: "一般", topic: "學樂器" },
    { category: "一般", topic: "運動會" },
    { category: "一般", topic: "看演唱會" },
    { category: "一般", topic: "學開車" },
    { category: "一般", topic: "搭飛機" },
    { category: "一般", topic: "露營" },
    { category: "一般", topic: "看電影" },
    { category: "一般", topic: "參加婚禮" },
    { category: "一般", topic: "學游泳" },
    { category: "一般", topic: "參加比賽" },
    { category: "一般", topic: "學煮菜" },
    { category: "一般", topic: "搬家" },
    { category: "一般", topic: "看醫生" },
    { category: "一般", topic: "學外語" },
    { category: "一般", topic: "參加派對" },
    { category: "一般", topic: "看展覽" },
    { category: "一般", topic: "學畫畫" },
    { category: "一般", topic: "參加社團" },
    { category: "一般", topic: "學跳舞" },
    { category: "一般", topic: "看球賽" },
    { category: "一般", topic: "學騎腳踏車" },
    { category: "一般", topic: "參加志工" },
    { category: "一般", topic: "學攝影" },
    { category: "一般", topic: "看書" },
    { category: "一般", topic: "學寫作" },
    { category: "一般", topic: "參加演講" },
    { category: "一般", topic: "學剪頭髮" },
    { category: "一般", topic: "看醫生" },
    { category: "一般", topic: "學烘焙" },
    { category: "一般", topic: "參加比賽" },
    { category: "一般", topic: "學潛水" },
    { category: "一般", topic: "看展覽" },
    { category: "一般", topic: "學繪畫" },
    { category: "一般", topic: "參加社團" },
    { category: "一般", topic: "學跳舞" },
    { category: "一般", topic: "看球賽" },
    { category: "一般", topic: "學騎腳踏車" },
    // 18禁 16題
    { category: "18禁", topic: "情趣用品" },
    { category: "18禁", topic: "成人影片" },
    { category: "18禁", topic: "激情親吻" },
    { category: "18禁", topic: "一夜情" },
    { category: "18禁", topic: "性愛玩具" },
    { category: "18禁", topic: "情趣旅館" },
    { category: "18禁", topic: "成人派對" },
    { category: "18禁", topic: "SM" },
    { category: "18禁", topic: "角色扮演" },
    { category: "18禁", topic: "激情自拍" },
    { category: "18禁", topic: "裸泳" },
    { category: "18禁", topic: "激情電話" },
    { category: "18禁", topic: "成人雜誌" },
    { category: "18禁", topic: "激情按摩" },
    { category: "18禁", topic: "情趣服裝" },
    { category: "18禁", topic: "激情約會" }
];

// 80 個助攻問題（含 16 個 18禁）
const hints = [
    { category: "一般", hint: "第一次體驗是什麼時候？" },
    { category: "一般", hint: "你大概多久會一次？" },
    { category: "一般", hint: "最後一次體驗是什麼時候？" },
    { category: "一般", hint: "體驗次數比你想像多嗎？" },
    { category: "一般", hint: "到目前為止體驗過幾次？" },
    { category: "一般", hint: "你和誰一起體驗過？" },
    { category: "一般", hint: "今年內體驗過幾次？" },
    { category: "一般", hint: "在哪裡體驗？" },
    { category: "一般", hint: "在圈內的人中誰最常體驗這個？" },
    { category: "一般", hint: "大約多少人一起體驗？" },
    { category: "一般", hint: "可以一個人體驗嗎？" },
    { category: "一般", hint: "體驗過最特別的場合或狀況？" },
    { category: "一般", hint: "有體驗過這個的名人或老師嗎？" },
    { category: "一般", hint: "這個體驗最難的部份是什麼？" },
    { category: "一般", hint: "去體驗最麻煩的是什麼？" },
    { category: "一般", hint: "這項體驗需要多久時間？" },
    { category: "一般", hint: "有多貴？" },
    { category: "一般", hint: "這個體驗需要多少錢？" },
    { category: "一般", hint: "這個體驗需要多久準備時間？" },
    { category: "一般", hint: "這個體驗需要什麼裝備？" }
];

const CUSTOM_HINT = '自訂問題';

let currentRole = null; // 'guesser' or 'giver'
let usedHintIndexes = [];
let usedTopicIndexes = [];
let currentTopic = null;
let scoreboard = {}; // { name: 分數 }
let customHints = [];
let pendingCustomHint = null; // 暫存自訂問題內容

function getRandomUnusedTopicIndex() {
    if (usedTopicIndexes.length >= topics.length) return null;
    let idx;
    do {
        idx = Math.floor(Math.random() * topics.length);
    } while (usedTopicIndexes.includes(idx));
    return idx;
}

function switchRole(role) {
    currentRole = role;
    document.getElementById('roleSelect').style.display = 'none';
    document.getElementById('guesserSection').style.display = (role === 'guesser') ? '' : 'none';
    document.getElementById('giverSection').style.display = (role === 'giver') ? '' : 'none';
    document.getElementById('switchRoleBtn').style.display = '';
    updateGuesserUI();
    updateGiverUI();
    showToast(role === 'guesser' ? '你現在是猜題者' : '你現在是提示者');
}

function updateGuesserUI() {
    // 助攻問題按鈕（待選）
    const btnsDiv = document.getElementById('hintBtns');
    btnsDiv.innerHTML = '';
    const limitMsg = document.getElementById('limitMsg');
    const resetBtn = document.getElementById('resetGuesserBtn');
    if (usedHintIndexes.length >= 5) {
        limitMsg.style.display = '';
        resetBtn.style.display = '';
    } else {
        limitMsg.style.display = 'none';
        resetBtn.style.display = 'none';
        // 先加自訂問題按鈕（可重複）
        const customBtn = document.createElement('button');
        customBtn.className = 'button';
        customBtn.textContent = CUSTOM_HINT;
        customBtn.onclick = () => openCustomHintModal();
        btnsDiv.appendChild(customBtn);
        // 動態加入所有自訂問題
        customHints.forEach((hint, idx) => {
            // 已問過的不再顯示
            if (hint.used) return;
            const btnWrap = document.createElement('div');
            btnWrap.style.display = 'flex';
            btnWrap.style.alignItems = 'center';
            btnWrap.style.marginBottom = '8px'; // 換行
            const btn = document.createElement('button');
            btn.className = 'button';
            btn.textContent = hint.text;
            btn.onclick = () => selectCustomHintInList(idx, btn);
            btnWrap.appendChild(btn);
            // 減號按鈕
            const minusBtn = document.createElement('button');
            minusBtn.textContent = '－';
            minusBtn.style.marginLeft = '6px';
            minusBtn.style.background = '#d32f2f';
            minusBtn.style.color = '#fff';
            minusBtn.style.border = 'none';
            minusBtn.style.borderRadius = '50%';
            minusBtn.style.width = '22px';
            minusBtn.style.height = '22px';
            minusBtn.style.cursor = 'pointer';
            minusBtn.onclick = function() {
                customHints.splice(idx, 1);
                updateGuesserUI();
            };
            btnWrap.appendChild(minusBtn);
            btnsDiv.appendChild(btnWrap);
        });
        // 其他助攻問題
        hints.forEach((item, idx) => {
            if (item.hint === CUSTOM_HINT) return; // 避免重複
            if (usedHintIndexes.includes(idx)) return;
            const btn = document.createElement('button');
            btn.className = 'button';
            btn.textContent = item.hint;
            btn.onclick = () => selectHint(idx, btn);
            btnsDiv.appendChild(btn);
        });
    }
    // 已問過的助攻問題
    const usedList = document.getElementById('usedHintsList');
    usedList.innerHTML = '';
    // 金字塔進度條
    let pyramid = document.getElementById('pyramidCard');
    if (!pyramid) {
        pyramid = document.createElement('div');
        pyramid.id = 'pyramidCard';
        pyramid.className = 'pyramid-card';
        usedList.parentNode.insertBefore(pyramid, usedList);
    }
    pyramid.innerHTML = '';
    // 合併已問過的助攻問題（原生+自訂）
    let askedArr = usedHintIndexes.map(idx => ({ type: 'hint', text: hints[idx].hint, idx }))
        .concat(customHints.map((h, i) => h.used ? { type: 'custom', text: h.text, idx: i } : null).filter(Boolean));
    // 5層金字塔
    for (let i = 0; i < 5; i++) {
        const layer = document.createElement('div');
        layer.className = 'pyramid-layer';
        // 層級顏色
        const colors = ['#e57373','#ffb74d','#fff176','#81c784','#64b5f6'];
        layer.style.background = colors[i];
        layer.style.borderRadius = '18px';
        layer.style.margin = '6px 0';
        layer.style.display = 'flex';
        layer.style.alignItems = 'center';
        layer.style.minHeight = '38px';
        layer.style.position = 'relative';
        // 分數標籤
        const score = document.createElement('span');
        score.className = 'layer-score';
        score.textContent = `${5-i}分`;
        score.style.fontWeight = 'bold';
        score.style.margin = '0 10px 0 12px';
        score.style.color = '#fff';
        layer.appendChild(score);
        // 題目內容
        const content = document.createElement('span');
        content.className = 'layer-content';
        content.textContent = askedArr[i] ? askedArr[i].text : '';
        content.style.flex = '1';
        content.style.fontSize = '1.08em';
        content.style.color = '#333';
        layer.appendChild(content);
        // 減號按鈕
        if (askedArr[i]) {
            const minusBtn = document.createElement('button');
            minusBtn.textContent = '－';
            minusBtn.style.marginLeft = '8px';
            minusBtn.style.background = '#d32f2f';
            minusBtn.style.color = '#fff';
            minusBtn.style.border = 'none';
            minusBtn.style.borderRadius = '50%';
            minusBtn.style.width = '22px';
            minusBtn.style.height = '22px';
            minusBtn.style.cursor = 'pointer';
            minusBtn.onclick = function() {
                if (askedArr[i].type === 'hint') {
                    usedHintIndexes = usedHintIndexes.filter(idx => idx !== askedArr[i].idx);
                } else if (askedArr[i].type === 'custom') {
                    customHints[askedArr[i].idx].used = false;
                }
                updateGuesserUI();
            };
            layer.appendChild(minusBtn);
        }
        pyramid.appendChild(layer);
    }
    // 圓點標示目前進度
    let marker = document.getElementById('pyramidMarker');
    if (!marker) {
        marker = document.createElement('div');
        marker.id = 'pyramidMarker';
        marker.className = 'pyramid-marker';
        pyramid.appendChild(marker);
    }
    // 位置：已問幾題就到第N層（0題在最上，5題在最下）
    marker.style.position = 'absolute';
    marker.style.left = '-30px';
    marker.style.width = '28px';
    marker.style.height = '28px';
    marker.style.background = '#a259e6';
    marker.style.borderRadius = '50%';
    marker.style.top = (askedArr.length * 44) + 'px'; // 每層約44px
    marker.style.boxShadow = '0 2px 8px #888';
    marker.style.display = 'block';
    marker.style.transition = 'top 0.3s';
    marker.style.zIndex = 2;
    updateScoreboardUI();
}

function updateScoreboardUI() {
    const list = document.getElementById('scoreboardList');
    list.innerHTML = '';
    // 排序：分數高到低
    const sorted = Object.entries(scoreboard).sort((a, b) => b[1] - a[1]);
    sorted.forEach(([name, score], idx) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${name}</span><span>${score} 分</span>`;
        list.appendChild(li);
    });
    // 處理按鈕區
    const scoreboardDiv = document.getElementById('scoreboard');
    let btnRow = document.getElementById('scoreBtnRow');
    if (!btnRow) {
        btnRow = document.createElement('div');
        btnRow.id = 'scoreBtnRow';
        btnRow.style.display = 'flex';
        btnRow.style.gap = '12px';
        btnRow.style.marginTop = '10px';
        scoreboardDiv.appendChild(btnRow);
    }
    btnRow.innerHTML = '';
    // 輸家懲罰按鈕（只在有最後一名時顯示）
    if (sorted.length > 0) {
        let punishBtn = document.getElementById('scorePunishBtn');
        if (!punishBtn) {
            punishBtn = document.createElement('button');
            punishBtn.id = 'scorePunishBtn';
            punishBtn.textContent = '輸家懲罰';
            punishBtn.className = 'punish-btn';
            punishBtn.onclick = function() {
                const punishments = [
                  "現場大聲說一句「我是最可愛的！」",
                  "用動物叫聲模仿10秒鐘",
                  "請大家給你一個奇怪的綽號，並用這個綽號自我介紹一次",
                  "用手機自拍一張鬼臉照，傳給群組",
                  "現場跳一小段即興舞蹈",
                  "請對方指定一個人，互相誇獎對方三句",
                  "用台語/方言說一句情話",
                  "用手比出一個最帥/最美的POSE，讓大家拍照",
                  "模仿現場任一位玩家的說話或動作10秒",
                  "請大家一起幫你想一個「今日金句」，你要大聲唸出來"
                ];
                const idx = Math.floor(Math.random() * punishments.length);
                const modal = document.getElementById('punishModal');
                const list = document.getElementById('punishList');
                list.innerHTML = `<li style='font-size:1.2em;padding:18px 0;text-align:center;'>${punishments[idx]}</li>`;
                modal.style.display = '';
            };
        }
        btnRow.appendChild(punishBtn);
    }
    // 重置分數按鈕
    if (resetBtn) {
        resetBtn.style.marginTop = '12px';
        btnRow.appendChild(resetBtn);
    }
    btnRow.style.flexDirection = 'column';
    btnRow.style.alignItems = 'stretch';
}

function updateGiverUI() {
    const topicDiv = document.getElementById('giverTopic');
    if (currentTopic) {
        topicDiv.textContent = currentTopic.topic;
        topicDiv.classList.add('animated');
        setTimeout(() => topicDiv.classList.remove('animated'), 400);
    } else {
        topicDiv.textContent = '—';
    }
}

function selectHint(idx, btn) {
    if (!usedHintIndexes.includes(idx) && usedHintIndexes.length < 5) {
        usedHintIndexes.push(idx);
        updateGuesserUI();
        if (btn) {
            btn.classList.add('animated');
            setTimeout(() => btn.classList.remove('animated'), 400);
        }
        showToast('已選擇助攻問題');
    }
}

function openCustomHintModal() {
    document.getElementById('customHintInput').value = '';
    document.getElementById('customHintModal').style.display = '';
    pendingCustomHint = null;
}
function closeCustomHintModal() {
    document.getElementById('customHintModal').style.display = 'none';
}
function addCustomHint() {
    const val = document.getElementById('customHintInput').value.trim();
    // 只加入 customHints，used: false，待選清單可重複被選
    if (val) {
        customHints.push({ text: val, used: false });
        closeCustomHintModal();
        updateGuesserUI();
        showToast('自訂問題已加入題庫');
    } else {
        closeCustomHintModal();
        showToast('請輸入自訂問題內容', true);
    }
}
function selectCustomHintInList(idx, btn) {
    if (!customHints[idx].used && (usedHintIndexes.length + customHints.filter(h => h.used).length) < 5) {
        customHints[idx].used = true;
        updateGuesserUI();
        if (btn) {
            btn.classList.add('animated');
            setTimeout(() => btn.classList.remove('animated'), 400);
        }
        showToast('已選擇自訂問題');
    }
}

function drawTopic() {
    const idx = getRandomUnusedTopicIndex();
    if (idx === null) {
        showToast('所有主題都已用完！', true);
        return;
    }
    usedTopicIndexes.push(idx);
    currentTopic = topics[idx];
    updateGiverUI();
    showToast('已抽出新主題');
}

function resetGuesser() {
    usedHintIndexes = [];
    updateGuesserUI();
    showToast('已重新開始');
}

function scoreThisRound() {
    const nameInput = document.getElementById('guesserName');
    const name = nameInput.value.trim();
    if (!name) {
        showToast('請輸入猜題者姓名', true);
        nameInput.focus();
        return;
    }
    // 計算本輪有效題數（含所有已問過的題目）
    let validCount = usedHintIndexes.length + customHints.filter(h => h.used).length;
    if (validCount === 0) {
        showToast('請至少問一題再計分', true);
        return;
    }
    let score = 6 - validCount;
    if (score < 1) score = 1;
    if (!scoreboard[name]) scoreboard[name] = 0;
    scoreboard[name] += score;
    // 彈出 MVP 輸入框
    openMvpModal(() => {
        showToast(`${name} 本輪獲得 ${score} 分！`);
        updateScoreboardUI();
        setTimeout(() => {
            resetGuesser();
            nameInput.value = '';
        }, 800);
    });
}

function failThisRound() {
    const nameInput = document.getElementById('guesserName');
    const name = nameInput.value.trim();
    if (!name) {
        showToast('請輸入猜題者姓名', true);
        nameInput.focus();
        return;
    }
    if (!scoreboard[name]) scoreboard[name] = 0;
    showToast(`${name} 本輪獲得 0 分`);
    updateScoreboardUI();
    setTimeout(() => {
        resetGuesser();
        nameInput.value = '';
    }, 800);
}

function resetScoreboard() {
    scoreboard = {};
    updateScoreboardUI();
    showToast('分數已重置');
}

function openMvpModal(onConfirm) {
    document.getElementById('mvpInput').value = '';
    document.getElementById('mvpModal').style.display = '';
    document.getElementById('confirmMvpBtn').onclick = function() {
        const mvp = document.getElementById('mvpInput').value.trim();
        if (mvp) {
            if (!scoreboard[mvp]) scoreboard[mvp] = 0;
            scoreboard[mvp] += 1;
            showToast(`MVP ${mvp} +1分`);
        }
        closeMvpModal();
        if (onConfirm) onConfirm();
    };
    document.getElementById('closeMvpModal').onclick = function() {
        closeMvpModal();
        if (onConfirm) onConfirm();
    };
    document.getElementById('mvpModal').onclick = function(e) {
        if (e.target === this) {
            closeMvpModal();
            if (onConfirm) onConfirm();
        }
    };
}
function closeMvpModal() {
    document.getElementById('mvpModal').style.display = 'none';
}

// 玩法說明彈窗
function showModal() {
    document.getElementById('modalBg').style.display = '';
    document.querySelector('#modalBg .modal ol').innerHTML = `
        <li>👥 選擇你的角色：你想當「猜題者」還是「提示者」呢？</li>
        <li>🎲 提示者按「抽主題」獲得神祕題目，千萬別讓猜題者偷看唷！</li>
        <li>💡 猜題者可以從各種助攻問題中自由選擇，問提示者來獲得線索。</li>
        <li>❓ 想不到要問什麼？也可以自己輸入自訂問題，讓遊戲更有趣！</li>
        <li>⏳ 每輪最多只能問5題，問完記得按「重新開始」開啟新一輪冒險。</li>
        <li>🏆 猜對了就輸入你的名字並按「猜對了」，系統會自動幫你加分！</li>
        <li>🔄 隨時可以切換角色，體驗不同的遊戲視角。</li>
        <li>📝 題目太難？助攻問題太爆笑？都可以用減號刪除，讓遊戲更順暢！</li>
    `;
    document.querySelector('#modalBg .modal div[style*="color:#888"]').textContent = '快揪朋友一起來侃侃而猜，看看誰最會問、誰最會猜！';
}
function hideModal() {
    document.getElementById('modalBg').style.display = 'none';
}

// Toast 操作提示
function showToast(msg, isError) {
    let toast = document.getElementById('toastMsg');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastMsg';
        toast.style.position = 'fixed';
        toast.style.bottom = '38px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = isError ? '#d32f2f' : 'var(--main-orange)';
        toast.style.color = '#fff';
        toast.style.padding = '12px 28px';
        toast.style.borderRadius = '24px';
        toast.style.fontSize = '1.1em';
        toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)';
        toast.style.zIndex = 2000;
        toast.style.opacity = 0;
        toast.style.transition = 'opacity 0.3s';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = 1;
    setTimeout(() => { toast.style.opacity = 0; }, 1800);
}

function skipCustomHint() {
    // 直接記錄一題「自訂問題」到已問過
    if ((usedHintIndexes.length + customHints.filter(h => h.used).length) < 5) {
        customHints.push({ text: CUSTOM_HINT, used: true });
        closeCustomHintModal();
        updateGuesserUI();
        showToast('已記錄自訂問題');
    } else {
        closeCustomHintModal();
        showToast('已達 5 題，請重新開始！', true);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 角色選擇
    document.getElementById('roleGuesser').onclick = () => switchRole('guesser');
    document.getElementById('roleGiver').onclick = () => switchRole('giver');
    document.getElementById('switchRoleBtn').onclick = () => {
        if (currentRole === 'guesser') switchRole('giver');
        else switchRole('guesser');
    };
    // 提示者抽主題
    document.getElementById('drawTopicBtn').onclick = drawTopic;
    // 猜題者重新開始
    document.getElementById('resetGuesserBtn').onclick = resetGuesser;
    // 猜對了計分
    document.getElementById('scoreBtn').onclick = scoreThisRound;
    // 猜錯了計分
    document.getElementById('failBtn').onclick = failThisRound;
    // 重置分數
    document.getElementById('resetScoreBtn').onclick = resetScoreboard;
    // 玩法說明彈窗
    document.getElementById('infoBtn').onclick = showModal;
    document.getElementById('closeModalBtn').onclick = hideModal;
    document.getElementById('modalBg').onclick = function(e) {
        if (e.target === this) hideModal();
    };
    // 預設顯示角色選擇
    document.getElementById('roleSelect').style.display = '';
    document.getElementById('guesserSection').style.display = 'none';
    document.getElementById('giverSection').style.display = 'none';
    document.getElementById('switchRoleBtn').style.display = 'none';
    document.getElementById('addCustomHintBtn').onclick = addCustomHint;
    document.getElementById('closeCustomHintModal').onclick = closeCustomHintModal;
    document.getElementById('customHintModal').onclick = function(e) {
        if (e.target === this) closeCustomHintModal();
    };
    document.getElementById('skipCustomHintBtn').onclick = skipCustomHint;
    document.querySelector('.logo').onclick = function() {
        // 回到角色選擇頁
        document.getElementById('roleSelect').style.display = '';
        document.getElementById('guesserSection').style.display = 'none';
        document.getElementById('giverSection').style.display = 'none';
        document.getElementById('switchRoleBtn').style.display = 'none';
    };
    updateScoreboardUI();
});

// CSS for punish-btn
const style = document.createElement('style');
style.innerHTML = `
.punish-btn {
  margin-top: 8px;
  background: #ff9800;
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 7px 18px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px #ffd180;
}
.punish-btn:hover {
  background: #ffa726;
}`;
document.head.appendChild(style);

// 懲罰彈窗 close 按鈕功能補強
if (document.getElementById('closePunishModal')) {
  document.getElementById('closePunishModal').onclick = function() {
    document.getElementById('punishModal').style.display = 'none';
  };
} 