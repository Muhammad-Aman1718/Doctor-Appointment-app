import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import InfoFilled from '../assets/icons/infoFilled.svg';
import CalendarIcon from '../../assets/icons/calender.svg';
import AboutIcon from '../../assets/icons/about.svg';
import QuestionIcon from '../../assets/icons/about.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import { useAppNavigation } from '../../hooks/useAppNavigation';

interface DoctorCardProps {
  image?: any;
  name?: string;
  specialty?: string;
}

const ICON_PROPS = {
  width: 14,
  height: 14,
  stroke: '#2260FF',
};

const DoctorCardV2: React.FC<DoctorCardProps> = ({
  image,
  name,
  specialty,
}) => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      {/* Doctor Image */}
      <Image source={image} style={styles.profileImg} />

      {/* Information */}
      <View style={{ flex: 1 }}>
        {/* Name + Specialty */}
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.specialty}>{specialty}</Text>
        </View>

        {/* Bottom Buttons Row */}
        <View style={styles.bottomRow}>
          {/* Info Button */}
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => navigation.navigate('App', { screen: 'DoctorInfo' })}
          >
            <Text style={styles.infoText}>Info</Text>
          </TouchableOpacity>

          {/* Icons */}
          <View style={styles.iconRow}>
            <CircleIcon Icon={CalendarIcon} />
            <CircleIcon Icon={AboutIcon} />
            <CircleIcon Icon={QuestionIcon} />
            <CircleIcon Icon={HeartIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DoctorCardV2;

/* ---------------- Components ---------------- */

const CircleIcon = ({ Icon }: any) => (
  <TouchableOpacity style={styles.circleButton}>
    <Icon {...ICON_PROPS} />
  </TouchableOpacity>
);

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CAD6FF',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },

  profileImg: {
    width: 75,
    height: 75,
    borderRadius: 40,
  },

  name: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2260FF',
  },

  specialty: {
    fontWeight: '300',
    fontSize: 13,
    marginTop: 2,
    color: '#000',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },

  infoButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
  },

  infoText: {
    color: '#FFF',
    fontSize: 15,
  },

  iconRow: {
    flexDirection: 'row',
    columnGap: 8,
  },

  circleButton: {
    backgroundColor: '#FFFFFF',
    padding: 7,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
