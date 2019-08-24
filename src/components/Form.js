import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  form: {
    alignItems: 'stretch',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    width: '100%'
  }
};

const Form = ({ children, ...props }) => (
  <form style={styles.form} {...props}>
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.any
};

export default Form;
