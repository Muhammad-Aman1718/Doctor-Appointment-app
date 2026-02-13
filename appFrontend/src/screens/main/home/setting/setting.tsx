import React from 'react';
import { Text, View } from 'react-native';
import Screen from '../../../../components/common/Screen';
import CustomHeader from '../../../../components/CustomHeader';
import MenuItem from '../../../../components/buttons/MenuItem';
import { KeyRound, Lightbulb, User } from 'lucide-react-native';

const Setting = () => {
  return (
    <Screen>
      <CustomHeader title="Setting" />
      <View>
        <MenuItem icon={Lightbulb} title="Notification Setting" />
        <MenuItem icon={KeyRound} title="Password Manager" />
        <MenuItem icon={User} title="Delete Account" />
      </View>
    </Screen>
  );
};

export default Setting;
