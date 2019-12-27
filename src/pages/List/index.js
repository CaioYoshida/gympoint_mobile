import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function List() {
  return (
    <Container>
      <CreateQuestionButton>Novo Pedido de auxílio</CreateQuestionButton>
      <QuestionList>
        <QuestionBox>
          <QuestionInformations>
            <QuestionStatus>
              <Icon name="remove-circle" size={20} color="#999" />
              <StatusTextUnread>Sem Resposta</StatusTextUnread>
            </QuestionStatus>
            <QuestionTime>Há 7 dias</QuestionTime>
          </QuestionInformations>
          <QuestionText>
            Olá pessoal da academia, gostaria de saber se quando acordar devo
            ingerir batata doce e frango logo de primeira, preparar as...
          </QuestionText>
        </QuestionBox>
        <QuestionBox>
          <QuestionInformations>
            <QuestionStatus>
              <Icon name="check-circle" size={20} color="#42cb59" />
              <StatusTextRead>Respondido</StatusTextRead>
            </QuestionStatus>
            <QuestionTime>Há 7 dias</QuestionTime>
          </QuestionInformations>
          <QuestionText>
            Olá pessoal da academia, gostaria de saber se quando acordar devo
            ingerir batata doce e frango logo de primeira, preparar as...
          </QuestionText>
        </QuestionBox>
      </QuestionList>
    </Container>
  );
}
