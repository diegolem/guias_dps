import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DarkTheme, Provider } from 'react-native-paper';
import BottomNavigator from './src/components/BottomNavigator';

export default function App() {
  return (
    <Provider theme={DarkTheme}>
      <NavigationContainer>
        <BottomNavigator></BottomNavigator>
      </NavigationContainer>
    </Provider>
  );
}
