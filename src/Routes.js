import React from 'react';
import PropTypes from 'prop-types';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import Checkins from '~/pages/Checkins';
import List from '~/pages/List';
import Answer from '~/pages/Answer';
import Help_order from '~/pages/Help_order';

import Header from '~/Components/Header';

function SubmitIconCheckins({ tintColor }) {
  return <Icon name="arrow-upward" size={20} color={tintColor} />;
}

function SubmitIconHelp_order({ tintColor }) {
  return <Icon name="assignment" size={20} color={tintColor} />;
}

export default createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      App: createBottomTabNavigator(
        {
          Checkins: {
            screen: Checkins,
            navigationOptions: {
              tabBarLabel: 'Check-ins',
              tabBarIcon: SubmitIconCheckins,
            },
          },
          Help_orders: {
            screen: createStackNavigator(
              {
                List,
                Answer,
                Help_order,
              },
              {
                initialRouteName: 'List',
                defaultNavigationOptions: {
                  header: Header,
                  headerLeft: HeaderBackButton,
                },
                cardStyle: {
                  backgroundColor: '#fff',
                },
              }
            ),
            navigationOptions: {
              tabBarLabel: 'Pedir ajuda',
              tabBarIcon: SubmitIconHelp_order,
            },
          },
        },
        {
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#EE4E62',
            inactiveTintColor: '#999',
            style: {
              backgroundColor: '#FFF',
              height: 50,
              marginBottom: 5,
            },
            initialRouteName: 'Checkins',
          },
        }
      ),
    },
    {
      initialRouteName: 'App',
    }
  )
);

SubmitIconCheckins.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

SubmitIconHelp_order.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
