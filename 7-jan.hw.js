//Часть 1. Объекты
const user1 = {
  name: "Svetlana",
  age: 32,
  city: "Siberia",
};
const product1 = {
  name: "perfume",
  price: 8900,
  isAvailable: true,
};
const user2 = {
  name: "Amina",
  age: 20,
  city: "Astana",
};
console.log(user2.name);
console.log(user2.age);
user2.age = 21;
console.log(user2.age);

//spread operator
const user3 = {
  ...user2,
  isStudent: true,
};
console.log(user3.isStudent);
const user4 = {
  ...user3,
  country: "Kazakhstan",
};
console.log(user4);

const product3 = {
  name: "Phone",
  price: 300000,
  color: "black",
};
console.log(product3.name, product3.price);
product3.price = 250000;
console.log(product3.price);
delete product3.color;
console.log(product3);

//Часть 2. Объекты + условия
//Если score >= 60, вывести 'Зачёт', иначе 'Не зачёт'.
const student = {
  name: "Dana",
  score: 80,
};
if (student.score >= 60) {
  console.log("Зачёт");
} else {
  console.log("Не зачёт");
}
//Если пользователю 18 или больше, вывести 'Доступ разрешён', иначе 'Доступ запрещён'.
const user = {
  name: "Aruzhan",
  age: 17,
};
if (user.age >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}
//Создайте объект book со свойствами title, author, pages и выведите каждое свойство отдельно.
const book = {
  title: "Рыцарь пустыни",
  author: "А.И. Акрам",
  pages: 512,
};
console.log(book.title);
console.log(book.author);
console.log(book.pages);

//Добавьте color: 'white' и измените year на 2022.
const car = {
  brand: "Toyota",
  year: 2020,
};
car.color = "white";
car.year = 2022;
console.log(car);

//Создайте массив из трёх любимых продуктов.
const favoriteProducts = ["Meat", "Sushi rolls", "Pizza"];
console.log(favoriteProducts);

//Создайте массив чисел [10, 20, 30, 40].
const numbers = [10, 20, 30, 40];
console.log(numbers);

//Часть 3. Массивы
//Выведите первый элемент массива.
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
//Выведите второй элемент этого массива.
console.log(fruits[1]);
//Выведите последний элемент этого массива
console.log(fruits[2]);
//Что выведется?
const colors = ["red", "green", "blue"];
console.log(colors[1]); // green

//Что выведется?
const numbers1 = [5, 10, 15];
console.log(numbers1.length); // 3

//Замените dog на fox.
const animals = ["cat", "dog", "rabbit"];
animals[1] = "fox";
console.log(animals);

//Добавьте в конец массива horse.
animals.push("horse");
console.log(animals);

//Удалите последний элемент массива.
animals.pop("horse");
console.log(animals);

//Добавьте в начало массива lion.
animals.unshift("lion");
console.log(animals);

// Удалите первый элемент массива.
animals.shift("lion");
console.log(animals);

//Часть 4. Массив объектов
//Создайте массив users из 3 объектов. У каждого объекта должны быть name1 и age.
const users = [
  {
    name1: "Sveta",
    age: 26,
  },
  {
    name1: "Oleg",
    age: 28,
  },
  {
    name1: "Nina",
    age: 27,
  },
];
console.log(users);

//Выведите имя первого пользователя.
const users1 = [
  { name: "Amina", age: 20 },
  { name: "Dana", age: 25 },
];
console.log(users1[0].name);

//Выведите возраст второго пользователя.
console.log(users1[1].age);

//Выведите название третьего товара.
const products = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Tablet", price: 200000 },
];
console.log(products[2].name);

// Выведите цену второго товара.
console.log(products[1].price);

//Измените цену первого товара на 250000.
products[0].price = 250000;
console.log(products[0].price);

//Часть 5. forEach
//С помощью forEach выведите каждый элемент массива.
const fruits1 = ["apple", "banana", "orange"];
