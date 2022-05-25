'use strict';


let title = prompt('Как называется ваш проект?'),
    screens = prompt('Какие типы экранов нужно разработать?'),
    screenPrice = +prompt('Сколько будет стоить данная работа?'),
    rollback = 30,
    adaptive = confirm('Нужен ли адаптив на сайте?'),
    service1 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice1 = +prompt('Сколько это будет стоить?'),
    service2 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice2 = +prompt('Сколько это будет стоить?');

let allServicePrices,
    fullPrice,
    servicePercentPrice;





const getAllServicePrices = () => {
    return servicePrice1 + servicePrice2;
};

const getFullPrice = () => {
    return screenPrice + allServicePrices;
};


const getTitle = () => {
    title = title.toLowerCase().trim();
    return title[0].toUpperCase() + title.slice(1).toLowerCase();
};


const getServicePercentPrices = () => {
    return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
};


const showTypeOf = (variable) => {
    console.log(typeof variable);
    
};
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice >= 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}





console.log(getTitle());
console.log(screens.toLowerCase().split(','));
console.log(servicePercentPrice );

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');


console.log(screens.split(','));

console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback / 100)));


