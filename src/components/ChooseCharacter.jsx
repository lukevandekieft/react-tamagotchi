import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ChooseCharacter(props){
  return (
    <div>
      <h1>Choose a Character</h1>
      <div onClick={()=>{props.onSetCharacter('lila')}}>
        <img src={props.lilaPicture} />
      </div>
      <div onClick={()=>{props.onSetCharacter('bearsum')}}>
        <img src={props.bearsumPicture}/>
      </div>
      <div onClick={()=>{props.onSetCharacter('rohon')}}>
        <img src={props.rohonPicture}/>
      </div>
      <Link to='/activegame'><button>Play!</button></Link>
    </div>

  );
}

export default ChooseCharacter;
