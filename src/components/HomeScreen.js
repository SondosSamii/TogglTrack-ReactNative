import React from 'react';
import {ScrollView, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateTask from './CreateTask';
import TasksList from './TasksList';
import {colors, getTheme} from '../styles/_themes';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const theme = getTheme();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{backgroundColor: theme.backgroundColor, flex: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: theme.backgroundColor,
            borderTopWidth: 0,
            borderBottomWidth: 0.7,
            borderBottomColor: colors.grey,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          tabBarIcon: () => null,
          tabBarLabel: ({focused}) => {
            const activeTabStyle = focused
              ? {
                  borderBottomWidth: 1.5,
                  borderBottomColor: colors.secondary,
                  textAlign: 'center',
                  width: '100%',
                }
              : {};

            return (
              <Text
                style={[
                  activeTabStyle,
                  {paddingBottom: 10, color: theme.textColor},
                ]}>
                {route.name}
              </Text>
            );
          },
        })}>
        <Tab.Screen name="Tasks List" component={TasksList} />
        <Tab.Screen name="Add Task" component={CreateTask} />
      </Tab.Navigator>
    </ScrollView>
  );
};

export default HomeScreen;
