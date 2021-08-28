var memberArray = ['egoing','graphittie','leezhce'];
console.log("memverArray[2]",memberArray[2]);

var memverObject ={
    manger:'egoing',
    devloper:'woojae',
    designer:"park"
}

console.log(memverObject['designer']);

// 수정
memverObject.designer="leezche";
// 삭제
delete memverObject.manger;