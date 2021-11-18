import React from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';
import Content from '../components/content';

export default function Home(){   
    return (
        <View>
            <Content 
                    Title="Bienvenido a" 
                    Subtitle="iVideoClub" 
                    Text="iVideoClub es una aplicación desarrollada con Ionic. 
                     Para acceder a la gestión del videoclub pulsa el siguiente boton:" 
                    LinkTitle="Acceso a iVideoClub"
                    Link="VideoClub" 
            />
            <Content 
                    Title="Información sobre el autor" 
                    Subtitle="" 
                    Text=" Aplicación desarollada por Andrés Rojas " 
                    LinkTitle="Consultar información"
                    Link="Autor" 
            />
       </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
});
  
  