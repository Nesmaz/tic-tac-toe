
let board = document.getElementById('board');
let info = document.getElementById('info');

let turn = "circle";
info.innerHTML = "Circle's turn";

let cells = [
    "", "", "", "", "", "", "", "", "", 
]

function createBoard(){
    for(var i=0; i<cells.length; ++i){
        let cell = document.createElement('div');
        cell.classList.add('square');
        board.appendChild(cell);
        cell.id = i;
        cell.addEventListener('click', switchTurn);
    }

}

createBoard();

function switchTurn(e){
    let cell = e.target;
    let sign = document.createElement('div');
    sign.classList.add(turn);
    cell.appendChild(sign);
    turn = turn === "circle" ? "cross" : "circle"
    info.innerHTML = turn + "'s turn.";
    cell.removeEventListener('click', switchTurn);
    checkWin();
}
function checkWin() {
    let squares = document.getElementsByClassName('square');
    let squaresArray = [...squares];
    // console.log(squares);
    let win = [
        [0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];


    win.forEach(array => {
        let circleWon = array.every(i =>
            squaresArray[i].firstChild?.classList.contains('circle'))
            if (circleWon){
                info.innerHTML = "Circle won!"
                squaresArray.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
        })


        win.forEach(array => {
            let crossWon = array.every(i =>
                squaresArray[i].firstChild?.classList.contains('cross'))
                if (crossWon){
                    info.innerHTML = "Cross won!"
                    squaresArray.forEach(square => square.replaceWith(square.cloneNode(true)))
                    return
                }
            })

}
