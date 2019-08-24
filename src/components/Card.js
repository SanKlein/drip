import React from 'react';

import Box from './Box';

const Card = props => <Box className="card" {...props} />;

Card.defaultProps = {
  alignItems: 'stretch',
  backgroundColor: 'white',
  borderRadius: 'round',
  flexDirection: 'column',
  flexShrink: '0',
  marginBottom: 'large'
};

export default Card;
