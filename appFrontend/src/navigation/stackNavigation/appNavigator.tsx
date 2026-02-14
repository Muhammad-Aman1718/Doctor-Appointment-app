import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Setting from '../../screens/main/home/setting/setting';
import Notification from '../../screens/main/home/notification/notification';
import Doctors from '../../screens/main/home/doctors/doctors';
import Favorite from '../../screens/main/home/favorite.tsx/favorite';
import DoctorInfo from '../../screens/main/home/doctors/doctorInfo';
import BottomNavigation from '../bottomNavigation/bottomNavigation';
import EditProfile from '../../screens/main/profile/editProfile/editProfile';
import Payment from '../../screens/main/profile/payment/payment';
import Help from '../../screens/main/profile/help/help';
import PrivacyPolicy from '../../screens/main/profile/privacyPolicy/privacyPolicy';
import NotificationSetting from '../../screens/main/home/notification/notificationSetting/notificationSetting';
import ForgetPassword from '../../screens/auth/forgetPassword';
import PasswordManager from '../../screens/main/home/setting/passwordManager/passwordManager';

const App = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <App.Navigator>
      <App.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
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
      <App.Screen
        name="DoctorInfo"
        component={DoctorInfo}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="Help"
        component={Help}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="NotificationSetting"
        component={NotificationSetting}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="PasswordManager"
        component={PasswordManager}
        options={{ headerShown: false }}
      />
    </App.Navigator>
  );
};

export default AppNavigator;
