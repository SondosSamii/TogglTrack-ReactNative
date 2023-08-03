import {Platform, StyleSheet} from 'react-native';
import {colors} from './_themes';

export const GlobalStyles = StyleSheet.create({
  defaultView: {flex: 1, padding: 20},
  defaultText: {
    fontFamily: Platform.select({
      ios: 'System', // The default system font for iOS
      android: 'Roboto', // The default system font for Android
    }),
    fontSize: 16,
  },
});

export const LoginPageStyle = StyleSheet.create({
  header: {
    fontSize: 20,
    marginVertical: 15,
  },
  innerHeader: {
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  signUpBtn: {
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});

export const FormStyle = StyleSheet.create({
  defaultInput: {
    borderWidth: 2,
    borderColor: colors.grey,
    borderRadius: 15,
    padding: 10,
  },
  error: {
    color: 'red',
    marginVertical: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 0,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  passwordToggle: {
    padding: 10,
    textDecorationLine: 'underline',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  resetPassword: {
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  defaultBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 10,
  },
});
