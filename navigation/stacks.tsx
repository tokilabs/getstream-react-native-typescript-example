import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { GlobalStackNavParamList } from './global';

export type StacksParamList = GlobalStackNavParamList & {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  Search: undefined;
};

export const NotificationsStack = createStackNavigator<StacksParamList>().Screen({
  name: 'Notifications',
  component: NotificationsScreen,
});

export const ProfileStack = createStackNavigator<StacksParamList>().Screen({
  name: 'Profile',
  component: ProfileScreen,
});

export const SearchStack = createStackNavigator<StacksParamList>().Screen({
  name: 'Search',
  component: SearchScreen,
});

const HomeStackNav = createStackNavigator<StacksParamList>();
export const HomeStack = <HomeStackNav.Screen name="Home" component={HomeScreen} />;

export type StackNavScreenProps<RouteName extends keyof StacksParamList> = {
  navigation: StackNavigationProp<StacksParamList, RouteName>;
  route: RouteProp<StacksParamList, RouteName>;
};
