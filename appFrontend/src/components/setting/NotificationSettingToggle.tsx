// import React from 'react';
// import { View, Text, StyleSheet, Switch } from 'react-native';

// interface NotificationSettingToggleProps {
//   title: string;
//   value: boolean;
//   onValueChange: (newValue: boolean) => void;
// }

// const NotificationSettingToggle: React.FC<NotificationSettingToggleProps> = ({
//   title,
//   value,
//   onValueChange,
// }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <Switch
//         trackColor={{ false: '#2260FF', true: '#CAD6FF' }}
//         thumbColor={'#FFFFFF'}
//         ios_backgroundColor="#ad4e4e"
//         onValueChange={onValueChange}
//         value={value}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 15,
//     paddingHorizontal: 5,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 18,
//     color: '#000',
//     fontWeight: '500',
//   },
// });

// export default NotificationSettingToggle;





// import React, { useEffect, useRef } from 'react';
// import { TouchableOpacity, Animated, StyleSheet, View } from 'react-native';

// interface Props {
//   value: boolean;
//   onValueChange: (val: boolean) => void;
// }

// const NotificationSettingToggle: React.FC<Props> = ({ value, onValueChange }) => {
//   const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

//   useEffect(() => {
//     Animated.timing(animatedValue, {
//       toValue: value ? 1 : 0,
//       duration: 200,
//       useNativeDriver: false, // Colors aur layout k liye false zaroori hai
//     }).start();
//   }, [value]);

//   const translateX = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: [2, 22], // Thumb ki movement
//   });

//   const backgroundColor = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['#DDE6FF', '#2260FF'], // Image jaisa soft blue aur active blue
//   });

//   return (
//     <TouchableOpacity activeOpacity={0.9} onPress={() => onValueChange(!value)}>
//       <Animated.View style={[styles.switchContainer, { backgroundColor }]}>
//         <Animated.View style={[styles.thumb, { transform: [{ translateX }] }]} />
//       </Animated.View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   switchContainer: {
//     width: 50,
//     height: 28,
//     borderRadius: 15,
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   thumb: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     // Shadow taakay thumb utha hua dikhay
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2.5,
//     elevation: 3,
//   },
// });

// export default NotificationSettingToggle;





import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

interface NotificationSettingToggleProps {
  title: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

const NotificationSettingToggle: React.FC<NotificationSettingToggleProps> = ({
  title,
  value,
  onValueChange,
}) => {
  // Animation value for the switch
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  // Trigger animation when 'value' changes
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false, // background aur layout animations ke liye false chahiye
    }).start();
  }, [value]);

  // Interpolate movement for the thumb
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22], // Start position aur end position
  });

  // Interpolate color for the background container
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#DDE6FF', '#2260FF'], // Off state (soft blue) aur On state (active blue)
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>{title}</Text>

      {/* Custom Animated Switch */}
      <TouchableOpacity 
        activeOpacity={0.9} 
        onPress={() => onValueChange(!value)}
      >
        <Animated.View style={[styles.switchContainer, { backgroundColor }]}>
          <Animated.View 
            style={[styles.thumb, { transform: [{ translateX }] }]} 
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  switchContainer: {
    width: 50,
    height: 28,
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    // Subtle shadow for the depth effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2.5,
    elevation: 3, // Android shadow
  },
});

export default NotificationSettingToggle;