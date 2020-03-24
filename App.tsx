import { STREAM_API_KEY, STREAM_API_TOKEN, STREAM_APP_ID } from 'babel-dotenv';

import React from 'react';
import { StreamApp } from 'expo-activity-feed';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GlobalNavigation } from './navigation/global';

export const App = () => {
  let apiKey = STREAM_API_KEY;
  let appId = STREAM_APP_ID;
  let token = STREAM_API_TOKEN;

  return (
    <SafeAreaProvider>
      <StreamApp
        apiKey={apiKey}
        appId={appId}
        token={token}
        defaultUserData={{
          name: 'Batman',
          url: 'batsignal.com',
          desc: 'Smart, violent and brutally tough solutions to crime.',
          profileImage:
            'https://i.kinja-img.com/gawker-media/image/upload/s--PUQWGzrn--/c_scale,f_auto,fl_progressive,q_80,w_800/yktaqmkm7ninzswgkirs.jpg',
          coverImage:
            'https://i0.wp.com/photos.smugmug.com/Portfolio/Full/i-mwrhZK2/0/ea7f1268/X2/GothamCity-X2.jpg?resize=1280%2C743&ssl=1',
        }}
      >
        <NavigationContainer>
          <GlobalNavigation></GlobalNavigation>
        </NavigationContainer>
      </StreamApp>
    </SafeAreaProvider>
  );
};

export default App;
