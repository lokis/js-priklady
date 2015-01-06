var car = {};

Object.defineProperty(car, 'doors', {
    configurable: true,
    value: 2
});

Object.defineProperty(car, 'wheels', {
    configurable: false,
    value: 4
});

malert(car.doors, "car doors 1");

car.doors.should.be.exactly(2, "car.doors neodpovida");
car.wheels.should.be.exactly(4, "car.wheels neodpovida");

delete car.doors;
delete car.wheels;

(typeof (car.doors)).should.equal('undefined', "doors je nastaveno");
car.wheels.should.be.exactly(4, "kol neni 4");
malert(car.doors, "car doors 2");
malert(car.wheels, "car wheels po delete");


Object.defineProperty(car, 'kufr', {
    configurable: false,
    value: 1
});
car.kufr.configurable = false;
car.kufr.should.be.exactly(1, "kufr neni jeden");
malert(car.kufr, "kufr 1");
delete car.kufr;
malert(car.kufr, "kufr 2");


car.kufr.should.be.exactly(1, "kufr neni jeden");

malert(car.kufr.configurable, "car.kufr.configurable pred");
car.kufr.configurable = true;
malert(car.kufr.configurable, "car.kufr.configurable po");
malert(car.kufr, "kufr 3");

delete car.kufr;
(typeof (car.kufr)).should.equal('undefined', "kufr je nastaveno");



(8).should.be.exactly(5, "Vse probehlo v poradku");