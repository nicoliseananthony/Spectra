// LoginScreen.jsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import FormField from '../components/formfield'; // Importing FormField

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a successful login
    if (email && password) {
      Alert.alert(
        'Success',
        'You are now logged in!',
        [
          {
            text: 'OK',
            onPress: () => {
              // Redirect to home screen after closing the popup
              router.push('/home');
            }
          }
        ]
      );
    } else {
      Alert.alert('Error', 'Please enter your email and password.');
    }
  };

  const handleGoogleSignIn = () => {
    // Simulate a successful Google sign-in
    Alert.alert(
      'Success',
      'You are now logged in with Google!',
      [
        {
          text: 'OK',
          onPress: () => {
            // Redirect to home screen after closing the popup
            router.push('/home');
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/logos.png')} style={styles.logo} />
      <Text style={styles.title}>Login to Spectra</Text>

      {/* Using FormField component for email and password */}
      <FormField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <FormField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin} // Call the handleLogin function
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.googleButton} 
        onPress={handleGoogleSignIn}
      >
        <Image source={require('../../assets/icons/google.png')} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.createAccountContainer} 
        onPress={() => router.push('/signup')}
      >
        <Text style={styles.createAccountText}>Don't have an account? Create one</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B2B', // Dark background for consistency
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    tintColor: '#8A2BE2', // Change logo color to Blue Violet for contrast
  },
  title: {
    fontSize: 32, // Increased font size for title
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for the title
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8A2BE2', // Blue Violet button
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10, // Reduced border radius for button
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10, // Reduced border radius for Google button
    borderColor: '#8A2BE2', // Blue Violet border color
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#4B3D3D', // Dark Brown text color
    fontSize: 16,
  },
  createAccountContainer: {
    marginTop: 20,
  },
  createAccountText: {
    color: '#FFFFFF', // White text color
    fontSize: 14,
  },
});

export default LoginScreen;
