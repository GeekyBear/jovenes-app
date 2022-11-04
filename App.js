import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CancioneroScreen } from './components/CancioneroScreen';
import { CronoScreen } from './components/CronoScreen';
import { DevoScreen } from './components/DevoScreen';
import { HomeScreen } from './components/HomeScreen';
import { LandingScreen } from './components/LandingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ title: 'Campamento 2023', headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Campamento 2023', headerBackVisible: false }}
          />
          <Stack.Screen
            name="Devo"
            component={DevoScreen}
            options={{ title: 'Devocionales' }}
          />
          <Stack.Screen
            name="Crono"
            component={CronoScreen}
            options={{ title: 'Cronograma' }}
          />
          <Stack.Screen
            name="Cancionero"
            component={CancioneroScreen}
            options={{ title: 'Cancionero' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
