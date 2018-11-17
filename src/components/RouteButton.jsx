import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RouteButton(props){
  return (
    <div>
      <style jsx>{`
        .routeButton {
          display: block;
          margin-top: 30px;
          padding: 5px;
          box-sizing: border-box;
          font-size: 1em;
          font-weight: 900;
          border-radius: 5px;
          color: lightcoral;
          border: 2px solid lightcoral;
          background-color: white;
        }
      `}</style>
      <Link to={props.buttonLink}><button onClick={()=>{props.onResetGame();}} className='routeButton'>{props.buttonName}</button></Link>
    </div>
  );
}

RouteButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  onResetGame: PropTypes.any
};

export default RouteButton;