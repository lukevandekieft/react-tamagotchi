import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RouteButton from './RouteButton';

function ChooseCharacter(props){
  return (
    <div>
      <style jsx>{`
          * {
            margin: 0 auto;
            position: relative;
          }
          h1 {
            text-align: center;
            font-family: fantasy;
          }
          .characterBox {
            display: flex;
            justify-content: space-around;
            margin-top: 10px;
          }
          .characterButton:focus {
            border: lightcoral solid 10px;
            background-color: pink;
            outline: none;
          }
          .characterButton {
            width: 100px;
            height: 100px;
            box-sizing: border-box;
          }
      `}</style>
      <h1>Choose a Character</h1>
      <div className='characterBox'>
        <button className='characterButton' onClick={()=>{props.onSetCharacter('lila');}}>
          <img src={props.lilaPicture} />
        </button>
        <button className='characterButton' onClick={()=>{props.onSetCharacter('bearsum');}}>
          <img src={props.bearsumPicture}/>
        </button>
        <button className='characterButton' onClick={()=>{props.onSetCharacter('rohon');}}>
          <img src={props.rohonPicture}/>
        </button>
      </div>
      <RouteButton 
      buttonName='Play!'
      buttonLink='/activegame'
      />
    </div>

  );
}


ChooseCharacter.propTypes = {
  onSetCharacter: PropTypes.func.isRequired,
  lilaPicture: PropTypes.string.isRequired,
  bearsumPicture: PropTypes.string.isRequired,
  rohonPicture: PropTypes.string.isRequired,
};

export default ChooseCharacter;
