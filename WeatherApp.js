import React, { Component } from 'react'
import { Text, View, StyleSheet, Button,TextInput } from 'react-native'
import {Welcome,Zip,City} from './screen'
import {StackNavigator} from 'react-navigation'

const IntroStack=StackNavigator({
    welcome:Welcome,
    zip:Zip,
    city:City,
    
  })
export default class WeatherApp extends Component {
   render() {
    return (
       <IntroStack />
    )
  
  }
}
 