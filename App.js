import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View>
        <h2>Payment</h2>
        <form>
          <label>First Name: </label><br/><br/>
          <label>Email: </label><br/><br/>
          <label>Credit Card Number: </label><br/><br/>
          <input type="text" name="name" id='name' placeholder='enter your name'/><br/>
          <input type='submit' value='submit'/>
        </form>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
