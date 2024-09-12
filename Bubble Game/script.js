var timer = 6;
var score = 0;
var hitrn ="";




function increseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}


function gethitNum(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval"). textContent = hitrn;
}

function makeBubble() {

    var bublu = "";

    for (i = 1; i <= 133; i++) {
        var num = Math.floor(Math.random() * 10);
        bublu += `<div class="bubble">${num}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = bublu;
}
function runTimer() {
    var timeInt =  setInterval(function () {
       if(timer>0){

            timer--;
     document.querySelector("#timeval").textContent = timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER YOUR SCORE IS  ${score} </h1>`;
           
        }

    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);   
    if(clickednum === hitrn){
        increseScore();
        makeBubble();
        gethitNum();
    }

})
runTimer();
makeBubble();
gethitNum();
