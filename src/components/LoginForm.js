import React, {useState} from 'react';
import {
  Linking,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {colors, getTheme} from '../styles/_themes';
import {GlobalStyles, FormStyle} from '../styles/styles';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .test('email-validation', 'Invalid email format', function (value) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(value);
    })
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const theme = getTheme();

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={loginSchema}
      onSubmit={values => {
        console.log('Form submitted with values:', values);
        navigation.navigate('Home');
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <View>
          <TextInput
            style={FormStyle.defaultInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            keyboardType="email-address"
          />
          {touched.email && errors.email && (
            <Text style={FormStyle.error}>{errors.email}</Text>
          )}

          <View style={[FormStyle.defaultInput, FormStyle.passwordContainer]}>
            <TextInput
              style={FormStyle.passwordInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
            />
            <TouchableOpacity
              onPress={() =>
                setShowPassword(prevShowPassword => !prevShowPassword)
              }>
              <FontAwesome6
                name={showPassword ? 'eye-slash' : 'eye'}
                size={20}
                color={colors.secondary}
                padding={10}
              />
            </TouchableOpacity>
          </View>
          {touched.password && errors.password && (
            <Text style={FormStyle.error}>{errors.password}</Text>
          )}

          <View style={FormStyle.forgotPasswordContainer}>
            <Text style={[GlobalStyles.defaultText, {color: theme.textColor}]}>
              Forgot Password?
            </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://toggl.com/track/forgot-password/')
              }>
              <Text
                style={[
                  GlobalStyles.defaultText,
                  FormStyle.resetPassword,
                  {color: theme.textColor},
                ]}>
                Reset
              </Text>
            </TouchableOpacity>
          </View>

          <Pressable
            onPress={handleSubmit}
            disabled={!isValid}
            style={[
              FormStyle.defaultBtn,
              {backgroundColor: isValid ? colors.secondary : colors.grey},
            ]}>
            <Text style={{color: isValid ? colors.white : colors.primary}}>
              Login
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
