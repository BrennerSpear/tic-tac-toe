var prompt = require('prompt');
const Board = require('./board')

var board = new Board()

var run = function() {
  prompt.start()

  var name
  if(board.player === 1) {name = 'player 1'}
  if(board.player === -1) {name = 'player 2'}

  console.log('\n\n', name, "'s move")
  board.renderBoard()

  prompt.get('move', (err, result) => {

    var moved = false

    if(board.validateMove(result.move)) {
      board.placePiece(result.move)
      moved = true
    }


    if(result.move === 'q') {console.log('bye!')}
    else if(!board.checkWin()) {
      if(!moved) {console.log("That's not a valid spot! Try again!")}
      run()
    }
    else {
      console.log(board.winner, ' won!')
    }
  })  
}

run()


  


