// 객체  object
// 함수, 클래스 (틀) => 객체, 개체, object


// function 틀(){} => new 틀() 
// 생성자 함수로 객체 만들기

// 생성자 함수

function A(){}

const a = new A();
console.log(a,typeof a); // A {},object
console.log(A()) 

// 생성하면서 데이터 넣기

function B(name,age){
    console.log(name,age);
}

const b = new B();
const c = new B('mark',37);
console.log(B());

// 객체에 속성 추가하기 property

// 값을 속서으로 넣기
function A(){
    this.name = 'mark'; // this를 사용해 변수를 객체형으로 변환가능
}
const a = new A(); //{name: 'mark'}
console.log(a);  // A {name:'mark'}

function B(){
    this.hello = function() {
        console.log('hello');
    }
}

(new B()).hello(); // new B().hello() 실행 가능

// new Fuction