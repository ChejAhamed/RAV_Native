import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

function DashboardScreen({navigation}: any) {
  const onPressHandler = () => {
    navigation.navigate('Screen_LogIn');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to LogIn Screen</Text>
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
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default DashboardScreen;
