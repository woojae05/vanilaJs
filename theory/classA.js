// 객체를 만들 수 있는 새로운 방법 (e6 class)

// class 
// 선언적 방식
class A {}

console.log(new A());

// class 표현식을 변수에 할당
const B =class{};

console.log(new B());

// 선언적 방식이지만 호이스팅은 일어나지 않는다.


// constructor 생성자

class A{}

console.log(new A());

class B{
    constructor(){
        console.log("construcotr");
    }
}

console.log(new B()); // construtor

class C{
    constructor(name,age){
        console.log('constroutor',name,age);
    }
}

console.log(new c('mark',17)); // mark 17



