import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { alignments, borderRadii, colors, fontSizes, widths } from '../constants';
import { margin, padding } from '../utils/styleUtils';

const styles = ({
  ai,
  bc,
  br,
  c,
  disabled,
  fd,
  fg,
  s,
  fs,
  hide,
  jc,
  noShadow,
  ta,
  w,
  ...props
}) => ({
  alignItems: alignments[ai],
  backgroundColor: colors[hide ? 'white' : disabled ? 'white' : bc],
  borderRadius: borderRadii[br],
  boxShadow: hide || noShadow ? null : '0px 0px 8px 1px rgba(0, 0, 0, 0.2)',
  color: colors[c],
  cursor: disabled ? 'not-allowed' : hide ? 'default' : 'pointer',
  display: 'flex',
  flexDirection: fd,
  flexGrow: fg,
  flexShrink: s,
  fontSize: fontSizes[fs],
  justifyContent: alignments[jc],
  ...margin(props),
  ...padding(props),
  textAlign: ta,
  width: widths[w]
});

const Button = ({ children, href, to, ...props }) => {
  const Component = href ? 'a' : to ? Link : 'button';
  return (
    <Component className="button" style={styles(props)} href={href} to={to} {...props}>
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string
};

Button.defaultProps = {
  ai: 'c',
  bc: 'white',
  br: 'c',
  c: 'black',
  fd: 'row',
  fs: 'm',
  hide: false,
  js: 'c',
  noShadow: false,
  p: 'm l',
  ta: 'c',
  to: null,
  w: 'a'
};

export default Button;
