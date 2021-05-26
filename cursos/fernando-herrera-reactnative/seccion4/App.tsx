/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Box } from '@material-ui/core';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import {Contador} from './src/screens/Contador';
import HolaMundoScreen from './src/screens/HolaMundoScreen';
import DimensionesScreen from'./src/screens/DimensionesScreen';


const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  return (
    // <SafeAreaView>
    //   {/* { <HolaMundoScreen></HolaMundoScreen> */}
      
    //   {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}
    //   <Contador></Contador>
    // </SafeAreaView>
    <SafeAreaView style={{ flex: 1}}>
      {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}
       <DimensionesScreen></DimensionesScreen>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
