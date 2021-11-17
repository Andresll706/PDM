import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { WORKS } from '../shared/works';
import Back  from '../components/back';

export default function Curriculum() {
    return (
      <View style={styles.container}>
        <Back/>
        <Card>
          {
            WORKS.map((work) => (
              <Card.Divider>
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{work.fecha}</ListItem.Title>
                        <ListItem.Subtitle>{work.desc}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
              </Card.Divider>
              ))
          }
        </Card>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
