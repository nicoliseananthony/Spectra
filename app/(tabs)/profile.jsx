import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

const Profile = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter(); // Initialize router

  // Account name
  const accountName = "Nicoli Sean Anthony Conahap";

  // Sample user information
  const userInfo = [
    { label: "Email", value: "nicoli@gmail.com" },
    { label: "Gender", value: "Male" },
    { label: "Date of Birth", value: "January 1, 2000" },
    { label: "Date Joined", value: "June 1, 2024" },
    { label: "VIP Status", value: "VIP V" },
  ];

  // Sample preferred movies genres
  const preferredMovies = ["Horror", "Comedy", "Action", "Drama", "Sci-Fi"];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.hamburgerButton} onPress={() => setMenuVisible(!menuVisible)}>
        <Text style={styles.hamburgerIcon}>☰</Text>
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => { setMenuVisible(false); router.push('/settings'); }}>
            <Text style={styles.menuItem}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setMenuVisible(false); router.push('/index'); }}>
            <Text style={styles.menuItem}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setMenuVisible(false); router.push('/vip'); }}>
            <Text style={styles.menuItem}>Check VIP Status</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/icons/man.png')} style={styles.profileImage} />
          <Text style={styles.accountName}>{accountName}</Text>
        </View>

        {/* User Information Table */}
        <View style={styles.infoTable}>
          {userInfo.map((info, index) => (
            <View key={index} style={styles.infoRow}>
              <Text style={styles.infoLabel}>{info.label}:</Text>
              <Text style={styles.infoValue}>{info.value}</Text>
            </View>
          ))}
        </View>

        {/* Preferred Movies Section */}
        <View style={styles.preferredMoviesContainer}>
          <Text style={styles.preferredMoviesTitle}>Preferred Movies</Text>
          <View style={styles.moviesList}>
            {preferredMovies.map((movie, index) => (
              <Text key={index} style={styles.movieItem}>{movie}</Text>
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.editButton} onPress={() => router.push('/EditProfile')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={() => router.push('/Index')}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    padding: 20,
    position: 'relative', // To position the menu correctly
  },
  hamburgerButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    padding: 10,
    zIndex: 10, // Ensure the button is above other elements
  },
  hamburgerIcon: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  menu: {
    position: 'absolute',
    top: 70,
    left: 20,
    backgroundColor: '#2C2C2C',
    padding: 15,
    borderRadius: 5,
    elevation: 5, // For Android shadow effect
    zIndex: 9, // Make sure menu is above other components
  },
  menuItem: {
    color: '#FFFFFF',
    paddingVertical: 5,
    fontSize: 16,
  },
  scrollView: {
    marginTop: 60, // Make room for the hamburger button
  },
  header: {
    width: '100%',
    backgroundColor: '#007BB5',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular profile image
    marginBottom: 10,
  },
  accountName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  infoTable: {
    width: '100%',
    backgroundColor: '#2C2C2C',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#4A4A4A',
  },
  infoLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  infoValue: {
    color: '#FFFFFF',
  },
  preferredMoviesContainer: {
    marginBottom: 20,
  },
  preferredMoviesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  moviesList: {
    backgroundColor: '#2C2C2C',
    borderRadius: 5,
    padding: 10,
  },
  movieItem: {
    color: '#FFFFFF',
    marginVertical: 2,
  },
  editButton: {
    backgroundColor: '#8A2BE2', // Blue Violet button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    shadowColor: '#000', // Adding shadow for a cool effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow effect
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: '#FF3B30', // Logout button color
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profile;
