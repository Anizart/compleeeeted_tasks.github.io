'use strict'

const messageInput = document.querySelector('#messageInput'),
      user1Button = document.querySelector('#user1Button'),
      user2Button = document.querySelector('#user2Button'),
      chatMessages = document.querySelector('#chatMessages');

//+ Обработчики кнопок:
user1Button.addEventListener('click', () => {
    const text = messageInput.value.trim();
    if (text) {
        addMessage(text, 'user1');
        messageInput.value = '';
    }
});

user2Button.addEventListener('click', () => {
    const text = messageInput.value.trim();
    if (text) {
        addMessage(text, 'user2');
        messageInput.value = '';
    }
});

//+ Функции:
//+ Добавление сообщения:
function addMessage(text, user) {
    const message = document.createElement('div');
    message.classList.add('chat__message', `chat__message--${user}`);
    message.textContent = text;

    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Прокрутка вниз
}