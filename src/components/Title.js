import React from 'react';

import Text from './Text';

const Title = props => <Text className="title" {...props} />;

Title.defaultProps = {
  component: 'h2',
  fs: 'l',
  lh: 1.3
};

export default Title;
