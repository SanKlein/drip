import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';

const HeaderButton = ({ hide, ...props }) => (
  <Button className="header-button" hide={hide} {...props} />
);

HeaderButton.propTypes = {
  hide: PropTypes.bool
};

HeaderButton.defaultProps = {
  hide: false,
  p: 'm'
};

export default HeaderButton;
