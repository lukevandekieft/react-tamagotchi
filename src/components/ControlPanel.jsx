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


// ControlPanel.propTypes = {
//   food: PropTypes.number.isRequired,
//   sleep: PropTypes.number.isRequired,
//   play: PropTypes.number.isRequired,
// };

export default ControlPanel;
