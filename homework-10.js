// Задание 1 homework-10.js и подключили его в index.html
// Задание 2 создала файл products.js

import { products } from "./products.js";

console.log(products);

// Задание 3: Функция-шаблон

const productTemplate = (product, index) => `
  <li class="product__item card ${index === 0 ? "card--stock" : ""}">
    <img class="card__img" src="${product.image}" alt="Товар ${product.name}">

    <span class="card__skin-type">${product.skinType}</span>

    <h2>${product.name}</h2>

    <div class="card__rating rating">
      <div class="rating__stars">★★★★☆</div>
      <span class="rating__value">${product.rating}</span>
    </div>

    <p class="card__description">${product.description}</p>

    <span class="card__structure">Состав:</span>

    <ul class="card__list">
      ${product.structure.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <div class="card__price">
      <b>Цена:</b>
      <span>${product.price} ₽</span>
    </div>

    <button class="card__buy-button">Купить</button>
  </li>
`;

const productList = document.querySelector(".product"); // Находим элемент, куда будем вставлять товары

const productsDescriptions = products.reduce((result, product) => {
  /* Задание 4: Создаём массив объектов, где ключ - название товара, значение - 
  описание товара*/
  result.push({
    [product.name]: product.description,
  });

  return result;
}, []);

console.log(productsDescriptions);

function getCardsCount() {
  // Задание 5: 1я Функция, которая запрашивает у пользователя количество карточек для отображения
  const count = prompt("Сколько карточек отобразить? От 1 до 5");

  if (count >= 1 && count <= 5) {
    return count;
  }

  return 5;
}

// Задание 5: 2я Функция, которая отображает карточки в зависимости от количества, введённого пользователем

function renderCards(products, count) {
  const cards = products.slice(0, count);
  const productsHTML = cards.map(productTemplate);

  productList.innerHTML = productsHTML.join("");
}
renderCards(products, getCardsCount());
