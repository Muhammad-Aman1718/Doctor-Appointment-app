// src/components/CustomLoader.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  ViewStyle,
  TextStyle,
} from 'react-native';


interface CustomLoaderProps {
  visible?: boolean;
  size?: number;
  color?: string;
  text?: string | boolean;
  textColor?: string;
  textSize?: number;
  animationDuration?: number;
  loaderStyle?: ViewStyle;
  textStyle?: TextStyle;
  type?: 'spinner' | 'dots' | 'pulse' | 'wave';
}

const Loader: React.FC<CustomLoaderProps> = ({
  visible = true,
  size = 50,
  color = '#007AFF',
  text = 'Loading...',
  textColor = '#333',
  textSize = 16,
  animationDuration = 1000,
  loaderStyle = {},
  textStyle = {},
  type = 'spinner',
}) => {
  const spinValue = new Animated.Value(0);
  const pulseValue = new Animated.Value(1);
  const dotScale1 = new Animated.Value(1);
  const dotScale2 = new Animated.Value(1);
  const dotScale3 = new Animated.Value(1);
  const waveHeight = new Animated.Value(0);

  // Spinner Animation
  React.useEffect(() => {
    if (type === 'spinner') {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: animationDuration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    }

    // Pulse Animation
    if (type === 'pulse') {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseValue, {
            toValue: 1.2,
            duration: animationDuration / 2,
            useNativeDriver: true,
          }),
          Animated.timing(pulseValue, {
            toValue: 1,
            duration: animationDuration / 2,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }

    // Dots Animation
    if (type === 'dots') {
      const createDotAnimation = (dot: Animated.Value, delay: number) => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(dot, {
              toValue: 1.5,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(dot, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }),
          ]),
        ).start();
      };

      createDotAnimation(dotScale1, 0);
      createDotAnimation(dotScale2, 150);
      createDotAnimation(dotScale3, 300);
    }

    // Wave Animation
    if (type === 'wave') {
      Animated.loop(
        Animated.sequence([
          Animated.timing(waveHeight, {
            toValue: size,
            duration: animationDuration / 2,
            useNativeDriver: false,
          }),
          Animated.timing(waveHeight, {
            toValue: 0,
            duration: animationDuration / 2,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    }
  }, [type, animationDuration]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (!visible) return null;

  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return (
          <Animated.View
            style={[
              styles.spinner,
              {
                width: size,
                height: size,
                borderWidth: size / 10,
                borderColor: color,
                borderTopColor: 'transparent',
                borderRadius: size / 2,
                transform: [{ rotate: spin }],
              },
              loaderStyle,
            ]}
          />
        );

      case 'pulse':
        return (
          <Animated.View
            style={[
              styles.pulse,
              {
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: size / 2,
                transform: [{ scale: pulseValue }],
              },
              loaderStyle,
            ]}
          />
        );

      case 'dots':
        return (
          <View style={styles.dotsContainer}>
            <Animated.View
              style={[
                styles.dot,
                {
                  width: size / 3,
                  height: size / 3,
                  backgroundColor: color,
                  borderRadius: size / 6,
                  transform: [{ scale: dotScale1 }],
                },
              ]}
            />
            <Animated.View
              style={[
                styles.dot,
                {
                  width: size / 3,
                  height: size / 3,
                  backgroundColor: color,
                  borderRadius: size / 6,
                  transform: [{ scale: dotScale2 }],
                },
              ]}
            />
            <Animated.View
              style={[
                styles.dot,
                {
                  width: size / 3,
                  height: size / 3,
                  backgroundColor: color,
                  borderRadius: size / 6,
                  transform: [{ scale: dotScale3 }],
                },
              ]}
            />
          </View>
        );

      case 'wave':
        return (
          <View style={[styles.waveContainer, { height: size }]}>
            <Animated.View
              style={[
                styles.wave,
                {
                  width: size / 4,
                  height: waveHeight,
                  backgroundColor: color,
                },
              ]}
            />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.loaderContainer}>
        {renderLoader()}
        {text && (
          <Text
            style={[
              styles.text,
              {
                color: textColor,
                fontSize: textSize,
                marginTop: size / 2,
              },
              textStyle,
            ]}
          >
            {text}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  loaderContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  spinner: {
    borderStyle: 'solid',
  },
  pulse: {
    // Pulse style
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
  },
  dot: {
    marginHorizontal: 3,
  },
  waveContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  wave: {
    marginHorizontal: 2,
    borderRadius: 2,
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Loader;
