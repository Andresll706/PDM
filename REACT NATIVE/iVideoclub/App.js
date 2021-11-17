import React from 'react';
import { StyleSheet, CancelButton} from 'react-native';
import { NavigationContainer , getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

import Home from './screens/Home';
import Autor from './screens/Autor';
import Curriculum from './screens/Curriculum';
import VideoClub from './screens/VideoClub';
import Detail from './screens/Detail';


function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return 'Inicio';
    case 'Autor':
      return 'Autor';
    case 'Curriculum':
      return 'Curriculum';
    case 'VideoClub':
      return 'VideoClub';
    case 'Detail':
      return 'Detalle';
  }
}

const Stack = createNativeStackNavigator();

function HomeStackNavigator()
{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' , headerShown: false , }}
      />
      <Stack.Screen
        name="Autor"
        component={Autor}
        options={{ title: 'Autor'  , headerShown: false }}
      />
      <Stack.Screen
        name="Curriculum"
        component={Curriculum}
        options={{ title: 'Curriculum' , headerShown: false   }}
      />
      <Stack.Screen
        name="VideoClub"
        component={VideoClub}
        options={{ title: 'VideoClub' , headerShown: false   }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ title: 'Detail' , headerShown: false   }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
                        screenOptions={{
                          drawerStyle: {
                            backgroundColor: '#0072ce',
                            width: 240
                          }
                        }}>
        <Drawer.Screen name="Home" component={HomeStackNavigator} 
                       options={({ navigation, route }) => ({ 
                        headerTitle: getHeaderTitle(route),
                        headerStyle:{backgroundColor:'#0072ce'}, 
                        headerTitleStyle: {color: 'white'} ,
                       
                       })}
        />
        <Drawer.Screen name="About" component={Autor}  
                       options={({ route }) => ({ 
                        headerStyle:{backgroundColor:'#0072ce'}, 
                        headerTitleStyle: {color: 'white'} 
                       })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

