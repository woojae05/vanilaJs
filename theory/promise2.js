// then 을 설정하는 시점을 정확히하고,
// 함수의 실행과 동시에 프로미스 객체를 만들어서 pending 이 시작하도록 하기 위해
// 프로미스 객체를 생성하면서 리턴하는 함수 (p) 를 만들어서 함수 (p) 실행과 동시에 then 을 설정합니다.

function p() {
    return new promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            resolve(); //fulfilled
        }, 1000)
    })

}

p().then(() => {
    console.log('1000ms 후에 fulfilled 됩니다. ')
})

// 마찬가지로 프로미스 객체가 rejected 되는 시점에 p.catch 안에 설정한 callback 함수가 실해됩니다.

function p() {
    return new promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            reject(); //rejected 
        }, 1000)
    }) 

}

p().then(() => {
    console.log('1000ms 후에 fulfilled 됩니다. ');
}).catch(() => {
    console.log('1000ms후에 rejected 됩니다.');
});


// excutor 의 resolve 함수를 실행할때 인자를 넣어 실행하면, then 의 callback 함수의 인자로 받을 수 있습니다
// resolve('hello');
// then((message)=>{...})

function p() {
    return new promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            resolve('message'); //fulfilled
        }, 1000)
    })

}
p().then((message) => {
    console.log('1000ms 후에 fulfilled 됩니다. ',message); // message 데이터를 받아 옴
}).catch(() => {
    console.log('1000ms후에 rejected 됩니다.');
});


// rejected


function p() {
    return new promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            reject(new Error('bad')); //rejected 
        }, 1000)
    }) 

}

p().then(() => {
    console.log('1000ms 후에 fulfilled 됩니다. ');
}).catch((resoan) => {
    console.log('1000ms후에 rejected 됩니다.',reson); // 이유가 넘어 옴 보통 객체로 불러 옴
});
