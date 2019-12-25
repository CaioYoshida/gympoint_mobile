import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';

import Checkins from '~/pages/Checkins';
import List from '~/pages/List';
import Answer from '~/pages/Answer';
import Help_order from '~/pages/Help_order';

export default createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      App: createBottomTabNavigator(
        {
          Checkins,
          Help_orders: createSwitchNavigator(
            {
              List,
              Answer,
              Help_order,
            },
            {
              initialRouteName: 'Help_order',
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
      initialRouteName: 'SignIn',
    }
  )
);
