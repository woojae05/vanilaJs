// 멤버 변수  객체의 프로포티

class A{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

console.log(new A('mark',37))  // A{name:;'mark', age:37}
// A오브젝트의 name프로퍼티에 'mark' age프로퍼티에 37

// class field 는 런타임 확인

class B{
    name;
    age;
}

console.log(new B());

class C{
    name = 'no name';
    age = 0;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C('mark',37)) // C{name:'mark', age:37};

// 멤버함수

class A{
    hello1(){
        console.log('hello1',this);
    }
    hello2 = () =>{
        console.log('hello2',this);
    }
}

new A().hello1(); // hello1 A{hello2: [function: hello2] }
new A().hello2(); // hello2 A{hello2: [function: hello2] }

class B {
    name = 'mark';

    hello1() {
        console.log('hello1',this.name);
    }
}

new B.hello1(); // hello1 mark