import React from 'react';

import { Container, Sender, Content } from './styles';

const Message = ({ data, myMessage }) => {
  return (
    <Container myMessage={myMessage}>
      <Sender color="#EB5757">Marcelo Carvalho {data}</Sender>
      <Content>
        Olá Pessoas. Meu norme é Marcelo e estou aqui para conversar com vocês.
      </Content>
    </Container>
  );
};

export default Message;
