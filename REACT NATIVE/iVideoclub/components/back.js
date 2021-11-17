import React from 'react';
import {Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function back(props) {
    const navigation = useNavigation();
    return (
        <Button title="< Back" style={styles.buttonText} onPress={()=> navigation.goBack()}/>
    ); 
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        textAlign: 'center',
        width: 70,
        height: 40,
        backgroundColor: 'green',
        borderRadius: 10,
        margin: 20,
    }
});