import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import Card from '../components/card';
import Back  from '../components/back';

export default function Detail(props) {
    let movie = props.route.params.movie; 
    return (
      <View>
        <Back/>
        <Card movie={movie}/>
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
