import styled from 'styled-components/native';

export const Container = styled.View`
  background: #222;
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Person = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eee3;
`;

export const Name = styled.Text`
  color: ${(props) => props.color};
  margin-left: 25px;
  font-size: 16px;
  font-family: 'RobotoMono_700Bold';
`;
