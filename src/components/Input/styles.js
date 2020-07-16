import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  height: 55px;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#777',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #222;
`;
