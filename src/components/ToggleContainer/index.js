import React from 'react';

import { Container } from './styles';

const ToggleContainer = ({ opened, children }) => {
  return <Container show={opened}>{children}</Container>;
};

export default ToggleContainer;
