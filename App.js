import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import screen1 from './screen/screen1'
import screen2 from './screen/screen2'
import screen3 from './screen/screen3'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="screen1" component={screen1} />
        <Stack.Screen name="screen2" component={screen2} />
        <Stack.Screen name="screen3" component={screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
