/**
 * Loops
 * 1) for
 * 2) while
 */
for(let i = 0;i < 10; i++) {
    console.log(i);
}

for(let i = 10; i > 10; i--) {
    console.log(i);
}

for(let i = 0; i < 3; i++) {
    for(let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

// *을 이용해서 6x6의 정사각형을 출력해라.
let square = '';
let side = 6;

for(let i = 0; i < 6; i++) {
    for(let j = 0; j < side; j++) {
        square += '*'
    }
    square += '\n';
}
console.log(square);
// ******
// ******
// ******
// ******
// ******
// ******

/**
 * for...in 
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}
for(let key in yuJin) { // 오브젝트에서 for...in 사용하면 key 값 가져온다. 
    console.log(key); 
}
// name
// year
// group

const iveMembersArray = [
    '안유진', '가을', '레이', '장원영', '리즈', '이서'
];

for(let key in iveMembersArray) { // 리스트에서 for...in을 사용하면 인덱스 값 가져온다. 
    console.log(key); // 0, 1, 2, 3, 4, 5
    console.log(`${key}:${iveMembersArray[key]}`); //
}

/**
 * for...of : 리스트에서 사용, 인덱스에 해당하는 값을 가져온다. 
 */
for(let value of iveMembersArray) {
    console.log(value);
}

/**
 * while
 */
let number = 0;
while(number < 10) {
    number ++;
}
console.log(number); // 10

/**
 * do...while
 */
do {
    number++; // 먼저 바디를 실행하고 조건에 해당하는지 판단한다. 
} while(number < 10);
console.log(number); // 10

/**
 *  break
 */
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    } 
    console.log(i); // 0 1 2 3 4 까지만 출력 
}

number = 0;
while(number < 10) {
    if(number === 5) {
        break;
    }
    number ++;
    console.log(number); // 1 2 3 4 5 까지만 출력 
}

/**
 * continue
 */
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i); // 5만 스킵된다. 0~9
}

number = 0;
while(number < 10) {
    number ++;

    if(number === 5) {
        continue;
    }
    console.log(number); // 5만 스킵된다. 1~10
}

