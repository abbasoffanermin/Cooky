import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Home} from '../../../screens/main/Home'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabRouter} from './TabRouter';
import { Detail } from '../../../screens/main/Detail';
import { Cart } from '../../../screens/main/Cart';
const Stack = createNativeStackNavigator();
export const MainRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabRouter} />
      <Stack.Screen name="Details" component={Detail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
