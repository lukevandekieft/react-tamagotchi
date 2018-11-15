import React from 'react';
import { Link } from 'react-router-dom';
import deadStance from '../assets/images/roll2.png';


function GameOverScreen(){
  return (
    <div>
      <h1>Game Over!</h1>
      <img src={deadStance}/>
      <Link to='/'><button>Play Again?</button></Link>

    </div>

  );
}

export default GameOverScreen;
