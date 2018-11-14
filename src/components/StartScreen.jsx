import React from 'react';
import { Link } from 'react-router-dom';


function StartScreen(){
  return (
    <div>
      <h1>Welcome to Tamagotchi!</h1>
      <Link to='/activegame'><button>Play!</button></Link>
    </div>

  );
}

export default StartScreen;
