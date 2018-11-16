import React from 'react';
import PropTypes from 'prop-types';
import RouteButton from './RouteButton';
import Avatar from './Avatar';

function GameOverScreen(props){
  return (
    <div>
      <h1 className='headerStyles'>Game Over!</h1>
      <Avatar 
        picture={props.deadPicture}
      />
      <RouteButton 
        buttonName='Play Again?'
        buttonLink='/'
        onResetGame={props.onResetGame}
      />

    </div>

  );
}

GameOverScreen.propTypes = {
  deadPicture: PropTypes.string.isRequired,
  onResetGame: PropTypes.func.isRequired
};

export default GameOverScreen;
