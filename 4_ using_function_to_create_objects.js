/**
 * Using function to create objects
 */
function IdolModel(name, year) {
    if(!new.target) { // new 키워드로 객체 생성 안할 경우, 함수 내부에서 new 키워드로 생성하도록 해주기! 
        return new IdolModel(name, year);
    }
    console.log(this); // new 키워드 사용하면 this가 IdolModel {} 객체에 매핑된다. 
    // new 키워드 없이 생성자 메서드로 객체 생성하면 this가 Object [global] {} 로 매핑된다. 
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);
console.log(global.name);

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

// const yuJin3 = new IdolModelArrow('안유진', 2003);
// arrow 함수는 생성자 함수가 될 수 없다! 
