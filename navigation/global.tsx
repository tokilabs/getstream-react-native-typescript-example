import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EditProfileScreen from '../screens/EditProfileScreen';
import SinglePostScreen from '../screens/SinglePostScreen';
import StatusUpdateScreen from '../screens/StatusUpdateScreen';

import { TabNavigator } from './tabs';
import { ActivityData } from '../types';

export type GlobalStackNavParamList = {
  Tabs: undefined;
  SinglePost: { activity: ActivityData; feedGroup?: string; userId?: number };
  NewPost: { submitFunc: any };
  EditProfile: undefined;
};

const Stack = createStackNavigator<GlobalStackNavParamList>();

export const GlobalNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="SinglePost" component={SinglePostScreen} options={{ headerShown: false }} />
    <Stack.Screen name="NewPost" component={StatusUpdateScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);
