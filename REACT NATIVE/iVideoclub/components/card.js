import React from 'react';
import {Card} from 'react-bootstrap';

export default function card(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.movie.poster} />
            <Card.Header>
                <Card.Title>{props.movie.title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <b>Director:</b> {props.movie.director}<br/>
                <b>Año:</b> {props.movie.year}<br/>
                <b>Sinopsis:</b> {props.movie.synopsis}
            </Card.Body>
        </Card>
    ); 
}