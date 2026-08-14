function showTemperature(city, temperature) {
  // Задача 3
  console.log(
    `Сейчас в ${city} температура - ${temperature} градусов по Цельсию`,
  );
}

showTemperature("Москва", 30);
showTemperature("Стамбул", 20);

const SPEED_LIGHT = 299792458; // задача 4

function measurementSpeedLight(number) {
  if (number > 299792458) {
    console.log("Сверхсветовая скорость");
  } else if (number < 299792458) {
    console.log("Субсветовая скорость");
  } else if (number === 299792458) {
    console.log("Скорость света");
  }
}

measurementSpeedLight(300000000); // Сверхсветовая скорость
measurementSpeedLight(1); // Субсветовая скорость
measurementSpeedLight(299792458); // Скорость света

const product = "Ноутбук"; // задача 5
const price = 200000;
function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

buyProduct(250000); // Ноутбук приобретён. Спасибо за покупку!
buyProduct(199995); // Вам не хватает 5$, пополните баланс

function sayHello() { // задача 6
  console.log("Привет!");
}

sayHello();

const name = "Вера"; // задача 7
let age = 38;
const city = "Медина";