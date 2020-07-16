import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #000;
  padding: 70px 30px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 38px;
`;

export const RoomList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 5px 0 15px;
`;

export const Button = styled(RectButton)`
  height: 46px;
  background: #ff4444;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
