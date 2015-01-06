var car = {};

car.toString = function() {
    return "(car (doors " + this.doors + ") (wheels " + this.wheels + ") (wheels.configurable " + this.wheels.configurable + "))";
};

Object.defineProperty(car, 'doors', {
    configurable: true,
    value: 2
});

Object.defineProperty(car, 'wheels', {
    configurable: false,
    writable: true,
    value: 4
});


malert("Zakladni nastaveni 2 a 4");
malert(car);


malert('');
malert('Nastavime obe na 5 - doors neni writable');
car.wheels = 5;
car.doors = 5;
malert(car);

malert('');
malert('Zkusim doors zmenit writable na true a zapsat 15 - bez defineProperty');
car.doors.writable = true;
car.doors = 15;
malert(car);

malert('');
malert('Zkusim doors definovat znovu s writable');

Object.defineProperty(car, 'doors', {
    writable: true
});

malert(car);
malert('... a zmenit na 3');
car.doors = 3;
malert(car);


malert('');
malert('delete doors i wheels');
delete car.doors;
delete car.wheels;

malert(car);

malert('');
malert('Zkusim wheels definovat znovu s configurable: true');

Object.defineProperty(car, 'wheels', {
    configurable: true
});

malert(car);
