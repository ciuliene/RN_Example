import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const Loader = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: offset.value}],
    };
  });

  return (
    <Animated.View style={[styles.loader, animatedStyles]}>
      <View style={styles.loaderCircle1} />
      <View style={styles.loaderCircle2} />
    </Animated.View>
  );
};

const startPosition: object = {
  position: 'absolute',
  width: 10,
  height: 10,
  borderWidth: 10,
  borderColor: '#be97e8',
  borderRadius: 100,
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: '5%',
    zIndex: 1000,
  },
  loaderCircle1: startPosition,
  loaderCircle2: startPosition,
});

/* 
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.loader-circle1,
.loader-circle2 {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border: 10px solid #be97e8;
  border-radius: 100%;
  animation: spin 1s infinite linear;
}

.loader-circle2 {
  border-width: 0;
  animation-delay: 0.5s;
}

.loader-active {
  display: block;
}

@keyframes spin {
  0% {
    width: 100px;
    height: 100px;
    opacity: 1;
    transform: translate(-50%, -50%) scale(0);
    border-width: 10px;
  }

  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    border-width: 10px;
  }
}
*/
