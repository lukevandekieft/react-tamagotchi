import React from 'react';
import PropTypes from 'prop-types';

function ControlPanel({onAddStat}){
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
      <button className='generalButton' onClick={()=>{onAddStat('food');}}>Feed Me!</button>
      <button className='generalButton' onClick={()=>{onAddStat('sleep');}}>Tuck me in!</button>
      <button className='generalButton' onClick={()=>{onAddStat('play');}}>I'm Lonely!</button>
    </div>

  );
}

ControlPanel.propTypes = {
  onAddStat: PropTypes.func.isRequired
};

export default ControlPanel;
