import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../assets/icons/logoWhite.svg';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <Text style={styles.titleText}>Skin</Text>
      <Text style={styles.titleText}>Firts</Text>
      <Text style={styles.headingText}>Dermatology Center</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2260FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  titleText: {
    color: 'white',
    fontSize: 48,
    fontWeight: '100',
    lineHeight: 45,
  },
  headingText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 20,
  },
});

export default Splash;
