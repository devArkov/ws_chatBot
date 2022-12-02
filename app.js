
const chatBody = document.querySelector('.chat-body');
const textInput = document.querySelector('.text-input');
const sendBtn = document.querySelector('.btn-send');

sendBtn.addEventListener('click', () => {renderUserMessage()});

textInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        renderUserMessage();
    }
})

const renderUserMessage = () => {
    const userInput = textInput.value;
    renderMessageElement(userInput, 'user');
    textInput.value = '';
    setTimeout(() => {
        renderChatBotResponse(userInput);
        setScrollPosition();
    }, 700)
}

const renderChatBotResponse = (userInput) => {
    const botResponse = getChatBotResponse(userInput);
    renderMessageElement(botResponse);
}

const getChatBotResponse = (userInput) => {
    return responseObj[userInput] == undefined ? userInput : responseObj[userInput]; 
}

const renderMessageElement = (txt, type) => {
    let className = 'user-message';
    if (type !== 'user') {
        className = 'bot-message';
    }
    const messageElement = document.createElement('div');
    const textNode = document.createTextNode(txt);
    messageElement.classList.add(className);
    messageElement.append(textNode);
    chatBody.append(messageElement);
}

const setScrollPosition = () => {
    if (chatBody.scrollHeight > 0) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}


// WS Client
const ws = new WebSocket('ws://localhost:8008');

ws.addEventListener('open', () => {
    console.log('Client: Connection success!');
});