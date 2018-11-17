import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NewCharacterForm(props){
  const character = props.templateCharacters['pixie'];
  let _name = 'Pixie';
  let _food = '20';
  let _sleep = '20';
  let _play = '20';

  function handleCharacterFormSubmission(event) {
    event.preventDefault();
    props.onAddNewCharacter({
      id: _name.value,
      food: _food.value,
      sleep: _sleep.value,
      play: _play.value,
      picture: character.picture,
      deadPicture: character.deadPicture
    });
    _name = 'Pixie';
    _food = '20';
    _sleep = '20';
    _play = '20';
  }

  return (
    <div>
      <style jsx>{`
        input, button {
          max-width: 45%;
          margin: 10px auto 0 auto;
          padding: 5px;
          box-sizing: border-box;
          font-size: 1em;
          font-weight: 900;
          border-radius: 5px;
          color: lightcoral;
          border: 2px solid lightcoral;
          background-color: white;
        }
        button {
          display: block;
          margin: 20px auto -10px auto;
        }
        .inputContainer {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
      <form onSubmit={handleCharacterFormSubmission}>
        <div className='inputContainer'>
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
        </div>
        <div className='inputContainer'>
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
        </div>
        <button type='submit'><Link to='choosecharacter'>Submit</Link></button>
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
