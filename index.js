/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/components/DrawerNavigator';
import 'react-native-gesture-handler';
import {AppProvider} from './src/appContext';

const Root = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
