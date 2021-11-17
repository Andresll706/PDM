import React from 'react';
import { StyleSheet, View , Button} from 'react-native';
import Content from '../components/content';
import Back  from '../components/back';

export default function Autor() {
    return (
      <View style={styles.container}>
        <Back/>
        <Content 
                Title="Información" 
                Subtitle="" 
                Text="Aplicación desarollada por Andrés Rojas. A continuación puede consultar
                más información sobre el autor" 
                LinkTitle="Consultar información"
                Link="Curriculum" 
            />
          <Button title="Correo:andresll706@gmail.com" onPress={() => console.log("correo!")}/>
          <Button title="Twitter:@Andresll2" onPress={() => console.log("Twitter!")}/>
          <Button title="Telefono:619954039" onPress={() => console.log("Telefono!")}/>
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
  