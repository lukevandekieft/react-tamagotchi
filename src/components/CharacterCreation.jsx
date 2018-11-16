import React from 'react';
import PropTypes from 'prop-types';
import RouteButton from './RouteButton';
import CharacterList from './CharacterList';

function CharacterCreation(props){
  return (
    <div>
      <CharacterList 
        characterList={props.templateCharacters}
      />
    </div>
  );
}

CharacterCreation.propTypes = {
  characterList: PropTypes.object.isRequired,
  templateCharacters: PropTypes.object.isRequired
};

export default CharacterCreation;