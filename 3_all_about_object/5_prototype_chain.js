/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다. 
// class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값이다. 
console.log(testObj.__proto__); // [Object: null prototype] {}

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype); // {}
console.dir(IdolModel.prototype, {
    showHidden: true,
});
{/* <ref *1> {
  [constructor]: [Function: IdolModel] {
    [length]: 2,
    [name]: 'IdolModel',
    [arguments]: null,
    [caller]: null,
    [prototype]: [Circular *1]
  }
} */}

// circular reference -> 서로가 서로를 참조하는 관계 
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

const yuJin = new IdolModel('안유진', 2002);
console.log(yuJin.__proto__); // {}
console.log(yuJin.__proto__ === IdolModel.prototype); // true
console.log(testObj.__proto__ === Object.prototype); // true

console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true

console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false, 객체마다 고유한 주소값을 갖게 된다. 
console.log(yuJin2.hasOwnProperty('sayHello')); // true, yuJin2만의 고유 속성인지 체크 

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function() { // 이렇게 객체 밖에 선언을 하면 모든 객체의 공동 함수로 사용할 수 있다. 
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('`안유진', 2003);
const wonYoung3 = new IdolModel3('`장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yuJin3.sayHello === wonYoung3.sayHello); // true 
console.log(yuJin3.hasOwnProperty('sayHello')); // false, sayHello는 상속받은 값, 유진3에 선언된 속성이 아니다. 

IdolModel3.sayStaticHello = function() {
    return '안녕하세요 저는 static method 입니다.';
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return '안녕하세요 저는 인스턴스 메서드입니다.';
    }
}

IdolModel4.prototype.sayHello = function() {
    return '안녕하세요. 저는 prototype method 입니다.';
}

const yuJin4 = new IdolModel4('안유진', 2003);;
// 프롶퍼티 셰도잉 - class에서 override
console.log(yuJin4.sayHello()); // 프로토타입 메서드 덮어씌움. 

/**
 * getPrototypeOf, setPrototypeOf
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function() {
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true
// console.log(ray.sayHello()); FemalIdolModel 객체에는 sayHello가 없음. 

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel); // false
console.log(ray.constructor === IdolModel); // true
console.log(gaEul.constructor === IdolModel); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false 
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false

FemaleIdolModel.prototype = IdolModel.prototype; 
// FemalIdelModel 함수의 프로토타입을 변경하면서 해당 함수의 전체 객체에 변경이 적용된다. 

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true