/**
 * Callback
 */
function waitAndRun() {
    setTimeout(() => {
        console.log('end')
    }, 2000);
}

waitAndRun(); 

function waitAndRun2() {
    setTimeout(() => {
            console.log('1번 콜백 끝');
            setTimeout(() => {
                console.log('2번 콜백 끝');
                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
}

waitAndRun2();
// 1번 콜백 끝
// 2번 콜백 끝
// 3번 콜백 끝

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

timeoutPromise.then((res) => {
    console.log('---then---')
    console.log(res);
}); 
// ---then---
// 완료

// const getPromise = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('완료');
//     }, seconds * 1000);
// });

// getPromise(2)
// .then(() => {
//     console.log('---first then---');
//     console.log(res);

//     return getPromise(1);
// })
// .then((res) => {
//     console.log('--- second then ---');
//     console.log(res);

//     return getPromise(4);
// });

const getPromise2 = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        /**
         * if(xxx) {
         * resolve('성공')
         * } else {
         *  reject('에러);
         * }
         */
        resolve('에러');
    }, seconds * 1000);
});

// getPromise2(2)
// .then(() => {
//     console.log('---first then---');
//     console.log(res);

//     return getPromise(1);
// })
// .catch((res)=> {
//     console.log('--- first catch ---');
//     console.log(res);
// })
// .finally(() => {
//     console.log('---finally---');
// });

Promise.all([
    getPromise2(1),
    getPromise2(2), // 가장 느린 함수 기준으로 then 혹은 catch가 걸린다. 
    getPromise2(1),
]).then((res) => {
    console.log(res); // [ '에러', '에러', '에러' ] 가 2초 뒤에 뜬다. 
}); // 세 개의 프로미스 모두 동시에 실행 