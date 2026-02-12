// import React from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Pencil } from 'lucide-react-native';
// import Screen from '../../../../components/common/Screen';
// import ProfilePic from '../../../../assets/imgs/profilePic.png';
// import CustomHeader from '../../../../components/CustomHeader';
// import AuthInput from '../../../../components/inputs/AuthInput';

// const EditProfile = () => {
//   return (
//     <Screen>
//       <CustomHeader title="Profile" />
//       <View style={styles.header}>
//         <View style={styles.imageWrapper}>
//           <Image
//             source={ProfilePic} // Yahan apni image ka path dain
//             style={styles.profileImage}
//           />
//           <TouchableOpacity style={styles.editBadge}>
//             <Pencil size={18} color="#CAD6FF" />
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.userName}>John Doe</Text>
//       </View>
//       <View>
//         <AuthInput inputTitle="Full Name" placeHolder="John Doe" />
//         <AuthInput inputTitle="Phone Number" placeHolder="+123456789" />
//         <AuthInput inputTitle="Emial" placeHolder="JohnDoe@gmail.com" />
//         <AuthInput inputTitle="Date Of Birth" placeHolder="DD / MM / YYYY" />
//       </View>
//       <TouchableOpacity>
//         <Text>Update Profile</Text>
//       </TouchableOpacity>
//     </Screen>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     alignItems: 'center',
//     marginTop: 40,
//     marginBottom: 30,
//   },
//   imageWrapper: {
//     position: 'relative',
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//   },
//   editBadge: {
//     position: 'absolute',
//     bottom: 5,
//     right: 5,
//     backgroundColor: '#2260FF',
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 15,
//     color: '#000',
//   },
//   menuList: {
//     paddingTop: 10,
//   },
// });

// export default EditProfile;

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { Pencil } from 'lucide-react-native';
import Screen from '../../../../components/common/Screen';
import ProfilePic from '../../../../assets/imgs/profilePic.png';
import CustomHeader from '../../../../components/CustomHeader';
import AuthInput from '../../../../components/inputs/AuthInput';

const EditProfile: React.FC = () => {
  return (
    <Screen>
        <CustomHeader title="Profile" />
      <View style={styles.scrollContent}>

        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.imageWrapper}>
            <Image source={ProfilePic} style={styles.profileImage} />
            <TouchableOpacity style={styles.editBadge} activeOpacity={0.8}>
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

        {/* Update Profile Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
    paddingHorizontal: 20, // Content ko sides sy space dainay k liye
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
    borderColor: '#fff', // Image k upar badge clear dikhay
  },
  inputContainer: {
    gap: 15, // Inputs k darmiyan space (agar RN version support karta ho)
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2260FF',
    paddingVertical: 16,
    borderRadius: 30, // Pill shape button
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2260FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow
    marginTop: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default EditProfile;
