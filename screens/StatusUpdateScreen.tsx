import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { StatusUpdateForm } from 'expo-activity-feed';

import { StackNavScreenProps } from '../navigation/stacks';

type StatusScreenProps = StackNavScreenProps<'NewPost'> & {};

class StatusUpdateScreen extends React.Component<StatusScreenProps> {
  static navigationOptions = ({ navigation }) => ({
    title: 'NEW POST',
    headerLeft: (
      <TouchableOpacity style={{ paddingLeft: 15 }} onPress={() => navigation.goBack()}>
        <Image style={{ width: 24, height: 24 }} source={require('../images/icons/close.png')} />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={{ paddingRight: 15 }} onPress={navigation.getParam('submitFunc')}>
        <Text style={{ color: '#007AFF', fontSize: 17 }}>Send</Text>
      </TouchableOpacity>
    ),
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 13,
    },
  });

  render() {
    return (
      <StatusUpdateForm
        fullscreen
        {...this.props}
        registerSubmit={(submitFunc) => {
          this.props.navigation.setParams({ submitFunc });
        }}
      />
    );
  }
}

export default StatusUpdateScreen;
