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
          overflow: auto;
          box-sizing: padding-box;
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
  onSetCharacter: PropTypes.func,
  characterList: PropTypes.object.isRequired
}

export default CharacterList;