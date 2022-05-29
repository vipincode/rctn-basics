import React, { Component } from 'react';
import Game from '../components/Game';

class Home extends Component {
  render() {
    return (
      <>
        <Game randomNumberCount={6} />
      </>
    );
  }
}


export default Home;