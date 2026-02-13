import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { ChevronLeft } from 'lucide-react-native';

interface CustomHeaderProps {
  title?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={30} color="#2260FF" />
        </TouchableOpacity>
      </View>

      <View style={styles.centerContainer}>
        <Text style={styles.pageTitle}>{title}</Text>
      </View>

      <View style={styles.rightContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    width: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightContainer: {
    width: 50,
  },
  icon: {
    textShadowColor: '#2260FF',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  pageTitle: {
    color: '#2260FF',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default CustomHeader;
