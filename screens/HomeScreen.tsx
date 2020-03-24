import React from 'react';
import { StatusBar, Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar, FlatFeed, Activity, LikeButton, ReactionIcon } from 'react-native-activity-feed';

import type { UserResponse, ActivityData } from '../types';
import { StackNavScreenProps } from '../navigation/stacks';

import PostIcon from '../images/icons/post.png';
import ReplyIcon from '../images/icons/reply.png';

type Props = StackNavScreenProps<'Home'> & {};

class HomeScreen extends React.Component<Props> {
  _navListener: any;

  static navigationOptions = ({ navigation }: Props) => ({
    title: 'HOME',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 13,
    },
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ paddingLeft: 15 }}>
        <Avatar source={(userData: UserResponse) => userData.data.profileImage} size={23} noShadow />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('NewPost')} style={{ paddingRight: 15 }}>
        <Image source={PostIcon} style={{ width: 23, height: 23 }} />
      </TouchableOpacity>
    ),
  });

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  }

  _onPressActivity = (activity: ActivityData) => {
    this.props.navigation.navigate('SinglePost', {
      activity: activity,
    });
  };

  render() {
    let counter = 1;

    return (
      <SafeAreaView style={styles.container}>
        <FlatFeed
          feedGroup="timeline"
          options={{
            limit: 10,
          }}
          notify
          navigation={this.props.navigation}
          key={counter++}
          Activity={(props) => (
            <TouchableOpacity key={counter++} onPress={() => this._onPressActivity(props.activity)}>
              <Activity
                {...props}
                key={counter++ * 37}
                Footer={
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <LikeButton {...props} />

                    <ReactionIcon
                      icon={ReplyIcon}
                      labelSingle="comment"
                      labelPlural="comments"
                      counts={props.activity.reaction_counts}
                      kind="comment"
                    />
                  </View>
                }
              />
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default HomeScreen;
