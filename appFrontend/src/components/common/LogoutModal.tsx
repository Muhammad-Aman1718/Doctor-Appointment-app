import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

interface LogoutModalProps {
  isVisible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isVisible, onClose, onLogout }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      {/* Background Overlay - Is par click karne se modal band ho jayega */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            {/* Modal Box */}
            <View style={styles.modalContainer}>
              <Text style={styles.title}>Logout</Text>
              <Text style={styles.subTitle}>are you sure you want to log out?</Text>

              <View style={styles.buttonRow}>
                {/* Cancel Button */}
                <TouchableOpacity 
                  style={[styles.button, styles.cancelBtn]} 
                  onPress={onClose}
                >
                  <Text style={[styles.btnText, styles.cancelText]}>Cancel</Text>
                </TouchableOpacity>

                {/* Yes, Logout Button */}
                <TouchableOpacity 
                  style={[styles.button, styles.logoutBtn]} 
                  onPress={onLogout}
                >
                  <Text style={[styles.btnText, styles.logoutText]}>Yes, Logout</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 30, // Rounded corners as per design
    padding: 25,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2260FF', // Themed Blue
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 15,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: '#DDE6FF', // Soft blue
  },
  logoutBtn: {
    backgroundColor: '#2260FF', // Solid blue
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
  },
  cancelText: {
    color: '#2260FF',
  },
  logoutText: {
    color: '#FFFFFF',
  },
});

export default LogoutModal;