import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/main/home/home';
import Setting from '../../screens/main/home/setting/setting';
import Notification from '../../screens/main/home/notification/notification';
import Doctors from '../../screens/main/home/doctors/doctors';
import Favorite from '../../screens/main/home/favorite.tsx/favorite';

const App = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <App.Navigator>
      <App.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="Doctors"
        component={Doctors}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: false }}
      />
    </App.Navigator>
  );
};

export default AppNavigator;
