'use strict'

const sliderImages = document.querySelectorAll('.slider__image'),
      prevButton = document.querySelector('.slider__button--prev'),
      nextButton = document.querySelector('.slider__button--next');

let currentIndex = 0; // Текущая фотография

//+ Логика кнопки "Предыдущая":
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider();
});

//+ Логика кнопки "Следующая":
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider();
});

updateSlider();

//+ Функция для обновления активного изображения:
function updateSlider() {
    sliderImages.forEach((image, i) => {        
        if (i === currentIndex) {
            image.classList.add('slider__image--active');
        } else {
            image.classList.remove('slider__image--active');
        }
    });
}