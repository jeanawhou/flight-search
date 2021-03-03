import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './style.css';

const CustomButton = ({ active, type, value, ...rest }) => {
  return (
    <div className={`custom-button`}>
      <Button
        className={`${active ? `active` : `inactive`} `}
        type={type}
        {...rest}
      >
        {value}
      </Button>
    </div>
  );
};

CustomButton.defaultProp = {
  type: 'button'
};

CustomButton.propTypes = {
  type: PropTypes.string
};

export default CustomButton;
