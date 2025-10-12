let boxes = document.querySelectorAll(".box"); //all the 9 buttons are accessed.
let reset = document.querySelector("#reset-btn"); //reset button is accessed.
let winnerBoard = document.querySelector(".winner-board"); 
let winnerName = document.querySelector("#winner-name");
let transparentDiv = document.querySelector(".transparent-div");

// player gets alternate turns.
let turn0 = true; //playerX, player0

// Players winning patterns
const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

// adding eventlistener to each buttons
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0) { // player0 turn
            box.innerText = "O";
            turn0 = false;
        } else { // playerX turn
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                transparentDiv.classList.remove("hide-div");
                winnerBoard.classList.remove("hide-div");
                winnerName.innerText = `Winner ${pos1Val}`; 
            }
        }
    }
}
