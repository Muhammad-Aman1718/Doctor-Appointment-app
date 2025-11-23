import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import Logo from '../../assets/icons/logoBlue.svg';
import Screen from '../../components/common/Screen';
import WelcomeScreenBtn from '../../components/buttons/WelcomeScreenBtn';

const WelcomeScreen = () => {
  const navigation = useAppNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo style={styles.logo} />
          <Text style={styles.titleText}>Skin</Text>
          <Text style={styles.titleText}>Firts</Text>
          <Text style={styles.headingText}>Dermatology Center</Text>
        </View>
        <View style={styles.IntroContainer}>
          <Text style={styles.intro}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <WelcomeScreenBtn
            title="Log In"
            customStyle={{ backgroundColor: '#2260FF' }}
            textStyle={{ color: 'white' }}
            onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
          />
          <WelcomeScreenBtn
            title="Sign Up"
            customStyle={{ backgroundColor: '#CAD6FF' }}
            textStyle={{ color: '#2260FF' }}
            onPress={() => navigation.navigate('Auth', { screen: 'Register' })}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 70,
  },
  logoContainer: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    marginBottom: 20,
  },
  titleText: {
    color: '#2260FF',
    fontSize: 48,
    fontWeight: '100',
    lineHeight: 45,
    alignItems: 'center',
  },
  headingText: {
    color: '#2260FF',
    fontSize: 12,
    fontWeight: '600',
    alignItems: 'center',
    marginTop: 20,
  },
  IntroContainer: {
    flex: 2,
    width: 270,
    rowGap: 7,
    alignItems: 'center',
  },
  intro: {
    fontSize: 12,
    fontWeight: 300,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
