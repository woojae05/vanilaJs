// async function 에서 return 되는 값은 
// Promise.resolve 함수롤 감싸서 리턴된다.

function p(ms){
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
             resolve(ms);
             //reject(new Error('reason'));
         }, ms);
    });
}

async function asyncP(){
    const ms = await p(1000);
    return 'mark: '+ ms ;
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
    } catch (error){
        console.log(error);
    }
    })(); // mark

// error 의 전파

function p(ms){
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            //resolve(ms);
            reject(new Error('reason'));
         }, ms);
    });
}

async function asyncP(){
    const ms = await p(1000);
    return 'mark: '+ ms ;
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
    } catch (error){
        console.log(error);
    }
    })(); //error


// finally

function p(ms){
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            //resolve(ms);
            reject(new Error('reason'));
         }, ms);
    });
}

async function asyncP(){
    const ms = await p(1000);
    return 'mark: '+ ms ;
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
    } catch (error){
        console.log(error);
    } finally{
        console.log('end');
    }

    })(); // resolve인 경우 mark: 10000, reject인 경우 error end


function p(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise
p(1000).then(()=>p(1000)).then(()=>p(1000)).then(()=>{
    console.log('3000 ms 후에 실행');
})

// async await

(async function main(){
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('3000ms 후에 실행');
})();


function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

// Promie.all
(async function main(){
    const results = await Promise.all([p(1000),p(2000),p(3000)]);
    console.log(results); //3초후 배열이 출력된다.

})
// promise.race 
(async function main(){
    const results = await Promise.rece([p(1000),p(2000),p(3000)]);
    console.log(results); //가장 빨리 resolve된것을 출력하고 종료한다.

})
