/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
    console.log(numberOne);
}

// levelOne();

function levelOne() {
    var numberOne = 40;

    console.log(numberOne);
}

levelOne(); // 아래 덮어씌우는 로직 없으면 40 나온다.
// 재정의 되어 아래랑 똑같이 나온다.  
// levelTwo numberTwo: 99
// levelTwo numberOne: 40
// levelOne numberOne : 40

console.log(numberOne); // 20

function levelOne() {
    var numberOne = 40;

    function levelTwo() {
        var numberTwo = 99;

        console.log(`levelTwo numberTwo: ${numberTwo}`); // 99
        console.log(`levelTwo numberOne: ${numberOne}`); // 40
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`); // 40
}

levelOne();
console.log(numberOne); // 20
// console.log(numberTwo); 

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다. 
 * 
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;
function functionOne() {
    var numberThree = 100;

    functionTwo(); // 3 출력됨. 
}

function functionTwo() { // 함수로 정의하면 새로운 스코프가 생성이 된다. 
    console.log(numberThree); // 3, 같은 글로벌 스코프 내에 선언된 3이 출력된다. 
}

var i = 999;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scop : ${i}`);
// i in global scop : 10, for loop의 경우 var 키워드를 쓰면 새로운 블록 레벨 스코프가 생성되지 않는다. 

i = 999;
for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(`i in global scop : ${i}`);
// i in global scop : 999, let, const 스코프를 쓰면 블록 레벨 스코프를 만들 수 있다. 

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다. 
 */