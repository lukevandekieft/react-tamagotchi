import React from 'react';
import PropTypes from 'prop-types';
import RouteButton from './RouteButton';
import CharacterList from './CharacterList';

function ChooseCharacter(props){
  return (
    <div>
      <h1 className='headerStyles'>Choose a Character</h1>
      <CharacterList 
        onSetCharacter={props.onSetCharacter}
        lilaPicture={props.lilaPicture}
        bearsumPicture={props.bearsumPicture}
        rohonPicture={props.rohonPicture}
      />
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