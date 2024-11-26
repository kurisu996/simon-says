'use strict';

let gamestart = false;
let lost = false;
document.getElementById("startbtn").addEventListener("click", game);

let firstflashing = document.createElement("p");
let firstflashing_content = document.createTextNode("<span background-color: yellow>a</span> b c d");
//'<p><style background-color: yellow>a</style> b c d</p>
firstflashing.appendChild(firstflashing_content);

function game() {
        let div = document.getElementById("Gamediv");
        let ptag = div.firstChild;
        div.replaceChild(firstflashing, ptag);
}