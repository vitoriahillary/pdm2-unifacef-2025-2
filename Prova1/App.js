import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NameScreen from './screens/NameScreen';
import Image1Screen from './screens/Image1Screen';
import Image2Screen from './screens/Image2Screen';
import IconsScreen from './screens/IconsScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="Image1" component={Image1Screen} />
        <Stack.Screen name="Image2" component={Image2Screen} />
        <Stack.Screen name="Icons" component={IconsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
