import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {authStack} from './Routes';

const Navigator = () => {
  return <NavigationContainer>{authStack()}</NavigationContainer>;
};

export default Navigator;
