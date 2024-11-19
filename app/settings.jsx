import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Settings = () => {
  const navigation = useNavigation(); // Initialize navigation

  // Sample settings options
  const settingsOptions = [
    { label: "Account", screen: "AccountSettings" },
    { label: "Notifications", screen: "NotificationSettings" },
    { label: "Privacy", screen: "PrivacySettings" },
    { label: "Language", screen: "LanguageSettings" },
    { label: "About", screen: "About" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        
        {/* Settings Buttons */}
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(option.screen)}
          >
            <Text style={styles.buttonText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    padding: 20,
  },
  scrollView: {
    marginTop: 10,
  },
  header: {
    backgroundColor: '#007BB5',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#2C2C2C',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000', // Adding shadow for a cool effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow effect
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Settings;
