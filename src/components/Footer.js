import PropTypes from 'prop-types';
import React from 'react';

import { alignments, boxShadow, colors, sizes, widths } from '../constants';

const styles = ({ ai, c, fd, jc, noBorder }) => ({
  footer: {
    backgroundColor: colors[c],
    bottom: 0,
    boxShadow: noBorder ? 'none' : boxShadow,
    position: 'fixed',
    width: widths.f
  },
  content: {
    alignItems: alignments[ai],
    display: 'flex',
    flexDirection: fd,
    justifyContent: alignments[jc],
    margin: '0 auto',
    padding: sizes.m,
    width: widths.f
  }
});

const Footer = ({ children, ...props }) => {
  const style = styles(props);
  return (
    <div className="footer" style={style.footer}>
      <div style={style.content}>{children}</div>
    </div>
  );
};

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  noBorder: PropTypes.any
};

Footer.defaultProps = {
  ai: 'c',
  c: 'white',
  fd: 'row',
  jc: 'sb'
};

export default Footer;
