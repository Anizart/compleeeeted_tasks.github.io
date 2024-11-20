'use strict'

const quotes = [
    "Сделай или умри. Промежуточных вариантов нет.",
    "Если не можешь контролировать гнев — ты слаб.",
    "Сила воли важнее, чем сила мышц.",
    "Не бойся рисковать, бойся сожалений.",
    "Действуй так, будто неудача невозможна.",
    "Каждый день — это ещё один шанс стать лучше."
];

const quoteText = document.querySelector('#quoteText'),
      getQuoteButton = document.querySelector('#getQuoteButton');

//+ Генерация случайной цитаты:
getQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `Стетхэм сказал: "${quotes[randomIndex]}"`;
});