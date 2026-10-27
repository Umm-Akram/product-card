//Задания 1-5: создайте переменные.
const name16 = "Rezeda";
const age16 = 43;
let city16 = "Saratov";
let isStudent16 = true;
let price16 = 5000;

//Задания 6-8: Определите что будет выведено в консоль.
const name2 = "Amina";
console.log(name2); // В консоли будет Amina

let score = 10;
score = 15;

console.log(score); // В консоли будет 15
let count = 5;

count = count + 2;
console.log(count); // В консоли будет 7

//Задание 9 что лучше использовать const или let?
let age2 = 20;
let score2 = 0;
const siteName = "Shop";
let count2 = 1;

// 10-12 Найдите ошибки в коде и исправьте их.
const age3 = 20;
// age3 = 21; // Ошибка, так как age3 объявлена как const, а константы нельзя изменять после их объявления.
// const username = "Amina"; // надо писать camelCase. Т.е. userName, а не username. Но это не ошибка, а рекомендация по стилю кода.
// const 1name = "Amina"; // Ошибка, так как идентификаторы не могут начинаться с цифры.
const name1 = "Amina"; // Правильный вариант, идентификатор начинается с буквы.

// 13-19: определите типы данных переменных.
const name3 = "Amina"; // Строка - String
let age4 = 20; // Число - Number
let isOnline = true; // Булевое значение - Boolean
let price2 = "5000"; // Строка - String
const value = false; // Булевое значение - Boolean
let value2; // undefined - значение переменной не определено, так как ей не присвоено никакое значение.

// 20-29 Что будет выведено в консоль?
const inequality = 5 > 3;
console.log(inequality); // В консоли будет true, так как 5 больше 3.

const inequality2 = 2 < 10;
console.log(inequality2); // В консоли будет true, так как 2 меньше 10.

const inequality3 = 10 === 10;
console.log(inequality3); // В консоли будет true, так как 10 равно 10.

const inequality4 = 10 === 5;
console.log(inequality4); // В консоли будет false, так как 10 не равно 5.

const inequality5 = 20 >= 5;
console.log(inequality5); // В консоли будет true, так как 20 больше или равно 5.

const inequality6 = 17 <= 18;
console.log(inequality6); // В консоли будет true, так как 17 меньше или равно 18.

const inequality7 = 5 !== 10;
console.log(inequality7); // В консоли будет true, так как 5 не равно 10.

let age5 = "20";
console.log(age5 === 20); // В консоли будет false, так как '20' (строка) не равно 20 (число).

let age6 = 20;
if (age6 >= 18) {
  console.log("Можно"); // В консоли будет "Можно", так как age6 больше или равно 18.
}

let age7 = 15;
if (age7 >= 18) {
  console.log("Можно"); // В консоли ничего не будет, так как age7 меньше 18.
}

let age8 = 16;
if (age8 >= 18) {
  console.log("Вход разрешен");
} else {
  console.log("Вход запрещен");
} // В консоли будет "Вход запрещен", так как age8 меньше 18.

// 30-33 Напишите код с использованием if-else, который проверяет температуру, возраст, баллы и пароль.
const temperature = 30;
if (temperature > 25) {
  console.log("Жарко");
} else {
  console.log("Не жарко");
} // В консоли будет "Жарко", так как температура больше 25.

const age9 = 19;
if (age9 >= 18) {
  console.log("Совершеннолетний");
} else {
  console.log("Несовершеннолетний");
} // В консоли будет "Совершеннолетний", так как age9 больше или равно 18.

const score3 = 80;
if (score3 >= 60) {
  console.log("Зачёт");
} else {
  console.log("Незачёт");
} // В консоли будет "Незачёт", так как score3 больше 60.

const password = "12345";
if (password === "12345") {
  console.log("Добро пожаловать");
} else {
  console.log("Неверный пароль");
} // В консоли будет "Добро пожаловать", так как password равно "12345".

let isOnline2 = true;
if (isOnline2) {
  console.log("Пользователь онлайн");
} else {
  console.log("Пользователь оффлайн");
} // В консоли будет "Пользователь онлайн", так как isOnline2 равно true.

let hasTicket = false;
if (hasTicket) {
  console.log("Можно войти");
} else {
  console.log("Билета нет");
} // В консоли будет "Билета нет", так как hasTicket равно false.

let age10 = 15;

if (age10 >= 18) {
  console.log("Можно войти");
} else {
  console.log("Нельзя войти");
}
/*const age = 18;

if age >= 18 {
  console.log('Можно');
}*/ // Ошибка, так как синтаксис if не правильный. Нужно использовать круглые скобки для условия.

let age11 = 18;

if (age11 >= 18) {
  console.log("Можно");
} // Тепепь синтаксис правильный, так как условие if заключено в круглые скобки.

let age12 = 18;
if ((age12 = 18)) {
  console.log("Возраст 18");
} // Ошибка, так как в условии if используется оператор присваивания (=). Надо писать === для сравнения.
if (age12 === 18) {
  console.log("Возраст 18");
} // Теперь синтаксис правильный, т.к. используется оператор сравнения (===) вместо оператора присваивания (=).

let num16 = 5;
num16 = num16 + 2; // В переменной number теперь хранится значение 7.
if (num16 > 6) {
  console.log("A");
} else {
  console.log("B");
} // В консоли будет "A", так как number больше 6.

let score4 = 10;
score4 = score4 + 5;
if (score4 >= 15) {
  console.log("Успех");
} else {
  console.log("Попробуй ещё");
} // В консоли будет "Успех", так как score4 больше или равно 15.

let price3 = 1000;
if (price3 > 500) {
  console.log("Дорого");
} else {
  console.log("Недорого");
} // В консоли будет "Дорого", так как price3 больше 500.

let userAge = "18";
if (userAge === 18) {
  console.log("Возраст подходит");
} else {
  console.log("Возраст не подходит");
} // В консоли будет "Возраст не подходит", так как userAge является строкой, а не числом.

const number2 = -5;
if (number2 > 0) {
  console.log("Положительное число");
} else if (number2 < 0) {
  console.log("Отрицательное число");
} // В консоли будет "Отрицательное число", так как number2 меньше 0.

const number3 = 6;
if (number3 > 0) {
  console.log("Положительное число");
} else if (number3 < 0) {
  console.log("Отрицательное число");
} // В консоли будет "Положительное число", так как number3 больше 0.

const number4 = 0;
if (number4 > 0) {
  console.log("Положительное число");
} else if (number4 < 0) {
  console.log("Отрицательное число");
} // В консоли ничего не будет выведено, так как number4 не является положительным или отрицательным числом.

let temperature2 = 20;
if (temperature2 >= 25) {
  console.log("Жарко");
} else if (temperature2 < 25) {
  console.log("Не жарко");
} // В консоли будет "Не жарко", так как temperature2 меньше 25.

let score5 = 100;
if (score5 >= 60) {
  console.log("Экзамен сдан");
} else if (score5 < 60) {
  console.log("Экзамен не сдан");
}

const isLoggedIn = false;
if (isLoggedIn === true) {
  console.log("Добро пожаловать");
} else if (isLoggedIn === false) {
  console.log("Пожалуйста, войдите в аккаунт");
}

const age13 = "20"; // рекомендуется let, но код не ломается.

/*if age13 >= 18 { // Ошибка, age13 должен быть заключен в кавычки, т.к. это строка, и в круглые скобки.
  console.log('Можно войти')
} else {
  console.log('Нельзя войти')
}*/

let count3 = 2; // Объявляем переменную count3 и присваиваем ей значение 2.

count3 = count3 + 3; // Прибавляем к count3 число 3, теперь count3 равно 5, и присваиваем 5 к переменной count3.

if (count3 >= 5) {
  // Если count3 больше или равно 5, то...
  console.log("A"); // то напиши в консоли "A".
} else {
  // Если иначе, то...
  console.log("B"); // то напиши в консоли "B".
} // В консоли будет "A", так как count3 равно 5, что больше или равно 5.

const value3 = 10;

if (value3 !== 10) {
  console.log("Первый");
} else {
  console.log("Второй");
} // выведется 'второй', т.к. value3 равно 10, а условие проверяет неравенство (10 !== 10) и оно ложно, поэтому выполняется блок else.
// 50
let age14 = 17;
age14 = 20;
if (age14 >= 18) {
  console.log("доступ разрешён");
} else if (age14 < 18) {
  console.log("Доступ не разрешён");
}
