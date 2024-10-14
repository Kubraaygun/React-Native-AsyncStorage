import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.headerText}>React Native Async Storage</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
  headerText: {},
  inputContainer: {},
  input: {
    borderWidth: 1,
  },
});
