import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem, Card } from 'react-native-elements';
import Content from '../components/content';
import Back  from '../components/back';

export default function Autor() {
    const navigation = useNavigation();
    return (
      <View>
        <Back/>
        <Card>
          <Card.Divider>
            <Text style={{textAlign:'center'}}>INFORMACIÓN</Text>
            <Text style={{marginBottom: 50, textAlign:'center'}}>
              Aplicación desarollada por Andrés Rojas. A continuación puede consultar
              más información sobre el autor
            </Text> 
          </Card.Divider>
          <ListItem bottomDivider onPress={() => {navigation.navigate('Curriculum');}}>
            <ListItem.Content>
              <ListItem.Title>Currilum Vitae</ListItem.Title>
              <ListItem.Chevron />
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Correo:</ListItem.Title>
              <ListItem.Subtitle>andresll706@gmail.com</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Twitter</ListItem.Title>
              <ListItem.Subtitle>@Andresll2</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Telefono:</ListItem.Title>
              <ListItem.Subtitle>619954039</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </Card>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
