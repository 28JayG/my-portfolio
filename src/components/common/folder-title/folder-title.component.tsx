import React from 'react';

import { Title } from './folder-title.styles';

export type titleProps = {
  fill?: string;
  stroke?: string;
  children?: any;
};

const FolderTitle: React.FC<titleProps> = ({ fill, stroke, children }) => (
  <Title fill={fill} stroke={stroke}>
    {children}
  </Title>
);

export default FolderTitle;
