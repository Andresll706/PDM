import React from 'react';
import { Card, Text } from 'react-native-elements';

export default function card(props) {
    return (
        <Card>
            <Card.Image source={{uri:props.movie.poster}} 
                        style={{maxWidth:200, maxHeight:200}}/>
            <Card.Divider>
                <Card.Title>{props.movie.title}</Card.Title>
            </Card.Divider>
            <Card.Divider>
                <Text>
                    Director: {props.movie.director}
                </Text>
                <Text>
                    Año: {props.movie.year}
                </Text>
                <Text>
                    Sinopsis: {props.movie.synopsis}
                </Text>
            </Card.Divider>
        </Card>
    ); 
}