import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  right: ${(props) => (props.show ? 0 : -300)}px;
  width: 300px;
  height: 500px;
  background: #eee;
  border-top-width: 1px;
  border-top-color: #6f6f6f;
  z-index: 2;
`;
