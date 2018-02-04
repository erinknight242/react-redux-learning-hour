import React from 'react';
import { Button } from 'reactstrap';
import Square from './Square';

export const calculateWinner = (squares) => {
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
      return squares[a];
    }
  }
  return null;
};

const initialState = {
  squares: Array(9).fill(null),
  nextPlayer: 'X',
  turnsPlayed: 0,
};

class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      ...initialState,
    };
  }

  handleClick = (i) => {
    const squares = [...this.state.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.nextPlayer;
    this.setState({
      squares,
      turnsPlayed: this.state.turnsPlayed + 1,
      nextPlayer: this.state.nextPlayer === 'X' ? 'O' : 'X',
    });
  }

  handleNewGame = () => {
    this.setState({
      ...initialState,
    });
  }

  renderSquare = i => (
    <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  )

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else if (this.state.turnsPlayed === 9) {
      status = 'Cats game!';
    } else {
      status = `Next player: ${this.state.nextPlayer}`;
    }

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
        {(winner || this.state.turnsPlayed === 9) && <Button color="primary" onClick={this.handleNewGame}>New Game</Button>}
      </div>
    );
  }
}

export default Board;
