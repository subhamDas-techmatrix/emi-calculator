import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from '../utils/ScreenNames';
import Landing from '../screens/Landing';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export const authStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenNames.LANDING}>
      <Stack.Screen name={ScreenNames.LANDING} component={Landing} />
      <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};
