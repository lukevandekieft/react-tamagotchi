import React from 'react';
import PropTypes from 'prop-types';

function ControlPanel({onAddFood, onAddSleep, onAddPlay}){
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
    <button className='generalButton' onClick={onAddFood}>Feed Me!</button>
      <button className='generalButton' onClick={onAddSleep}>Tuck me in!</button>
      <button className='generalButton' onClick={onAddPlay}>I'm Lonely!</button>
    </div>

  );
}

ControlPanel.propTypes = {
  onAddFood: PropTypes.func.isRequired,
  onAddSleep: PropTypes.func.isRequired,
  onAddPlay: PropTypes.func.isRequired,
};

export default ControlPanel;
