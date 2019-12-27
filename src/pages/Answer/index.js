import React from 'react';

import {
  Container,
  QuestionBox,
  QuestionInformations,
  QuestionStatus,
  QuestionTime,
  QuestionText,
  AnswerBox,
} from './styles';

export default function Help_order() {
  return (
    <Container>
      <QuestionBox>
        <QuestionInformations>
          <QuestionStatus>PERGUNTA</QuestionStatus>
          <QuestionTime>Há 7 dias</QuestionTime>
        </QuestionInformations>
        <QuestionText>
          Olá pessoal da academia, gostaria de saber se quando acordar devo
          ingerir batata doce e frango logo de primeira, preparar as marmitas e
          lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?
        </QuestionText>
        <AnswerBox>
          <QuestionInformations>
            <QuestionStatus>RESPOSTA</QuestionStatus>
          </QuestionInformations>
          <QuestionText>
            Opa, isso aí, duas em duas horas, não deixa pra depois, um monstro
            treina como um, come como dois.
          </QuestionText>
        </AnswerBox>
      </QuestionBox>
    </Container>
  );
}
