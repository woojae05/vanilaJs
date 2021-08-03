// //String
// const what= "woojae";
// console.log(what);

// //Boolean
// const wat = true;
// console.log(wat);

// //Number 
// const wat2 = 666;

// //float
// const wat3=55.1;

//array
// const daysOfWeek = ["mon","tue","Wed","Thu","Fri","Sat","sun"];
// console.log(daysOfWeek[2]);

//object
// const wooInfo={
//     name:"woojae",
//     age:17,
//     gender:"Male",
//     isHandsome:true,
//     favmovies: ["zero","zzangu"],
//     favfood:[
//       {
//         name:"kimch",
//         fatty:false
//       },
//       {
//         name:"hamburger",
//         fatty:true
//       }
//     ]
//   };
//   console.log(wooInfo.favfood[1].name);

  // function
// function sayHello(name,age){
//   console.log("Hello!",name,"you have",age,"years of age");
// }

// sayHello("woojae",15);

// function sayHello(name,age){
//   console.log("Hello!"+name+"you are"+age+"years old");
// }

// sayHello("woojae",15);

// function sayHello(name,age){
//   return(`Hello ${name} you are ${age} years old`);
// }

// const greetWoojae = sayHello("woojae",15);

// console.log(greetWoojae);

// const calculator = {
//   plus: function(a,b){
//     return a+b;
//   },
//   minus: function(a,b){
//     return a-b;
//   },
//   mul: function(a,b){
//     return a*b;
//   },
//   div: function(a,b){
//     return a/b;
//   },
//   exp:function(a,b){
//     let sum=1;
//     for(let i=0;i<b;i++){
//      sum*=a;
//     }
//     return sum;
//   }

// };
// const plus=calculator.plus(5,5);
// console.log(plus);
// console.log(calculator.exp(2,3));

// const title=
// document.getElementById("title")
// const title=document.querySelector("#title");

// console.log(title);

// // DOM
// title.innerHTML = "Hi! from Js";
// title.style.color ="yellow";
// document.title="hello";

// //window
// function handleResize(event){
    //     console.log(event);
    // }
    
    // window.addEventListener("resize", handleResize);
    
// function handleClick(){
//         if(title.style.color=="blue")
//         title.style.color="black";
//         else title.style.color="blue";17
//     };
//     title.addEventListener("click",handleClick);
    

    // // if
    // let age = prompt("how old are you?");
    // if(age>=18&&age<=21){1
    //     console.log("you can drink");
    // }else if(age>21){
    //     console.log("go ahead");
    // }else{
    //     console.log("too young");
    // }

// const title = document.querySelector("#title");

// const BASE_COLOR="rgb(52, 73, 94)";
// const OTHER_COLOR="#7f8c8d";

// function handleClick(){
//    const currentColor = title.style.color;
//    if(currentColor===BASE_COLOR){
//        title.style.color=OTHER_COLOR;
//    }
//    else{
//        title.style.color=BASE_COLOR;
//    }
// }

// function init(){
//     title.style.color=BASE_COLOR;
//     title.addEventListener("click",handleClick);
// }
// init();
// title.addEventListener("click",handleClick);

// function handleOnline(){
//     console.log("welcom back");
// }
// function handleOffline(){
//     console.log("Bye bye");
// }

// window.addEventListener("online",handleOnline);
// window.addEventListener("offline",handleOffline);

const title = document.querySelector("#title");

const CLICKED_CLASS="clicked";
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // }else{
    //     title.classList.add(CLICKED_CLASS);
    // }
}
function init(){
    title.addEventListener("click",handleClick);
}
init();
