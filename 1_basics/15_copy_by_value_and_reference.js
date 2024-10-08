/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달 
 * 1) 기본적으로 모든 primitive 값은 copy by value이다. 
 * 2) 객체는 copy by reference다. 
 */
// copy by value
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.'
console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요 안유진 입니다.

// copy by reference
let originalObj = { 
    // name, group의 정보가 담긴 객체 값이 공간에 저장되고, 
    // originalObj이라는 변수의 주소는 이 공간을 가리킨다. 
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj; // cloneObj 변수는 originalObj가 가리키는 객체 값의 공간을 가리키게 된다. 
// 즉 두 객체는 같은 메모리 주소를 가리킨다.  

console.log(originalObj); // { name: '안유진', group: '아이브' }
console.log(cloneObj); // { name: '안유진', group: '아이브' }

originalObj['group'] = '코드팩토리';
console.log(originalObj); // { name: '안유진', group: '코드팩토리' }
console.log(cloneObj); // { name: '안유진', group: '코드팩토리' }

console.log(originalObj === cloneObj); // true
console.log(original === clone); // false

originalObj = {
    name: '안유진',
    group: '아이브',
};
cloneObj = {
    name: '안유진',
    group: '아이브',
};
console.log(originalObj === cloneObj); // false

const yuJin1 = {
    name: '안유진',
    group: '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',   
}

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false, 다른 메모리 공간을 참조한다. 

/**
 * Spread Operator
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3); // false

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5); // { year: 2003, name: '안유진', group: '아이브' }

const yuJIn6 = {
    name: '코드팩토리',
    ...yuJin3, // 스프레드에서도 name이 있기 때문에 뒤에 들어온 스프레드의 name으로 덮어쓰기 된다. 
}
console.log(yuJIn6); // { name: '안유진', group: '아이브' }

const yuJIn7 = {
    ...yuJin3, 
    name: '코드팩토리',
}
console.log(yuJIn7); // { name: '코드팩토리', group: '아이브' }