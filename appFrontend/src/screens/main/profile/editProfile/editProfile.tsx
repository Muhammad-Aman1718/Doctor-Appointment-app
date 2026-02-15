import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Pencil } from 'lucide-react-native';
import Screen from '../../../../components/common/Screen';
import ProfilePic from '../../../../assets/imgs/profilePic.png';
import CustomHeader from '../../../../components/header/CustomHeader';
import AuthInput from '../../../../components/inputs/AuthInput';

const EditProfile: React.FC = () => {
  return (
    // Header prop use karne se ScrollView baki content ko move karega magar header fixed rahega
    <Screen header={<CustomHeader title="Edit Profile" />}>
      <View style={styles.contentWrapper}>
        {/* Profile Image Section */}
        <View style={styles.header}>
          <View style={styles.imageWrapper}>
            <Image source={ProfilePic} style={styles.profileImage} />
            <TouchableOpacity style={styles.editBadge} activeOpacity={0.8}>
              {/* StrokeWidth 3 se icon zyada bold aur clear dikhta hai */}
              <Pencil size={16} color="#FFFFFF" strokeWidth={3} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Inputs Section */}
        <View style={styles.inputContainer}>
          <AuthInput inputTitle="Full Name" placeHolder="John Doe" />
          <AuthInput inputTitle="Phone Number" placeHolder="+123 567 89000" />
          <AuthInput inputTitle="Email" placeHolder="johndoe@example.com" />
          <AuthInput inputTitle="Date Of Birth" placeHolder="DD / MM / YYYY" />
        </View>

        {/* Update Profile Button - Pill Shape */}
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 40, // Neechay se extra space taakay button scroll ke end pe daba hua na lage
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
    backgroundColor: '#f0f0f0',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    backgroundColor: '#2260FF',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  inputContainer: {
    gap: 10, // Inputs ke darmiyan munasib gap
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2260FF',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // iOS shadow
    shadowColor: '#2260FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // Android elevation
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default EditProfile;
