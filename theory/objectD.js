// 표준 내장 객체

// Array

const a = new Array('red','black','white');

console.log(a, typeof a); //['red','black', 'white'] 'object'
console.log(a instanceof Array); //true
console.log(a instanceof Object);// true

const b = ['red','green','yellow'];

console.log(b,typeof b); // ['red', 'green', 'yellow'] 'object'

console.log(b.slice(0,1)); // 0번째 부터 1개를 잘라 온다.
