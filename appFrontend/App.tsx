/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import RootNavigation from './src/navigation/stackNavigation/rootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
