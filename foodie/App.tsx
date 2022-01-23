import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { 
  useFonts, 
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold  
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles/theme'

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold  
  });
  
  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}


