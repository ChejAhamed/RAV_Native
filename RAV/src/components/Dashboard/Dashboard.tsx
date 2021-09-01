import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

function DashboardScreen({navigation}: any) {
  const onPressHandlerLogIn = () => {
    navigation.navigate('Screen_LogIn');
  };
  const onPressHandlerProfile = () => {
    navigation.navigate('Profile');
  };
  const onPressHandlerStatistics = () => {
    navigation.navigate('Statistics');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title}>==Dashboard Screen==</Text>
      <Pressable
        onPress={onPressHandlerLogIn}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to LogIn Screen</Text>
      </Pressable>
      <Pressable
        onPress={onPressHandlerProfile}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Profile</Text>
      </Pressable>
      <Pressable
        onPress={onPressHandlerStatistics}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Statistics</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default DashboardScreen;
