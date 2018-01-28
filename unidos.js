import React, {Componenet} from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style ={styles.container}>
        <Text style ={styles.paragraph}>
          Welcome to Unidos! Helping el pueblo!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    marginTop:50,
    padding:20,
    backgroundColor:'#ffffff',
  },
  paragraph:{
    margin:24,
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    color:'#34495E',
  },
});
