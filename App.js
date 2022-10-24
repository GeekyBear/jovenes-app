import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DevoScreen } from './components/DevoScreen';
import { HomeScreen } from './components/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Principal' }}
        />
        <Stack.Screen
          name="Devo"
          component={DevoScreen}
          options={{ title: 'Devocionales' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
