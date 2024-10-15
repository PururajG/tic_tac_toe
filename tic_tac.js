let boxs = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let turnO = true;
let winnerbox = document.querySelector('.winner-box');
let winnermsg = document.querySelector('.winner-msg');
let newame = document.querySelector('.new-btn');

// array for check winnner condition
const winnerBox = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

// check for each element 
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log(box.value);
        if (turnO) {
            box.innerText = "O"
            turnO = false;

        } else {
            box.innerText = "X"
            turnO = true;

        }
        box.disabled = true
        // function call here
        checkwinner()
    })
});


// it's function checking who is winner 
let checkwinner = () => {
    for (let item of winnerBox) {
        // console.log(boxs[item[0]].innerText, boxs[item[1]].innerText, boxs[item[2]].innerText);
        let pos1val = boxs[item[0]].innerText;
        let pos2val = boxs[item[1]].innerText;
        let pos3val = boxs[item[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {

                // console.log("winner", pos1val);

                // function call here
                showWinner(pos1val)
            }
        }
    }
}


let showWinner = (winner) => {
    winnermsg.innerText = `Congratulation! The Winner is: ${winner}`;
    winnerbox.classList.remove('hide');

    // function call here
    disableboxs()
}

// it's disable all extra box 
let disableboxs = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
}


let enableboxs = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}

let reset_game = () => {
    turnO = true;
    // function call here
    enableboxs();
    winnerbox.classList.add('hide');

}

newame.addEventListener('click', reset_game)
reset_btn.addEventListener('click', reset_game)