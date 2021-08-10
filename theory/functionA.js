// 함수 만드는 법
 // 1. function hello(){}

function hello1() {
    console.log('hello1');
}

console.log(hello1,typeof hello1);
// 함수는 객체의 한 종류


// 함수의 매개변수 
// 함수를 호출할 때 값을 지정
function hello2(name){
    console.log('hello2',name);
}

// 함수의 리턴
// 함수를 실행하면 얻어지는 값
function hello3(name){
    return `hello3 ${name}`; 
}
 
console.log(hello3('mark'));

// 2. const hello = function(){}

const hello1 = function(){
    console.log('hello1');
}

console.log(hello1,typeof hello1);


// 함수의 매개변수 
// 함수를 호출할 떄 값을 지정
const hello2 = function(name){
    console.log(hello2(name));
}

// 함수의 리턴
// 함수를 실행하면 얻어지는 값

const hello3 = function(name){
    return `hello3 ${name}`;
}

// 선언적 function 과 익명 함수를 만들어 변수에 할당 차이점
// 선억적 fuctona 은 호이스팅이 일어난다. 
// 호이스팅이란? 함수 안에 있는 선언들을 모드 끌어올려서 해당 함수
// 유효 범위를 최상단에 선언하는 것 (var,선언적 function)