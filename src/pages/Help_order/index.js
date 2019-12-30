import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, QuestionText, SubmitButton } from './styles';

export default function Help_order() {
  const student_id = useSelector(state => state.auth.user.id);
  const [help_order, setHelp_order] = useState();

  async function handleSubmit() {
    try {
      await api.post(`students/${student_id}/help-orders`, {
        question: help_order,
      });

      Alert.alert(
        'Mensagem enviada com sucesso',
        'Em breve retornaremos a sua pergunta!'
      );
    } catch (err) {
      Alert.alert('Erro no servidor', 'Tente novamente mais tarde.');
    }

    setHelp_order('');
  }

  return (
    <Container>
      <QuestionText
        placeholder="Insira seu pedido de auxílio"
        multiline
        value={help_order}
        onChangeText={setHelp_order}
      />
      <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
    </Container>
  );
}

Help_order.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Icon name="chevron-left" size={20} color="#EE4E62" />
    </TouchableOpacity>
  ),
});
