import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';

import Checkins from '~/pages/Checkins';
import List from '~/pages/List';
import Answer from '~/pages/Answer';
import Help_order from '~/pages/Help_order';

import Header from '~/Components/Header';

export default createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      App: createBottomTabNavigator(
        {
          Checkins,
          Help_orders: createStackNavigator(
            {
              List,
              Answer,
              Help_order,
            },
            {
              initialRouteName: 'Answer',
              defaultNavigationOptions: {
                header: Header,
              },
              cardStyle: {
                backgroundColor: '#fff',
              },
            }
          ),
        },
        {
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#EE4E62',
            inactiveTintColor: '#999',
            style: {
              backgroundColor: '#FFF',
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
