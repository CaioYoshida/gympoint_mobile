import React from 'react';
import { Container, SubmitButton, IDInput, Logo } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <Container>
      <Logo source={logo} />
      <IDInput placeholder="Informe seu ID de cadastro" />
      <SubmitButton>Entrar no sistema</SubmitButton>
    </Container>
  );
}
