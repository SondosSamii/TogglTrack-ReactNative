import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LoginForm from './LoginForm';
import {getTheme} from '../styles/_themes.js';
import {GlobalStyles, LoginPageStyle} from '../styles/styles';

const LoginPage = () => {
  const theme = getTheme();

  return (
    <SafeAreaView>
      <View>
        <Text style={[GlobalStyles.defaultText, LoginPageStyle.header]}>
          <Text style={LoginPageStyle.innerHeader}>toggle</Text> track
        </Text>
        <Text style={GlobalStyles.defaultText}>Welcome back!</Text>
        <Text style={GlobalStyles.defaultText}>
          Log in to your account and start tracking again.
        </Text>
        <View style={LoginPageStyle.signUpContainer}>
          <Text style={GlobalStyles.defaultText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => Linking.openURL('#')}>
            <Text style={[GlobalStyles.defaultText, LoginPageStyle.signUpBtn]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <LoginForm />
    </SafeAreaView>
  );
};

export default LoginPage;
