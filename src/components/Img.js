import PropTypes from 'prop-types';
import React from 'react';

import { borderRadii, boxShadow, colors, imageSizes, museImage } from '../constants';

const styles = ({ boxShadow: bs, size }) => ({
  backgroundColor: colors.backgroundGrey,
  borderRadius: borderRadii.circle,
  boxShadow: bs ? boxShadow : 'none',
  flexShrink: 0,
  height: imageSizes[size],
  objectFit: 'cover',
  width: imageSizes[size]
});

const Img = (
  { src, s3Url, uploadedFiles, uploaderOptions, ...props } // eslint-disable-line
) => <img alt="img" className="img" src={src || museImage} style={styles(props)} {...props} />;

Img.propTypes = {
  src: PropTypes.string,
  s3Url: PropTypes.string,
  uploadedFiles: PropTypes.any,
  uploaderOptions: PropTypes.object
};

Img.defaultProps = {
  size: 'medium'
};

export default Img;
