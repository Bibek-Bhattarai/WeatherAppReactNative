import React, { Component } from 'react'
import { Text, View, StyleSheet, Button,TextInput } from 'react-native'
 

export default class Welcome extends Component {
 
zipPage=()=>{
  this.props.navigation.navigate('zip')
}
cityPage=()=>{
  this.props.navigation.navigate('city')
}

  
   
     
  render() {
   
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Text style={{fontSize:30}}>Welcome to Weather APP</Text>
      <Text style={{fontSize:20}}>Select Zip code or City name</Text>
      <Button title='Zip code' onPress={this.zipPage}/>
      <Button title='City name' onPress={this.cityPage}/>
      </View>
    )
  }
}
 

