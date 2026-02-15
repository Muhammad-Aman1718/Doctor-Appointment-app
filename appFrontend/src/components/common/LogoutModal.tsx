import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

interface LogoutModalProps {
  isVisible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  isVisible,
  onClose,
  onLogout,
}) => {
  return (
    <Modal
      animationType="slide" // Neeche se upar aane ke liye
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.bottomSheet}>
              {/* Top Indicator (Choti line jo design mein aksar hoti hai) */}
              <View style={styles.indicator} />

              <Text style={styles.title}>Logout</Text>
              <Text style={styles.subTitle}>
                are you sure you want to log out?
              </Text>

              <View style={styles.buttonRow}>
                {/* Cancel Button */}
                <TouchableOpacity
                  style={[styles.button, styles.cancelBtn]}
                  onPress={onClose}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.btnText, styles.cancelText]}>
                    Cancel
                  </Text>
                </TouchableOpacity>

                {/* Yes, Logout Button */}
                <TouchableOpacity
                  style={[styles.button, styles.logoutBtn]}
                  onPress={onLogout}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.btnText, styles.logoutText]}>
                    Yes, Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#2260FF54',
    // Semi-transparent background
    justifyContent: 'flex-end', // Content ko bottom par rakhne ke liye
  },
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40, // Top corners rounded
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 40, // Bottom safe area space
    alignItems: 'center',
    width: '100%',
  },
  indicator: {
    width: 40,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#2260FF', // Themed blue
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 15,
  },
  button: {
    flex: 1,
    height: 56,
    borderRadius: 30, // Pill shape buttons
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: '#DDE6FF', // Light blue background
  },
  logoutBtn: {
    backgroundColor: '#2260FF', // Solid blue background
  },
  btnText: {
    fontSize: 20,
    fontWeight: '500',
  },
  cancelText: {
    color: '#2260FF',
  },
  logoutText: {
    color: '#FFFFFF',
  },
});

export default LogoutModal;
