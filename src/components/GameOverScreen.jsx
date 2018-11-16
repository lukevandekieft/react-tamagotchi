import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RouteButton from './RouteButton';
import Avatar from './Avatar';

function GameOverScreen(props){
  return (
    <div>
      <style jsx>{`
          * {
            margin: 0 auto;
            position: relative;
          }
          h1 {
            text-align: center;
            font-family: fantasy;
          }
      `}</style>
      <h1>Game Over!</h1>
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
