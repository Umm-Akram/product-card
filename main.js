// Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-all-card-color-button');
const blueColorHash = '#75dbf4'
const pinkColorHash = '#f884cb'

changeColorAllCardButton.addEventListener('click', () => {
    productCards.forEach((card) => {
        card.style.backgroundColor = blueColorHash;
    });
});


// Покраска первой карточки

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-first-card-color-button');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = pinkColorHash
})


// Открыть google для новичков

const openGoogleButton = document.querySelector('#open-google-button');

openGoogleButton.addEventListener('click', openGoogle)


function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}


//Вывод консоль 

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

outputConsoleLog('ДЗ №6')


//Вывести заголовок в консоль

const title = document.querySelector('h1');

title.addEventListener('mouseenter', () => {   //ввод мыши
  console.log(title.textContent);
});



const changeColorButton = document.querySelector('#change-color-button');

console.log(changeColorButton);

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('button--active');
});
