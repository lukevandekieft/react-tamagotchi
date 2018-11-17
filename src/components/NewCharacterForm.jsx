import React from 'react';
import PropTypes from 'prop-types';

function NewCharacterForm(props){
  const character = props.templateCharacters['pixie'];
  let _name = 'Pixie';
  let _food = '20';
  let _sleep = '20';
  let _play = '20';

  function handleCharacterFormSubmission(event) {
    event.preventDefault();
    console.log(String(props.templateCharacters['pixie'].deadPicture))
    props.onAddNewCharacter({
      id: _name.value,
      food: _food.value,
      sleep: _sleep.value,
      play: _play.value,
      picture: character.picture,
      deadPicture: character.deadPicture
    })
    _name = 'Pixie';
    _food = '20';
    _sleep = '20';
    _play = '20';
  }

  return (
    <div>
      <form onSubmit={handleCharacterFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Pixie'
          ref={(input) => {_name = input;}}/>
        <input
          type='number'
          id='food'
          placeholder='20'
          ref={(input) => {_food = input;}}/>
        <input
          type='number'
          id='sleep'
          placeholder='20'
          ref={(input) => {_sleep = input;}}/>
        <input
          type='number'
          id='play'
          placeholder='20'
          ref={(input) => {_play = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewCharacterForm.propTypes = {
  characterList: PropTypes.object.isRequired,
  templateCharacters: PropTypes.object.isRequired,
  onAddNewCharacter: PropTypes.func.isRequired
};

export default NewCharacterForm;
