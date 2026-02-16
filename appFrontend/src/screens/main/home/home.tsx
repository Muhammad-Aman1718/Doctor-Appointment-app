import React from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../../../components/common/Screen';
import Calendar from '../../../components/calender/Calender';
import DoctorCard from '../../../components/doctorCard/DoctorCard';
import DoctorImg from '../../../assets/imgs/doctorImg.png';
import HomeHeader from '../../../components/header/HomeHeader';

const Home = () => {
  return (
    <Screen
      // Header yahan pass karne se static ho jayega
      header={<HomeHeader />} // Yahan pass karne se static ho jayega
    >
      <View style={styles.scrollContent}>
        <View style={styles.calendarSection}>
          <Calendar />
        </View>

        <View style={styles.allDoctors}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <DoctorCard
              key={index}
              image={DoctorImg}
              name="Dr. Olivia Turner, M.D."
              specialty="Dermato-Endocrinology"
              rating={5}
              reviews={60}
            />
          ))}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  calendarSection: {
    marginVertical: 10,
  },
  allDoctors: {
    marginTop: 15,
    rowGap: 10,
  },
});

export default Home;
