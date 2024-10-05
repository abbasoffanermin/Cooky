import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../../screens/main/Home';
import {Search} from '../../../screens/main/Search';
import {Notification} from '../../../screens/main/Notification';
import {Account} from '../../../screens/main/Account';
import HomeIcon from '../../../svgs/home.svg';
import SearchIcon from '../../../svgs/search.svg';
import NotificationIcon from '../../../svgs/notification.svg';
import AccountIcon from '../../../svgs/account.svg';
import {colors} from '../../../styles/colors';
import {SvgImage} from '../../../components/SvgImage';
const Tab = createBottomTabNavigator();

export const TabRouter = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SvgImage
            source={require('../../../svgs/home.svg')}
            tab={focused?true:false}
              color={focused ? 'white': colors.NeutralLight[100]}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: colors.primary[400],
          tabBarInactiveTintColor: colors.NeutralLight[400],
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SvgImage
            source={require('../../../svgs/search.svg')}
            tab={focused?true:false}
              color={focused ? 'white' : colors.NeutralLight[100]}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: colors.primary[400],
          tabBarInactiveTintColor: colors.NeutralLight[400],
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SvgImage
            source={require('../../../svgs/notification.svg')}
            tab={focused?true:false}
              color={focused ? 'white' : colors.NeutralLight[100]}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: colors.primary[400],
          tabBarInactiveTintColor: colors.NeutralLight[400],
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SvgImage
            source={require('../../../svgs/account.svg')}
            tab={focused?true:false}
              color={focused ? 'white' : colors.NeutralLight[100]}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
