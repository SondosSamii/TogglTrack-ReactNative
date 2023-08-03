import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {getTheme} from '../styles/_themes';
import {GlobalStyles} from '../styles/styles';
import TaskListItem from './TaskListItem';

const TasksList = ({tasks}) => {
  const theme = getTheme();

  return (
    <View
      style={[
        GlobalStyles.defaultView,
        {backgroundColor: theme.backgroundColor},
      ]}>
      {tasks && tasks.length > 0 ? (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <TaskListItem task={item} />}
        />
      ) : (
        <Text style={GlobalStyles.defaultText}>
          Please add tasks to show here
        </Text>
      )}
    </View>
  );
};

export default TasksList;
