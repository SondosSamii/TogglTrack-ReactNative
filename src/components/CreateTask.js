import React from 'react';
import {View, Text} from 'react-native';
import {getTheme} from '../styles/_themes';
import {GlobalStyles} from '../styles/styles';

const CreateTask = () => {
  const theme = getTheme();

  return (
    <View
      style={[
        GlobalStyles.defaultView,
        {backgroundColor: theme.backgroundColor},
      ]}>
      <Text style={[GlobalStyles.defaultText, {color: theme.textColor}]}>
        Welcome to Create Task Component!
      </Text>
    </View>
  );
};

export default CreateTask;
