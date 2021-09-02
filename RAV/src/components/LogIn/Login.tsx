import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

function LogInScreen({navigation}: any) {
  const onPressHandlerSignUp = () => {
    navigation.navigate('Screen_SignUp');
  };
  const onPressHandlerDashboard = () => {
    navigation.navigate('Dashboard');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>##Screen Login##</Text>
      <Pressable
        onPress={onPressHandlerSignUp}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to Screen SingUp</Text>
      </Pressable>
      <Pressable
        onPress={onPressHandlerDashboard}
        style={({pressed}) => ({backgroundColor: pressed ? 'pink' : 'gold'})}>
        <Text style={styles.text}>Go to Dashboardp</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default LogInScreen;
