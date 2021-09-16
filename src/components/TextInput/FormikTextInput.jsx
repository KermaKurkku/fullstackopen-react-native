import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from '../Text';

const styles = StyleSheet.create({
	
  errorText: {
    margin: 5,
    paddingLeft: 10,
    color: 'red',
  },
  errorField: {
    borderColor: 'red',
  }
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
				style={[style, showError && styles.errorField ]}
        {...props}
      />
      {showError && <Text style={styles.errorText} fontWeight='subheading'>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;