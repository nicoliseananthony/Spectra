import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

// Sample notifications data with additional notifications
const notificationsData = [
  { id: '1', title: 'New Episode of "Wednesday"', image: require('../../assets/icons/s1.jpg') },
  { id: '2', title: 'Premiere of "Godzilla"', image: require('../../assets/icons/s2.jpg') },
  { id: '3', title: 'New Season of "The Diddler"', image: require('../../assets/icons/s3.jpg') },
  { id: '4', title: 'Behind the Scenes of "The Crown"', image: require('../../assets/icons/s4.jpg') },
  { id: '5', title: 'New Movie Release: "Watchmen"', image: require('../../assets/icons/s5.jpg') },
  { id: '6', title: 'Exclusive Interview with "Warcraft" Cast', image: require('../../assets/icons/s6.jpg') },
];

const NotificationsScreen = () => {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={item.image} style={styles.notificationImage} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Notifications Section */}
      <Text style={styles.sectionTitle}>Upcoming Notifications</Text>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C', // Dark background color
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for section title
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    paddingLeft: 10,
    paddingBottom: 20,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2C', // Background for notifications
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // For Android shadow
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  notificationTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for notification title
  },
});

export default NotificationsScreen;
