
var score =0;
var timer=10;
var hitNo=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}

function makeBubble(){
var clutter ="";
for(var i=1; i<=80;i++){
    var rn = Math.floor(Math.random()*10);
  clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML=clutter;
}
function runTimer(){
    
    var timerInt= setInterval(function(){
        if(0<timer){
        timer--;
        
        document.querySelector("#timerVal").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbottom").innerHTML = `<h1>Game over and your score is </h1> ` + `<h1 id ="final">score</h1>`;
            document.querySelector("#final").textContent=score;
        }
    },1000);
}
function newHit(){
  hitNo=  Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hitNo;
}
document.querySelector("#pbottom").addEventListener("click",function(dets){
   var clickedBubble=Number(dets.target.textContent);
   if(clickedBubble==hitNo){
    increaseScore();
    makeBubble();
    newHit();
   }
});


newHit();
runTimer();
makeBubble();
