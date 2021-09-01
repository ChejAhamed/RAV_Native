/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/components/SingUp/SignUp';
import LogInScreen from './src/components/LogIn/Login';
import DashboardScreen from './src/components/Dashboard/Dashboard';
import ProfileScreen from './src/components/Profile/Profile';
import StatisticsScreen from './src/components/Statistics/Statistics';
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   header: () => null
        // }}
      >
        <Stack.Screen
          name="Screen_SignUp"
          component={SignUpScreen}
          options={{
           header: () => null,
          }}
        />
        <Stack.Screen
          name="Screen_LogIn"
          component={LogInScreen}
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
