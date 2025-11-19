import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppNavigation } from '../../hooks/useAppNavigation';

const SelectRoleScreen = () => {
  const [role, setRole] = useState<'patient' | 'doctor' | null>(null);
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Select your role to continue</Text>

      <TouchableOpacity
        style={[styles.optionBtn, role === 'patient' && styles.activeBtn]}
        onPress={() => setRole('patient')}
      >
        <Text style={styles.optionText}>I am a Patient</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionBtn, role === 'doctor' && styles.activeBtn]}
        onPress={() => setRole('doctor')}
      >
        <Text style={styles.optionText}>I am a Doctor</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nextBtn}
        disabled={!role}
        onPress={() => {
          if (role === 'patient') {
            navigation.replace('Home');
          } else {
            navigation.navigate('DoctorInfoScreen');
          }
        }}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 40,
    color: '#555',
  },
  optionBtn: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#2260FF',
    marginVertical: 10,
    borderRadius: 10,
  },
  activeBtn: {
    backgroundColor: '#2260FF20',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  nextBtn: {
    backgroundColor: '#2260FF',
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SelectRoleScreen;
