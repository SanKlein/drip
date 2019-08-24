import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../constants';
import { padding } from '../utils/styleUtils';

const styles = ({ ai, bc, fd, jc, z, ...props }) => ({
  backgroundColor: colors[bc],
  display: 'flex',
  flexDirection: 'column',
  ...padding(props),
  position: 'relative',
  top: 84,
  width: '100%',
  zIndex: z || 0
});

const Body = ({ children, ...props }) => {
  return (
    <div className="body" style={styles(props)}>
      {children}
    </div>
  );
};

Body.propTypes = {
  alignItems: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.any,
  flexDirection: PropTypes.string,
  height: PropTypes.string,
  justifyContent: PropTypes.string,
  zIndex: PropTypes.number
};

Body.defaultProps = {
  ai: 's',
  bc: 'white',
  fd: 'column',
  jc: 'fs',
  p: '0 m'
};

export default Body;
