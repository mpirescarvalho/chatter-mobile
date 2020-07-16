import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar backgroundColor="#fff" style="dark" />
    </>
  );
}
