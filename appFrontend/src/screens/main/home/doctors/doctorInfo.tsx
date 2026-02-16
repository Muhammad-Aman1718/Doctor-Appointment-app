import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StarIcon from '../../../../assets/icons/star.svg';
import Screen from '../../../../components/common/Screen';
import CustomHeader from '../../../../components/header/CustomHeader';

const DoctorInfo = ({ route }) => {
  // Dynamic data handling
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
    <Screen
      // 1. Header ko yahan pass kiya taakay wo static rahay
      header={<CustomHeader title="Doctor Info" />}
    >
      <View style={styles.mainWrapper}>
        {/* TOP BLUE CARD */}
        <View style={styles.card}>
          <View style={styles.topSection}>
            {/* Avatar Section */}
            <View style={styles.avatarWrapper}>
              <Image source={{ uri: doctor.avatar }} style={styles.avatarImg} />
            </View>

            {/* Right Side Info */}
            <View style={{ flex: 1 }}>
              <View style={styles.expBadge}>
                <Text style={styles.expNum}>{doctor.experience} years </Text>
                <Text style={styles.expLabel}>experience</Text>
              </View>

              <View style={styles.focusBox}>
                <Text style={styles.focusTitle}>Focus:</Text>
                <Text style={styles.focusText}>{doctor.focus}</Text>
              </View>
            </View>
          </View>

          {/* Name & Specialty Container */}
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{doctor.name}</Text>
            <Text style={styles.specialtyText}>{doctor.specialty}</Text>
          </View>

          {/* White Stats Row */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <StarIcon width={16} height={16} fill="#2260FF" />
              <Text style={styles.statText}>{doctor.rating}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statText}>{doctor.reviews} Reviews</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statText}>{doctor.schedule}</Text>
            </View>
          </View>

          {/* Schedule Button Row */}
          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.scheduleBtn} activeOpacity={0.8}>
              <Text style={styles.scheduleBtnText}>Schedule</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* BOTTOM SECTIONS */}
        <View style={styles.detailsContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text style={styles.desc}>{doctor.profile}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Career Path</Text>
            <Text style={styles.desc}>{doctor.career}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Highlights</Text>
            <Text style={styles.desc}>{doctor.highlights}</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#CAD6FF', // Light blue card background
    margin: 15,
    padding: 18,
    borderRadius: 25,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginRight: 15,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
  expBadge: {
    backgroundColor: '#2260FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  expNum: { fontSize: 12, color: '#fff', fontWeight: 'bold' },
  expLabel: { fontSize: 12, color: '#fff', fontWeight: '300' },
  focusBox: {
    backgroundColor: '#2260FF',
    padding: 10,
    borderRadius: 12,
    marginTop: 8,
  },
  focusTitle: { color: 'white', fontWeight: 'bold', fontSize: 13 },
  focusText: { color: 'white', fontSize: 11, lineHeight: 16 },

  nameContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#093A87',
  },
  specialtyText: {
    fontSize: 13,
    color: '#555',
    fontWeight: '500',
  },
  statsRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
    marginLeft: 4,
  },
  btnRow: {
    alignItems: 'center',
    marginTop: 15,
  },
  scheduleBtn: {
    backgroundColor: '#2260FF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  scheduleBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 17,
    color: '#073987',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  desc: {
    fontSize: 13,
    color: '#444',
    lineHeight: 20,
    textAlign: 'justify',
  },
});

export default DoctorInfo;
