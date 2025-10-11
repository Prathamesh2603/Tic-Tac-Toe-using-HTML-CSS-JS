let boxes = document.querySelector(".box"); //all the 9 buttons are accessed.
let reset = document.querySelector("#reset-btn"); //reset button is accessed.

// player gets alternate turns.
let turn0 = true; //playerX, player0

// Players winning patterns
const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

