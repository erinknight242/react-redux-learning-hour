import React from 'react';

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
      <h1>Hello Component!</h1>
    );
  }
}

export default App;
