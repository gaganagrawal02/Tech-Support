import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install this package or replace it with another icon library.

export default function LocationSearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Ionicons name="location-sharp" size={24} color="orange" />
        <Text style={styles.locationText}>Delhi NCR</Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </View>
      <TextInput 
        style={styles.input} 
        placeholder="Select a device" 
        placeholderTextColor="#A9A9A9" 
      />
      <TouchableOpacity>
        <Ionicons name="search-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F0F0F0', 
    borderRadius: 25,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  locationText: {
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  }
});
