import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

/* Using JSX */
ReactDOM.render(
  <App />,
  document.getElementById('react-app'),
);

/* Without JSX syntax:
  ReactDOM.render(
    React.createElement('h1', null, 'Hello, React!'),
    document.getElementById('react-app'),
  );
*/
