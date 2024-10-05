import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Home} from '../../../screens/main/Home'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabRouter} from './TabRouter';
const Stack = createNativeStackNavigator();
export const MainRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabRouter} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
