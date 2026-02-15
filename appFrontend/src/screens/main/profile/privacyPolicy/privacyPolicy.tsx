import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../../../../components/common/Screen';
import CustomHeader from '../../../../components/header/CustomHeader';

const PrivacyPolicy: React.FC = () => {
  return (
    <Screen
      // Header ko static rakhne ke liye prop mein pass kiya
      header={<CustomHeader title="Privacy Policy" />}
    >
      <View style={styles.contentContainer}>
        {/* Last Updated Date */}
        <Text style={styles.updateDate}>Last Update: 14/08/2024</Text>

        {/* Intro Paragraphs */}
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
          diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a
          scelerisque neque, sed accumsan metus.
        </Text>

        <Text style={styles.paragraph}>
          Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt.
          Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi
          pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim
          vel neque auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed
          suscipit tortor. Nam egestas nulla posuere neque tincidunt porta.
        </Text>

        {/* Section Heading */}
        <Text style={styles.sectionTitle}>Terms & Conditions</Text>

        {/* Numbered List Section */}
        <View style={styles.listSection}>
          {[1, 2, 3, 4].map(item => (
            <View key={item} style={styles.listItem}>
              <Text style={styles.listNumber}>{item}.</Text>
              <Text style={styles.listText}>
                {item === 3
                  ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.'
                  : 'Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus ac turpis.'}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 40,
  },
  updateDate: {
    fontSize: 14,
    color: '#A9BCFE', // Light blue color as per image
    fontWeight: '500',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
    fontWeight: '200',
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#2260FF', // Theme blue color
    marginTop: 10,
    marginBottom: 15,
  },
  listSection: {
    marginTop: 5,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  listNumber: {
    fontSize: 14,
    color: '#000',
    fontWeight: '200',
    // marginRight: 0,
    width: 20,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    fontWeight: '200',
  },
});

export default PrivacyPolicy;
