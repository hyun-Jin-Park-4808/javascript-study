/**
 * Getter and Setter
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear() { // 함수처럼 정의했지만 함수가 아니다. 
        return `${this.name}-${this.year}`;
    }

    set setName(name) { // property가 private일 때는 set으로 속성 값을 변경해야 한다. 
        this.name = name;
    } // 하지만 setter는 잘 사용하지 않는다. 
}

const jin = new IdolModel('안유진', 2003);
console.log(jin);
console.log(jin.nameAndYear); // () 써주면 안된다! 

jin.setName = '장원영';
console.log(jin); // IdolModel { name: '장원영', year: 2003 }

class IdolModel2 {
    #name; // private 값 
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // IdolModel2 { year: 2003 }
console.log(yuJin2.name); // 안유진 , getter를 이용해 private 값을 가져온다. 

yuJin2.name = '코드팩토리';
console.log(yuJin2.name); // 코드팩토리
