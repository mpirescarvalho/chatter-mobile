import React, {
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import io from 'socket.io-client';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import api from '../../services/api';

import Message from './Message';

import {
  Container,
  Messages,
  InputContainer,
  InputMessage,
  ButtonWrapper,
  InputButton,
} from './styles';

const colors = [
  '#EB5757',
  '#F2994A',
  '#F2C94C',
  '#219653',
  '#2F80ED',
  '#9B51E0',
  '#795548',
  '#607d8b',
];

const Chat = ({ route, navigation, stackNavigation }) => {
  const [loading, setLoading] = useState(true);
  const [myID, setMyID] = useState();
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState();
  const [peopleColors, setPeopleColors] = useState();
  const [myMessage, setMyMessage] = useState('');

  const { roomId, nickname } = route.params;

  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (stackNavigation && isFocused) {
      stackNavigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('People')}
            style={{ marginRight: 16 }}
          >
            <Icon name="people" color="#000" size={24} />
          </TouchableOpacity>
        ),
      });
    }
  }, [stackNavigation, isFocused]);

  const getSenderNicknameById = useCallback(
    (id) => {
      if (room) {
        const _person = room.people.find((pers) => pers.id === id);
        if (_person) return _person.nickname;
      }
    },
    [room]
  );

  //Fill people colors
  useEffect(() => {
    if (room) {
      let changed = false;
      let _peopleColors = { ...peopleColors };
      room.people.forEach((person) => {
        if (!_peopleColors[`${person.id}`]) {
          _peopleColors[`${person.id}`] =
            colors[Math.floor(Math.random() * colors.length)];
          changed = true;
        }
      });
      if (changed) setPeopleColors(_peopleColors);
    }
  }, [room, peopleColors]);

  //Fill message nicknames
  useEffect(() => {
    let changed = false;
    const _messages = messages.map((message) => {
      if (!message.nickname) {
        const _messageNickname = getSenderNicknameById(message.sender_id);
        if (_messageNickname) {
          changed = true;
          message.nickname = _messageNickname;
        }
      }
      return message;
    });
    if (changed) setMessages(_messages);
  }, [messages, getSenderNicknameById]);

  //get room information and enter on it
  useEffect(() => {
    if (roomId && nickname && myID) {
      api
        .get(`/rooms/${roomId}`)
        .then((response) => {
          api
            .post('/rooms/people', {
              id: myID,
              room_id: roomId,
              nickname,
            })
            .then((res) => {
              setRoom(response.data);
              setLoading(false);
            })
            .catch((_) => setLoading(false));
        })
        .catch((_) => setLoading(false));
    }
  }, [roomId, nickname, myID]);

  useEffect(() => {
    const socket = io('https://chatter-backend-server.herokuapp.com');

    socket.on('connect', () => setMyID(socket.id));

    socket.on(`${roomId}-changed`, setRoom);
    socket.on(`${roomId}-new_message`, (message) => {
      setMessages((oldMessages) => {
        const _messages = [...oldMessages];
        _messages.unshift(message);
        return _messages;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId]);

  async function handleSendMessage() {
    const _message = myMessage;
    setMyMessage('');
    if (_message)
      await api.post('/messages', {
        sender_id: myID,
        message: _message,
        room_id: roomId,
      });
  }

  return (
    <Container>
      <Messages
        inverted
        data={messages}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <Message
            color={peopleColors[item.sender_id]}
            myMessage={item.sender_id === myID}
            data={item}
          />
        )}
      />
      <InputContainer>
        <InputMessage
          returnKeyType="send"
          onSubmitEditing={handleSendMessage}
          maxLength={200}
          placeholder="Type your message"
          value={myMessage}
          onChangeText={setMyMessage}
        />
        <ButtonWrapper>
          <InputButton onPress={handleSendMessage}>
            <Icon name="send" color="#fff" size={30} />
          </InputButton>
        </ButtonWrapper>
      </InputContainer>
    </Container>
  );
};

export default Chat;
