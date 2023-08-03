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

  const handleStartTimeChange = selectedTime => {
    setShowEndTimePicker(Platform.OS === 'ios' ? true : false);
    setShowStartTimePicker(Platform.OS === 'ios' ? true : false);
    if (selectedTime) {
      setFieldValue('startTime', selectedTime.toLocaleTimeString());
      setStartTime(selectedTime);
    }
    setShowStartTimePicker(false);
    setShowEndTimePicker(false);
  };

  const handleEndTimeChange = selectedTime => {
    setShowStartTimePicker(Platform.OS === 'ios' ? true : false);
    setShowEndTimePicker(Platform.OS === 'ios' ? true : false);
    if (selectedTime) {
      setFieldValue('endTime', selectedTime.toLocaleTimeString());
      setEndTime(selectedTime);
    }
    setShowStartTimePicker(false);
    setShowEndTimePicker(false);
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
        }}
        validationSchema={addTaskSchema}
        onSubmit={onSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
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
                  Select Start Time
                </Text>
              </Pressable>
              {/* <Text>{values.startTime.toLocaleTimeString()}</Text> */}
              <Text>{startTime.toLocaleTimeString()}</Text>
            </View>
            {showStartTimePicker && (
              <DateTimePicker
                value={values.startTime}
                mode="time"
                onChange={handleStartTimeChange}
              />
            )}

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
                  Select End Time
                </Text>
              </Pressable>
              {/* <Text>{values.endTime.toLocaleTimeString()}</Text> */}
              <Text>{endTime.toLocaleTimeString()}</Text>
            </View>
            {showEndTimePicker && (
              <DateTimePicker
                value={values.endTime}
                mode="time"
                onChange={handleEndTimeChange}
              />
            )}

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
