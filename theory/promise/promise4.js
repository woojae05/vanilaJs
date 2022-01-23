// value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다.
// value 가 프로미스 객체면, resolve 된 then 메서드를 실행합니다.
// value 가 프로미스 객체가 안니면, value 를 인자로 보내면서 then 메서드를 실행합니다.

Promise.resolve( /*value*/ );
// 프로미스 객체인 경우
Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo')
    }, 1000);
})).then((data) => {
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then 이 실행됩니다', data);
})

// 프로미스 객체가 아닌경우
Promise.resolve('bar').then(data => {
    console.log('then 메서드가 없는 경우, fulfilled됩니다.', data)
})

// promise.rejcet 를 사용하면, catch 로 연결된 rejected 상태로 변경됩니다.

Promise.reject( /*value*/ )

Promise.reject(new Error('reason')).then(error => {})
.catch(error=>{
    console.log(error);
})

// //프로미스 객체 여러개를 생성하여,
// 배열로 만들어 인자로 넣고 Promise.all 을 실행하면,
// 배열의 모든 프로미스 객체들이 fulfilled  되었을 때, then 의 함수가 실행됩니다.
// then 의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.

// Promise.all(프로미스 객체들);

function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.all([p(1000),p(2000),p(3000)]).then (()=>{
    console.log('모두 fulfilled 된 이후에 실행됩니다.',message)
})

// 프로미스 객체 여러개를 생성하여,
// 배열로 만들어 인자로 넣고 Promise.race 를 실행하면,
// 배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then 의 함수가 실행됩니다.
// then 의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 돌려줍니다.

// promise.race([프로미스 객체들]);

function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.race([p(1000),p(2000),p(3000)]).then (()=>{
    console.log('가장 빠른 하나가 fulrfilled 된 이후에 실행됩니다.',message)
})
