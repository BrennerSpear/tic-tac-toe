var Board = function() {
  this.board = [[1,2,3],[4,5,6],[7,8,9]]
  this.player = 1 //1 is X, -1 is O
  this.winner = null
}

Board.prototype.placePiece = function(place) {
  var piece = this.player > 0 ? 'X' : 'O'
  switch (parseInt(place)) {
    case 1:
      this.board[0][0] = piece
      break
    case 2:
      this.board[0][1] = piece
      break
    case 3:
      this.board[0][2] = piece
      break
    case 4:
      this.board[1][0] = piece
      break
    case 5:
      this.board[1][1] = piece
      break
    case 6:
      this.board[1][2] = piece
      break
    case 7:
      this.board[2][0] = piece
      break
    case 8:
      this.board[2][1] = piece
      break
    case 9:
      this.board[2][2] = piece
      break
  }
  this.player *= -1
};

Board.prototype.renderBoard = function() {
  const b = this.board
  for(var i = 0; i < 3; i++){
    console.log('| ', b[i][0], ' ', b[i][1], ' ', b[i][2], ' |')
  }
};

//should be way more optimized
var checkVertical = function(board) {
  var columns = [0,0,0]

  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      if(board[i][j] === 'X') {columns[j]++}
      if(board[i][j] === 'O') {columns[j]--}
    }
    if(columns[0]===3 || columns[1] === 3 || columns[2] === 3) {
      return 1
    }
    if(columns[0]=== -3 || columns[1] === -3 || columns[2] === -3) {
      return -1
    }
  }

  return 0
} 

var checkHorizontal = function(board) {
  for(var i = 0; i < 3; i++) {
    var row = board[i][0] + board[i][1] + board[i][2]
    if(row === "XXX") {return 1}
    if(row === "OOO") {return -1}
  }
  
  return 0
}

var checkDiagonal = function(board) {
  var rowLeft = board[0][0] + board[1][1] + board[2][2]
  var rowRight = board[0][2] + board[1][1] + board[2][0]

  if(rowRight === "XXX" || rowLeft === "XXX") {return 1}
  if(rowRight === "OOO" || rowLeft === "OOO") {return -1}

  return 0
}


Board.prototype.checkWin = function() {
  //p1 is X, p2 is O
  var winner = checkHorizontal(this.board) + checkVertical(this.board) + checkDiagonal(this.board)
  if(winner > 0) {this.winner = 'player 1'}
  if(winner < 0) {this.winner = 'player 2'}

  return this.winner ? true : false

};

module.exports = Board