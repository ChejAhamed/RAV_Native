import React from 'react';
import {View, StyleSheet, Pressable, Image, Text} from 'react-native';

function SignUpScreen({navigation}: any) {
  const onPressHandler = () => {
    navigation.navigate('Screen_LogIn');
  };

  return (
    <View style={styles.body}>
      <Image
        source={{
          uri: 'https://seminariomadrid.org/wp-content/uploads/2016/03/js-logo.png',
        }}
        style={styles.image}
      />

      <Text style={styles.text}>**SignUp Screen**</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quibusdam optio molestiae pariatur deserunt quasi natus qui, rerum
        ducimus dolore eius vel libero perspiciatis asperiores, delectus ipsum
        architecto cum neque.
      </Text>
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
  image: {
    height: 200,
    width: 200,
  },
});

export default SignUpScreen;
