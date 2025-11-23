import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import AuthInput from '../../components/inputs/AuthInput';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import Screen from '../../components/common/Screen';

const DoctorInfoScreen = () => {
  const [doctorImage, setDoctorImage] = useState(null);
  const navigation = useAppNavigation();

  //   const pickImage = async () => {
  //     const res = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       quality: 1,
  //     });

  //     if (!res.canceled) {
  //       setDoctorImage(res.assets[0].uri);
  //     }
  //   };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Doctor Information</Text>

        {/* <TouchableOpacity style={styles.imgBox} onPress={pickImage}>
          {doctorImage ? (
            <Image source={{ uri: doctorImage }} style={styles.profileImg} />
          ) : (
            <Text style={{ color: '#999' }}>Upload Profile Image</Text>
          )}
        </TouchableOpacity> */}

        <AuthInput inputTitle="Full Name" placeHolder="Dr. Muhammad Ali" />
        <AuthInput inputTitle="Specialization" placeHolder="Cardiologist" />
        <AuthInput inputTitle="Experience (Years)" placeHolder="5" />
        <AuthInput inputTitle="Clinic Name" placeHolder="City Hospital" />
        <AuthInput inputTitle="Consultation Fee" placeHolder="1500" />
        <AuthInput inputTitle="Available Days" placeHolder="Mon - Fri" />

        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => navigation.replace('App', { screen: 'Home' })}
        >
          <Text style={styles.saveText}>Save & Continue</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },
  imgBox: {
    width: 120,
    height: 120,
    backgroundColor: '#F0F0F0',
    borderRadius: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  profileImg: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  saveBtn: {
    backgroundColor: '#2260FF',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
  },
  saveText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default DoctorInfoScreen;
