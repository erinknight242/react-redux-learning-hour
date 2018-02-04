import React from 'react';

class Square extends React.Component {
  constructor() {
    super();

    this.state = {
      value: null,
    };
  }

  setSquare = () => {
    this.setState({
      value: 'X',
    });
  }

  render() {
    return (
      <div className="square" onClick={this.setSquare}>
        {this.state.value}
      </div>
    );
  }
}

export default Square;
