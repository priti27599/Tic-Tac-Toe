console.log("welcome to tic tac toe");

let music = new Audio("./doc/music.mp3");
let turn = new Audio("./doc/ting.mp3");
let gameover = new Audio("./doc/gameover.mp3");
let turn1 = "X"
let isgameover = false;

//function to change the turn

const changeTurn = () => {
    return turn1 === 'X' ? '0' : 'X';
}

//Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    wins.forEach(element => {
        if ((boxtext[element[0]].innerText === boxtext[element[1]].innerText) && (boxtext[element[2]].innerText === boxtext[element[1]].innerText) && (boxtext[element[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[element[0]].innerText + " Won"
            isgameover = true;
            gameover.play();
            turn1 = "";
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "186px";
            document.querySelector(".line").style.width = "20vw"; 
            document.querySelector(".line").style.transform = `translate(${element[3]}vw, ${element[4]}vw) rotate(${element[5]}deg)`
        }
    })
}


//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn1;
            turn1 = changeTurn();
            turn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn1;
            }
        }
    })
})


//add reset button

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    boxtexts.forEach(element => {
        element.innerText = "";
    })
    turn1 = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0"; 
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn1;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0";

})