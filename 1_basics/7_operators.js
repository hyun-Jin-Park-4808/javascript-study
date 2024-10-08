/**
 * 산술 연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10); // 0
console.log(10 % 3); // 1

console.log('-------');
console.log(10 * (10 + 10));

/** 
 * 증가와 감소
 */
let number = 1;
number ++;
console.log(number);

number --;
console.log(number);
console.log('--------');
/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++; 
console.log(result, number); // 1 2 

result = number --;
console.log(result, number); // 2 1

result = ++ number;
console.log(result, number); // 2 2

result = -- number;
console.log(result, number); // 1 1

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면?
 */
let sample = '99';
console.log(+sample); // 99
console.log(typeof + sample); // number

console.log(sample); // 99
console.log(typeof sample); // string

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number

sample = '안유진';
console.log(+sample); // NaN: Not a Number

/**
 * 할당 연산자
 */
number = 100;
console.log(number); // 100

number += 10;
console.log(number); // 110

number -= 10;
console.log(number); // 100

number *= 10;
console.log(number); // 1000

number /= 10;
console.log(number); // 100

number %= 10;
console.log(number); // 0

/**
 * 비교 연산자
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
console.log(5 == 5); // 값만 비교, 아래 전부 true
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5); // 타입까지 비교 
console.log(5 === '5'); // false

console.log(5 != '5'); // false

console.log(5 !== 5); // false
console.log(5 !== '5') // true

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다'); // 10이 0보다 크다

/**
 * 논리 연산자
 * 1) && 
 * 2) ||
 */

// && 조건은 모두 true 여야 true를 반환한다. 
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

/// ||는 하나만 true여도 true를 반환한다.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false) // false
console.log('-------')

console.log(10 > 1 && 20 > 2); // true
console.log(10 < 1 && 20 > 2); // false
console.log(10 < 1 && 20 < 2); // false

console.log(10 > 1 || 20 > 2); // true
console.log(10 < 1 || 20 > 2); // true
console.log(10 < 1 || 20 < 2); // false

/**
 * 단축평가(short circuit evaluation)
 * && 사용할 때 좌측이 true면 우측 값 반환
 * && 사용할 때 좌측이 false면 좌측 값 반환
 * || 사용할 때 좌측이 true면 좌측 값 반환
 * || 사용할 때 좌측이 false면 우측 값 반환 
 */
console.log(true || '아이브'); // true
console.log(false || '아이브'); // 아이브
console.log(false && '아이브'); // false
console.log(true && '아이브'); // 아이브
console.log(true && true && '아이브'); // 아이브
console.log(true && false && '아이브') // false

/**
 * 지수 연산자
 */
console.log(2 ** 2); // 4
console.log(10 ** 3); // 10 * 10 * 10 = 1000

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리'; // 좌측값이 null이거나 undefined일 때, 우측 값을 반환해라. 
console.log(name); // 코드팩토리

name = name ?? '아이브';
console.log(name); // 코드팩토리

let name2;
name2 ??= '코드팩토리';
console.log(name2); // 코드팩토리