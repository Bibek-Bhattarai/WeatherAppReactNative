import React, { Component } from 'react'
import {View} from 'react-native'
import WeatherApp from '/WeatherApp'
 
export default class App extends Component {
   
  render() {
   
    return (
      <View style={{flex:1}}> 
       <WeatherApp/>
       </View>
    )
  
  }
}

 
 