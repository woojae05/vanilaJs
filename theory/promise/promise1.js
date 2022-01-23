// promise

console.log(Promise) //[function: Promise]

// 생성자를 통해서 프로미스 객체를 만들 수 있다
// 생성자의 인자로 executor 라는 함수를 이용한다.

new Promise( /*excutor*/ );

// excutor 함수는 resolve 와 rejec를 인자로 가진다.
// (resolve,reject) =>{...}
// resolve 와 reject 는 함수이다.
// resolve(),reject()

new Promise( /*excutor*/ (resolve, reject) => {});

// 생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기) 상태라고 한다.

new Promise((resolve, reject) => {}); //pending

// excutor 함수 인자 중 하나인 reslove 함수를 실행하면, fulfilled(이행) 상태가 된다.

new promise((resolve, reject) => {
    // pending(대기)
    // ...
    resolve(); //fulfilled(이행)
})

// excutor 함수 인자 중 하나인 reject 함수를 실행하면, rejected(거부) 상태가 된다.

new Promise((resolve, reject) => {
    reject(); // rejected(거부)
});

// p 라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.

new promise((resolve, reject) => {
    // pending
    setTimeout(() => {
        resolve(); //fulfilled
    }, 1000)
})

// 예제 1

p = new promise((resolve, reject) => {
    // pending
    setTimeout(() => {
        resolve('Success!'); //fulfilled
    }, 1000)
})

p.then(value=>{
    console.log(value); // Success!
})

// 1초후 Success!를 출력