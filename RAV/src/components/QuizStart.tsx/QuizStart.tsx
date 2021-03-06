import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

function QuizStartScreen({navigation}: any) {
  const onPressHandlerDashboard = () => {
    navigation.navigate('Dashboard');
  };
  const onPressHandlerQuizEnd = () => {
    navigation.navigate('QuizEnd');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>##QuizStart##</Text>

      <Pressable
        onPress={onPressHandlerDashboard}
        style={({pressed}) => ({backgroundColor: pressed ? 'pink' : 'gold'})}>
        <Text style={styles.text}>Dashboard</Text>
      </Pressable>
      <Pressable
        onPress={onPressHandlerQuizEnd}
        style={({pressed}) => ({backgroundColor: pressed ? 'pink' : 'gold'})}>
        <Text style={styles.text}>QuizEnd</Text>
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

export default QuizStartScreen;
