import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

import './style.css';
const CustomCard = ({ children, ...rest }) => {
  return <Card className="custom-card">{children}</Card>;
};

CustomCard.propTypes = {};

export default CustomCard;
