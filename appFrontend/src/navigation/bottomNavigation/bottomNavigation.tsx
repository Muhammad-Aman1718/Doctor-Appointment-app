import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/main/home/home';
import Chat from '../../screens/main/chat/chat';
import Profile from '../../screens/main/profile/profile';
import Appointment from '../../screens/main/appointment/appointment';
import HomeIcon from '../../assets/icons/home.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import AppointmentIcon from '../../assets/icons/calender.svg';
import Screen from '../../components/common/Screen';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.tabContainer}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;

          // Animations
          const scaleAnim = useRef(
            new Animated.Value(isFocused ? 1.15 : 1),
          ).current;
          const underlineAnim = useRef(
            new Animated.Value(isFocused ? 1 : 0),
          ).current;

          useEffect(() => {
            Animated.spring(scaleAnim, {
              toValue: isFocused ? 1.15 : 1,
              friction: 6,
              tension: 80,
              useNativeDriver: true,
            }).start();

            Animated.timing(underlineAnim, {
              toValue: isFocused ? 1 : 0,
              duration: 200,
              useNativeDriver: true,
            }).start();
          }, [isFocused]);

          const icons: Record<string, any> = {
            Home: (
              <HomeIcon
                width={22}
                height={22}
                stroke="#FFFFFF"
                strokeWidth={0.3}
              />
            ),
            Chat: (
              <ChatIcon
                width={22}
                height={22}
                stroke="#FFFFFF"
                strokeWidth={1.3}
              />
            ),
            Profile: (
              <ProfileIcon
                width={22}
                height={22}
                stroke="#FFFFFF"
                strokeWidth={1.3}
              />
            ),
            Appointment: (
              <AppointmentIcon
                width={22}
                height={22}
                stroke="#FFFFFF"
                strokeWidth={0.3}
              />
            ),
          };

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              activeOpacity={0.8}
              style={styles.tabButton}
            >
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                {icons[route.name]}
              </Animated.View>

              <Animated.View
                style={[
                  styles.tabBar,
                  {
                    opacity: underlineAnim,
                    transform: [{ scaleX: underlineAnim }],
                  },
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Appointment" component={Appointment} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#2563EB',
    marginHorizontal: 20,
    height: 50,
    marginBottom: 20,
    borderRadius: 30,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    borderRadius: 6,
    width: 16,
    height: 2,
    backgroundColor: '#fff',
    marginTop: 5,
  },
});
