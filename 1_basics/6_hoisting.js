/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

/**
 * Hoisting이란?
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */
var name;
console.log(name);
name = '코드팩토리'; // undefined
console.log(name); // 코드팩토리

console.log(yuJin);
// let yuJin = '안유진'; ReferenceError: Cannot access 'yuJin' before initialization