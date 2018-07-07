import React, {Component} from 'react'
import Square from '../Square'
import './board.css'

class Board extends Component {
  
  state = {
      squares: Array(9).fill(null),
      xIsNext: true,
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    const winner = this.calculateWinner(squares)
    
    if (winner || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return lines[i];
      }
    }
    return null;
  }

  renderSquare() {
    const squares = this.state.squares.slice()
    const winner = this.calculateWinner(squares)

    const renderSquare = squares.map((square, index) => {
    let classCss = ''
    
    if (winner) {
      classCss = winner ? (winner.indexOf(index) !== -1 ? 'square-score' : '') : ''
    } else {
      if (squares.indexOf(null) === -1) {
        classCss = 'square-draw'
      }
    }

    return (
            <Square 
                key={index}
                classCss={ classCss }
                value={square}
                onClick={() => this.handleClick(index)}
            />
        )
    })

    return renderSquare
  }

  restart() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    })
  }

  render() {
    const squares = this.state.squares.slice()
    const winner = this.calculateWinner(squares)
    let status;
    let reset = false

    if (winner) {
      reset = true
      status = 'Ganhador: ' + squares[winner[0]];
    } else {
      if (squares.indexOf(null) !== -1) {
        status = 'Próximo jogador: ' + (this.state.xIsNext ? 'X' : 'O');
      }else{
          reset = true
          status = 'Jogo empatado.';
      }
    }

    return (
      <div>
        <div className="status">
        { reset ? <button className="btn-restart" onClick={() => this.restart()} >Reiniciar</button> : ''}
        {status}
        </div> 
          <div className="board">
            {this.renderSquare()}
          </div>
      </div>
    );
  }
}

export default Board