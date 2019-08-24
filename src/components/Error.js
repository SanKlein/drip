import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Text from './Text';

const Error = ({ children, error, ...props }) =>
  !!error && (
    <Text className="error" color="red" textAlign="center" width="full" {...props}>
      {error || children}
    </Text>
  );

Error.propTypes = {
  children: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = ({ error }) => ({ error });

export default connect(mapStateToProps)(Error);
