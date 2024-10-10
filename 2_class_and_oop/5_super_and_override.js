/**
 * Super and Override
 * 
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요. ${this.name}입니다.`;
    }
}

class FemalIdolModel extends IdolModel {
    // 노래 / 춤
    part;

    constructor(name, year, part) {
        super(name, year);
        this.part = part;
    }

    sayHello() {
        // return `안녕하세요. ${this.name}입니다. ${this.part}를 맡고 있습니다.` 
        // js에서는 constructor가 아닌 곳에서는 super가 들어갈 곳에도 this를 써줘야 한다.
        return `${super.sayHello()} ${this.part}를 맡고 있습니다.`; // 이렇게 하면 dry를 지킬 수 있다. 
    }
}

const yuJIn = new FemalIdolModel('안유진', 2003, '보컬');
console.log(yuJIn);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJIn.sayHello());
