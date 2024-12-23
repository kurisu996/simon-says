"use strict";
// red = 1, green = 2, blue = 3, yellow = 4;
let lost = false;
const min = 1;
const max = 4;
let count = 0;
let sequence = [];
let userSequence = [];
let userStep = 0;

document.getElementById("startbtn").addEventListener("click", gamestart);

function gamestart(){
        sequence = [];
        userSequence = [];
        userStep = 0;
        lost = false;
        count = 0;  
        nextRound();
}

function nextRound(){
        count++;
        let random = Math.floor(Math.random() * (max-min+1) + min);
        sequence.push(random);
        beep();
}

async function beep(){
        for(let i = 0; i < sequence.length; i++){
                let random = sequence[i];
                let image = document.getElementById("color" + random);
                let audio = new Audio('sounds/'+random+'.mp3');
                image.style.filter = `brightness(75%)`;
                audio.play();
                await new Promise(resolve => setTimeout(resolve, 1000));
                image.style.filter = `brightness(100%)`;
        }
}

document.getElementById("color1").addEventListener("click", () => checkUserInput(1));
document.getElementById("color2").addEventListener("click", () => checkUserInput(2));
document.getElementById("color3").addEventListener("click", () => checkUserInput(3));
document.getElementById("color4").addEventListener("click", () => checkUserInput(4));

function checkUserInput(color){
        userSequence.push(color);
        if(userSequence[userStep] !== sequence[userStep]){
                lost = true;
                alert("YOU LOSE!!");
        }
        else{
                userStep++;
                if(userStep === sequence.length){
                        userStep = 0;
                        userSequence = [];
                        nextRound();
                }
        }
}