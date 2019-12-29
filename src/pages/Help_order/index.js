import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import { Container, QuestionText, SubmitButton } from './styles';

export default function Help_order() {
  const student_id = useSelector(state => state.auth.user.id);

  const [help_orders, setHelp_orders] = useState();

  useEffect(() => {
    async function loadHelp_orders() {
      const response = await api.get(`students/${student_id}/help-orders`);

      const data = response;

      setHelp_orders(data);
    }
    loadHelp_orders();
  }, [student_id]);

  return (
    <Container>
      <QuestionText placeholder="Insira seu pedido de auxílio" multiline />
      <SubmitButton>Enviar pedido</SubmitButton>
    </Container>
  );
}
