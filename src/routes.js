import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Chat from './pages/Chat';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.roomName,
          headerTitleAlign: 'center',
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            fontFamily: 'RobotoMono_400Regular',
          },
        })}
        name="Chat"
        component={Chat}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
