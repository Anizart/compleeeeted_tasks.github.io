'use strict'

const startButton = document.querySelector('.timer__start-button'),
      pauseButton = document.querySelector('.timer__pause-button'),
      timeInput = document.querySelector('#timeInput'),
      timeDisplay = document.querySelector('#timeDisplay'),
      message = document.querySelector('.timer__message');

let isPaused = false; // Флаг
let remainingTime = 0; // Оставшееся время
let counter;

startButton.addEventListener('click', () => {
    const time = parseInt(timeInput.value, 10);

    if (isNaN(time) || time <= 0) {
        message.textContent = 'Введите корректное время!';
        return;
    }

    clearInterval(counter);
    message.textContent = '';
    timeDisplay.textContent = time;

    remainingTime = time;
    isPaused = false;
    pauseButton.textContent = 'Пауза';

    counter = setInterval(() => {
        if (!isPaused) {
            remainingTime--;
            timeDisplay.textContent = remainingTime;

            if (remainingTime <= 0) {
                clearInterval(counter);
                message.textContent = 'Время вышло!';
            }
        }
    }, 1000);
});

pauseButton.addEventListener('click', () => {
    if (remainingTime > 0) {
        isPaused = !isPaused;
        pauseButton.textContent = isPaused ? 'Продолжить' : 'Пауза';
    }
});
      