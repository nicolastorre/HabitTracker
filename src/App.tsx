/**
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import Realm from 'realm';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <Text>Habit Tracker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
  },
});

export default App;
