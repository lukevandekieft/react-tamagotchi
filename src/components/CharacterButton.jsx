import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

function CharacterButton(props) {  
  return (
    <div>
      <style jsx>{`
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
      <button className='characterButton' onClick={()=>{props.onSetCharacter(props.name);}}>
        <div className='avatarAlign'>
          <Avatar 
          picture={props.picture} 
          />
        </div>
      </button>
    </div>
  );
}

CharacterButton.propTypes = {

}

export default CharacterButton;