import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/login.tsx';
import Register from '../../screens/auth/register.tsx';
import WelcomeScreen from '../../screens/auth/welcomeScreen.tsx';
import ForgetPassword from '../../screens/auth/forgetPassword.tsx';

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
