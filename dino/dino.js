var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;



var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y,this.width, this.height);
    }
}


dino.draw();

class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width=50;
        this.height=50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y,this.width, this.height);
    }
}

var timer = 0;
var jumpTimer = 0
var cactuses = [];
var animation;

function playAsFrame(){
    animation=requestAnimationFrame(playAsFrame)
    timer++;

    ctx.clearRect(0,0,canvas.width,canvas.height)

    if(timer%120 === 0){
        var cactus  = new Cactus();
        cactuses.push(cactus)
        cactus.draw()
    }
    
    cactuses.forEach((cactus,index)=>{
        cactus.x--;
        if(cactus.x<=0){
            cactuses.splice(index,1)
        }

        clash(dino,cactus);

        cactus.draw()
    })
    
    if(jumping){
        dino.y-=2;
        jumpTimer+=2;
    }
    if(!jumping&dino.y!=200 ){
        dino.y+=2;
    }
    if(jumpTimer>100){
        jumping=false
        jumpTimer = 0
    }

    

    dino.draw()
}


playAsFrame()

// 충돌확인
function clash(dino,cactus){
    var xDistance = cactus.x-(dino.x+dino.width)
    var yDistance = cactus.y -(dino.y+dino.height)
    if(xDistance<0 && yDistance<0){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      cancelAnimationFrame(animation)
    }

}

var jumping =  false
document.addEventListener('keydown',function(e){
    if(e.code === 'Space'){
        jumping = true
    }
})