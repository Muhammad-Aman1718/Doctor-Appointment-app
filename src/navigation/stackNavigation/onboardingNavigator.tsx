import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectRoleScreen from '../../screens/onboarding/selectRoleScreen';
import DoctorInfoScreen from '../../screens/onboarding/doctorInfoScreen';

const Onboarding = createNativeStackNavigator();

const OnboardingNavigator = () => {
  return (
    <Onboarding.Navigator>
      <Onboarding.Screen name="SelectRoleScreen" component={SelectRoleScreen}  />
      <Onboarding.Screen name="DoctorInfoScreen" component={DoctorInfoScreen}  />
    </Onboarding.Navigator>
  );
};

export default OnboardingNavigator;
