import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Message from './Message';

import {
  Container,
  Messages,
  InputContainer,
  InputMessage,
  ButtonWrapper,
  InputButton,
} from './styles';

const data = [1, 2, 3, 4];

const Chat = () => {
  return (
    <Container>
      <Messages
        inverted
        data={data}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Message myMessage data={item} />}
      />
      <InputContainer>
        <InputMessage maxLength={200} placeholder="Type your message" />
        <ButtonWrapper>
          <InputButton onPress={() => {}}>
            <Icon name="send" color="#fff" size={30} />
          </InputButton>
        </ButtonWrapper>
      </InputContainer>
    </Container>
  );
};

export default Chat;
