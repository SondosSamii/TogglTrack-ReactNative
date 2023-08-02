import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>toggle track</Text>
        <Text>Welcome back!</Text>
        <Text>Log in to your account and start tracking again.</Text>
        <Text>Don't have an account? </Text>
      </View>
      <LoginForm />
    </SafeAreaView>
  );
};

export default LoginPage;
