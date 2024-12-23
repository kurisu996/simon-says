"use strict";
// red = 1, green = 2, blue = 3, yellow = 4;
let lost = false;
const min = 1;
const max = 4;
let count = 0;
document.getElementById("startbtn").addEventListener("click", gamestart);

function gamestart(){
        while(!lost){
                count = 5;
                beep(count);
                break
        }
}

function beep(howoften){
        for(let i = 0; i < howoften; i++){
                let random = Math.floor(Math.random() * (max-min+1) + min);
                let image = document.getElementById(random);
                let audio = new Audio('sounds/'+random+'.mp3');
                image.style.filter = `brightness(-15%)`;
                audio.play;
        }
}