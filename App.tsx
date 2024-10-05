import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import {Router} from './assets/route/Router';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Router />
    </SafeAreaView>
  );
}

export default App;
