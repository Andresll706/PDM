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
        <View style={styles.container}>
          <Back/>
          <ScrollView>
            {
              movies.map((movie) => (
                <ListItem
                  bottomDivider
                  key={movie.id}
                  onPress={() => {
                    this.props.navigation.navigate('Detail', {
                      movie: movies[movie.id-1],
                    });
                  }}
                >
                  <Avatar source={{ uri: movie.poster }} />
                  <ListItem.Content>
                    <ListItem.Title>{movie.title}</ListItem.Title>
                    <ListItem.Subtitle>{movie.director}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))
            }
          </ScrollView>
        </View> 
      );
  }
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
});
  