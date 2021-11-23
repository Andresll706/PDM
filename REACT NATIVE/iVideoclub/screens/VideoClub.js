import React from 'react';
import { StyleSheet, View , Text, ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { CONFIG } from "../shared/config";
import Back  from '../components/back';

export default class VideoClub extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          movies: [],
          isLoading: false,
          error: false
      };
  }

  componentDidMount() {
      this.loadData();
  }

  async loadData() {
      try {
          this.setState({ isLoading: true });
          let response = await fetch(CONFIG.baseUrl);
          let data = await response.json();
          console.log(data);
          this.setState({ movies: data, isLoading: false });
      } catch (error) {
          console.log(error);
          this.setState({ error: error, isLoading: false });
      }
  }

  render() {
      const { movies, error, isLoading } = this.state;
      if (error){
          return(
              <View style={styles.container}>
                  <Text>{error.message}</Text>
              </View>
          );
      }
      if (isLoading){
          return( 
              <View style={styles.container}>
                  <Text>Loading...</Text>
              </View>
          );
      }
      return (
        <View>
          <Back/>
          <ScrollView>
            {
              movies.map((peli) => (
                <ListItem
                  bottomDivider
                  key={peli.id}
                  onPress={() => {
                    this.props.navigation.navigate('Detail', {
                      movie: peli,
                    });
                  }}
                >
                  <Avatar source={{ uri: peli.poster }} />
                  <ListItem.Content>
                    <ListItem.Title>{peli.title}</ListItem.Title>
                    <ListItem.Subtitle>{peli.director}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))
            }
            <Text style={{marginBottom:100}}></Text>
          </ScrollView>
        </View> 
      );
  }
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
});
  