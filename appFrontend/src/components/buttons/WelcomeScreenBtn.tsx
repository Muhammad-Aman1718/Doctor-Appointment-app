import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface WelcomeScreenBtnProps {
  title?: string;
  customStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

const WelcomeScreenBtn: React.FC<WelcomeScreenBtnProps> = ({
  title,
  customStyle,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
      <Text style={[styles.btnTitle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
  },
  btnTitle: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default WelcomeScreenBtn;
