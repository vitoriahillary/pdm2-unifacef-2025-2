import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DiaScreen from './screens/DiaScreen';
import SemanaScreen from './screens/SemanaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
 return (
 <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Inicio" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Stack.Screen name="Dia" component={DiaScreen} options={{ title: 'Compromissos do Dia' }} />
      <Stack.Screen name="Semana" component={SemanaScreen} options={{ title: 'Compromissos da Semana' }} />
    </Stack.Navigator>
 </NavigationContainer>
 )
}