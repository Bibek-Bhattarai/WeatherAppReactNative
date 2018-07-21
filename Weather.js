import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Weather = ({ temp, weather, minTemp, maxTemp, location, weatherDesc }) => {
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.locationText}>{location}</Text>
        <Text style={styles.tempText}>Temperature</Text>
        <Text style={styles.tempText}>{temp}˚C</Text>
        <Text style={styles.mintemp}>Min Temp: {minTemp}˚C</Text>
        <Text style={styles.maxtemp}>Max Temp: {maxTemp}˚C</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Weather Condition</Text>
        <Text style={styles.title}>{weather}</Text>
        <Text style={styles.subTitle}>{weatherDesc}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#add8e6',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    fontSize: 48,
    color: '#fff',

  },
  tempText: {
    fontSize: 32,
    color: '#fff',
  },
  mintemp: {
    fontSize: 20,
    color: '#fff',
  },
  maxtemp: {
    fontSize: 20,
    color: '#fff',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    color: '#fff',
  },
  subTitle: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Weather
