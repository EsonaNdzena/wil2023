import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Card} from 'react-native-paper'


const WeeklyCourse = ({navigation}) => {
    return (
      <NavigationContainer independent={true}>
        <View>
        <View style={{flexDirection: 'row',}}>
          <Image 
          style={{height: 150, width: 150, marginRight: 170}}
          source={require('./img/Empowering.png')}/>
        </View>
  
        <View style={{backgroundColor: '#D9D9D9'}}>
          <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>EMPOWERING THE NATION</Text>
        </View>

        <View>
            <Text style={styles.title}>6 Week Courses </Text>
        </View>

        <View>
          
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 30}}>
          <Card>
            <TouchableOpacity onPress = {() => navigation.navigate('Child Minding')}>
            <Image
              style={{height: 200, width: 250}}
              source={require('./img/childMinding.png')}/>
            <Text style={styles.title}> Child Minding </Text>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity onPress = {() => navigation.navigate('Cooking')}>
              <Image
                style={{height: 200, width: 250}}
                source={require('./img/cooking.png')}/>
              <Text style={styles.title}>Cooking</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'left', marginHorizontal: 30 }}>
          <Card>
            <TouchableOpacity onPress = {() => navigation.navigate('Gardening & Maintanance')}>
              <Image
                style={{height: 200, width: 267}}
                source={require('./img/GardenM.jpg')}/>
              <Text style={styles.title}>Garden & maintenance</Text>
            </TouchableOpacity>
          </Card>
        </View>
        
        </View>
      </NavigationContainer>
    )
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
   backgroundColor: '#D9D9D9',
   
   marginBottom: 20,
   margin: 5,
   height: 50,
   flexDirection: 'row',
   justifyContent: 'space-evenly'
  },
}
);

export default WeeklyCourse