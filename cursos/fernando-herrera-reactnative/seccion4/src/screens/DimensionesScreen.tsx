import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const DimensionesScreen = () => {

   const {width , height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={{
          ...styles.cajaMorada,
          width: width * 0.6
      }}/>

      <View style={ styles.cajaNaranja}/>
      <Text style={ styles.title}>Width : {width}, {height}</Text>
    </View>
  );
};
export default DimensionesScreen;

const styles = StyleSheet.create({
    container: {
       width: '100%',
       height: '50%',
       backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%'
    },
    cajaNaranja : {
        backgroundColor: '#F0A23B'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
});
