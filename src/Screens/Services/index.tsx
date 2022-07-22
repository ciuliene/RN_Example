import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Services = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <Text>Services</Text>
      </View>
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
