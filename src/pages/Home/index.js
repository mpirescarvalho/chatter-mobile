import React from 'react';

import Input from '../../components/Input';

import RoomItem from './RoomItem';

import { Container, Title, RoomList, Button, ButtonText } from './styles';

const data = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];

const Home = () => {
  return (
    <Container>
      <Title>Join a room, or create your own.</Title>

      <Input autoCorrect={false} placeholder="Nickname" />

      <RoomList
        data={data}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <RoomItem roomData={item} onPress={() => {}} />
        )}
      />

      <Input autoCorrect={false} placeholder="Room name" />

      <Button onPress={() => {}}>
        <ButtonText>Create Room</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
