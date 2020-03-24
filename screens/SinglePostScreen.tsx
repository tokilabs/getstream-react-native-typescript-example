// @flow
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import { SinglePost, CommentBox, BackButton, Activity, LikeButton, ReactionIcon, CommentList, LikeList } from 'expo-activity-feed';

import type { UserResponse } from '../types';

import ReplyIcon from '../images/icons/reply.png';

import { StackNavScreenProps } from '../navigation/stacks';

type Props = StackNavScreenProps<'SinglePost'> & {};

export default class SinglePostScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => ({
    title: 'POST DETAIL',
    headerLeft: (
      <View style={{ paddingLeft: 15 }}>
        <BackButton pressed={() => navigation.goBack()} blue />
      </View>
    ),
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 13,
    },
  });

  render() {
    const { navigation, route } = this.props;
    const activity = route.params?.activity;
    const feedGroup = route.params?.feedGroup;
    const userId = route.params?.userId;
    return (
      <SafeAreaView style={styles.container}>
        <SinglePost
          activity={activity}
          feedGroup={feedGroup}
          userId={userId}
          navigation={this.props.navigation}
          Activity={(props) => (
            <React.Fragment>
              <Activity
                {...props}
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
              <CommentList activityId={props.activity} />

              <View style={styles.sectionHeader} />
              <View style={styles.likesContainer}>
                <LikeList activityId={props.activity} reactions={props.activity.latest_reactions} reactionKind="heart" />
              </View>
            </React.Fragment>
          )}
          Footer={(props) => {
            return (
              <CommentBox
                onSubmit={(text) =>
                  props.onAddReaction('comment', activity, {
                    data: { text: text },
                  })
                }
                avatarProps={{
                  source: (userData: UserResponse) => userData.data.profileImage,
                }}
                styles={{ container: { height: 78 } }}
              />
            );
          }}
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
  sectionHeader: {},
  likesContainer: {},
});
