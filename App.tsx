/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import LoginPage from './src/components/LoginPage.js';
import {darkTheme, getTheme} from './src/styles/_themes.js';

function App(): JSX.Element {
  const theme = getTheme();

  return (
    <SafeAreaView style={{backgroundColor: theme.backgroundColor, flex: 1}}>
      <StatusBar
        barStyle={theme ? 'light-content' : 'dark-content'}
        backgroundColor={darkTheme.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{margin: 20}}>
          <LoginPage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
