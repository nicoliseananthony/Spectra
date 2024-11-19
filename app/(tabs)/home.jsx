import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const moviesData = [
  { id: '1', image: require('../../assets/icons/m1.jpg') },
  { id: '2', image: require('../../assets/icons/m2.jpg') },
  { id: '3', image: require('../../assets/icons/m3.jpg') },
  { id: '4', image: require('../../assets/icons/m4.jpg') },
  { id: '5', image: require('../../assets/icons/m5.jpg') },
  { id: '6', image: require('../../assets/icons/m6.jpg') },
  { id: '7', image: require('../../assets/icons/m7.jpg') },
];

const hotData = [
  { id: '1', image: require('../../assets/icons/h1.jpg') },
  { id: '2', image: require('../../assets/icons/h2.jpg') },
  { id: '3', image: require('../../assets/icons/h3.jpg') },
  { id: '4', image: require('../../assets/icons/h4.jpg') },
  { id: '5', image: require('../../assets/icons/h5.jpg') },
  { id: '6', image: require('../../assets/icons/h6.jpg') },
];

const tvShowsData = [
  { id: '1', image: require('../../assets/icons/s1.jpg') },
  { id: '2', image: require('../../assets/icons/s2.jpg') },
  { id: '3', image: require('../../assets/icons/s3.jpg') },
  { id: '4', image: require('../../assets/icons/s4.jpg') },
  { id: '5', image: require('../../assets/icons/s5.jpg') },
  { id: '6', image: require('../../assets/icons/s6.jpg') },
];

const HomeScreen = () => {
  const router = useRouter();

  const renderMoviesSection = ({ item }) => (
    <TouchableOpacity style={styles.movieContainer}>
      <Image source={item.image} style={styles.movieImage} />
    </TouchableOpacity>
  );

  const renderScrollableSection = (title, data) => (
    <View style={styles.scrollableSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMoviesSection}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/icons/logos.png')} style={styles.logo} />
        <Text style={styles.welcomeMessage}>Welcome to Spectra, Sean Anthony</Text>
      </View>

      {/* Scrollable Sections */}
      {renderScrollableSection('Discover', moviesData)}
      {renderScrollableSection('Hot', hotData)}
      {renderScrollableSection('TV Shows', tvShowsData)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C', // Dark background color
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#007BB5', // Nav bar color
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  logo: {
    width: 70, // Smaller logo size
    height: 70,
    marginRight: 10,
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for the welcome message
    textAlign: 'left',
  },
  scrollableSection: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // White for section titles
    marginLeft: 10,
    marginBottom: 5,
  },
  scrollContainer: {
    paddingLeft: 10,
  },
  movieContainer: {
    marginRight: 10,
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
});

export default HomeScreen;
