import React from 'react';
import PropTypes from 'prop-types';

function StatusBar(props){
  return (
    <div className='characterBox'>
      <style jsx>{`
          * {
            margin: 0 auto;
            position: relative;
          }
          .characterBox {
            display: flex;
            justify-content: space-around;
            margin-top: 10px;
          }
          `}</style>
      <p>Food: {props.food}</p>
      <p>Sleep: {props.sleep}</p>
      <p>Play: {props.play}</p>
    </div>

  );
}


StatusBar.propTypes = {
  food: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired,
  play: PropTypes.number.isRequired,
};

export default StatusBar;
