// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(typeof json) // string

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthData: new Date(),
    jump: ()=>{
        console.log(`${name} can jump!`);
    },
}

json =  JSON.stringify(rabbit);
console.log(json);

json =  JSON.stringify(rabbit,["name","color"]);
console.log(json);

json = JSON.stringify(rabbit,(key, value)=>{
    console.log(`key: ${key}, value: ${value}`)
    return key === 'name' ? 'woojae' : value;
})
console.log(json);

// 2. JSON to Object

json = JSON.stringify(rabbit);
const obj = JSON.parse(json,(key, value) =>{
    console.log(`key: ${key}, value: ${value}`)
    return key === 'birthData' ? new Date(value) : value;
});
console.log(obj);
// rabbit.jump();
// obj.jump(); // 함수는 json으로 컨트롤 할 수 없다.

console.log(rabbit.birthData.getDate());
console.log(obj.birthData.getDate());


// 유요한사이트
// JSON Diff // JSON 비교
// JSON Beautifier // 포멧을 이쁘게 정렬
// JSON Parser 
// JSON Validator // JSON 컴파일러?