import React, { Component } from 'react'
import { Text, View, StyleSheet, Button,TextInput } from 'react-native'
import Weather from '../Weather'

export default class Zip extends Component {
  state = {
    isLoading: true,
    Temp: 0,
    MaxTemp:0,
    MinTemp:0,
    Weather:'',
    weatherDesc:'',
    location:'',
    zip:''
  }
  componentDidUpdate(prevState) {
    if (this.state.zip !== prevState.zip) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?zip=${
          this.state.zip
        },us&APPID=${'2b522af8a8e662cc2ad7c55054f68e31'}&units=metric`
      )
        .then(res => res.json())
        .then(json => {
          this.setState({
            Temp: json.main.temp,
            location:json.name,
            Weather: json.weather[0].main,
            weatherDesc: json.weather[0].description,
            MinTemp: json.main.temp_min,
            MaxTemp: json.main.temp_max,
          });
        });
    }
  }
  updateText(text){
this.setState({
  zip:text
})
  }
  getWeather=()=>{
    
    this.setState({
     isLoading: false,
    })
  }
  formData=()=>{
    return(
        <View>
            <TextInput  
            value={this.state.zipp}
            style={{height:50,marginBottom:10}}
            placeholder='Enter Zip code' 
            autoCorrect={false}
            onChangeText={text=>this.updateText(text)}
          
            />
             <Button title="Submit" onPress={this.getWeather} />
             </View>
        
    )}
    weatherData=()=>{
      if(this.state.location !==''){
      return(
        <Weather 
          temp={this.state.Temp} 
          weather={this.state.Weather}
          minTemp={this.state.MinTemp}
          maxTemp={this.state.MaxTemp}
          location={this.state.location}
          weatherDesc={this.state.weatherDesc}
          />
      )
      }
      else{
        return(
          <View>
             {this.formData()}
            <Text style={{color:'red'}}> 
            Something went wrong!!!Enter the zipcode again!!!
            </Text>
          </View>        
        )
      }
      }
  render() {
   
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
            this.formData()     
        ) : ( 
          this.weatherData() 
          )}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,  
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  }, 
})

