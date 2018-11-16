import React from 'react';
import PropTypes from 'prop-types';
import RouteButton from './RouteButton';
import Avatar from './Avatar';

function ChooseCharacter(props){
  return (
    <div>
      <style jsx>{`
        .characterBox {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }
        .characterButton:focus {
          border: lightcoral solid 8px;
          background-color: pink;
          outline: none;
        }
        .characterButton {
          width: 100px;
          height: 100px;
          box-sizing: border-box;
          border-radius: 15%;
          color: lightcoral;
          border: 3px solid lightcoral;
          background-color: white;
        }
        .avatarAlign {
          margin-top: -30px;
        }
      `}</style>
      <h1 className='headerStyles'>Choose a Character</h1>
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