import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { ChevronRight, LucideIcon } from 'lucide-react-native';

// Props ki interface define kar letay hain
interface MenuItemProps {
  icon: LucideIcon; // Lucide icon component ka type
  title: string; // Button ka text
  onPress: () => void; // Click function
  showArrow?: boolean; // Optional (default true)
  iconColor?: string; // Optional color hex
  style?: ViewStyle; // Additional container styling
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon: Icon,
  title,
  onPress,
  showArrow = true,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: `#CAD6FF` }]}>
          <Icon size={24} color="#2260FF" strokeWidth={2} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>

      {showArrow && <ChevronRight size={24} color="#CAD6FF" strokeWidth={2} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
});

export default MenuItem;
