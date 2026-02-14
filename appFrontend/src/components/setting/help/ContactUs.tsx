import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Headset,
  Globe,
  MessageCircle,
  Facebook,
  Instagram,
  ChevronRight,
} from 'lucide-react-native';

const ContactUs: React.FC = () => {
  const contactOptions = [
    { name: 'Customer Service', Icon: Headset },
    { name: 'Website', Icon: Globe },
    { name: 'Whatsapp', Icon: MessageCircle },
    { name: 'Facebook', Icon: Facebook },
    { name: 'Instagram', Icon: Instagram },
  ];

  return (
    <View style={styles.container}>
      {contactOptions.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.contactItem}
          activeOpacity={0.6}
        >
          {/* Blue circle background for icons */}
          <View style={styles.iconCircle}>
            <item.Icon size={22} color="#2260FF" />
          </View>

          <Text style={styles.contactName}>{item.name}</Text>

          {/* Right side arrow */}
          <ChevronRight size={20} color="#2260FF" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 5,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DDE6FF', // Soft blue icon background
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});

export default ContactUs;
