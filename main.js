const productCard = document.querySelector('.card');
const changeColorCardButton = document.querySelector('#change-card-color-button');
const randomColor = '#a8ccf5'

changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = randomColor;
})