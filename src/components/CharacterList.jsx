import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import CharacterButton from './CharacterButton';

function CharacterList(props) {  
  return (
    <div className='characterBox'>
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
      {Object.keys(props.characterList).map(function(characterId) {
        var character = props.characterList[characterId];
        return <CharacterButton 
          name={characterId}
          picture={character.picture}
          onSetCharacter={props.onSetCharacter}
          key={characterId}
        />;
      })}
    </div>
  );
}

CharacterList.propTypes = {
  onSetCharacter: PropTypes.func.isRequired,
  characterList: PropTypes.object.isRequired
}

export default CharacterList;