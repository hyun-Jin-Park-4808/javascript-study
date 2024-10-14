/**
 * Closure
 * 
 * A Closure is the combination of a function and the lexical environment within 
 * which that function was decleared.
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다.
 */
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

// console.log(getNumber()); // 5

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber; // innerGetNumber 실행 안 하고 함수를 바로 반환
}

const runner = getNumber(); // getNumber 먼저 실행한 후 아래에서 runner를 실행
console.log(runner); // [Function: innerGetNumber]
console.log(runner()); // 5 => 하위 함수가 상위 함수보다 오래 살아남는 경우
// getNumber가 콜 스택에서 사라진 다음에 innerGetNumber를 실행할 수 있다. 

/**
 * 1) 데이터 캐싱
 */
function cacheFunction() {
    var number = 10 * 10;// 이 계산이 매우 오래 걸린다 가정했을 때 closure 사용하면 좋다. 

    function innerCacheFunction(newNumb) {
        return number * newNumb;
    }
    return innerCacheFunction;
}

const runner2 = cacheFunction(); // 이렇게 하면 number 라는 값의 계산을 여기서 한 번만 하고 클로저에서 이 값을 기억한다. 
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2() {
    var number = 99;

    function increment() {
        number ++;
        return number;
    }
    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101

/**
 * 3) 정보 은닉 
 */
function Idol(name, year) {
    this.name = name;
    var _year = year;

    this.sayNameAndYear = function() {
        return `안녕하세요. 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.name); // 안유진
console.log(yuJin._year); // undefined
console.log(yuJin.sayNameAndYear()); // 안녕하세요. 저는 안유진입니다. 2003에 태어났습니다. 
// _year는 this를 안썼기 때문에 함수로 객체가 생성된 다음 해당 함수 내의 함수인 sayNameAndYear에 의해서만 가져올 수 있다. 