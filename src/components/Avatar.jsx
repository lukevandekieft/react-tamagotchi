import React from 'react';
import PropTypes from 'prop-types';

function Avatar(props){
  return (
    <div>
      <img src={props.picture}/>
    </div>

  );
}

Avatar.propTypes = {
  picture: PropTypes.string.isRequired
};

export default Avatar;
