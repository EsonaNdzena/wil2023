import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';



    

const Home = ({navigation}) => {
    return (
      <NavigationContainer independent={true}>
      <View >
        <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image 
          style={{height: 150, width: 150, marginRight: 170}}
          source={require('./img/Empowering.png')}/>

        
        </View>
  
        <View style={{backgroundColor: '#D9D9D9'}}>
          <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: 'black'}}>EMPOWERING THE NATION</Text>
        </View>
  
        
      
        <View style={{marginTop: 30}}>
          <Image
          style={{height: 320, width: 420, alignSelf: 'center'}}
          source={require('./img/domesticWorkers.png')}/>
        </View>
  
        <View>
          <Text style={styles.title}>Equipping Domestic workers and Gardeners {'\n'} with Marketable Skills </Text>
        </View>
  
        <View style={{margin: 30,}}>
          <Text style={{textAlign: 'center', fontSize: 25}}> Empowering The Nation was Established in 2018 and offers courses in{'\n'} Johannesburg. Hundreds of domestic workers and gardeners have been{'\n'} trained{'\n'} on both the Six-Months long learnership and Six-Week Short Skills Training{'\n'} Programmes to empower themselves and can{'\n'} provide more marketable skills.</Text>
        </View>
  
        <View style={styles.buttn2}>
          <TouchableOpacity
          style={{backgroundColor: '#01A4FF'}}
          onPress = {() => navigation.navigate('Monthly Course')}
          >
          <Text style={{fontSize: 25, color: 'white',}}> Six-Months Courses </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor: '#01A4FF'}}
           onPress ={() => navigation.navigate('Weekly Course')}>
            <Text style={{fontSize: 25, color: 'white'}}> Six-Week Courses </Text>
          </TouchableOpacity>
        </View>
  
  
       
  
        <View style={{backgroundColor: "#5E52A9", height: 50}}>
          <Text></Text>
        </View>
        </ScrollView>
      </View>
      </NavigationContainer>
    );
  }
  
  const styles = StyleSheet.create({
   title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
   },
  
   horizontalLayout: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20
   },
  
   button: {
    backgroundColor: '#5E52A9',
    paddingLeft: 180,
    marginLeft: 2,
    alignSelf: 'auto',
   },
  
   buttn2: {
   
    borderRadius: 180,
    marginBottom: 20,
    margin: 5,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
   },
  });
  
  export default Home