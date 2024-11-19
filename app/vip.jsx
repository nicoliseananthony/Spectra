import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const VIP = () => {
  // Sample data for VIP levels
  const currentVIPLevel = "VIP V"; // Current VIP level
  const nextVIPLevel = "VIP VI"; // Next VIP level
  const moviesWatched = 50; // Movies watched by the user
  const moviesRequiredForNextLevel = 100; // Movies required for the next VIP level

  // Calculate the progress
  const progress = moviesWatched / moviesRequiredForNextLevel;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>VIP Status</Text>
        </View>

        <View style={styles.vipStatusContainer}>
          <Text style={styles.currentLevel}>Current Level: {currentVIPLevel}</Text>
          <Text style={styles.nextLevel}>Next Level: {nextVIPLevel}</Text>
          <Text style={styles.moviesWatched}>Movies Watched: {moviesWatched} / {moviesRequiredForNextLevel}</Text>
          
          {/* Custom Progress Bar */}
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>{Math.round(progress * 100)}% to {nextVIPLevel}</Text>
        </View>

        {/* Action Button to View More Movies */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View More Movies</Text>
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
  vipStatusContainer: {
    backgroundColor: '#2C2C2C',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  currentLevel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  nextLevel: {
    fontSize: 18,
    color: '#FFFFFF',
    marginVertical: 10,
  },
  moviesWatched: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  progressBarContainer: {
    height: 20,
    width: '100%',
    backgroundColor: '#4A4A4A',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007BB5',
  },
  progressText: {
    color: '#FFFFFF',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#8A2BE2', // Blue Violet button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    shadowColor: '#000', // Adding shadow for a cool effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow effect
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default VIP;
