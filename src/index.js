import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component {
  render() {
    return (
      <div>
        grid
      </div>
    );
  }
}

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      generation: 0,
    }
  }

  render() {
    return (
      <div>
        <h1>cellular automaton</h1>
        <Grid
        />
        <h2>generations: {this.state.generation}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
