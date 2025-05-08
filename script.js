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
    // 一般 64 題
    { category: "一般", hint: "你第一次是什麼時候？" },
    { category: "一般", hint: "你最難忘的是哪一次？" },
    { category: "一般", hint: "你最近一次是什麼時候？" },
    { category: "一般", hint: "你最尷尬的一次經驗？" },
    { category: "一般", hint: "你最開心的一次經驗？" },
    { category: "一般", hint: "你最想再來一次的經驗？" },
    { category: "一般", hint: "你最不想再來一次的經驗？" },
    { category: "一般", hint: "你最特別的一次經驗？" },
    { category: "一般", hint: "你最花錢的一次經驗？" },
    { category: "一般", hint: "你最省錢的一次經驗？" },
    { category: "一般", hint: "你最冒險的一次經驗？" },
    { category: "一般", hint: "你最感動的一次經驗？" },
    { category: "一般", hint: "你最後悔的一次經驗？" },
    { category: "一般", hint: "你最驚喜的一次經驗？" },
    { category: "一般", hint: "你最生氣的一次經驗？" },
    { category: "一般", hint: "你最害怕的一次經驗？" },
    { category: "一般", hint: "你最勇敢的一次經驗？" },
    { category: "一般", hint: "你最丟臉的一次經驗？" },
    { category: "一般", hint: "你最感謝的一次經驗？" },
    { category: "一般", hint: "你最想分享的一次經驗？" },
    { category: "一般", hint: "你最想忘記的一次經驗？" },
    { category: "一般", hint: "你最想炫耀的一次經驗？" },
    { category: "一般", hint: "你最想保密的一次經驗？" },
    { category: "一般", hint: "你最想改變的一次經驗？" },
    { category: "一般", hint: "你最想重來的一次經驗？" },
    { category: "一般", hint: "你最想帶朋友一起的經驗？" },
    { category: "一般", hint: "你最想帶家人一起的經驗？" },
    { category: "一般", hint: "你最想帶情人一起的經驗？" },
    { category: "一般", hint: "你最想一個人完成的經驗？" },
    { category: "一般", hint: "你最想再挑戰一次的經驗？" },
    { category: "一般", hint: "你最想推薦給別人的經驗？" },
    { category: "一般", hint: "你最想收藏的經驗？" },
    { category: "一般", hint: "你最想拍照紀念的經驗？" },
    { category: "一般", hint: "你最想錄影紀錄的經驗？" },
    { category: "一般", hint: "你最想寫日記記錄的經驗？" },
    { category: "一般", hint: "你最想畫畫記錄的經驗？" },
    { category: "一般", hint: "你最想寫歌記錄的經驗？" },
    { category: "一般", hint: "你最想寫小說記錄的經驗？" },
    { category: "一般", hint: "你最想畫漫畫記錄的經驗？" },
    { category: "一般", hint: "你最想做成影片的經驗？" },
    { category: "一般", hint: "你最想做成遊戲的經驗？" },
    { category: "一般", hint: "你最想做成商品的經驗？" },
    { category: "一般", hint: "你最想做成展覽的經驗？" },
    { category: "一般", hint: "你最想做成課程的經驗？" },
    { category: "一般", hint: "你最想做成活動的經驗？" },
    { category: "一般", hint: "你最想做成比賽的經驗？" },
    { category: "一般", hint: "你最想做成表演的經驗？" },
    { category: "一般", hint: "你最想做成故事的經驗？" },
    { category: "一般", hint: "你最想做成漫畫的經驗？" },
    { category: "一般", hint: "你最想做成動畫的經驗？" },
    { category: "一般", hint: "你最想做成電影的經驗？" },
    { category: "一般", hint: "你最想做成小說的經驗？" },
    { category: "一般", hint: "你最想做成詩的經驗？" },
    { category: "一般", hint: "你最想做成繪本的經驗？" },
    { category: "一般", hint: "你最想做成歌曲的經驗？" },
    { category: "一般", hint: "你最想做成劇本的經驗？" },
    { category: "一般", hint: "你最想做成廣告的經驗？" },
    { category: "一般", hint: "你最想做成新聞的經驗？" },
    { category: "一般", hint: "你最想做成報導的經驗？" },
    { category: "一般", hint: "你最想做成專題的經驗？" },
    { category: "一般", hint: "你最想做成研究的經驗？" },
    // 18禁 16題
    { category: "18禁", hint: "你第一次是什麼時候？" },
    { category: "18禁", hint: "你最激情的是哪一次？" },
    { category: "18禁", hint: "你最害羞的是哪一次？" },
    { category: "18禁", hint: "你最刺激的是哪一次？" },
    { category: "18禁", hint: "你最難忘的是哪一次？" },
    { category: "18禁", hint: "你最尷尬的是哪一次？" },
    { category: "18禁", hint: "你最想再來一次的是哪一次？" },
    { category: "18禁", hint: "你最想保密的是哪一次？" },
    { category: "18禁", hint: "你最想推薦給朋友的是哪一次？" },
    { category: "18禁", hint: "你最想忘記的是哪一次？" },
    { category: "18禁", hint: "你最想炫耀的是哪一次？" },
    { category: "18禁", hint: "你最想錄影的是哪一次？" },
    { category: "18禁", hint: "你最想拍照的是哪一次？" },
    { category: "18禁", hint: "你最想寫日記的是哪一次？" },
    { category: "18禁", hint: "你最想畫畫的是哪一次？" },
    { category: "18禁", hint: "你最想寫小說的是哪一次？" }
];

const CUSTOM_HINT = '自訂問題';

let currentRole = null; // 'guesser' or 'giver'
let usedHintIndexes = [];
let usedTopicIndexes = [];
let currentTopic = null;
let scoreboard = {}; // { name: 分數 }

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
        customBtn.onclick = () => selectCustomHint(customBtn);
        btnsDiv.appendChild(customBtn);
        // 其他助攻問題
        hints.forEach((item, idx) => {
            if (item.hint === CUSTOM_HINT) return; // 避免重複
            // 已問過的不再顯示
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
    usedHintIndexes.forEach(idx => {
        const div = document.createElement('div');
        div.className = 'used-item';
        div.textContent = hints[idx].hint;
        usedList.appendChild(div);
    });
    updateScoreboardUI();
}

function updateScoreboardUI() {
    const list = document.getElementById('scoreboardList');
    list.innerHTML = '';
    // 排序：分數高到低
    const sorted = Object.entries(scoreboard).sort((a, b) => b[1] - a[1]);
    sorted.forEach(([name, score]) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${name}</span><span>${score} 分</span>`;
        list.appendChild(li);
    });
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

function selectCustomHint(btn) {
    showToast('請口頭說出自訂問題！');
    if (btn) {
        btn.classList.add('animated');
        setTimeout(() => btn.classList.remove('animated'), 400);
    }
    // 不會被移到已問過區塊，可重複點選
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
    // 計算本輪有效題數（不含自訂問題）
    let validCount = usedHintIndexes.length;
    if (validCount === 0) {
        showToast('請至少問一題再計分', true);
        return;
    }
    let score = 6 - validCount;
    if (score < 1) score = 1;
    if (!scoreboard[name]) scoreboard[name] = 0;
    scoreboard[name] += score;
    showToast(`${name} 本輪獲得 ${score} 分！`);
    updateScoreboardUI();
    // 自動重置本輪
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

// 玩法說明彈窗
function showModal() {
    document.getElementById('modalBg').style.display = '';
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
    updateScoreboardUI();
}); 