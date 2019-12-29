import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  CreateQuestionButton,
  QuestionList,
  QuestionBox,
  QuestionInformations,
  QuestionStatus,
  StatusTextUnread,
  StatusTextRead,
  QuestionTime,
  QuestionText,
} from './styles';

export default function List({ navigation }) {
  const student_id = useSelector(state => state.auth.user.id);

  const [help_orders, setHelp_orders] = useState();

  useEffect(() => {
    async function loadHelp_orders() {
      const response = await api.get(`students/${student_id}/help-orders`);

      const { data } = response;

      setHelp_orders(data);
    }
    loadHelp_orders();
  }, [student_id]);

  return (
    <Container>
      <CreateQuestionButton onPress={() => navigation.navigate('Help_order')}>
        Novo Pedido de auxílio
      </CreateQuestionButton>
      <QuestionList>
        {help_orders &&
          help_orders.map(help_order => (
            <QuestionBox key={help_order.id}>
              <QuestionInformations>
                <QuestionStatus>
                  {help_order.answer ? (
                    <>
                      <Icon name="check-circle" size={20} color="#42cb59" />
                      <StatusTextRead>Respondido</StatusTextRead>
                    </>
                  ) : (
                    <>
                      <Icon name="remove-circle" size={20} color="#999" />
                      <StatusTextUnread>Sem resposta</StatusTextUnread>
                    </>
                  )}
                </QuestionStatus>
                <QuestionTime>Há 7 dias</QuestionTime>
              </QuestionInformations>
              <QuestionText numberOfLines={3}>
                {help_order.question}
              </QuestionText>
            </QuestionBox>
          ))}
      </QuestionList>
    </Container>
  );
}

List.navigationOptions = {
  headerLeft: () => (
    <TouchableOpacity onPress={() => {}}>
      <Icon name="chevron-left" size={20} color="#EE4E62" />
    </TouchableOpacity>
  ),
};

List.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
