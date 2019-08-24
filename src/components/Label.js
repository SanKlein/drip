import React from 'react';

import Text from './Text';

const Label = props => <Text className="label" {...props} />;

Label.defaultProps = {
  color: 'grey',
  component: 'label',
  fontSize: 'large',
  padding: 'medium',
  textAlign: 'center'
};

export default Label;
