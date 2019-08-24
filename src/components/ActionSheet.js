import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';
import { boxShadow, colors, sizes, widths } from '../constants';

const ActionSheet = ({ handleClose, menus }) => (
  <div style={styles.overlay} onClick={handleClose}>
    <div style={styles.actionSheet}>
      <div style={styles.content}>
        {menus.map((menu, i) => (
          <Button key={i} onClick={menu.onClick} marginBottom="medium" width="full">
            {menu.content}
          </Button>
        ))}
        <Button color="red" onClick={handleClose} width="full">
          Cancel
        </Button>
      </div>
    </div>
  </div>
);

ActionSheet.propTypes = {
  handleClose: PropTypes.func.isRequired,
  menus: PropTypes.array.isRequired
};

const styles = {
  overlay: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 15,
    overflow: 'hidden'
  },
  actionSheet: {
    backgroundColor: colors.white,
    boxShadow,
    maxHeight: '100%',
    overflowY: 'scroll',
    bottom: 0,
    padding: sizes.medium,
    width: '100%'
  },
  content: {
    margin: '0 auto',
    maxWidth: widths.contain,
    width: '100%'
  }
};

export default ActionSheet;
