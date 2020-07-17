import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

const Input = forwardRef(({ style, icon, error, ...rest }, ref) => {
  return (
    <Container style={style} error={error}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
});

export default Input;
