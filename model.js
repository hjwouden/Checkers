//model.js for keeping track of checkers game board state

//Variables used in arrays / (validate move)
//0 = White Space, (Invalid Move)
//1 = Red Piece, (Valid Move)
//3 = Red Piece King
//2 = White Piece
//4 = White Piece King

var black = 1;
var red = 2;
var board;


//Array that is the layout of Starting Game
var StartBoard = [0,1,0,1,0,1,0,1,
                  1,0,1,0,1,0,1,0,
                  0,1,0,1,0,1,0,1,
                  0,0,0,0,0,0,0,0,
                  0,0,0,0,0,0,0,0,
                  2,0,2,0,2,0,2,0,
                  0,2,0,2,0,2,0,2,
                  2,0,2,0,2,0,2,0];

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

//Sample of Game State, for showing
//draw class, delete in final//
var SampleGameState =   [0,4,0,1,0,1,0,1,
                         1,0,2,0,1,0,1,0,
                         0,0,0,0,0,1,0,1,
                         0,0,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,0,
                         1,0,0,0,0,0,2,0,
                         0,0,0,0,0,0,0,2,
                         3,0,0,0,0,0,2,0];

//Array shows the current Game State
var CurrentGame = [0,1,0,1,0,1,0,1,
                   1,0,1,0,1,0,1,0,
                   0,1,0,1,0,1,0,1,
                   0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,
                   2,0,2,0,2,0,2,0,
                   0,2,0,2,0,2,0,2,
                   2,0,2,0,2,0,2,0];



var gameboard = document.getElementById("gameboard");
newGame();
drawCurrentGameBoard(SampleGameState);

//function draws the starting Gameboard
function newGame(){
    var k = 0;
    for(var i = 0; i<8; i++){
        for(var j = 0; j<8; j++){
            var cell = gameboard.rows[i].cells[j];
            if (StartBoard[k] == 1) {
                cell.className = "redPC";
            }
            else if (StartBoard[k] == 2) {
                cell.className = "whitePC";
            }
            k++;    
        }
    }
}

function UpdateMove(){
    //1 check if move is valid
    validateMove(From, To, CurrentGame);
    //2 update current game array
    updateGameArray(From, To);
    //3 update view, change className from piece to black, and from black to piece
    drawCurrentGameBoard(CurrentGame);
}

//function takes a gameboard array, updates the view by changing cells className to correct label
function drawCurrentGameBoard(movepieces){
    var k = 0;
    for(var i = 0; i<8; i++){
        for(var j = 0; j<8; j++){
            var cell = gameboard.rows[i].cells[j];
            if (movepieces[k] == 1) {
                //piece is a red piece, set class to redPC
                cell.className = "redPC";
            }
            else if (movepieces[k] == 2) {
                //piece is a white piece, set class to whitePC
                cell.className = "whitePC";
            }
            else if (movepieces[k] == 3) {
                //piece is a red King, set class to redPCKing
                cell.className = "redPCKing";
            }
            else if (movepieces[k] == 4) {
                //piece is a white King, set class to whitePCKing
                cell.className = "whitePCKing";
            }
            else if (movepieces[k] == 0) {
                //board is empty, see if should be a white square or black.
                if (ValidMove[k] == 1) {
                    cell.className = "black";
                }
                else{
                cell.className = "white";
                }
            }
            k++;
        }
    }
}

function updateGameArray(from, to){
    //a move was made, update the array to reflect current
    // game state. take from, set to 0, put team piece in to position
    //check if they make any jumps
    //check if on back row to become a king
}

function validateMove(from, to, currentgame){
    //see if move from -> to is a valid move, not hitting pieces in current game
    //taking available jumps.
    //return error if problem.
    //if no problems and move is good return true.
}

