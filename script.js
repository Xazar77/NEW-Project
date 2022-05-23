'use strict';


let title = prompt('Как называется ваш проект?', ''),
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные'),
    screenPrice = +prompt('Сколько будет стоить данная работа?', '12000'),
    rollback = 100,
    adaptive = confirm('Нужен ли адаптив на сайте?'),
    service1 = prompt('Какой дополнительный тип услуги нужен?', ''),
    servicePrice1 = +prompt('Сколько это будет стоить?', ''),    
    service2 = prompt('Какой дополнительный тип услуги нужен?', ''),
    servicePrice2 = +prompt('Сколько это будет стоить?', ''),
    fullPrice = screenPrice + servicePrice1 + servicePrice2,
    servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

alert('Hello World!!!');

console.log('Я изучаю JS');

console.log(title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');

screens = screens.toLowerCase();
console.log(screens.split(','));

console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback / 100)));

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice >= 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}