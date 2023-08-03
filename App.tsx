/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './src/components/LoginPage.js';
import HomeScreen from './src/components/HomeScreen.js';
import {darkTheme, getTheme} from './src/styles/_themes.js';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const theme = getTheme();

  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: theme.backgroundColor, flex: 1}}>
        <StatusBar
          barStyle={theme ? 'light-content' : 'dark-content'}
          backgroundColor={darkTheme.backgroundColor}
        />
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: props => (
                <Text
                  style={{
                    color: theme.textColor,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Timer
                </Text>
              ),
              headerStyle: {
                backgroundColor: theme.backgroundColor,
              },
              headerTintColor: theme.textColor,
              headerLeft: () => null,
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
