// import React from 'react';
// import { Text, View } from 'react-native';
// import Screen from '../../../../../components/common/Screen';
// import CustomHeader from '../../../../../components/CustomHeader';

// const NotificationSetting = () => {
//   return (
//     <View>
//       <CustomHeader title="Notification Setting" />
//       <Screen>
//         <Text>NotificationSetting</Text>
//       </Screen>
//     </View>
//   );
// };

// export default NotificationSetting;

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from '../../../../../components/common/Screen';
import CustomHeader from '../../../../../components/CustomHeader';
import NotificationSettingToggle from '../../../../../components/setting/NotificationSettingToggle';

const NotificationSetting = () => {
  const [settings, setSettings] = useState({
    general: true,
    sound: true,
    soundCall: true,
    vibrate: true,
    specialOffers: true,
    payments: true,
    promo: true,
    cashback: true,
  });

  // Toggle function
  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Screen
      header={<CustomHeader title="Notification Setting" />}
      scroll={true}
    >
      <View style={styles.container}>
        <NotificationSettingToggle
          title="General Notification"
          value={settings.general}
          onValueChange={() => toggleSetting('general')}
        />
        <NotificationSettingToggle
          title="Sound"
          value={settings.sound}
          onValueChange={() => toggleSetting('sound')}
        />
        <NotificationSettingToggle
          title="Sound Call"
          value={settings.soundCall}
          onValueChange={() => toggleSetting('soundCall')}
        />
        <NotificationSettingToggle
          title="Vibrate"
          value={settings.vibrate}
          onValueChange={() => toggleSetting('vibrate')}
        />
        <NotificationSettingToggle
          title="Special Offers"
          value={settings.specialOffers}
          onValueChange={() => toggleSetting('specialOffers')}
        />
        <NotificationSettingToggle
          title="Payments"
          value={settings.payments}
          onValueChange={() => toggleSetting('payments')}
        />
        <NotificationSettingToggle
          title="Promo And Discount"
          value={settings.promo}
          onValueChange={() => toggleSetting('promo')}
        />
        <NotificationSettingToggle
          title="Cashback"
          value={settings.cashback}
          onValueChange={() => toggleSetting('cashback')}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

export default NotificationSetting;
