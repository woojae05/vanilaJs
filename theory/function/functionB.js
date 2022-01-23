// 생성자 함수를 만드는 방법
// const hello = new Function();

const sum = new Function('a','b','c','return a+b+c'); // 문자열로 입력

console.log(sum(1,2,3)); // 6

// function 과 new Function(); 차이점
// new Function 전역 변수를 인식함
// funcion 지역 변수를 인식함

// arrow 함수를 만들어 이름이 hello1 인 변수에 할당
// 익명 함수
const hello1 = ()=>{
    console.log('hello1');
}

// 함수의 매개변수 
// 함수를 호출할 때 값을 지정

// 매개변수가 하나일 때, 괄호 생략 가능

const hello2 = name => {
    console.log('hello2', name);
}

const hell03 = (name,age) => {
    console.log('hello3',name,age);
}

// 함수의 리턴
// 함수를 실행하면 얻어지는 값

const hell04 = name=>{
    return `hello4 ${name}`;
}

const hello5 = name=> `hello5 ${name}`
// return과 중괄호 생략가능