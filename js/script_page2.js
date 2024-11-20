const form = document.querySelector('#addCardForm'),
      cardList = document.querySelector('#cardList');

//+ Обработчик отправки формы:
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('titleInput').value,
          description = document.getElementById('descriptionInput').value,
          imageUrl = document.getElementById('imageInput').value;

    const card = document.createElement('div');
    card.classList.add('catalog__card');
    card.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <h3 class="catalog__card-title">${title}</h3>
        <p class="catalog__card-description">${description}</p>
    `;

    cardList.appendChild(card);

    form.reset();
});