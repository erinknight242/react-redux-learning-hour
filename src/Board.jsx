import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      squares: Array(9).fill(null),
      nextPlayer: 'X',
    };
  }

  handleClick = (i) => {
    const squares = [...this.state.squares];
    if (squares[i] === null) {
      squares[i] = this.state.nextPlayer;
      this.setState({
        squares,
        nextPlayer: this.state.nextPlayer === 'X' ? 'O' : 'X',
      });
    }
  }

  renderSquare = i => (
    <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  )

  render() {
    const status = `Next player: ${this.state.nextPlayer}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
