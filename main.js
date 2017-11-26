//Создать объект Человек с общими данными.
// Используя прототипы создать для Человека направление профессий (к примеру программист, музыкант).
// У каждого направления есть общие данные.
//Создать для каждого направления профессий - узкие специализации на основе прототипов.
// К примеру программисты могут быть только для веб(все вместе или по отдельности фронт и бэк),
// а также есть JAVA программисты, программисты для iOS и т.д.
// Если музыкант, то они могут быть тоже узкого направления, к примеру играть только на одном инструменте
// (гитара (бас, акустика, электро), барабаны, фортепиано, скрипка и т.д.),
// конечно бывают люди играющие на нескольких инструментах.


function Person () {
    this.eyes = 2;
    this.hand = 2;
    this.one = function () {
        console.log('Привет, у меня ' + this.eyes + ' глаза и ' + this.hand + ' руки.');
    }
}

function Human (name, profession) {
    this.name = name;
    this.profession = profession;
    this.two = function () {
        console.log('Меня зовут ' + this.name + '. Я работаю ' + this.profession);
    }
}

Human.prototype = new Person();


function Direction (language, instrument, lesson) {
    this.language = language;
    instrument = [];
    this.instrument = instrument;
    this.lesson = lesson;
}

Direction.prototype = new Human();

    Direction.prototype.three = function () {
        switch (this.profession) {
            case 'programmer':
                console.log('Мое направление ' + this.language + '.');
                break;
            case 'musician':
                console.log('Мое направление ' + this.instrument + '.');
                break;
            case 'teacher':
                console.log('Мое направление ' + this.lesson + '.');
                break;
            default:
                console.log('У меня другое направление.');
                break;
        }
    };


var Niki = new Direction(null, 'baraban', null);

Niki.name = 'Ник';
Niki.instrument[0] = 'скрипка';
Niki.instrument[1] = 'гитара';
Niki.profession = 'musician';

Niki.one();
Niki.two();
Niki.three();

var Ann = new Direction('Front', null, null);

Ann.name = 'Анна';
Ann.profession = 'programmer';

Ann.one();
Ann.two();
Ann.three();

var Denis = new Direction(null, null, 'Математика');

Denis.name = 'Денис';
Denis.profession = 'teacher';

Denis.one();
Denis.two();
Denis.three();

var Mary = new Direction();

Mary.name = 'Мария';
Mary.profession = 'финансист';

Mary.one();
Mary.two();
Mary.three();







