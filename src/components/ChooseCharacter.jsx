import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ChooseCharacter(props){
  return (
    <div>
      <h1>Choose a Character</h1>
      <img src={props.lilaPicture}/>
      <img src={props.bearsumPicture}/>
      <img src={props.rohonPicture}/>
      <Link to='/activegame'><button>Play!</button></Link>
    </div>

  );
}

export default ChooseCharacter;
