import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Sample movie data
const moviesData = [
  { id: '1', image: require('../../assets/icons/m1.jpg') },
  { id: '2', image: require('../../assets/icons/m2.jpg') },
  { id: '3', image: require('../../assets/icons/m3.jpg') },
  { id: '4', image: require('../../assets/icons/m4.jpg') },
  { id: '5', image: require('../../assets/icons/m5.jpg') },
  { id: '6', image: require('../../assets/icons/m6.jpg') },
  { id: '7', image: require('../../assets/icons/m7.jpg') },
  { id: '8', image: require('../../assets/icons/s1.jpg') },
  { id: '9', image: require('../../assets/icons/s1.jpg') }, // Added more movies
];

const categoriesData = [
  { id: '1', name: 'Movies' },
  { id: '2', name: 'TV Shows' },
  { id: '3', name: 'Horror' },
  { id: '4', name: 'Comedy' },
  { id: '5', name: 'Drama' },
  { id: '6', name: 'Action' },
  { id: '7', name: 'Documentary' },
];

const WatchScreen = () => {
  const router = useRouter();

  const renderMoviesSection = ({ item }) => (
    <TouchableOpacity style={styles.movieContainer}>
      <Image source={item.image} style={styles.movieImage} />
    </TouchableOpacity>
  );

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryContainer}>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.dayText}>Sunday</Text>
        <Text style={styles.dateText}>October 14, 2024</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>12:30</Text>
          <Text style={styles.amPmText}>PM</Text>
        </View>
      </View>

      {/* Explore Categories Section */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categoriesData}
          keyExtractor={(item) => item.id}
          renderItem={renderCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        />
      </View>

      {/* Continue Watching Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Continue Watching</Text>
        <FlatList
          data={moviesData.slice(0, 5)} // Show more movies for "Continue Watching"
          keyExtractor={(item) => item.id}
          renderItem={renderMoviesSection}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        />
      </View>

      {/* Top Picks Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Top Picks</Text>
        <FlatList
          data={moviesData}
          keyExtractor={(item) => item.id}
          renderItem={renderMoviesSection}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        />
      </View>

      {/* Featured Movies Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.featuredTitle}>Featured Movies</Text>
        <FlatList
          data={moviesData}
          keyExtractor={(item) => item.id}
          renderItem={renderMoviesSection}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C', // Dark background color
    alignItems: 'center',
    paddingVertical: 20,
  },
  navBar: {
    width: '100%',
    backgroundColor: '#007BB5', // Nav bar color
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  dayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for day
  },
  dateText: {
    fontSize: 16,
    color: '#FFFFFF', // White color for date
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for time
  },
  amPmText: {
    fontSize: 20,
    color: '#FFFFFF', // White color for AM/PM
    marginLeft: 5,
    bottom: 15,
  },
  categoriesContainer: {
    width: '100%',
    marginVertical: 15,
  },
  categoryContainer: {
    marginRight: 15,
    backgroundColor: '#007BB5', // Category background color
    paddingVertical: 12, // Increased vertical padding for better touch area
    paddingHorizontal: 24, // Increased horizontal padding for a larger clickable area
    borderRadius: 25, // Slightly larger border radius for a softer look
    borderWidth: 1, // Added border for better visibility
    borderColor: '#FFFFFF', // White border for contrast
    shadowColor: '#000', // Adding shadow for a subtle elevation effect
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Slight opacity for the shadow
    shadowRadius: 4, // Blurring effect of the shadow
    elevation: 5, // Android elevation for shadow effect
},

  categoryText: {
    color: '#FFFFFF', // White color for category text
    fontWeight: 'bold',
  },
  sectionContainer: {
    width: '100%',
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for section title
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for featured title
    marginVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'left', // Align title to the left
  },
  scrollContainer: {
    paddingLeft: 10,
  },
  movieContainer: {
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
});

export default WatchScreen;
