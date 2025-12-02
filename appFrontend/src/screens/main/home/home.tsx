import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { useAppNavigation } from '../../../hooks/useAppNavigation';
import NotificationIcon from '../../../assets/icons/notification.svg';
import SettingIcon from '../../../assets/icons/setting.svg';
import HeartIcon from '../../../assets/icons/heart.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import FilterIcon from '../../../assets/icons/filter.svg';
import DoctorIcon from '../../../assets/icons/doctors.svg';
import ProfileImg from '../../../assets/imgs/profileImg.png';
import Screen from '../../../components/common/Screen';
import DoctorCard from '../../../components/doctorCard/DoctorCard';

import DoctorImg from '../../../assets/imgs/doctorImg.png';
import Calendar from '../../../components/calender/Calender';

const HomeHeader = () => {
  const navigation = useAppNavigation();

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <View style={styles.topRow}>
            <View style={styles.profileSection}>
              <Image source={ProfileImg} style={styles.profileImg} />
              <View style={styles.textContainer}>
                <Text style={styles.greetText}>Hi, Welcome Back</Text>
                <Text style={styles.nameText}>John Doe</Text>
              </View>
            </View>

            <View style={styles.iconContainer}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() =>
                  navigation.navigate('App', { screen: 'Notification' })
                }
              >
                <NotificationIcon
                  width={14}
                  height={18}
                  stroke="#000000"
                  strokeWidth={0.1}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconButton}
                onPress={() =>
                  navigation.navigate('App', { screen: 'Setting' })
                }
              >
                <SettingIcon
                  width={16}
                  height={18}
                  stroke="#000000"
                  strokeWidth={0.1}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* --- Doctors + Favorite + Search Row --- */}
          <View style={styles.rowContainer}>
            {/* Doctors + Favorite */}
            <View style={styles.optionRow}>
              <TouchableOpacity
                style={styles.option}
                onPress={() =>
                  navigation.navigate('App', { screen: 'Doctors' })
                }
              >
                <DoctorIcon
                  width={18}
                  height={18}
                  stroke="#2260FF"
                  strokeWidth={0.3}
                />
                <Text style={styles.optionText}>Doctors</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.option}
                onPress={() =>
                  navigation.navigate('App', { screen: 'Favorite' })
                }
              >
                <HeartIcon
                  width={18}
                  height={18}
                  stroke="#2260FF"
                  strokeWidth={1}
                />
                <Text style={styles.optionText}>Favorite</Text>
              </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
              <TouchableOpacity style={styles.filterIcon}>
                <FilterIcon width={18} height={18} stroke="#2260FF" />
              </TouchableOpacity>

              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                placeholderTextColor="#000"
              />

              <TouchableOpacity style={styles.searchIcon}>
                <SearchIcon
                  width={18}
                  height={18}
                  stroke="#2260FF"
                  strokeWidth={0.3}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Calendar />
        </View>

        <View style={styles.allDoctors}>
          <DoctorCard
            image={DoctorImg}
            name="Dr. Olivia Turner, M.D."
            specialty="Dermato-Endocrinology"
            rating={5}
            reviews={60}
          />
          <DoctorCard
            image={DoctorImg}
            name="Dr. Olivia Turner, M.D."
            specialty="Dermato-Endocrinology"
            rating={5}
            reviews={60}
          />
          <DoctorCard
            image={DoctorImg}
            name="Dr. Olivia Turner, M.D."
            specialty="Dermato-Endocrinology"
            rating={5}
            reviews={60}
          />
        </View>
      </View>
    </Screen>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  greetText: {
    color: '#2260FF',
    fontSize: 12,
    fontWeight: '300',
  },
  nameText: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 14,
  },

  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    width: 27,
    height: 27,
    borderRadius: 20,
    backgroundColor: '#CAD6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  optionRow: {
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center',
  },
  option: {
    alignItems: 'center',
  },
  optionText: {
    marginTop: 3,
    fontSize: 12,
    color: '#2260FF',
    fontWeight: '300',
  },

  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#CAD6FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 40,
    width: '55%',
  },

  filterIcon: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 12,
  },

  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 13,
    color: '#000',
  },

  searchIcon: {
    paddingLeft: 6,
  },

  allDoctors: {
    marginTop: 15,
    rowGap: 10,
  },
});
