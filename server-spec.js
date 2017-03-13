const chai = require('chai')
const should = chai.should()

var Board = require('./board')




describe('Board object', function() {
  var b = new Board()
  b.placePiece(1)
  b.placePiece(2)
  b.placePiece(4)
  b.placePiece(5)
  b.placePiece(7)
  console.log(b.renderBoard())
  console.log(b.checkWin())

  it('should test vertical win', function(done) {
    done()
  })
  it('should test horizontal win', function(done) {
    done()
  })
  it('should test diagonal win', function(done) {
    done()
  })
})