// extends 클래스의 상속 기본

class Parent {
    name = 'lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();
console.log(p, c) // p와 c는 같다

c.hello(); // hello lee
c.name = 'anna';
c.hello(); // hello anna

// override  클래스의 상속 멤버 변수 및 함수 오버라이딩, 추가

class Parent {
    name = 'lee';
    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 37;
    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();
console.log(p, c); // 함수의이름이 같으면 자신이 쓴 거를 가져옴
c.name = 'anna';
c.hello(); // hello anna 37

// super 클래스의 상속 생성자 함수 변경

class Parent {
    name;

    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age;

    constructor(name, age) {
        super(name); // 부모의 것을 가져옴
        this.age = age;
    }
    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent('mark'); 
const c  = new Child('mark',37); 

console.log(p,c); // Parent {naem: 'mark'} Child {name: 'mark',age: 37}
c.hello(); //hello mark 37

// static 클래스의 상속 static 상속

class Parent {
    static age =37;
}

class Child extends Parent {}

console.log(Parent.age,Child.age);

