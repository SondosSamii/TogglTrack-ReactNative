import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {FormStyle, GlobalStyles} from '../styles/styles';
import {colors} from '../styles/_themes';

const TaskListItem = ({task, taskId, onDeleteTask}) => {
  const handleDeleteTask = () => {
    onDeleteTask(taskId);
  };

  return (
    <View
      style={{
        borderColor: colors.grey,
        borderWidth: 1,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 20,
      }}>
      <Text style={[GlobalStyles.defaultText, {paddingHorizontal: 10}]}>
        Task Name: {task.taskName}
      </Text>
      {task.taskDescription ? (
        <Text style={[GlobalStyles.defaultText, {paddingHorizontal: 10}]}>
          Task Description: {task.taskDescription}
        </Text>
      ) : (
        ''
      )}
      <Text style={[GlobalStyles.defaultText, {paddingHorizontal: 10}]}>
        Task Duration: {task.taskDuration}
      </Text>
      {/* <Pressable onPress={onDeleteTask(task.id)} style={FormStyle.deleteBtn}> */}
      <Pressable onPress={handleDeleteTask} style={FormStyle.deleteBtn}>
        <Text style={{color: colors.secondary}}>Delete this task</Text>
      </Pressable>
    </View>
  );
};

export default TaskListItem;
