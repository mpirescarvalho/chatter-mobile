import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  height: 55px;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.error &&
    css`
      border: red;
      border-width: 1.5px;
    `}
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#777',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #222;
  font-family: 'RobotoMono_400Regular';
`;
