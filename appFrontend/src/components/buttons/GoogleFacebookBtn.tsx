import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface GoogleFacebookBtnProps {
  IconComponent?: React.FC<SvgProps>;
  title?: string;
}

const GoogleFacebookBtn: React.FC<GoogleFacebookBtnProps> = ({
  IconComponent,
  title,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {IconComponent && <IconComponent width={24} height={24} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: '50%',
    backgroundColor: '#CAD6FF',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GoogleFacebookBtn;
