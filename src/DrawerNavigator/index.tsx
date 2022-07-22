import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Services from '../Screens/Services';

export const screens = [
  {
    component: Home,
    name: 'Home',
  },
  {
    component: Services,
    name: 'Services',
  },
];

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {screens.map((screen, i) => {
        return (
          <Drawer.Screen
            key={i}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
