import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  User,
  Heart,
  Wallet,
  Lock,
  Settings,
  CircleHelp,
  LogOut,
} from 'lucide-react-native';
import { useAppNavigation } from '../../../hooks/useAppNavigation';
import ProfileNavItem from '../../../components/setting/ProfileNavItem';
import Screen from '../../../components/common/Screen';
import ProfilePic from '../../../assets/imgs/profilePic.png';
import LogoutModal from '../../../components/common/LogoutModal';

const ProfileScreen = () => {
  const navigation = useAppNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    console.log('Logged Out!');
    // Yahan logout logic (Auth context clear karna wagera) likhein
  };

  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image source={ProfilePic} style={styles.profileImage} />
        </View>
        <Text style={styles.userName}>John Doe</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuList}>
        <ProfileNavItem
          icon={User}
          title="Profile"
          onPress={() => navigation.navigate('App', { screen: 'EditProfile' })}
        />
        <ProfileNavItem
          icon={Heart}
          title="Favorite"
          onPress={() => navigation.navigate('App', { screen: 'Favorite' })}
        />
        <ProfileNavItem
          icon={Wallet}
          title="Payment Method"
          onPress={() => navigation.navigate('App', { screen: 'Payment' })}
        />
        <ProfileNavItem
          icon={Lock}
          title="Privacy Policy"
          onPress={() =>
            navigation.navigate('App', { screen: 'PrivacyPolicy' })
          }
        />
        <ProfileNavItem
          icon={Settings}
          title="Settings"
          onPress={() => navigation.navigate('App', { screen: 'Setting' })}
        />
        <ProfileNavItem
          icon={CircleHelp}
          title="Help"
          onPress={() => navigation.navigate('App', { screen: 'Help' })}
        />
        <ProfileNavItem
          icon={LogOut}
          title="Logout"
          showArrow={false}
          onPress={() => setModalVisible(true)}
        />
        <LogoutModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          onLogout={handleLogout}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editBadge: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#2260FF',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#000',
  },
  menuList: {
    paddingTop: 10,
  },
});

export default ProfileScreen;
