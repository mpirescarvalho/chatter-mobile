import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_700Bold,
} from '@expo-google-fonts/roboto-mono';

import Routes from './routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Routes />
      <StatusBar backgroundColor="#fff" style="dark" />
    </>
  );
}
