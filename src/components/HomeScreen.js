import React, {useState} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateTask from './CreateTask';
import TasksList from './TasksList';
import {colors, getTheme} from '../styles/_themes';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const theme = getTheme();
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = newTask => {
    console.log(newTask);
    setTasks([...tasks, newTask]);
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
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
        }}>
        {() => <CreateTask onSubmit={handleCreateTask} />}
      </Tab.Screen>
      <Tab.Screen
        name="Tasks List"
        initialParams={{tasks: tasks}}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
        }}>
        {() => <TasksList tasks={tasks} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeScreen;
