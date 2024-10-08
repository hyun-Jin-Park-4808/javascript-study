/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push()
console.log(iveMembers.push('코드팩토리')); // 7 => 새로운 배열 길이 반환됨. 
console.log(iveMembers);

// pop()
console.log(iveMembers.pop()); // 코드팩토리
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// shift()
console.log(iveMembers.shift()); // 왼쪽 값 안유진, 제거
console.log(iveMembers); // [ '가을', '레이', '장원영', '리즈', '이서' ]

// unshift()
console.log(iveMembers.unshift('안유진')); // 6, 추가된 길이, 왼쪽에 추가
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// splice(), 
console.log(iveMembers.splice(0, 3)) // [ '안유진', '가을', '레이' ], 0번 인덱스 값부터 3개 없앤다. 없애는 값들 출력
console.log(iveMembers); // [ '장원영', '리즈', '이서' ]

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

// concat() -> 새로운 배열을 만들어서 반환
console.log(iveMembers.concat('코드팩토리')); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리' ]
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// slice() -> 원래 배열이 변경되지 않는다. 
console.log(iveMembers.slice(0, 3)); // 0번 인덱스부터 3번 인덱스 전까지 잘라서 반환한다. [ '안유진', '가을', '레이' ] 
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3); // [ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ]

let iveMembers4 = iveMembers;
console.log(iveMembers4); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log(iveMembers4 === iveMembers); // true

// join(), ()안에 구분자를 넣어, 해당 구분자로 배열 값을 조인하여 하나의 string으로 반환한다. 
console.log(typeof iveMembers.join()); // string
console.log(iveMembers.join()); // 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/')); // 안유진/가을/레이/장원영/리즈/이서

// sort(), 오름차순 정렬
iveMembers.sort();
console.log(iveMembers); // [ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]
console.log(iveMembers.reverse()); //  '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

let numbers = [
    1, 9, 7, 5, 3,
];

console.log(numbers); // [ 1, 9, 7, 5, 3 ]

// a, b를 비교했을 때
// 1) a를 b 보다 나중에 정렬하려면(뒤에 두려면) 0보다 큰 숫자(1)를 반환 - 오름차순
// 2) a를 b 보다 먼저 정렬하려면(앞에 두려면) 0보다 작은 숫자(-1)를 반환 - 내림차순 
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers); // [ 1, 3, 5, 7, 9 ]

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers); // [ 9, 7, 5, 3, 1 ]

// map() , 새로운 array 반환
console.log(iveMembers.map((x) => x)); // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]
console.log(iveMembers.map((x) => `아이브: ${x}`)); // [ '아이브: 장원영', '아이브: 이서', '아이브: 안유진', '아이브: 리즈', '아이브: 레이', '아이브: 가을' ]
console.log(iveMembers.map((x) => {
    if(x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
})); // [ '장원영', '이서', '아이브: 안유진', '리즈', '레이', '가을' ]
console.log(iveMembers); // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ] => 변함 없음. 

// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0)); // [8, 6]

// find(), 조건에 해당하는 첫 번째 값 하나만 반환 
console.log(numbers.find((x) => x % 2 === 0)); // 8

// findIndex(), 조건에 해당하는 값의 인덱스를 반환 
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0)); // 25 , p = previous, n = next 
// 초기값 0 이 처음 p에 들어가고 첫 번째 n이 numbers[0] = 1이 들어간다. 
// 그다음 첫 연산 결과가 두번째 p에 들어가고, 두 번째 n에 numbers[1]dl 들어간다. 