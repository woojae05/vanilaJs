// fulfilled 되거나 rejected 된 후에 실행할 것이 있다면, finally() 를 설정하고, 함수를 인자로 넣는다.


function p() {
    return new promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            reject(new Error('bad')); //rejected 
        }, 1000)
    })

}

p()
    .then(message => {
        console.log('1000ms 후에 fulfilled 됩니다. ');
    })
    .catch(error => {
        console.log('1000ms후에 rejected 됩니다.', error); // 이유가 넘어 옴 보통 객체로 불러 옴
    })
    .finally(() => {
        console.log('end');
    })

// 보통 비동기 작업을 할때 , callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다.
// 이런 경우 함수가 진행되지 않고, callback 함수 안으로 진행됩니다.

function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

c(() => {
    console.log('1000ms 후에 callback함수가 실행됩니다.');
});

c(() => {
    c(() => {
        c(() => {
            console.log('3000ms 후에 callback함수가 실행됩니다.');
        });
    });
});
 
// then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있습니다.
// then 에 함수를 넣는 여러 방법을 확인해봅시다.

function p(){
    return new promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}

p().then(()=>{
    return p();
})
.then(()=>p())
.then(p)
.then(()=>{
    console.log('4000ms 후에 fulfilled 됩니다.')
});