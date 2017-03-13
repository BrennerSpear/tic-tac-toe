var Board = function() {
  this.board = [1,2,3,4,5,6,7,8,9]
  this.player = 1 //1 is X, -1 is O
  this.winner = null
}

Board.prototype.validateMove = function(place) {
  return (this.board[place-1] > 0 && this.board[place-1] < 10) ? true : false
}

Board.prototype.placePiece = function(place) {
  var piece = this.player > 0 ? 'X' : 'O'

  this.board[place-1] = piece
  this.player *= -1
};

Board.prototype.renderBoard = function() {
  const b = this.board
  for(var i = 0; i < 7; i+=3){
    console.log('| ', b[i], ' ', b[i+1], ' ', b[i+2], ' |')
  }
};


// //should be way more optimized
// var checkVertical = function(board) {
//   var c1 = board[0] + board[3] + board[6]
//   var c2 = board[1] + board[4] + board[7]
//   var c3 = board[2] + board[5] + board[8]

//   var p1 = 'XXX'
//   var p2 = 'OOO'

//   if(c1 === p1 || c2 === p1 || c3 === p1) {
//     return 1
//   }
//   if(c1 === p2 || c2 === p2 || c3 === p2) {
//     return -1
//   }

//   return 0
// } 

// var checkHorizontal = function(board) {
//   for(var i = 0; i < 7; i+=3) {
//     var row = board[i] + board[i+1] + board[i+2]
//     if(row === "XXX") {return 1}
//     if(row === "OOO") {return -1}
//   }
//   return 0
// }

// var checkDiagonal = function(board) {
//   var rowLeft = board[0] + board[4] + board[8]
//   var rowRight = board[2] + board[4] + board[6]

//   if(rowRight === "XXX" || rowLeft === "XXX") {return 1}
//   if(rowRight === "OOO" || rowLeft === "OOO") {return -1}

//   return 0
// }

Board.prototype.checkAll = function() {
  var b = this.board

  var lines = [
  b[0] + b[1] + b[2],
  b[3] + b[4] + b[5],
  b[6] + b[7] + b[8],
  b[0] + b[3] + b[6],
  b[1] + b[4] + b[7],
  b[2] + b[5] + b[8],
  b[0] + b[4] + b[8],
  b[2] + b[4] + b[6],
  ]

  for(var i = 0; i < lines.length; i++) {
    if(lines[i] === 'XXX') {return 1}
    if(lines[i] === 'OOO') {return -1}
  }
  return 0
}

Board.prototype.checkWin = function() {
  //p1 is X, p2 is O
  var winner = this.checkAll()
  if(winner > 0) {this.winner = 'player 1'}
  if(winner < 0) {this.winner = 'player 2'}

  return this.winner ? true : false

};

module.exports = Board