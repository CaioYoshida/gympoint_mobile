import React from 'react';
import { View } from 'react-native';

import { Container, QuestionText, SubmitButton } from './styles';

export default function Help_order() {
  return (
    <Container>
      <QuestionText placeholder="Insira seu pedido de auxílio" multiline />
      <SubmitButton>Enviar pedido</SubmitButton>
    </Container>
  );
}
