import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Back  from '../components/back';

export default function Curriculum() {
    return (
      <View>
        <Back/>
        <Card>
          <Card.Divider>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>2021-Actualidad</ListItem.Title>
                    <ListItem.Subtitle>Máster de Desarrollo de Aplicaciones y Servicios Web en la Universidad de Alicante</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
          </Card.Divider>
          <Card.Divider>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>2017-2021</ListItem.Title>
                    <ListItem.Subtitle>Grado de Ingeniería Multimedia en la Universidad de Alicante</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
          </Card.Divider>
        </Card>
      </View>
    );
}