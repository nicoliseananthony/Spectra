import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// Define the FormField component
const FormField = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

// Styles for the FormField
const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderColor: '#8A2BE2', // Blue Violet border color
    borderWidth: 1,
    borderRadius: 10, // Reduced border radius for input fields
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF', // White background for input fields
  },
});

// Export FormField as default
export default FormField;
