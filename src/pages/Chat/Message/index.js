import React from 'react';

import { Container, Sender, Content } from './styles';

const Message = ({ data, myMessage, color }) => {
  return (
    <Container myMessage={myMessage}>
      <Sender color={color}>{data.nickname}</Sender>
      <Content>{data.message}</Content>
    </Container>
  );
};

export default Message;
