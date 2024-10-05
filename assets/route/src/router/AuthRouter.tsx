import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Onboarding } from '../../../screens/auth/Onboarding';
import { Login } from '../../../screens/auth/Login';
import { Register } from '../../../screens/auth/Register';
import { PhoneNumber } from '../../../screens/auth/PhoneNumber';
import { Verification } from '../../../screens/auth/Verification';
import { PasswordRecovery } from '../../../screens/auth/PasswordRecovery';
import { VerificationEmail } from '../../../screens/auth/VerificationEmail';
import { EnterAdress } from '../../../screens/auth/EnterAdress';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export const AuthRouter = () => {
  return (
    <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
          <Stack.Screen name="VerificationEmail" component={VerificationEmail} />
          <Stack.Screen name="EnterAdress" component={EnterAdress} />
        </Stack.Navigator>
  )
}



const styles = StyleSheet.create({})