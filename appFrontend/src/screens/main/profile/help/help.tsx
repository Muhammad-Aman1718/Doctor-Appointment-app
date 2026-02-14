import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Screen from '../../../../components/common/Screen';
import HelpHeader from '../../../../components/setting/help/HelpHeader';
import ContactUs from '../../../../components/setting/help/ContactUs';
import FAQSection from '../../../../components/setting/help/FAQSection';
// import HelpHeader from './components/HelpHeader';

const Help = () => {
  const [activeTab, setActiveTab] = useState<'FAQ' | 'Contact'>('FAQ');

  return (
    <Screen header={<HelpHeader />}>
      <View style={styles.container}>
        {/* Tab Buttons */}
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'FAQ' && styles.activeTab]}
            onPress={() => setActiveTab('FAQ')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'FAQ' && styles.activeTabText,
              ]}
            >
              FAQ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'Contact' && styles.activeTab]}
            onPress={() => setActiveTab('Contact')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Contact' && styles.activeTabText,
              ]}
            >
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>

        {/* Dynamic Content Rendering */}
        {activeTab === 'FAQ' ? <FAQSection /> : <ContactUs />}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  tabWrapper: {
    flexDirection: 'row',
    columnGap: 10,
    borderRadius: 30,
    padding: 5,
    marginBottom: 25,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#DDE6FF',
  },
  activeTab: {
    backgroundColor: '#2260FF',
  },
  tabText: {
    color: '#2260FF',
    fontWeight: '600',
    fontSize: 20,
  },
  activeTabText: {
    color: '#fff',
  },
  sectionContainer: {
    width: '100%',
  },
  accordionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F4FF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  accordionText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DDE6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default Help;
