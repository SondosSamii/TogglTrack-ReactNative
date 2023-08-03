import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LoginForm from './LoginForm';
import {colors, getTheme} from '../styles/_themes.js';
import {GlobalStyles, LoginPageStyle} from '../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

const LoginPage = () => {
  const theme = getTheme();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={{margin: 20}}>
      <SafeAreaView>
        <View>
          <View
            style={{
              backgroundColor: colors.secondary,
              borderRadius: 50,
              maxWidth: 38,
            }}>
            <FontAwesome6
              name="power-off"
              size={18}
              color={colors.white}
              padding={10}
            />
          </View>
          <Text style={[GlobalStyles.defaultText, LoginPageStyle.header]}>
            <Text style={LoginPageStyle.innerHeader}>toggle</Text> track
          </Text>
          <Text style={GlobalStyles.defaultText}>Welcome back!</Text>
          <Text style={GlobalStyles.defaultText}>
            Log in to your account and start tracking again.
          </Text>
          <View style={LoginPageStyle.signUpContainer}>
            <Text style={GlobalStyles.defaultText}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('#')}>
              <Text
                style={[GlobalStyles.defaultText, LoginPageStyle.signUpBtn]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <LoginForm />
      </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default LoginPage;
