import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Scene,
  Actions as NavigationActions
} from 'react-native-router-flux';

export const ScenesCreator = (navigationDrawer, appScenes) => NavigationActions.create(
  <Scene key="root">
    <Scene key='drawer' component={navigationDrawer}>
      <Scene
        key='drawerChildrenWrapper'
        navigationBarStyle={styles.navBar}
        titleStyle={styles.title}
        leftButtonStyle={styles.leftButton}
        rightButtonTextStyle={styles.rightButton}
      >
        {appScenes}
      </Scene>
    </Scene>
  </Scene>
);

const styles = {
  navBar: {
    backgroundColor: '#1A8CFF',
    height: 54,
  },
  title: {
    color: 'white',
    marginTop: 0,
    paddingTop: 0,
    bottom: 10
  },
  leftButton: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    top: 10
  },
  rightButton: {
    marginTop: 0,
    paddingTop: 0
  }
};

export default ScenesCreator