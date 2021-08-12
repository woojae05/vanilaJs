// 프로토타입을 이용한 객체 확장

function Person() {}

Person.prototype.hello=function(){
    console.log('hello');
}

function Korean(region){
    this.region = region
    this.where = function(){
        console('where',this.region);
    }
}

Korean.prototype = Person.prototype;

const k = new Korean('Seoul');

k.hello(); // hello
k.where(); // seoul

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);

// 객체 리터럴

const a = {};

console.log(a,typeof a); //{} 'object'

const b = {
    name:'mark',
};

console.log(b,typeof b); // {name:'makr'} 'object'

const c = {
    name: 'Mark',
    hello1() {
        console.log('hello1',this);
    },
    hello2: function(){
        console.log('hello2',this);
    },
    hello3: ()=>{
        console.log('hello3',this);
    },
};

c.hello1();
c.hello2();
c.hello3();