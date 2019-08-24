import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { alignments, boxShadow, colors, sizes, widths } from '../constants';
import { padding } from '../utils/styleUtils';

const styles = ({ atTop, bc, border, fd, js, z, ...props }) => ({
  header: {
    backgroundColor: colors[bc],
    boxShadow: !atTop || border ? boxShadow : 'none',
    position: 'fixed',
    top: 0,
    width: widths.f,
    zIndex: z || 1
  },
  content: {
    alignItems: alignments.c,
    display: 'flex',
    flexDirection: fd,
    ...padding(props),
    justifyContent: alignments[js],
    margin: '0 auto',
    width: widths.f
  }
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      atTop: true
    };

    this.handleBodyScroll = this.handleBodyScroll.bind(this);
  }

  componentDidMount() {
    const { containerId } = this.props;

    if (containerId) {
      const container = document.getElementById(containerId);
      if (container) {
        this.container = container;
        this.container.addEventListener('scroll', this.handleBodyScroll);
      }
    }
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.removeEventListener('scroll', this.handleBodyScroll);
    }
  }

  handleBodyScroll() {
    const { atTop } = this.state;
    if (this.container && this.container.scrollTop > 0 && atTop) {
      this.setState({ atTop: false });
      return;
    }
    if (this.container && this.container.scrollTop <= 0 && !atTop) {
      this.setState({ atTop: true });
    }
  }

  render() {
    const { children, ...props } = this.props;
    const { atTop } = this.state;
    const style = styles({ atTop, ...props });
    return (
      <div className="header" style={style.header}>
        <div className="header-content" style={style.content}>
          {children}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  containerId: PropTypes.string
};

Header.defaultProps = {
  bc: 'white',
  containerId: 'container',
  fd: 'row',
  jc: alignments.sb,
  p: sizes.m
};

export default Header;
