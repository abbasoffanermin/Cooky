import React from 'react';
import {MainRouter} from './src/router/MainRouter';
import {AuthRouter} from './src/router/AuthRouter';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const isAuth = true;

export const Router = () => {
  return (
    <NavigationContainer>
      {isAuth ? <MainRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};

