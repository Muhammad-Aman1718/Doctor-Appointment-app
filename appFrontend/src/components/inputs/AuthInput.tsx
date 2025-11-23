import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface AuthInputProps {
  inputTitle?: string;
  placeHolder?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({ inputTitle, placeHolder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField =
    inputTitle?.toLowerCase() === 'password' ||
    inputTitle?.toLowerCase() === 'confirm password';

  return (
    <View style={styles.container}>
      {inputTitle && <Text style={styles.text}>{inputTitle}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          placeholderTextColor="#809CFF"
          secureTextEntry={isPasswordField && !showPassword}
          keyboardType={isPasswordField ? 'default' : 'email-address'}
        />
        {(inputTitle == 'Password' || inputTitle == 'Confirm Password') && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              color="black"
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
  },

  inputContainer: {
    borderRadius: 13,
    height: 50,
    backgroundColor: '#ECF1FF',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#ECF1FF',
    color: 'black',
  },
  icon: {},
});

export default AuthInput;
