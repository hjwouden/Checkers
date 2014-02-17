//model.js for keeping track of checkers game board state
var black = 1;
var red = 2;
var board;

//Array shows the current Game State
var CurrentGame = [0,1,0,1,0,1,0,1,
                  1,0,1,0,1,0,1,0,
                  0,1,0,1,0,1,0,1,
                  0,0,0,0,0,0,0,0,
                  0,0,0,0,0,0,0,0,
                  2,0,2,0,2,0,2,0,
                  0,2,0,2,0,2,0,2,
                  2,0,2,0,2,0,2,0];

//Array that is the layout of Starting Game
var StartBoard = [0,1,0,1,0,1,0,1,
                  1,0,1,0,1,0,1,0,
                  0,1,0,1,0,1,0,1,
                  0,0,0,0,0,0,0,0,
                  0,0,0,0,0,0,0,0,
                  2,0,2,0,2,0,2,0,
                  0,2,0,2,0,2,0,2,
                  2,0,2,0,2,0,2,0];

var gameboard = document.getElementById("gameboard");
newGame();

//function draws the starting Gameboard
function newGame(){
    var k = 0;
    for(var i = 0; i<8; i++){
        for(var j = 0; j<8; j++){
            var cell = gameboard.rows[i].cells[j];
            if (StartBoard[k] == 1) {
                //cell.id = "redPC";
                cell.className = "redPC";
            }
            else if (StartBoard[k] == 2) {
                //cell.id = "whitePC";
                cell.className = "whitePC";
            }
            k++;    
        }
    }
}

function UpdateMove(){
    //1 check if move is valid
    //2 update current game array
    //3 update view, change className from piece to black, and from black to piece
}

//Array shows all valid move locations
//   valid moves have 1. invalid 0
var ValidMove = [0,1,0,1,0,1,0,1,
                 1,0,1,0,1,0,1,0,
                 0,1,0,1,0,1,0,1,
                 1,0,1,0,1,0,1,0,
                 0,1,0,1,0,1,0,1,
                 1,0,1,0,1,0,1,0,
                 0,1,0,1,0,1,0,1,
                 1,0,1,0,1,0,1,0,];

