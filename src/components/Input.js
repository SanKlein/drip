import PropTypes from 'prop-types';
import React from 'react';

import { borderRadii, colors, fontSizes, sizes } from '../constants';
import { margin } from '../utils/styleUtils';

const styles = ({ flexShrink, ...props }) => ({
  backgroundColor: colors.backgroundGrey,
  borderRadius: borderRadii.round,
  flexShrink,
  fontSize: fontSizes.medium,
  ...margin(props),
  padding: `${sizes.medium}`,
  width: '100%'
});

const Input = ({
  flexShrink,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
  ...props
}) => (
  <input
    style={styles({
      flexShrink,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginX,
      marginY
    })}
    {...props}
  />
);

Input.propTypes = {
  flexShrink: PropTypes.any,
  margin: PropTypes.any,
  marginBottom: PropTypes.any,
  marginLeft: PropTypes.any,
  marginRight: PropTypes.any,
  marginTop: PropTypes.any,
  marginX: PropTypes.any,
  marginY: PropTypes.any
};

Input.defaultProps = {
  flexShrink: 1
};

export default Input;
