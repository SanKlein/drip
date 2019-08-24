// src/components/SideMenu.js

import React, { Component } from 'react';

import { boxShadow, colors } from '../constants';

const styles = {
  sideMenu: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    width: '100%',
    zIndex: 10,
    display: 'flex'
  },
  sideMenuContent: {
    width: '400px',
    height: '100%',
    backgroundColor: colors.white,
    boxShadow
  },
  sideMenuPage: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.white
  },
  sideMenuClose: {
    flexGrow: 1
  },
  ios: {
    width: 'auto',
    minHeight: '50px',
    maxHeight: '50px',
    height: '50px',
    flexShrink: 0
  }
};

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.sideMenu}>
        <div style={styles.sideMenuContent}>
          <div style={styles.sideMenuPage}>Hi</div>
        </div>
        <div style={styles.sideMenuClose} />
      </div>
    );
  }
}

export default SideMenu;
