import React from 'react';

import Box from './Box';

const Divider = props => <Box className="bar" {...props} />;

Divider.defaultProps = {
  borderRadius: 'round',
  padding: 'small'
};

export default Divider;
