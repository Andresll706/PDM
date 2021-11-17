import React from 'react';
import { StyleSheet, View} from 'react-native';
import { ListItem } from 'react-native-elements';
import { WORKS } from '../shared/works';
import Back  from '../components/back';

export default function Curriculum() {
    return (
      <View style={styles.container}>
        <Back/>
        {
            WORKS.map((work) => (
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{work.fecha}</ListItem.Title>
                    <ListItem.Subtitle>{work.desc}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            ))
        }
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
  