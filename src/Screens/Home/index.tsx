import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {Loader} from '../../components/Loader';
import {useAppContext} from '../../hooks/useAppContext';

const Home = () => {
  const {isLoading} = useAppContext();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        {!isLoading && <Loader />}
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
