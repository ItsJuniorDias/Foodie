import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

export function AppRoutes() {
  return (
    <Navigator
     initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="Login"
        component={LoginScreen}
      />
      
      <Screen 
        name="Home"
        component={HomeScreen}
      />
    </Navigator>
  )
}