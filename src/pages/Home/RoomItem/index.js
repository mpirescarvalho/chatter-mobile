import React from 'react';

import { Wrapper, Container, RoomName, Online } from './styles';

const RoomItem = ({ roomData, onPress }) => {
  return (
    <Wrapper>
      <Container onPress={() => onPress(roomData)}>
        <RoomName>{roomData.name}</RoomName>
        <Online>{roomData.people.length}</Online>
      </Container>
    </Wrapper>
  );
};

export default RoomItem;
