import { useFonts } from 'expo-font';
import Main from './src/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import React from 'react';
import QrCode from './src/components/QRCode';




 

  //const Stack = createStackNavigator();

//export default function App() {
  /*return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen nome = "Home" component= {Home} />
        <Stack.Screen nome = "Sobre" component= {Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/

const Stack = createStackNavigator();

function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="QrCode" component={QrCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;