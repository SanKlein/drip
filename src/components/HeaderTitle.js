import React from 'react';

import Title from './Title';

const style = {
  left: 0,
  position: 'absolute'
};

const HeaderTitle = props => <Title className="header-title" style={style} {...props} />;

HeaderTitle.defaultProps = {
  component: 'h1',
  fg: 1,
  s: 1,
  ta: 'center',
  m: 'n',
  w: 'f'
};

export default HeaderTitle;
