import React from 'react';
import { Text } from 'react-native';
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

function CheckinsText({ tintColor }) {
  return (
    <Text style={{ fontSize: 13, alignSelf: 'center', color: `${tintColor}` }}>
      Check-ins
    </Text>
  );
}

function SubmitIconHelp_order({ tintColor }) {
  return <Icon name="assignment" size={20} color={tintColor} />;
}

function Help_orderText({ tintColor }) {
  return (
    <Text style={{ fontSize: 13, alignSelf: 'center', color: `${tintColor}` }}>
      Pedir ajuda
    </Text>
  );
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
              tabBarLabel: CheckinsText,
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
              tabBarLabel: Help_orderText,
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

CheckinsText.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Help_orderText.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
