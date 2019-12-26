import React from 'react';

import {
  Container,
  CheckinButton,
  CheckinView,
  CheckinTag,
  CheckinText,
  CheckinTime,
} from './styles';

import Header from '~/Components/Header';

export default function Checkins() {
  return (
    <>
      <Header />
      <Container>
        <CheckinButton>Novo check-in</CheckinButton>
        <CheckinView>
          <CheckinTag>
            <CheckinText>Check-in #1</CheckinText>
            <CheckinTime>Há 7 dias</CheckinTime>
          </CheckinTag>
        </CheckinView>
      </Container>
    </>
  );
}
