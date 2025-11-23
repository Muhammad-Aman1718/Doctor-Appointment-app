import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface AuthBtnProps {
  btnTitle?: string;
}

const AuthBtn: React.FC<AuthBtnProps> = ({ btnTitle }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnTitle}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    backgroundColor: 'rgba(117, 167, 239, 1)',
    paddingTop: 13,
    paddingBottom: 13,
  },
  btnTitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default AuthBtn;
