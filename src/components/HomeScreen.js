import React, {useState} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import CreateTask from './CreateTask';
import TasksList from './TasksList';
import {colors, getTheme} from '../styles/_themes';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const theme = getTheme();
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  const handleCreateTask = newTask => {
    const updatedTask = {...newTask, id: new Date().getTime()}; // Assign a unique id
    setTasks([...tasks, updatedTask]);
    navigation.navigate('Tasks List');
  };

  const handleDeleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: theme.backgroundColor,
          borderTopWidth: 0.7,
          borderTopColor: colors.grey,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabBarIcon: () => null,
        tabBarLabel: ({focused}) => {
          const defaultTabStyle = {
            textAlign: 'center',
            width: '100%',
            height: '100%',
            paddingTop: 10,
            paddingBottom: 10,
            color: theme.textColor,
          };
          const activeTabStyle = focused
            ? {
                borderTopWidth: 1.5,
                borderTopColor: colors.secondary,
                color: colors.secondary,
              }
            : {};

          return (
            <Text style={[defaultTabStyle, activeTabStyle]}>{route.name}</Text>
          );
        },
      })}>
      <Tab.Screen
        name="Add Task"
        options={{
          headerTitle: props => (
            <Text
              style={{
                color: theme.textColor,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Add new task
            </Text>
          ),
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTintColor: theme.textColor,
        }}>
        {() => <CreateTask onSubmit={handleCreateTask} />}
      </Tab.Screen>
      <Tab.Screen
        name="Tasks List"
        initialParams={{taskIds: tasks.map((task, index) => index)}}
        options={{
          headerTitle: props => (
            <Text
              style={{
                color: theme.textColor,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              List of your tasks
            </Text>
          ),
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTintColor: theme.textColor,
        }}>
        {() => <TasksList tasks={tasks} onDeleteTask={handleDeleteTask} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeScreen;
