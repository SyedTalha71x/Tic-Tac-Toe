console.log("Welcome to Tic Tac Toe");

let turn = "X";
let boxex = document.getElementsByClassName('box');
let gameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const CheckWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true
            document.querySelector('.game-image').getElementsByTagName('img')[0].style.width = "200px";
        }
    })


}

// Main Game Logic 

Array.from(boxex).forEach(Element => {
    let boxtexts = Element.querySelector('.boxtext');
    Element.addEventListener('click', (e) => {
        if (boxtexts.innerText = ' ') {
            boxtexts.innerText = turn;
            turn = changeTurn()
            CheckWin()
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset button logic

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element => {
        Element.innerText = " ";
    })
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.game-image').getElementsByTagName('img')[0].style.width = "0px"

})

