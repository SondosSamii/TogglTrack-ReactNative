import {useColorScheme} from 'react-native';

export const colors = {
  primary: '#2c1338',
  secondary: '#e57cd8',
  white: '#FFF',
  black: '#000',
};

export const lightTheme = {
  backgroundColor: '#fff3f2',
  textColor: '#422a4c',
};

export const darkTheme = {
  backgroundColor: '#20092b',
  textColor: '#f7d8f3',
};

export function getTheme() {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('Theme Mode: ', useColorScheme());
  return isDarkMode ? darkTheme : lightTheme;
}
