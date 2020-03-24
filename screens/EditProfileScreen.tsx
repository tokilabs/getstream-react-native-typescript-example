// @flow
import React from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import EditProfileForm from '../components/EditProfileForm';
import { BackButton } from 'expo-activity-feed';

import type {
  NavigationProp,
  EventListenerCallback,
  EventMapCore,
  NavigationState,
} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<{}>;
  route: any;
};

export default class EditProfileScreen extends React.Component<Props> {
  _navListener: EventListenerCallback<EventMapCore<NavigationState>, 'focus'>;

  static navigationOptions = ({ navigation, route }: Props) => ({
    title: 'EDIT PROFILE',
    // TODO @Jaap: Probably Text is not the correct component here, probably
    // also good to go back to the profile page after pressing save
    headerRight: (
      <TouchableOpacity onPress={route.params?.saveFunc}>
        <Text>Save</Text>
      </TouchableOpacity>
    ),
    headerLeft: <BackButton pressed={() => navigation.goBack()} blue />,
    headerStyle: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 13,
    },
  });

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  }

  render() {
    return (
      <EditProfileForm
        registerSave={(saveFunc) => {
          this.props.navigation.setParams({ saveFunc });
        }}
      />
    );
  }
}
