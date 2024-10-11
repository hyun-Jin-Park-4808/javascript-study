/**
 * Property Attribute
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티
 * - 예) getter and setter
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
/**
 * 1) value - 실제 프로퍼티 값 
 * 2) writable - 값을 수정할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다. 
 * 3) enumerable - 열거가 가능한 지 여부. for...in 그룹 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 * - false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 
 * 단, writable이 true인 경우 값 변경과 writable을 변경하는 것은 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
// { value: '안유진', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptors(yuJin)); // s를 붙이면 객체만 넣을 수 있다. 
// {
//     name: {
//       value: '안유진',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     year: { value: 2003, writable: true, enumerable: true, configurable: true }
//   }

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
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

yuJin2['heignt'] = 172;
console.log(yuJin2); // undefined
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'heignt'));

Object.defineProperty(yuJin2, 'heignt', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
})
console.log(yuJin2); // undefined
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.heignt = 180;
console.log(yuJin2); // undefined

Object.defineProperty(yuJin2, 'heignt', {
    writable: false, // 수정 불가
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.heignt = 172;
console.log(yuJin2); // { name: '안유진', year: 1992, age: [Getter/Setter], heignt: 180 }
// 에러는 안 나지만 키는 180 그대로임. 

/**
 * Enumerable
 */

Object.defineProperty(yuJin2, 'name', {
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log(Object.keys(yuJin2)); // [ 'year', 'age', 'heignt' ]

for(let key in yuJin2) {
    console.log(key); // year age height
}
console.log(yuJin2); // { year: 1992, age: [Getter/Setter], heignt: 180 }
console.log(yuJin2.name);

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
    writable: true, // 여기가 true이면 value는 변경 가능! 
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
// {
//     value: undefined,
//     writable: false,
//     enumerable: false,
//     configurable: false
//  }

// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// }) // 에러 발생, height의 configurable이 false이기 때문

Object.defineProperty(yuJin2, 'height', {
    value: 172,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
Object.defineProperty(yuJin2, 'height', {
    writable: false, // configurable = false일 때, true -> false로는 변경 가능! 
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     writable: true,
// }) 얘는 에러 발생! configurable = false일 때, writable: false -> true는 변경 불가!! 