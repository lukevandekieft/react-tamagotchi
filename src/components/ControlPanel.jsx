import React from 'react';
import PropTypes from 'prop-types';

function ControlPanel({onAddFood, onAddSleep, onAddPlay}){
  return (
    <div>
      <button onClick={onAddFood}>Feed Me!</button>
      <button onClick={onAddSleep}>Tuck me in!</button>
      <button onClick={onAddPlay}>I'm Lonely!</button>
    </div>

  );
}

ControlPanel.propTypes = {
  onAddFood: PropTypes.func.isRequired,
  onAddSleep: PropTypes.func.isRequired,
  onAddPlay: PropTypes.func.isRequired,
};

export default ControlPanel;
