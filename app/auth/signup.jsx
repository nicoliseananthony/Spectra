import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const SignupScreen = () => {
  const router = useRouter();

  const handleGoogleSignUp = () => {
    // Simulate a successful Google sign-up
    Alert.alert(
      'Success',
      'You have successfully registered with Google!',
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
      <Text style={styles.title}>Create an Account</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry
      />
      <TextInput 
        style={styles.input} 
        placeholder="Confirm Password" 
        secureTextEntry
      />
      
      <View style={styles.phoneContainer}>
        <TextInput 
          style={styles.prefixInput} 
          placeholder="+63" 
          editable={false} // Make prefix non-editable
        />
        <TextInput 
          style={styles.phoneInput} 
          placeholder="Phone Number" 
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => console.log('Sign Up pressed')} // Replace with actual sign-up logic
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.googleButton} 
        onPress={handleGoogleSignUp}
      >
        <Image source={require('../../assets/icons/google.png')} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Register through Google</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.loginContainer} 
        onPress={() => router.push('/login')}
      >
        <Text style={styles.loginText}>Already have an account? Log in</Text>
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
    borderWidth: 2, // Add outline
    borderColor: '#4B3D3D', // Dark Brown color for outline
    borderRadius: 75, // Make the outline circular
    padding: 5, // Space between logo and outline
    tintColor: '#8A2BE2', // Change logo color to Blue Violet for contrast
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text color
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#8A2BE2', // Blue Violet border color
    borderWidth: 1,
    borderRadius: 10, // Reduced border radius for input fields
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  phoneContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15,
  },
  prefixInput: {
    width: '20%', // Fixed width for prefix input
    height: 50,
    borderColor: '#8A2BE2',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    marginRight: 10,
    textAlign: 'center',
  },
  phoneInput: {
    width: '80%', // Remaining space for phone number input
    height: 50,
    borderColor: '#8A2BE2',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor:  'white',
    width: '78%',
  },
  button: {
    backgroundColor: '#8A2BE2', // Warm Orange primary color
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
    color: '#FFF', // White text color
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
    fontWeight: 'bold',
  },
  loginContainer: {
    marginTop: 20,
  },
  loginText: {
    color: '#FFFFFF', // White text color
  },
});

export default SignupScreen;
