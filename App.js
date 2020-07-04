import React, { useEffect } from 'react';
import { View, YellowBox, AsyncStorage } from 'react-native';

import Routes from './src/routes';
import firebase from './src/services/firebase';


YellowBox.ignoreWarnings(['Setting a timer']);

export default function App() {

  return (
    <Routes />
  );
}

