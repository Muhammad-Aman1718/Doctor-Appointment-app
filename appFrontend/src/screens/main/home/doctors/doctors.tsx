import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../../../components/header/CustomHeader';
import SearchIcon from '../../../../assets/icons/search.svg';
import FilterIcon from '../../../../assets/icons/filter.svg';
import Screen from '../../../../components/common/Screen';
import DoctorCardV2 from '../../../../components/doctorCard/DoctorCardV2';

import DoctorImg from '../../../../assets/imgs/doctorImg (2).png';

const Doctors = () => {
  return (
    <Screen>
      <CustomHeader title="Doctors" />
      <View style={styles.Container}>
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

        <View style={styles.cardContainer}>
          <DoctorCardV2
            image={DoctorImg}
            name="Dr. Alexander Bennett, Ph.D."
            specialty="Dermato-Genetics"
          />
          <DoctorCardV2 image={DoctorImg} name="" />
          <DoctorCardV2 image={DoctorImg} name="" />
        </View>
      </View>
    </Screen>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  cardContainer: {
    marginTop: 20,
    rowGap: 15,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#CAD6FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 40,
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
});
