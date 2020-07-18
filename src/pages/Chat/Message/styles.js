import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 200px;
  margin: 10px 15px 0 15px;
  padding: 10px 15px;
  background: #202020;
  border-width: 1px;
  border-color: #535353;
  border-radius: 5px;
  align-self: ${(props) => (props.myMessage ? 'flex-end' : 'flex-start')};
`;

export const Sender = styled.Text`
  color: ${(props) => props.color};
  font-family: 'RobotoMono_700Bold';
`;

export const Content = styled.Text`
  color: #fff;
  font-family: 'RobotoMono_400Regular';
`;
