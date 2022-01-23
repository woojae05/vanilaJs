// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1+2 = ${1+2}`); 

// 2. Numeric operator
console.log(1 + 1) // add
console.log(1 - 1) // substract
console.log(1 / 1) // divide
console.log(1 * 1) // multiply
console.log(5 % 2) // remainder
console.log(2 ** 3) // exponentiation

// 3. Increment and decrement operator
let count = 2;
const preIncrement = ++count;
// count = count + 1
// preIncrement  = count
console.log(`preIncrement:${preIncrement}, count:${count}`);

const postIncrement = count++;
// PostIncrement = count
// count = count + 1
console.log(`postIncrement:${postIncrement}, count:${count}`);

// 4. Assigment operator
let x = 3;
let y = 6;
x += y; // x = x+y
x -= y; // x = x-y
x *= y; // x = x*y
x /= y; // x = x/y

//5. Comparison operator
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. logical operator: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 6 < 4;

// || (or), finds the frist truthy value;
console.log(`or : ${value1 || value2 || check()}`) //or: true true를 찾으면 종료 => 무게가 작은 것을 앞에다 배치 해야함
// && (and), finds the first falsy value;
console.log(`and :${value1 && value2 && check()}`) //and: false // false를 찾으면 종료 => ''
function check(){
    for (let i = 0; i<10; i++){
        // wasting time
        console.log('🥲');
    }
    return true;
}

// ! (not)
console.log(!value1); 

//7. Equality 
const stringFive = '5'
const numberFive = 5

// == lose equality, with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion
console.log(stringFive === numberFive) //false
console.log(stringFive !== numberFive) // true

// object equality by reference
const woojae1 = {name: 'woojae'};
const woojae2 = {name: 'woojae'};
const woojae3 = woojae1;
console.log(woojae1 == woojae2); // false // 참조 값이 다름
console.log(woojae1 === woojae2); // fasle // 참조 값이 다름
console.log(woojae1 === woojae3); // true // 참조 값이 같음

// 8. Conditional operators: if
// if, else if, else
const name1 = 'woojae';
if ( name1 === 'woojae'){
    console.log('welcome, Woojae!');
} else if( name1 === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknwnon');
} // welcome, Woojae!

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name1 === 'woojae' ? 'yes' : 'no'); // yes

// 10. Switch statement 
// use for multiple if checks
// use for enum-like value check
// use for multiple tyle checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while:${i}`);
    i--;
}

// do while loop, body code is excuted first,
// than check the condition.

do {
    console.log(`do while:${i}`);
    i--;
} while (i>0)

// for loop, for(begin; condition, step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2){
    // inline variable declaration
    console.log(`inline variable for:${i}`);
}

// nested loops
for (let i = 0; i < 10; i++){
    for(let j = 0; j <10; j++){
        console.log(`i:${i}, j:${j}`);
    }
}

// break, continue
for (let i = 0; i<=10; i++){
    if(i%2 !== 0) continue;
    console.log(`i:${i}`);
}

for (let i = 0; i <= 10; i++){
    if(i==8) break
    console.log(`i:${i}`);
}