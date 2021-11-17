import React from 'react';
import {Button, Text} from 'react-native';
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

export default function content(props) {
    const navigation = useNavigation();
    return (
        <Card>
            <Card.Divider>
                <Card.Title>{props.Subtitle}</Card.Title>
                <Card.Title>{props.Title}</Card.Title>
            </Card.Divider>
            <Card.Divider>
                <Text style={{marginBottom: 10}}>{props.Text}</Text>
                <Button title={props.LinkTitle} onPress={() => 
                        navigation.navigate(`${props.Link}`)}/>
            </Card.Divider>
        </Card>
    ); 
}