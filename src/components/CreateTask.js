import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as yup from 'yup';
import {Formik} from 'formik';
import {FormStyle, GlobalStyles} from '../styles/styles';
import {colors, getTheme} from '../styles/_themes';

const addTaskSchema = yup.object().shape({
  taskName: yup
    .string()
    .max(100, 'Task Name must be max 100 characters long')
    .required('Task Name is required'),
  taskDescription: yup
    .string()
    .max(300, 'Task Description must be max 300 characters long'),
});

const CreateTask = ({onSubmit}) => {
  const theme = getTheme();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [taskDuration, setTaskDuration] = useState(new Date());

  const handleStartTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime;
    showTimepicker(false);
    setStartTime(currentTime);
    setFieldValue('startTime', currentTime.toLocaleTimeString());
  };

  const handleEndTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime;
    showTimepicker(false);
    setEndTime(currentTime);
    setFieldValue('endTime', currentTime.toLocaleTimeString());
  };

  const showTimepicker = status => {
    setShowStartTimePicker(status);
    setShowEndTimePicker(status);
    setShowStartTimePicker(Platform.OS === 'ios' ? !status : status);
    setShowEndTimePicker(Platform.OS === 'ios' ? !status : status);
  };

  const calcDuration = (startDate, endDate) => {
    const timeDifference = endDate - startDate;
    const totalSeconds = Math.floor(timeDifference / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
    return formattedDuration;
  };

  return (
    <View
      style={[
        GlobalStyles.defaultView,
        {backgroundColor: theme.backgroundColor},
      ]}>
      <Formik
        initialValues={{
          taskName: '',
          taskDescription: '',
          startTime: new Date(),
          endTime: new Date(),
          taskDuration: '',
        }}
        validationSchema={addTaskSchema}
        onSubmit={(values, {resetForm}) => {
          const duration = calcDuration(startTime, endTime);
          setTaskDuration(duration);
          onSubmit({...values, taskDuration: duration});

          resetForm(
            {
              values: {
                taskName: '',
                taskDescription: '',
                taskDuration: '',
                startTime: new Date().toISOString(),
                endTime: new Date().toISOString(),
              },
            },
            setStartTime(new Date()),
            setEndTime(new Date()),
          );
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          resetForm,
          touched,
          errors,
          isValid,
          values,
        }) => (
          <View>
            <TextInput
              style={FormStyle.defaultInput}
              onChangeText={handleChange('taskName')}
              onBlur={handleBlur('taskName')}
              value={values.taskName}
              placeholder="Task Name"
            />

            {touched.taskName && errors.taskName && (
              <Text style={FormStyle.error}>{errors.taskName}</Text>
            )}

            <TextInput
              style={[FormStyle.defaultInput, {marginTop: 10}]}
              onChangeText={handleChange('taskDescription')}
              onBlur={handleBlur('taskDescription')}
              value={values.taskDescription}
              placeholder="Task Description"
            />
            {touched.taskDescription && errors.taskDescription && (
              <Text style={FormStyle.error}>{errors.taskDescription}</Text>
            )}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Pressable
                onPress={() => {
                  setShowStartTimePicker(true);
                  setShowEndTimePicker(false);
                }}
                style={[
                  FormStyle.defaultBtn,
                  {
                    width: '50%',
                    marginRight: 10,
                    backgroundColor: theme ? colors.primary : colors.secondary,
                  },
                ]}>
                <Text style={{color: theme ? colors.white : colors.primary}}>
                  Select Start Time!
                </Text>
              </Pressable>

              {startTime ? (
                <Text>
                  Selected:{' '}
                  {startTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  })}
                </Text>
              ) : (
                ''
              )}

              {showStartTimePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={startTime}
                  mode="time"
                  is24Hour={true}
                  onChange={handleStartTimeChange}
                />
              )}
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Pressable
                onPress={() => {
                  setShowEndTimePicker(true);
                  setShowStartTimePicker(false);
                }}
                style={[
                  FormStyle.defaultBtn,
                  {
                    width: '50%',
                    marginRight: 10,
                    backgroundColor: theme ? colors.primary : colors.secondary,
                  },
                ]}>
                <Text style={{color: theme ? colors.white : colors.primary}}>
                  Select End Time!
                </Text>
              </Pressable>

              {endTime ? (
                <Text>
                  Selected:{' '}
                  {endTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  })}
                </Text>
              ) : (
                ''
              )}

              {showEndTimePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={endTime}
                  mode="time"
                  is24Hour={true}
                  onChange={handleEndTimeChange}
                />
              )}
            </View>

            <Pressable
              onPress={handleSubmit}
              disabled={!isValid}
              style={[
                FormStyle.defaultBtn,
                {
                  marginTop: 10,
                  backgroundColor: isValid ? colors.secondary : colors.grey,
                },
              ]}>
              <Text style={{color: isValid ? colors.white : colors.primary}}>
                Create Task
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateTask;
