import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from '../bottomNavigation/bottomNavigation.tsx';
import Splash from '../../screens/splash/splash.tsx';
import useSplash from '../../hooks/useSplash.ts';
import AuthNavigator from './authNavigator.tsx';
import AppNavigator from './appNavigator.tsx';
import OnboardingNavigator from './onboardingNavigator.tsx';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const { open } = useSplash();

  return (
    <Stack.Navigator>
      {open ? (
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="App"
            component={AppNavigator}
            options={{
              title: 'Home',
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
