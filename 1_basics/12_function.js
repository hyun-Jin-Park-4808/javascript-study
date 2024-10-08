/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 * 10 / 2 % 2 스트링으로 변환해서
 * 반환받고 싶다면?
 */
console.log((2 * 10 / 2 % 3).toString()); // 1
console.log((3 * 10 / 2 % 3).toString()); // 0

/**
 * DRY
 * Don't Repeat yourself -> 반복 없는 코드를 작성하는 것이 중요하다!
 */
function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}

function calculate(number) { // number: parameter
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의: Parameter
 * 실제 입력하는 값: argument
 */
calculate(4); // 2, argument = 4
calculate(5); // 1

function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 4); // 8
function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2, 4);
multiply(2); // y 입력 안하면 y의 default 값인 10이 입력된다. 

/**
 * 반환받기
 * return 받기
 */
function multiply(x, y) {
    return x * y;
}

const result = multiply(2, 4);
console.log(result);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4)); // 12

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5)); // 20

const multiply4 = x => x * 2;
console.log(multiply4(2)); // 4

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7)); // x: 2 y: 5 z: 7

function multiply6(x) {
    return function(y) {
        return function(z) {
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}
console.log(multiply6(3)(4)(5)); 

const multiplyTwo = function(x, y) {
    return x * y;
}
console.log(multiplyTwo(4, 5)); // 20

const multiplyThree = function(x, y, z) {
    console.log(arguments); // x, y, z에 입력되는 숫자, [Arguments] { '0': 4, '1': 5, '2': 6 }
    return x * y * z;
}

console.log(multiplyThree(4, 5, 6)); // 120

const multiplyAll = function(...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1); 
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function - 즉시 실행 함수 
(function(x, y) {
    console.log(x * y);
}) (4, 5)

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true
