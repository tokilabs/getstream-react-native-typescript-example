import React from 'react';
import { StatusBar, Image, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Notification from '../components/Notification';
import Follow from '../components/Notifications/Follow';
import { NotificationFeed } from 'expo-activity-feed';

import * as CategoriesIcon from '../images/icons/categories.png';
import PostIcon from '../images/icons/post.png';
import ReplyIcon from '../images/icons/reply.png';

import { Activity, LikeButton, ReactionIcon } from 'expo-activity-feed';

import { StackNavScreenProps } from '../navigation/stacks';

type Props = {
  navigation: StackNavScreenProps<'Notifications'>;
};

export default class NotificationScreen extends React.Component<Props> {
  _navListener: any;

  static navigationOptions = () => ({
    title: 'NOTIFICATIONS',
    headerLeft: (
      <View style={{ paddingLeft: 15 }}>
        <Image source={CategoriesIcon} style={{ width: 23, height: 23 }} />
      </View>
    ),
    headerRight: (
      <View style={{ paddingRight: 15 }}>
        <Image source={PostIcon} style={{ width: 23, height: 23 }} />
      </View>
    ),
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
  componentDidUpdate() {}

  _renderGroup = ({ activityGroup, styles, ...props }: any) => {
    let verb = activityGroup.activities[0].verb;
    if (verb === 'follow') {
      return <Follow activities={activityGroup.activities} styles={styles} />;
    } else if (verb === 'heart' || verb === 'repost') {
      return <Notification activities={activityGroup.activities} styles={styles} />;
    } else {
      let activity = activityGroup.activities[0];
      return (
        <Activity
          activity={activity}
          {...props}
          Footer={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <LikeButton activity={activity} {...props} />

              <ReactionIcon
                icon={ReplyIcon}
                labelSingle="comment"
                labelPlural="comments"
                counts={activityGroup.activities.reaction_counts}
                kind="comment"
              />
            </View>
          }
        />
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NotificationFeed Group={this._renderGroup} navigation={this.props.navigation} notify />
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
