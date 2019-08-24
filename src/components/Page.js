import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  page: {}
};

const Page = ({ children }) => <div style={styles.page}>{children}</div>;

Page.propTypes = {
  children: PropTypes.any.isRequired
};

export default Page;
