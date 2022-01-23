// new 함수(); 생성자 함수

// 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법

function Person(name,age){
    this.name =name;              // this 역활: 객체를 만들었을 떄 객체를 가리키는
    this.age = age;
}

const p = new Person('mark',37);

console.log(p,p.name,p.age);

const a= new Person('Anna',36);

// arrow함수는 this가 있지 않아 객체로 만들어도 할당을 못한다.

// 함수를 호출하면 함수를 만들어서 리턴
function plus(base){
    return function(num){
        return base +num;
    }
}

const plus5 = plus(5);
console.log(plus5(10));

// 함수를 인자로 하여 함수를 호출

function hello(c) {
    console.log('hello');
    c(); 
}
 // arrow 함수 가능
 // c 자리에 할당
hello(function(){
    console.log('콜백');
})
