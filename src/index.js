import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import App from '~/App';

// import { Container } from './styles';

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <App />
    </>
  );
}
