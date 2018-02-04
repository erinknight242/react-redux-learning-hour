import React from 'react';
import Board from './Board';

// Component is now a "stateful" one
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="container game">
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{ /* status */ }</div>
            <ol>{ /* TODO */ }</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
