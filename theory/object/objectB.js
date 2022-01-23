// new Object() object로 객체 만들기

const a = new Object();
console.log(a,typeof a); //{} 'object'

const b = new Object(true);
console.log(b,typeof b) //{Boolean : true} 'object'

const c = new Object({name:'mark'})
console.log(c,typeof c);  //{name: mark} 'object'

//  프로토타입 체인

// prototype

function Person(name,age){
    this.name = name;
    this.age = age;
    // this.hello = function(){
    //     console.log('hello',this.name,this.age);
    // };
}

Person.prototype.hello = function(){
    console.log('hello',this.name,this.age);
}

const p = new Person('mark',37);
p.hello();
console.log(p.toString()); //[object object]

console.log(Person.prototype.hello);

console.log(Object.prototype)
console.log(Object.prototype.toString)
console.log(Object.prototype.constructor);

console.log(p instanceof Person); // true
console.log(p instanceof Object); // true