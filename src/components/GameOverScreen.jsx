import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


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
          .playButton {
            position: relative;
            display: block;
            margin-top: 30px;
          }
      `}</style>
      <h1>Game Over!</h1>
      <img className='playButton' src={props.deadPicture}/>
      <Link to='/'><button className='playButton generalButton' onClick={()=>{props.onResetGame();}}>Play Again?</button></Link>

    </div>

  );
}

GameOverScreen.propTypes = {
  deadPicture: PropTypes.string.isRequired,
  onResetGame: PropTypes.func.isRequired
};

export default GameOverScreen;
