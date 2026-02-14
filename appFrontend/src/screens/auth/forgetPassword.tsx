// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { useAppNavigation } from '../../hooks/useAppNavigation';
// import AuthInput from '../../components/inputs/AuthInput';
// import Screen from '../../components/common/Screen';
// import CustomHeader from '../../components/CustomHeader';
// import WelcomeScreenBtn from '../../components/buttons/WelcomeScreenBtn';

// const ForgetPassword = () => {
//   const navigation = useAppNavigation();
//   return (
//     <Screen>
//       <View style={styles.container}>
//         <CustomHeader title="Reset Password" />
//         <View style={styles.formContainer}>
//           <Text style={styles.messageText}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
//           </Text>
//           <View style={styles.inputContainer}>
//             <AuthInput inputTitle="Password" placeHolder="*************" />
//             <AuthInput
//               inputTitle="Confirm Password"
//               placeHolder="*************"
//             />
//           </View>
//           <WelcomeScreenBtn
//             title="Create new password"
//             textStyle={{ fontSize: 24, color: 'white' }}
//             customStyle={{ backgroundColor: '#2260FF', marginBottom: 34 }}
//           />
//         </View>
//       </View>
//     </Screen>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: 'white',
//     width: '100%',
//   },
//   formContainer: {
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 30,
//     rowGap: 10,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 50,
//   },
//   messageText: {
//     fontSize: 12,
//     color: '#070707',
//     fontWeight: '300',
//     width: '100%',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
// });

// export default ForgetPassword;





import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import AuthInput from '../../components/inputs/AuthInput';
import Screen from '../../components/common/Screen';
import CustomHeader from '../../components/CustomHeader';
import WelcomeScreenBtn from '../../components/buttons/WelcomeScreenBtn';

const ForgetPassword = () => {
  const navigation = useAppNavigation();

  return (
    <Screen 
      // 1. Header ko prop mein pass karein taakay ye ScrollView se bahar rahay
      header={<CustomHeader title="Reset Password" />}
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.messageText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <View style={styles.inputContainer}>
            <AuthInput 
              inputTitle="Password" 
              placeHolder="*************" 
              // secureTextEntry // Password k liye zaroori hai
            />
            <AuthInput
              inputTitle="Confirm Password"
              placeHolder="*************"
              // secureTextEntry
            />
          </View>

          <WelcomeScreenBtn
            title="Create new password"
            onPress={() => {
                // navigation logic yahan aayega
            }}
            textStyle={styles.btnText}
            customStyle={styles.btnContainer}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Sides sy barabar space k liye
    backgroundColor: 'white',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 40,
    gap: 15, // Inputs k darmiyan space
  },
  messageText: {
    fontSize: 14,
    color: '#070707',
    fontWeight: '400',
    width: '100%',
    lineHeight: 20,
    textAlign: 'center',
  },
  btnContainer: {
    backgroundColor: '#2260FF',
    marginBottom: 34,
    width: '100%',
    borderRadius: 30, // Pill shape jaisa image mein tha
    height: 56, // Standard height
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  }
});

export default ForgetPassword;