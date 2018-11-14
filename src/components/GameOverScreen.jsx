import React from 'react';
import { Link } from 'react-router-dom';

function GameOverScreen(){
  return (
    <div>
      <h1>Game Over!</h1>
      <Link to='/'><button>Play Again?</button></Link>

    </div>

  );
}

export default GameOverScreen;
