import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ChevronLeft, Search } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const HelpHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft color="#fff" size={28} />
        </TouchableOpacity>
        <Text style={styles.title}>Help Center</Text>
        <View style={{ width: 28 }} />
      </View>

      <Text style={styles.subTitle}>How Can We Help You?</Text>

      <View style={styles.searchSection}>
        <Search color="#2260FF" size={20} style={styles.searchIcon} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#CAD6FF"
          style={styles.searchInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2260FF',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'semibold',
  },
  subTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 20,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#000',
  },
});

export default HelpHeader;
