// Iteration 8: Making scoreboard functional

const score=document.getElementById("score-board").innerText=localStorage.getItem("total");

const playAgain=document.getElementById("play-again-button").addEventListener('click',()=>{
    location.href='game.html'
})

