import React from 'react';
import {Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function back(props) {
    const navigation = useNavigation();
    return (
        <Button title="< Back"  onPress={()=> navigation.goBack()}/>
    ); 
}