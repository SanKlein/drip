import PropTypes from 'prop-types';
import React from 'react';

import Box from './Box';
import Img from './Img';
import Text from './Text';
import Title from './Title';

const MediaItem = ({ size, src, subTitle, title, ...props }) => (
  <Box
    alignItems="center"
    flexShrink={1}
    itemScope
    itemType="http://schema.org/Person"
    width="full"
    {...props}
  >
    <Img alt={title} itemProp="image" src={src} size={size} />
    <Box flexDirection="column" flexShrink={1} noOverflow paddingLeft="medium">
      {title && (
        <Title component="h3" itemProp="name" truncate>
          {title}
        </Title>
      )}
      {subTitle && <Text truncate>{subTitle}</Text>}
    </Box>
  </Box>
);

MediaItem.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string
};

export default MediaItem;
