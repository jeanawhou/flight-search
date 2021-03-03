import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import './style.css';

const TextInput = (props) => {
  return (
    <>
      <TextField {...props} variant="outlined" />
    </>
  );
};

TextInput.defaultProp = {
  type: 'text'
};

TextInput.propTypes = {
  type: PropTypes.string
};

export default TextInput;
