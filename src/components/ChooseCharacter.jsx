import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RouteButton from './RouteButton';
import Avatar from './Avatar';

function ChooseCharacter(props){
  return (
    <div>
      <style jsx>{`
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
          .avatarAlign {
            margin-top: -30px;
          }
      `}</style>
      <h1>Choose a Character</h1>
      <div className='characterBox'>
        <button className='characterButton' onClick={()=>{props.onSetCharacter('lila');}}>
        <div className='avatarAlign'>
          <Avatar 
          picture={props.lilaPicture} 
          />
        </div>
        </button>
        <button className='characterButton' onClick={()=>{props.onSetCharacter('bearsum');}}>
        <div className='avatarAlign'>
          <Avatar 
          picture={props.bearsumPicture} 
          />
        </div>
        </button>
        <button className='characterButton' onClick={()=>{props.onSetCharacter('rohon');}}>
        <div className='avatarAlign'>
          <Avatar 
          picture={props.rohonPicture} 
          />
        </div>
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
