import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #000;
`;

export const Messages = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputMessage = styled.TextInput.attrs({
  placeholderTextColor: '#7C7C7C',
})`
  flex: 1;
  height: 55px;
  margin: 15px 0 15px 15px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-color: #ff4444;
  border-width: 1px;
  padding: 0 21px;
  font-family: 'RobotoMono_700Bold';
  color: #fff;
`;

export const ButtonWrapper = styled.View`
  height: 55px;
  width: 55px;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  background: #ff4444;
  margin-right: 15px;
`;

export const InputButton = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
