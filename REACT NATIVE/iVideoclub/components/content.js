import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function content(props) {
    const navigation = useNavigation();
    return (
        <Card>
            <Card.Header>
                <Card.Subtitle className="mb-2 text-muted">{props.Subtitle}</Card.Subtitle>
                <Card.Title>{props.Title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>{props.Text}</Card.Text>
                <Button title={props.LinkTitle} onPress={() => 
                        navigation.navigate(`${props.Link}`)}/>
            </Card.Body>
        </Card>
    ); 
}