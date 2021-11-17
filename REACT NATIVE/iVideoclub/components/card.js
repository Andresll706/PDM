import React from 'react';
import { Image } from 'react-native'
import { Card } from 'react-native-elements'

export default function card(props) {
    return (
        <Card>
            <Card.Image source={props.movie.poster}/>
            <Card.Divider>
                <Card.Title>{props.movie.title}</Card.Title>
            </Card.Divider>
            <Card.Divider>
                <b>Director:</b> {props.movie.director}<br/>
                <b>Año:</b> {props.movie.year}<br/>
                <b>Sinopsis:</b> {props.movie.synopsis}
            </Card.Divider>
        </Card>
    ); 
}