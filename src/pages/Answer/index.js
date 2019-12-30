import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import {
  Container,
  QuestionBox,
  QuestionInformations,
  QuestionStatus,
  QuestionTime,
  QuestionText,
  AnswerBox,
} from './styles';

export default function Answer({ navigation }) {
  const index = JSON.stringify(navigation.getParam('index'));

  const student_id = useSelector(state => state.auth.user.id);

  const [help_order, setHelp_order] = useState();

  useEffect(() => {
    async function loadHelp_orders() {
      const response = await api.get(`students/${student_id}/help-orders`);

      const { data } = response;

      setHelp_order(data[index]);
    }
    loadHelp_orders();
  }, [index, student_id]);

  return (
    <Container>
      <QuestionBox>
        <QuestionInformations>
          <QuestionStatus>PERGUNTA</QuestionStatus>
          <QuestionTime>Há 7 dias</QuestionTime>
        </QuestionInformations>
        <QuestionText>{help_order && help_order.question}</QuestionText>
        <AnswerBox>
          <QuestionInformations>
            <QuestionStatus>RESPOSTA</QuestionStatus>
          </QuestionInformations>
          <QuestionText>{help_order && help_order.answer}</QuestionText>
        </AnswerBox>
      </QuestionBox>
    </Container>
  );
}

Answer.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Icon name="chevron-left" size={20} color="#EE4E62" />
    </TouchableOpacity>
  ),
});
