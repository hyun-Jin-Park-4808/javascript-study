/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * Extensible
 */
console.log(Object.isExtensible(yuJin)); // true
yuJin['position'] = 'vocal';
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

Object.preventExtensions(yuJin); // 확장 못되게 막음. 
console.log(Object.isExtensible(yuJin)); // false

yuJin['groupName'] = '아이브';
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

delete yuJin['position']; // 삭제는 된다. 
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter] }

/**
 * Seal
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);
console.log(Object.isSealed(yuJin2)); // false, 봉인 안되 있다. -> 모든 오브젝트 기능들 다 할 수 있다.

Object.seal(yuJin2); // configurable: true -> false로 변경해줌. 
console.log(Object.isSealed(yuJin2)); // true

yuJin2['groupName'] = '아이브';
console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] }

delete yuJin2['name'];
console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] }

Object.defineProperty(yuJin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
// {
//   value: '안유진',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }

/**
 * Freezed
 * 읽기 외에 모든 기능을 불가능하게 만든다. 
 * enumerable 빼고 다 false로 만든다. 
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3)); // false

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); // true

yuJin3['groupName'] = '아이브';
console.log(yuJin3); // 추가 안 됨. { name: '안유진', year: 2003, age: [Getter/Setter] } 

delete yuJin3['name'];
console.log(yuJin3); // 삭제 안 됨. { name: '안유진', year: 2003, age: [Getter/Setter] }

console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
// {
//     value: '안유진',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   }
  
const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4); // 하위 객체인 wonYoung까지 freeze 시키진 않는다. 
console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4['wonYoung'])); // false
