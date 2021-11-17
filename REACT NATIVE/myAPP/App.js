import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Greeting from './components/GreetingComponent';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Icon name="md-information-circle-outline" type="ionicon"/>
//       <Button
//         title="Púlsame"
//         onPress={() => console.log('Botón pulsado')}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="mundo" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
