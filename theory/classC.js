    // get, set 게터 세터

    class A {
        _name = 'no name';

        get name() {
            return this._name + '!!!';
        }

        set name(value) {
            this._name = `${value}!!!`;

        }
    }

    const a = new A();
    console.log(a); // A{_name='no name'}
    a.name = 'mark';
    console.log(a); // A{_name='mark'}

    console.log(a.name); // mark!!!@@@
    console.log(a._name); // mark!!!

    //readyonly 

    class B {
        _name = 'no name';

        get name() {
            return this._name + '!!!';
        }
    }

    const b = new B();
    console.log(b);  //no name
    B.name = 'mark';
    console.log(b); //no name

    // static 변수 ,함수   객체 아니고 클래스이 변수와 함수

    class A{
        static age =37;
        static hello(){
            console.log(A.age);
        }
    }

    console.log(A, A.age);  // [function: A] {age: 37} 37
    A.hello(); //37

    class B{
        age=37;
        static hello(){
            console.log(this.age);
        }
    }

    console.log(B, B.age); // [function: B] undefined
    B.hello(); // undefined
    

    class C {
        static name = '이 클래스의 이름을 C가 아니다.'
    }

    console.log(C); // [function:이 클래스의 이름을 C가 아니다.] 