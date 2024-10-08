/**
 * Class Keyword
 */
class IdolModel {
    // name; 따로 속성 정의 안 해도 된다.  
    // year; 하지만 소통을 위해 정의해주는 게 좋다. 
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName() {
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

console.log(yuJin.name);
console.log(yuJin.year);
console.log(yuJin.sayName());
console.log(typeof IdolModel); // class는 function으로 인식된다.
console.log(typeof yuJin); // object