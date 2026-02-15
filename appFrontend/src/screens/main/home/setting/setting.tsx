import React from 'react';
import { View } from 'react-native';
import { KeyRound, Lightbulb, User } from 'lucide-react-native';
import { useAppNavigation } from '../../../../hooks/useAppNavigation';
import Screen from '../../../../components/common/Screen';
import CustomHeader from '../../../../components/header/CustomHeader';
import ProfileNavItem from '../../../../components/setting/ProfileNavItem';

const Setting = () => {
  const navigation = useAppNavigation();

  return (
    <Screen>
      <CustomHeader title="Setting" />
      <View>
        <ProfileNavItem
          icon={Lightbulb}
          title="Notification Setting"
          onPress={() =>
            navigation.navigate('App', { screen: 'NotificationSetting' })
          }
        />
        <ProfileNavItem
          icon={KeyRound}
          title="Password Manager"
          onPress={() =>
            navigation.navigate('App', { screen: 'PasswordManager' })
          }
        />
        <ProfileNavItem icon={User} title="Delete Account" />
      </View>
    </Screen>
  );
};

export default Setting;
