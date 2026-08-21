// Задание 3 Общая информация о пользователе

const user = {
  name: "Резеда Умм Акрам",
  age: 43,
  mail: "b.82@mail.ru",
  job: "По уходу за ребёнком",
  post: "nurse",
  country: "Саудовская Аравия",
  city: "Медина",
  maritalStatus: "Не замужем",
  religion: "Ислам",
};

console.log(user);

// так же можно по отдельности выводить информацию о пользователе

console.log(user.name); // Резеда Умм Акрам
console.log(user.age); // 43
console.log(user.mail); // b.82@mail.ru
console.log(user.job); // По уходу за ребёнком
console.log(user.post); // nurse
console.log(user.country); // Саудовская Аравия
console.log(user.city); // Медина
console.log(user.maritalStatus); // Не замужем
console.log(user.religion); // Ислам

// Задание 4 Информация о машине

const car = {
  brand: "Lamborghini",
  model: "Aventador",
  year: 2021,
  color: "Rosso Efesto", // Красный
  transmission: "Автоматическая",
};

// Общая информация о машине

console.log(car);

// Задание 5 Информация о владельце машины

car.owner = user;

// Владелец авто Резеда Умм Акрам

console.log(car.owner.name);

// Задание 5 Добавление свойства maxSpeed

function addMaxSpeed(car) {
  if (car.maxSpeed === undefined) {
    car.maxSpeed = 350;
  }
}

addMaxSpeed(car);

// Заданаие 6 Вывод в консоль свойства объекта car

function carProperty(car, model) {
  console.log(car[model]);
}

carProperty(car, "model"); // Aventador
carProperty(car, "maxSpeed"); // 350
carProperty(car, "color"); // Rosso Efesto
carProperty(car, "transmission"); // Автоматическая

// Задание 7 Вывод массива продуктов в консоль

const products = [
  "Яблоки",
  "Творог",
  "Молоко",
  "Хлеб",
  "Сыр",
  "Кефир",
  "Масло",
  "Сметана",
];

console.log(products); // Вывод массива продуктов в консоль

const books = [
  {
    title: "Рыцарь пустыни. Халид ибн аль-Валид",
    author: "Абдульвахид Акрам",
    year: 2009,
    coverColor: "Чёрная",
    genre: "Исламская история",
  },
  {
    title:
      "Жизнеописание Пророка Мухаммада, да благословит его Аллах и приветствует",
    author: "Ибн Хишам",
    year: 767,
    coverColor: "Зелёно-красная",
    genre: "Исламская биография",
  },
  {
    title: "Сахих аль-Бухари",
    author: "Мухаммад аль-Бухари",
    year: 850,
    coverColor: "Зеленая",
    genre: "Хадисоведение",
  },
  {
    title: "Тафсир Ибн Касира",
    author: "Ибн Касир",
    year: 1924,
    coverColor: "Красная",
    genre: "Религия",
  },
];

console.log(books); // Вывод массива книг в консоль

// Добавление/пуширование книги в массив
books.push({
  title: "Аль-Асма уль-Хусна ва сыфатухуль-хусна (99 имён Аллаха)",
  author: "Ибн Каййим",
  year: 1320,
  coverColor: "Синяя",
  genre: "Ислам",
});

// Добавление в массив свойства вселенной
const books2 = [
  {
    title: "Рыцарь пустыни. Халид ибн аль-Валид",
    author: "Абдульвахид Акрам",
    year: 2009,
    coverColor: "Чёрная",
    genre: "Исламская история",
    universe: "Ислам",
  },
  {
    title:
      "Жизнеописание Пророка Мухаммада, да благословит его Аллах и приветствует",
    author: "Ибн Хишам",
    year: 767,
    coverColor: "Зелёно-красная",
    genre: "Исламская биография",
    universe: "Ислам",
  },
  {
    title: "Сахих аль-Бухари",
    author: "Мухаммад аль-Бухари",
    year: 850,
    coverColor: "Зеленая",
    genre: "Хадисоведение",
    universe: "Ислам",
  },
  {
    title: "Тафсир Ибн Касира",
    author: "Ибн Касир",
    year: 1924,
    coverColor: "Красная",
    genre: "Религия",
    universe: "Ислам",
  },
];

const allBooks = [...books, ...books2];

console.log(allBooks); // Вывод массива всех книг в консоль

function addIsRare(books) {
  // открыли функцию
  return books.map(function (book) {
    // открыли map и функцию внутри
    return {
      // открыли объект
      ...book,
      isRare: book.year > 2000,
    }; // закрыли объект
  }); // закрыли функцию и map
} // закрыли addIsRare

addIsRare(books); // вызвали функцию addIsRare

const newBooks = addIsRare(books);

console.log(newBooks);

