// import React from 'react';
// import { Text, View } from 'react-native';
// import CustomHeader from '../../../../components/CustomHeader';

// const DoctorInfo = () => {
//   return (
//     <View>
//       <CustomHeader title="Doctor Info" />
//       <View>
//         <Text>DoctorInfo</Text>
//       </View>
//     </View>
//   );
// };

// export default DoctorInfo;

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomHeader from '../../../../components/CustomHeader';

const DoctorInfo = ({ route }) => {
  // Dynamic data (you can pass from navigation)
  const doctor = route?.params?.doctor || {
    name: 'Dr. Alexander Bennett, Ph.D.',
    specialty: 'Dermato-Genetics',
    experience: 15,
    focus:
      'The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin disorders.',
    rating: 5,
    reviews: 40,
    schedule: 'Mon-Sat / 9:00AM - 5:00PM',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60',
    profile:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    career:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    highlights:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#EFF4FF' }}>
      <CustomHeader title="Doctor Info" />

      {/* Main Card */}
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Image source={{ uri: doctor.avatar }} style={styles.avatar} />

          <View style={{ flex: 1 }}>
            <View style={styles.expBadge}>
              <Text style={styles.expText}>
                {doctor.experience} years{'\n'}experience
              </Text>
            </View>

            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.specialty}>{doctor.specialty}</Text>

            <View style={styles.focusBox}>
              <Text style={styles.focusText}>{doctor.focus}</Text>
            </View>
          </View>
        </View>

        {/* Rating + Schedule */}
        <View style={styles.infoRow}>
          <View style={styles.ratingBox}>
            <Text style={styles.ratingStar}>★ {doctor.rating}</Text>
            <Text style={styles.reviews}>{doctor.reviews}</Text>
          </View>

          <Text style={styles.schedule}>{doctor.schedule}</Text>
        </View>

        {/* Buttons */}
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.scheduleBtn}>
            <Text style={styles.scheduleBtnText}>Schedule</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>♡</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.desc}>{doctor.profile}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Career Path</Text>
        <Text style={styles.desc}>{doctor.career}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Highlights</Text>
        <Text style={styles.desc}>{doctor.highlights}</Text>
      </View>
    </ScrollView>
  );
};

export default DoctorInfo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 15,
    borderRadius: 20,
    elevation: 3,
  },

  topRow: {
    flexDirection: 'row',
    gap: 12,
  },

  avatar: {
    width: 90,
    height: 110,
    borderRadius: 15,
  },

  expBadge: {
    backgroundColor: '#0B72FF',
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 5,
  },

  expText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },

  name: { fontSize: 16, fontWeight: '700', color: '#073987', marginTop: 3 },

  specialty: { fontSize: 13, color: '#777', marginBottom: 5 },

  focusBox: {
    backgroundColor: '#E9F0FF',
    padding: 10,
    borderRadius: 10,
  },

  focusText: { fontSize: 12, color: '#555' },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    alignItems: 'center',
  },

  ratingBox: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 2,
  },

  ratingStar: { color: '#0B72FF', fontWeight: '700' },

  reviews: { color: '#555', fontSize: 12 },

  schedule: { fontSize: 12, color: '#555' },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  scheduleBtn: {
    backgroundColor: '#0B72FF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 12,
  },

  scheduleBtnText: { color: 'white', fontWeight: '600' },

  iconBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 12,
  },

  iconText: { fontSize: 18, color: '#0B72FF' },

  section: { marginHorizontal: 15, marginTop: 15 },

  title: { fontSize: 16, color: '#073987', fontWeight: '700', marginBottom: 5 },

  desc: { fontSize: 13, color: '#444', lineHeight: 20 },
});
