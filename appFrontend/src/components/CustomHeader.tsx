// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { useAppNavigation } from '../hooks/useAppNavigation';
// import Icon from 'react-native-vector-icons/Entypo';

// interface CustomHeaderProps {
//   title?: string;
// }

// const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
//   const navigation = useAppNavigation();
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.arrow}
//         onPress={() => navigation.goBack()}
//       >
//         <Icon
//           name="chevron-thin-left"
//           size={24}
//           color="#2260FF"
//           style={{
//             width: 35,
//             textShadowColor: '#2260FF',
//             textShadowOffset: { width: 0.5, height: 0.5 },
//             textShadowRadius: 1,
//           }}
//         />
//       </TouchableOpacity>
//       <Text style={styles.pageTitle}>{title}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 70,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   arrow: {
//     flex: 1,
//   },
//   pageTitle: {
//     color: '#2260FF',
//     flex: 1.5,
//     alignItems: 'center',
//     fontSize: 24,
//     fontWeight: '600',
//   },
// });

// export default CustomHeader;

// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { useAppNavigation } from '../hooks/useAppNavigation';
// import Icon from 'react-native-vector-icons/Entypo';

// interface CustomHeaderProps {
//   title?: string;
// }

// const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
//   const navigation = useAppNavigation();
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.arrow}
//         onPress={() => navigation.goBack()}
//       >
//         <Icon
//           name="chevron-thin-left"
//           size={24}
//           color="#2260FF"
//           style={{
//             width: 35,
//             textShadowColor: '#2260FF',
//             textShadowOffset: { width: 0.5, height: 0.5 },
//             textShadowRadius: 1,
//           }}
//         />
//       </TouchableOpacity>

//       <View style={styles.titleContainer}>
//         <Text style={styles.pageTitle}>{title}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 70,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center', // Center content
//   },
//   arrow: {
//     position: 'absolute',
//     left: 15, // Left side pe fixed
//     zIndex: 1,
//   },
//   titleContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   pageTitle: {
//     color: '#2260FF',
//     fontSize: 24,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });

// export default CustomHeader;

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppNavigation } from '../hooks/useAppNavigation';
import Icon from 'react-native-vector-icons/Entypo';

interface CustomHeaderProps {
  title?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-thin-left"
            size={24}
            color="#2260FF"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.centerContainer}>
        <Text style={styles.pageTitle}>{title}</Text>
      </View>

      {/* Right side for spacing balance */}
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
    width: 50, // fixed width for symmetry
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightContainer: {
    width: 50, // same width as left for perfect centering
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
