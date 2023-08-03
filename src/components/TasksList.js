import React from 'react';
import {Text, View} from 'react-native';
import {getTheme} from '../styles/_themes';
import {GlobalStyles} from '../styles/styles';

const TasksList = () => {
  const theme = getTheme();

  return (
    <View
      style={[
        GlobalStyles.defaultView,
        {backgroundColor: theme.backgroundColor},
      ]}>
      <Text style={[GlobalStyles.defaultText, {color: theme.textColor}]}>
        Welcome to the Tasks List Component!
      </Text>
    </View>
  );
};

export default TasksList;
