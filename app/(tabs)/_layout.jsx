import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

const TabIcon = ({ icon, focused, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.tabIconContainer}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: focused ? '#FFA500' : '#4B3D3D', // Warm Orange for focused, Dark Brown for unfocused
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const TabLayout = () => {
  return (
    <View style={styles.container}>
      <Tabs screenOptions={{ tabBarStyle: styles.tabBar }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/home.png')}
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="watch"
          options={{
            title: 'Watch',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/movie.png')}
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="notif"
          options={{
            title: 'Notifications',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/notif.png')}
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/profile.png')}
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B3D', // Dark background for consistency
  },
  tabBar: {
    backgroundColor: '#2B2B2B', // Dark background to match the app theme
    height: 70, // Height for better touch target
    borderTopWidth: 1,
    borderTopColor: '#4B3D3D', // Dark Brown for contrast
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
