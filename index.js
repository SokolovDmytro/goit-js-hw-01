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

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const input = prompt('Введите пароль');
if (input === null) {
    message = 'Отменено пользователем!';
}
else if (ADMIN_PASSWORD === input) {
    message = 'Добро пожаловать!';
}
else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

// задание 4

