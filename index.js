'use strict';

// задание 1

// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);



// задание 2

// const total = 100;
// const ordered = 50;
// let resalt;

// if (ordered > total) {
// resalt = ' На складе недостаточно товаров!';
// } else { 
//     resalt = 'Заказ оформлен, с вами свяжется менеджер';
// }
// console.log(resalt);



// задание 3

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// const input = prompt('Введите пароль');
// if (input === null) {
//     message = 'Отменено пользователем!';
// }
// else if (ADMIN_PASSWORD === input) {
//     message = 'Добро пожаловать!';
// }
// else {
//     message = 'Доступ запрещен, неверный пароль!';
// }
// alert(message);



// задание 4

// const credits = 23580
// const pricePerDroid = 3000
// let message
// let totalPrice
// let resalt = prompt('Сколько ремонтных дроидов Вы желаете купить?')

// if (resalt === null) {
//     message = 'Отменено пользователем!';
//     console.log(message);
// } else {
//     resalt = Number(resalt);
//     totalPrice = (resalt * pricePerDroid);
//     console.log(totalPrice);
//     if (resalt * pricePerDroid > credits) {
//         message = 'Недостаточно средств на счету!';
//         console.log(message);
//     } else {
//         const balance = credits - resalt * pricePerDroid;
//         message = "Вы купили " + resalt + " ремонтных дроидов, на счету осталось " + balance + " кредитов!";
//     }
// }
// alert(message);



// задание 5

// const country = prompt('Укажите Вашу страну доставки');
// let price;
// let message;

// if (country === null) {
//     message = 'Отменено пользователем!';
//     console.log(message);
// }
// switch (country.toLowerCase()) {
//     case 'китай':
//         price = 100;
//         message = " Доставка в " + country + " будет стоить " + price + " кредитов";
//         break;
//     case 'чили':
//         price = 250;
//         message = " Доставка в " + country + " будет стоить " + price + " кредитов";
//         break;
//     case 'австралия':
//         price = 170;
//         message = " Доставка в " + country + " будет стоить " + price + " кредитов";
//         break;
//     case 'индия':
//         price = 80;
//         message = " Доставка в " + country + " будет стоить " + price + " кредитов";
//         break;
//     case 'ямайка':
//         price = 120;
//         message = " Доставка в " + country + " будет стоить " + price + " кредитов";
//         break;

//     default:
//         message = 'В вашей стране доставка не доступна';
// }
// alert(message);

// задание 6

// let input;
// let total = 0;

// do {
//     input = prompt('Введите число');
//     if (input === null) {
//         break;
//     }
//     if (Number.isNaN(Number(input))) {
//         alert('Было введено не число, попробуйте еще раз');
//     } else {
//         total = total + Number(input);
//     }
// }
// while (input !== null);

// alert('Общая сумма чисел равна' + total + '.');