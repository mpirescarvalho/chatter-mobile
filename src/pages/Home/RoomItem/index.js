import React from 'react';

import { Wrapper, Container, RoomName, Online } from './styles';

const RoomItem = ({ roomData, onPress }) => {
  return (
    <Wrapper>
      <Container onPress={onPress}>
        <RoomName>Room's name {roomData}</RoomName>
        <Online>27 Online</Online>
      </Container>
    </Wrapper>
  );
};

export default RoomItem;
