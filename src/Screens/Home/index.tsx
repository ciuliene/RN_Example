import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
