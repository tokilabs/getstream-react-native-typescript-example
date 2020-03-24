//@flow
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, IconBadge } from 'expo-activity-feed';

import Icon from '../components/Icon';

import type { UserResponse } from '../types';
import { HomeStack, SearchStack, NotificationsStack, ProfileStack } from './stacks';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tabs = createBottomTabNavigator();

export const TabNavigator = () => {
  function screenOptions({ route }) {
    return {
      tabBarIcon: () => {
        if (route.name === 'Home') {
          return <Icon name="home" />;
        } else if (route.name === 'Search') {
          return <Icon name="search" />;
        } else if (route.name === 'Notifications') {
          return (
            <IconBadge showNumber>
              <Icon name="notifications" />
            </IconBadge>
          );
        } else if (route.name === 'Profile') {
          return <Avatar source={(userData: UserResponse) => userData.data.profileImage} size={25} noShadow />;
        }
      },
    };
  }

  return (
    <Tabs.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Tabs.Screen name="Home" component={HomeScreen}></Tabs.Screen>
      <Tabs.Screen name="Search" component={SearchScreen}></Tabs.Screen>
      <Tabs.Screen name="Notifications" component={NotificationScreen}></Tabs.Screen>
      <Tabs.Screen name="Profile" component={ProfileScreen}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
