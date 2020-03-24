import 'expo/build/Expo.fx';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake'

import App from './App';

if (__DEV__) { // process.env.NODE_ENV === 'development'
  activateKeepAwake();
}

registerRootComponent(App);