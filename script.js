const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X";

let position =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

function init(){
    selected=[]

    currentPlayer.innerHTML = `A vez de: ${player}`;

document.querySelector(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
        
    });
}

init();

function newMove(e) {

}