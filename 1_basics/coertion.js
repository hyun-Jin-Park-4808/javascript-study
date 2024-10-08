/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); // string 32

// 암묵적 => 이렇게 쓰면 안 된다! 명시적으로 써라. 
let test = age + ''; // number + string = string
console.log(typeof test); // string 32

console.log('98' + 2); // 982라는 string 값이 된다.
console.log('98' * 2); // 196, string은 곱하기 개념이 없어서 암묵적으로 숫자로 변환된다. 
console.log('98' - 2); // 96

/**
 * 명시적 변환 몇 가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.99')); // number 0
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // number 0.99
console.log(typeof +'1', +'1'); // number 1

/**
 * Boolean 타입으로의 변환
 */
console.log(!'x'); // false, string 변수에 값이 있으면 true가 반환이 된다. 
console.log(!!'x'); // true
console.log(!''); // true
console.log(!!''); // false
console.log(!!0); // false, 숫자 0은 false 취급한다. 
console.log(!!'0'); // true
console.log(!!'false'); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false

console.log(!!{}); // object는 무조건 true
console.log(!![]); // array도 true

/**
 * false로 반환되는 경우 
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0 
 */