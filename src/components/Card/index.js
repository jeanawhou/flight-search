import React from 'react';
import Card from '@material-ui/core/Card';

import './style.css';
const CustomCard = ({ children, ...rest }) => {
  return <Card className="custom-card">{children}</Card>;
};

CustomCard.propTypes = {};

export default CustomCard;
