var prompt = require('prompt');
const Board = require('./board')

var board = new Board()


var run = function() {
  prompt.start()

  if(board.player > 0) {
    board.renderBoard()
    console.log(' \n \n player 1s move:')
    prompt.get('move', (err, result) => {
      board.placePiece(result.move)
      if(result.move === 'q') {return 'bye!'}
      else if(!board.checkWin()) {
        run()
      }
      else {
        console.log(board.winner, ' won!')
      }
    })
  }
  if(board.player < 0) {
    board.renderBoard()
    console.log(' \n \n player 2s move:')
    prompt.get('move', (err, result) => {
      board.placePiece(result.move)
      if(result.move === 'q') {return 'bye!'}
      else if(!board.checkWin()) {
        run()
      }
      else {
        console.log(board.winner, ' won!')
      }
    })

  }


}

run()


  


