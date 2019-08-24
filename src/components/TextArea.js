import PropTypes from 'prop-types';
import React from 'react';
import Textarea from 'react-textarea-autosize';

import { borderRadii, colors, fontSizes } from '../constants';
import { padding } from '../utils/styleUtils';

const styles = ({ fontSize, minHeight, ...props }) => ({
  backgroundColor: colors.backgroundGrey,
  borderRadius: borderRadii.round,
  flexGrow: 1,
  fontSize: fontSizes[fontSize],
  lineHeight: 1.3,
  maxHeight: '100%',
  minHeight,
  ...padding(props),
  width: '100%'
});

const TextArea = ({
  fontSize,
  minHeight,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY,
  ...props
}) => (
  <Textarea
    style={styles({
      fontSize,
      minHeight,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingX,
      paddingY
    })}
    {...props}
  />
);

TextArea.propTypes = {
  fontSize: PropTypes.string,
  minHeight: PropTypes.string,
  padding: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string
};

TextArea.defaultProps = {
  fontSize: 'medium',
  minHeight: 'auto',
  padding: 'medium'
};

export default TextArea;
