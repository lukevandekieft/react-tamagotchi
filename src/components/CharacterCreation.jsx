import React from 'react';
import PropTypes from 'prop-types';
import RouteButton from './RouteButton';
import CharacterList from './CharacterList';
import NewCharacterForm from './NewCharacterForm';

function CharacterCreation(props){
  return (
    <div>
      <h1 className='headerStyles'>Character Creation</h1>
      <CharacterList 
        characterList={props.templateCharacters}
      />
      <NewCharacterForm
      characterList={props.templateCharacters}
      templateCharacters={props.templateCharacters}
      onAddNewCharacter={props.onAddNewCharacter}
      />
      <RouteButton 
        buttonName='Back to Character Select'
        buttonLink='/choosecharacter'
      />
    </div>
  );
}

CharacterCreation.propTypes = {
  characterList: PropTypes.object.isRequired,
  templateCharacters: PropTypes.object.isRequired,
  onAddNewCharacter: PropTypes.func.isRequired
};

export default CharacterCreation;