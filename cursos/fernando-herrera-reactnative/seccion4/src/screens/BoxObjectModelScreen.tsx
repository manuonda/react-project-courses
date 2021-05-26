import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxObjectModelScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 100,
    backgroundColor: 'red',
    // width: 250,
    borderWidth: 10,
  },
});

export default BoxObjectModelScreen;
