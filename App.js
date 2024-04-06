import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Escolha from './src/screens/Escolha';
import IMC from './src/screens/IMC';
import Temperatura from './src/screens/Temperatura';
import Raizes from './src/screens/Raizes';

const Stack = createStackNavigator();

export default function App() {
  return (
  
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "Login" component={Login}/>
            <Stack.Screen name = "Escolha" component={Escolha}/>
            <Stack.Screen name = "IMC" component={IMC}/>
            <Stack.Screen name = "Temperatura" component={Temperatura}/>
            <Stack.Screen name = "Raizes" component={Raizes}/>
          </Stack.Navigator>
        </NavigationContainer>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
