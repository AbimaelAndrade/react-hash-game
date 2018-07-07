import React, {Component} from 'react'
import Board from '../Board'
import './game.css'

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div>
            <div className="game-board">
                <Board />
            </div>
        </div>
      </div>
    );
  }
}

export default Game