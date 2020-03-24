# React Native Activity Feed Example

A mobile application built using React Native, [Stream.io](https://getstream.io/) and [react-native-activity-feed](https://github.com/GetStream/react-native-activity-feed)

![screenshots of example app](/images/screenshots@2x.png)

## Changes from the original example

- **Typescript version:** `3.8.3`

- Removed `react-native-scripts` in favor of `expo` commands

- Added support for web platform (run `yarn web`)

### Package Upgrades

#### Dependencies

| Package           | Old Version | New Version |
| ----------------- | ----------- | ----------- |
| expo              | 33.0.0      | ~36.0.0     |
| React             | 16.8.3      | ~16.13.1    |
| React Native      | 0.59.8      | 0.61.4      |
| React Navigation  | 2.3.1       | ^5.1.2      |
| getstream         | 4.2.2       | 4.4.0       |
| babel-preset-expo | ^5.1.1      | ~8.0.0      |
| eslint            | ^5.1.0      | ^6.8.0      |

### New Packages

- @react-native-community/**async-storage**: `^1.8.1`
- @react-native-community/**masked-view**: `0.1.5`
- expo-linear-gradient: `~8.0.0`
- react-native-reanimated: `~1.4.0`
- react-native-safe-area-context: `^0.7.3`
- react-native-screens: `2.0.0-alpha.12`
- react-dom: `~16.13.1`
- react-native-activity-feed: `^0.8.22`
- react-native-gesture-handler: `~1.5.0`
- react-native-web: `0.11.7`

## Features

- Flat feed
- Notification feed
- Activity detail screen
- Profile screen
- Profile update screen
- Likes & Comments
- Status update with hashtags, mentions, URL enrichment and image upload

## Requirements

- NodeJS
- Expo

## Setup instructions

### 1. Install dependencies

```
git clone https://github.com/GetStream/react-native-example
cd react-native-example
npm install
```

### 2. Setup up your app

Get your Stream API credentials from the [user dashboard](https://getstream.io/dashboard/) and make sure your application has these feed groups:

- user (type Flat)
- timeline (type Flat)
- notification (type Notification)

If you followed the [React Native tutorial](https://getstream.io/react-native-activity-feed/tutorial/), you already have a pre-configured app on your account that you can use for this project.

```
cp .env.example .env
```

Open the `.env` file in your favorite editor. And fill in the credentials.

### 3. Get your userToken

```
npm run init-data
```

Copy the line this script outputs and put it in your `.env` file.

### 4. Setup the demo data

Now we need to run the previous command again and this time it will preload your app with the sample data.

```
npm run init-data
```

### 5. Start your app

```
npm start
```

Follow the instructions from the terminal to preview the app on your phone or using an emulator.
