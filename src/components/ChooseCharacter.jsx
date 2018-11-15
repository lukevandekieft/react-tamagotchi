import React from 'react';
import { Link } from 'react-router-dom';


function ChooseCharacter(){
  return (
    <div>
      <h1>Choose a Character</h1>
      <Link to='/activegame'><button>Play!</button></Link>
    </div>

  );
}

export default ChooseCharacter;
