// src/components/EmptyMessage.js

import React from 'react';

import Text from './Text';

const EmptyMessage = props => <Text {...props} />;

EmptyMessage.defaultProps = {
  color: 'grey',
  textAlign: 'center'
};

export default EmptyMessage;
