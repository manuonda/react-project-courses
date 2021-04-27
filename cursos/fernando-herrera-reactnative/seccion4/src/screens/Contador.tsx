import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Fab from '../components/Fab';

export const Contador = () => {
  const [contador, setContador] = useState(10);

  const handleCountAdd = () => {
    setContador(contador + 1);
  };

  const handleCountRest = () => {
    setContador(contador - 1);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: 10,
        }}>
        Contador: {contador}
      </Text>
      <Fab title="-1" onPress={handleCountRest} position="bl"></Fab>
      <Fab title="+1" onPress={handleCountAdd} position="br"></Fab>

      {/* <TouchableOpacity style={styles.fabLocationBR} onPress={handleCountAdd}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fabLocationBL} onPress={handleCountRest}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {},
});
