// Задание 2: Фильтрация массива чисел, оставляя только те, которые больше 5

//import { comments } from "./comments";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.filter((num) => num > 5);

console.log(numbersFromFive); // Output (выход): [6, 7, 8, 9, 10]

// Задание 3: Проверка наличия элемента в массиве с помощью метода includes

const books = [
  "Рыцарь пустыни. Халид ибн аль-Валид",
  "Жизнеописание Пророка Мухаммада, да благословит его Аллах и приветствует",
  "Сахих аль-Бухари",
  "Тафсир Ибн Касира",
];

const searchedBooks = books.includes("Сахих аль-Бухари");
console.log(searchedBooks); // Output (выход): true

const searchedBooks2 = books.includes("Сахих Муслим");
console.log(searchedBooks2); // Output (выход): false

// Задание 4: Функция для переворачивания массива c помощью метода reverse

function reverseArray(array) {
  return array.reverse();
}

reverseArray(numbers);
reverseArray(books);

console.log(numbers); // Output (выход): [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(books); // Output (выход): ["Тафсир Ибн Касира", "Сахих аль-Бухари", "Жизнеописание Пророка Мухаммада, да благословит его Аллах и приветствует", "Рыцарь пустыни. Халид ибн аль-Валид"]

// Задание 6 Импортирование
import { comments } from "./comments.js";

console.log(comments);

// Задание 7 Поиск коментов с .com
const searchCommentsWithDotCom = comments.filter((comment) =>
  comment.email.includes(".com"),
);

console.log(searchCommentsWithDotCom);

// Задание 8 Выбор значения

const newComments = comments.map(function (comment) {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1,
  };
});

console.log(newComments);

// Задание 9. Перебрать массив, чтобы объекты состояли только из id и name

const idName = comments.map(function (comment) {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(idName);

/* Задание 10добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавли-
ваем true, меньше - false.*/

const commentsWithIsInvalid = comments.map(function (comment) {
  return {
    ...comment,
    isInvalid: comment.body.length > 180,
  };
});

console.log(commentsWithIsInvalid);

// Задание 11 Часть 1 использую метод reduce
const emailsReduce = comments.reduce(function (result, comment) {
  result.push(comment.email);
  return result;
}, []);

console.log(emailsReduce);

// Задание 11 Часть 2 использую метод map

const emails = comments.map(function (comment) {
  return comment.email;
});

console.log(emails);

// Задание 12 часть 1 toString()перебрав массив с задания №11, привести его к строке.

const emailsString = emails.toString();

console.log(emailsString);

// Задание 12 часть 2 join()перебрав массив с задания №11, привести его к строке.

const emailsString2 = emails.join();

console.log(emailsString2);
