/**
 * Async theory
 */
// 동기로 실행 
function longWork() {
    const now = new Date();

    /**
     * milliseconds since epoch
     * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 
     * 밀리초로 반환한다.
     */
    const milliseconds = now.getTime();
    const afterTwoSeconds = milliseconds + 2 * 1000;

    while(new Date().getTime() < afterTwoSeconds) {

    }
    console.log('완료');
}
console.log('Hello'); // Hello
longWork(); // 완료
console.log('World'); // World

// 비동기로 실행 
function longWork2() {
    setTimeout(() => {
        console.log('완료');
    }, 2000);
}
console.log('hello');
longWork2();
console.log('World');
// hello
// World
// 완료