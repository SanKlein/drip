import PropTypes from 'prop-types';
import React from 'react';

import { borderRadii, boxShadow, colors, sizes, widths } from '../constants';
import { padding } from '../utils/styleUtils';

const styles = ({ onClick, ...props }) => ({
  content: {
    background: colors.white,
    border: 'none',
    borderRadius: borderRadii.round,
    boxShadow,
    cursor: 'auto',
    display: 'flex',
    flexDirection: 'column',
    left: '50%',
    marginBottom: sizes.medium,
    maxWidth: widths.contain,
    outline: 'none',
    ...padding(props),
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    zIndex: 20
  },
  overlay: {
    backgroundColor: colors.white,
    bottom: 0,
    cursor: onClick ? 'pointer' : 'auto',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 15
  }
});

const Modal = ({ children, ...props }) => {
  const style = styles(props);
  return (
    <div className="modal-overlay" style={style.overlay} {...props}>
      <div
        className="modal-content"
        onClick={e => (e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true))}
        style={style.content}
      >
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Modal;
