/**
 * Static Keyword
 */
class IdolModel2 {
    name;
    year;
    static groupName = '아이브'; // 인스턴스가 아닌 클래스 자체에 귀속된다. 

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {
        return '아이브';
    }
}

const yuJin = new IdolModel2('안유진', 2003);
console.log(yuJin);

console.log(IdolModel2.groupName); // 아이브
console.log(IdolModel2.returnGroupName());

/**
 * factory constructor
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list) {
        return new IdolModel(
            list[0],
            list[1],
        )
    }
}

const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});

console.log(yuJin2); // IdolModel { name: '안유진', year: 2003 }

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung); // IdolModel { name: '장원영', year: 2003 }