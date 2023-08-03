import React from 'react';
import {View, Text} from 'react-native';
import {GlobalStyles} from '../styles/styles';
import {colors} from '../styles/_themes';

const TaskListItem = ({task}) => {
  return (
    <View
      style={{
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        paddingBottom: 10,
      }}>
      <Text style={GlobalStyles.defaultText}>Task Name: {task.taskName}</Text>
      {task.taskDescription ? (
        <Text style={GlobalStyles.defaultText}>
          Task Description: {task.taskDescription}
        </Text>
      ) : (
        ''
      )}
      <Text style={GlobalStyles.defaultText}>
        Task Start Time: {task.startTime.toLocaleTimeString()}
      </Text>
      <Text style={GlobalStyles.defaultText}>
        Task End Time: {task.endTime.toLocaleTimeString()}
      </Text>
    </View>
  );
};

export default TaskListItem;
