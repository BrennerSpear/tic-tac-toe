var prompt = require('prompt');
const Board = require('./board')

var board = new Board()


var run = function() {
  prompt.start()

  if(board.player > 0) {
    board.renderBoard()
    prompt.get('player 1s move (1-9)', (err, result) => {
      console.log(result)
      board.placePiece(result)
      if(board.checkWin() === 0) {
        run()
      }
      else {
        console.log(board.player, ' won!')
      }
    })
  }
  if(board.player < 0) {
    board.renderBoard()
    prompt.get('player 2s move (1-9)', (err, result) => {
      board.placePiece(result)
      if(board.checkWin() === 0) {
        run()
      }
      else {
        console.log(board.player, ' won!')
      }
    })

  }


}

run()


  


