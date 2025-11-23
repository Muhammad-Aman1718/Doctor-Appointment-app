// import React from 'react';
// import {
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   View,
//   StyleSheet,
// } from 'react-native';

// interface ScreenProps {
//   children: React.ReactNode;
//   scroll?: boolean; // optional prop — agar scroll chahiye ya nahi
//   style?: object;
// }

// const Screen: React.FC<ScreenProps> = ({ children, scroll = true, style }) => {
//   const Wrapper = scroll ? ScrollView : View;

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <Wrapper
//         style={[styles.container, style]}
//         contentContainerStyle={scroll ? styles.contentContainer : undefined}
//         showsVerticalScrollIndicator={false}
//       >
//         {children}
//       </Wrapper>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     flexGrow: 1,
//   },
// });

// export default Screen;

import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenProps {
  children: React.ReactNode;
  scroll?: boolean;
  style?: object;
}

const Screen: React.FC<ScreenProps> = ({ children, scroll = true, style }) => {
  const Wrapper = scroll ? ScrollView : View;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} // adjust if header overlaps
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Wrapper
            style={[styles.container, style]}
            contentContainerStyle={scroll ? styles.contentContainer : undefined}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </Wrapper>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default Screen;
