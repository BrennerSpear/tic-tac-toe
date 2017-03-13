const chai = require('chai')
const should = chai.should()

var Board = require('./board')
var b



describe('Board object', function() {

  beforeEach(function(done) {
    b = new Board()
    done()
  })

  it('should test vertical win', function(done) {
    b.board = ['X',2,3,'X',5,6,'X',8,9]
    console.log(b.renderBoard())
    b.checkWin().should.equal(true)
    b.winner.should.equal('player 1')
    done()
  })
  it('should test horizontal win', function(done) {
    b.board = ['O','O','O',4,5,6,7,8,9]
    console.log(b.renderBoard())
    b.checkWin().should.equal(true)
    b.winner.should.equal('player 2')
    done()
  })
  it('should test diagonal win', function(done) {
    b.board = ['X',2,3,4,'X',6,7,8,'X']
    console.log(b.renderBoard())
    b.checkWin().should.equal(true)
    b.winner.should.equal('player 1')
    done()
  })
})