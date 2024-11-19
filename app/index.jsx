// index.jsx

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Importing the router
import CustomButton from './components/custombutton'; // Importing CustomButton

// Directory for the logo
const LOGO = require('../assets/icons/logos.png');

const IndexScreen = () => {
  const router = useRouter(); // Initializing the router

  const handleStartWatching = () => {
    // Redirect to the login page
    router.push('auth/login'); 
  };

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image source={LOGO} style={styles.logo} />

      {/* App name below the logo */}
      <Text style={styles.appName}>Spectra</Text>

      {/* Tagline for the app */}
      <Text style={styles.tagline}>Explore the Spectrum of Entertainment</Text>

      {/* Start Watching button using the CustomButton component */}
      <CustomButton title="Start Watching Now" onPress={handleStartWatching} />
    </View>
  );
};

export default IndexScreen;

// Styling for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Slightly lighter dark background for better contrast
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    tintColor: '#8A2BE2', // Change logo color to Blue Violet for contrast
  },
  appName: {
    color: '#FFFFFF', // White color for the app name
    fontSize: 48, // Increased font size for better visibility
    fontWeight: 'bold',
    marginBottom: 10,
    textShadowColor: '#8A2BE2', // Adding a shadow effect
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5, // Blur radius for shadow effect
  },
  tagline: {
    color: '#87CEFA', // Light Blue text for the tagline
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 50,
  },
});
