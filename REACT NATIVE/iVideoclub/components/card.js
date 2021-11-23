import React from 'react';
import { Card, Text } from 'react-native-elements';
import { ScrollView} from 'react-native';

export default function card(props) {
    return (
        <Card>
            <ScrollView>
                <Card.Image source={{uri:props.movie.poster}} 
                            style={{height:500,resizeMode: "stretch"}}/>
                <Card.Divider>
                    <Card.Title>{props.movie.title}</Card.Title>
                </Card.Divider>
                <Card.Divider style={{marginBottom:100}}>
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
            </ScrollView>
        </Card>
    ); 
}