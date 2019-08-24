import PropTypes from 'prop-types';
import React from 'react';

import { colors, fontSizes, widths } from '../constants';
import { margin, padding } from '../utils/styleUtils';

const styles = ({ bc, c, fg, s, fs, lh, noBreak, ta, truncate, w, style, ...props }) => ({
  backgroundColor: colors[bc],
  color: colors[c],
  flexGrow: fg,
  flexShrink: s,
  fontSize: fontSizes[fs] || fs,
  hyphens: 'auto',
  lineHeight: lh,
  ...margin(props),
  overflow: truncate ? 'hidden' : 'visible',
  ...padding(props),
  textAlign: ta,
  textOverflow: truncate ? 'ellipsis' : 'initial',
  whiteSpace: truncate ? 'nowrap' : 'pre-line',
  width: widths[truncate ? 'f' : w] || w,
  wordBreak: noBreak ? 'normal' : 'break-word',
  ...style
});

const Text = ({ children, component, ...props }) => {
  const Component = component;

  return (
    <Component className="text" {...props} style={styles(props)}>
      {children}
    </Component>
  );
};

Text.propTypes = {
  children: PropTypes.any
};

Text.defaultProps = {
  bc: 'transparent',
  c: 'black',
  component: 'p',
  fs: 'n',
  lh: 1.5,
  ta: 'left',
  w: 'a'
};

export default Text;
