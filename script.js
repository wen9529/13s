let deck = []; // 扑克牌数组
const gameBoard = document.getElementById('game-board');

function initializeDeck() {
    const suits = ['clubs', 'spades', 'diamonds', 'hearts'];
    const values = ['10', 'A', 'K', 'Q', 'J']; // 可根据需要添加更多牌
    suits.forEach(suit => {
        values.forEach(value => {
            let card = `${value}_of_${suit}.png`; // 生成扑克牌图片文件名
            deck.push(card);
        });
    });
}

function renderCards() {
    gameBoard.innerHTML = ''; // 清空游戏板
    deck.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.backgroundImage = `url(images/${card})`;
        gameBoard.appendChild(cardElement);
    });
}

document.getElementById('start-game').addEventListener('click', () => {
    initializeDeck();
    renderCards();
});

// AI建议功能
document.getElementById('ai-suggest').addEventListener('click', () => {
    let suggestions = getAISuggestions();
    alert("AI建议摆牌: " + suggestions.join(', '));
});

// 这里可以调用AI模型的逻辑
function getAISuggestions() {
    // 暂时返回一个假数据，您可以根据AI逻辑进行修改
    return ['建议1', '建议2', '建议3'];
}
