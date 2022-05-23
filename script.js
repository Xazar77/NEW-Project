'use strict';


let title = 'The study JS',
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 50,
    rollback = 100,
    fullPrice = 600000,
    adaptive = true;

alert('Hello World!!!');

console.log('Я изучаю JS');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');

screens = screens.toLowerCase();
console.log(screens.split(','));

console.log('Вывести в консоль Процент отката посреднику за работу ' + (fullPrice * (rollback / 100)));