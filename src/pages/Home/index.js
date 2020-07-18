import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import io from 'socket.io-client';

import api from '../../services/api';

import Input from '../../components/Input';

import RoomItem from './RoomItem';

import { Container, Title, RoomList, Button, ButtonText } from './styles';

const Home = ({ navigation }) => {
  const [rooms, setRooms] = useState([]);
  const [errors, setErrors] = useState({
    nickname: false,
    roomName: false,
  });

  const [nickname, setNickname] = useState('');
  const [roomName, setRoomName] = useState('');

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      api.get('/rooms').then((response) => setRooms(response.data));
    }
  }, [isFocused]);

  useEffect(() => {
    const socket = io('https://chatter-backend-server.herokuapp.com');
    socket.on('rooms_changed', setRooms);
    return () => {
      socket.disconnect();
    };
  }, []);

  //Remove error hints from inputs after 2 seconds
  useEffect(() => {
    const id = setTimeout(() => {
      setErrors({ nickname: false, roomName: false });
    }, 2000);
    return () => clearTimeout(id);
  }, [errors]);

  function handleRoomClick(room) {
    if (!nickname) {
      setErrors({ ...errors, nickname: true });
      return;
    }
    navigation.navigate('Chat', {
      screen: 'Messages',
      roomName: room.name,
      params: {
        roomId: room.id,
        nickname,
      },
    });
  }

  function handleCreateRoom() {
    if (!nickname) {
      setErrors({ ...errors, nickname: true });
      return;
    }

    if (!roomName) {
      setErrors({ ...errors, roomName: true });
      return;
    }

    api.post('/rooms', { name: roomName }).then((res) => {
      const { room_id } = res.data;
      if (room_id) {
        navigation.navigate('Chat', {
          screen: 'Messages',
          roomName,
          params: {
            roomId: room_id,
            nickname,
          },
        });
        setRoomName('');
      }
    });
  }

  return (
    <Container>
      <Title>Join a room, or create your own.</Title>

      <Input
        maxLength={20}
        error={errors.nickname}
        autoCorrect={false}
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
      />

      <RoomList
        data={rooms}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <RoomItem roomData={item} onPress={handleRoomClick} />
        )}
      />

      <Input
        maxLength={20}
        error={errors.roomName}
        autoCorrect={false}
        placeholder="Room name"
        value={roomName}
        onChangeText={setRoomName}
      />

      <Button onPress={handleCreateRoom}>
        <ButtonText>Create Room</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
