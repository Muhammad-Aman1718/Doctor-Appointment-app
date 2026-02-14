import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

const FAQSection: React.FC = () => {
  // Aap yahan apni marzi ke FAQs add kar sakte hain
  const faqs = [
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
  ];

  return (
    <View style={styles.container}>
      {faqs.map((question, index) => (
        <TouchableOpacity key={index} style={styles.accordionItem} activeOpacity={0.7}>
          <Text style={styles.questionText}>{question}</Text>
          {/* Blue color icon as per design */}
          <ChevronDown size={20} color="#2260FF" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  accordionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F4FF', // Light theme blue
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  questionText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
});

export default FAQSection;