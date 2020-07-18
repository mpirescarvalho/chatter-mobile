import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Chat from './pages/Chat';
import People from './pages/People';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ChatTab = ({ route, navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarVisible: false,
      }}
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Messages">
        {(props) => <Chat stackNavigation={navigation} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="People">
        {(props) => <People stackNavigation={navigation} {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const MainStack = () => (
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
        component={ChatTab}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const Routes = () => <MainStack />;

export default Routes;
