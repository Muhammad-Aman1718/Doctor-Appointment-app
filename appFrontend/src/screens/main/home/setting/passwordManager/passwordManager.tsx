import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Screen from '../../../../../components/common/Screen';
import CustomHeader from '../../../../../components/CustomHeader';
import PasswordManagerInput from '../../../../../components/inputs/PasswordManagerInput';
import { useAppNavigation } from '../../../../../hooks/useAppNavigation';

const PasswordManager: React.FC = () => {
  const navigation = useAppNavigation();
  return (
    <Screen
      // Header ko Screen component ke prop se hi pass kiya hai taakay static rahay
      header={<CustomHeader title="Password Manager" />}
    >
      <View style={styles.container}>
        {/* Input Fields */}
        <View style={styles.formSection}>
          <PasswordManagerInput
            title="Current Password"
            placeholder="**************"
          />

          {/* Forgot Password Link */}
          <TouchableOpacity
            style={styles.forgotLink}
            onPress={() => navigation.navigate('Auth', { screen: 'ForgetPassword' })}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <PasswordManagerInput
            title="New Password"
            placeholder="**************"
          />

          <PasswordManagerInput
            title="Confirm New Password"
            placeholder="**************"
          />
        </View>

        {/* Change Password Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: 'space-between', // Button ko bottom par rakhne ke liye
  },
  formSection: {
    width: '100%',
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginTop: -10, // Input ke kareeb lane ke liye
  },
  forgotText: {
    color: '#2260FF',
    fontSize: 15,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginTop: 40,
  },
  button: {
    backgroundColor: '#2260FF', // Image jaisa blue
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2260FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PasswordManager;
