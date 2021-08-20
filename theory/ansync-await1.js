// Promise 객체를 리턴하는 함수

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}



// Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then(() => {
    console.log(`${ms} ms후에 실행된다.`);
})

// Promise 객체를 리턴하는 함수를 await 로 호출하는 방법

const ms = await p(1000);
console.log(`${ms} ms후에 실행된다.`); //에러가 뜬다. 왜냐하면 ansync로 감싸지 않은 전역변수이기 때문이다.


// await 를 사용하는 경우, 항상 anync 함수 안에서 사용되어야 한다.


function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

(async function main() {
    const ms = await p(1000);
    console.log(`${ms} ms 후에 실행된다.`);
})(); // main(); 같은 결과 도출

// Promise 객체가 rejected 된 경우의 처리를 위해
// try catch 를 이용한다.

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(ms);
            reject(new Error('reason'));
        }, ms);
    });
}

(async function main() {
    try {
        const ms = await p(1000);
        //
    } catch (error) {
        console.log(error)
    }
})();
// async function 에서 return 되는 값은 
// Promise.resolve 함수롤 감싸서 리턴된다.

async function asyncP() {
    return 'mark';
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
    } catch (error) {
        console.log(error);
    }
})(); // mark
