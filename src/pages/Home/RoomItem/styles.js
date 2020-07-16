import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const Container = styled(RectButton)`
  padding: 23px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RoomName = styled.Text`
  font-size: 12px;
  color: #000;
`;

export const Online = styled.Text`
  font-size: 11px;
  color: #575757;
`;
