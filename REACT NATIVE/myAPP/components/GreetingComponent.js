import React from 'react';
import { Text } from 'react-native';

export default function Greeting(props) {
    return (
        <Text>¡Hola {props.name}!</Text>
    );
}