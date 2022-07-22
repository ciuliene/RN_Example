/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/DrawerNavigator';
import 'react-native-gesture-handler';

const Root = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Root);
