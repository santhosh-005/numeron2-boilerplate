// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1= document.getElementById("number1")
let number2 = document.getElementById("number2")
let number3 = document.getElementById("number3") 

let timer=document.getElementById('timer')


let buttons=document.getElementById("buttons")
console.log(buttons)

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
let randomNumber1;
let randomNumber2;
let randomNumber3

let arr;
let operator;

function displayNumbers(){
    randomNumber1 = randomNumbers(1,100)
    randomNumber2 = randomNumbers(1,100)
    randomNumber3 = generateRandom3();
number1.textContent = randomNumber1;
number2.textContent = randomNumber2;
number3.textContent = randomNumber3;

}

displayNumbers();

function randomNumbers(min,max){
    return Math.floor(Math.random()*max) + min;

}




function generateRandom3(){
    arr=["+","-","*","/","%"];
    operator = randomNumbers(0,arr.length);
    let output;
    if(arr[operator]=="+"){
        output=randomNumber1+randomNumber2;
    }else if(arr[operator]=="-"){
        output=randomNumber1-randomNumber2;
    }else if(arr[operator]=="*"){
        output=randomNumber1*randomNumber2;
    }else if(arr[operator]=="/"){
        output=Math.floor(randomNumber1/randomNumber2);
    }else if(arr[operator]=="%"){
        output=randomNumber1%randomNumber2;
    }
    return output;

}

buttons.addEventListener('click',checkOpertor);

let score=0;

function checkOpertor(e){
 if(e.target.id=="plus" && arr[operator]=="+"){
    score++;
    displayNumbers();
    time=20
 }else if(e.target.id=="minus" && arr[operator]=="-"){
    score++;
    displayNumbers();
    time=20
 }else if(e.target.id=="mul" && arr[operator]=="*"){
    score++;
    displayNumbers();
    time=20;
 }else if(e.target.id=="divide" && arr[operator]=="/"){
    score++;
    displayNumbers();
    time=20;
 }else if(e.target.id=="modulus" && arr[operator]=="%"){
    score++;
    displayNumbers();
    time=20;
 }else{
    gameOver();
 }
 
 console.log(score)
}

setInterval(showtime,1000)
let time=20;

function showtime(){
    if(time==0){
        gameOver();
    }else{
        time--
        timer.innerText=time
    }
}


function gameOver(){
    localStorage.setItem("total",score)
    location.href='gameover.html'
}