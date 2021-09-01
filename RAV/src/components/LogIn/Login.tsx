import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

function LogInScreen({navigation}: any) {
  const onPressHandler = () => {
    navigation.navigate('Screen_SignUp');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen Login</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to Screen SingUp</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default LogInScreen;
