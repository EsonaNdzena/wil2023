import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


const CookingScreen = ({navigation}) => {
    return (
      <NavigationContainer independent={true}>
      <ScrollView>
        <View>
        <View style={{flexDirection: 'row'}}>
          <Image 
          style={{height: 150, width: 150, marginRight: 170}}
          source={require('./img/Empowering.png')}/>
  
      
        </View>
  
        <View style={{backgroundColor: '#D9D9D9'}}>
          <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>EMPOWERING THE NATION</Text>
        </View>

        <View>
          <Text style={styles.title}> Cooking </Text>
        </View>

        <View style={{marginVertical: 20}}> 
            <Image
            style={{height: 300, width: 550, alignSelf: 'center',}}
            source={require('./img/cooking.png')}/>
        </View>

        <View>
          <Text style={styles.fees}>Fees: R1,500</Text>
        </View>
        
        <View>
          <Text style={styles.par}>
            Purpose:{'\n'} To prepare and cook nutritous family meals.{'\n'}
            Content:{'\n'}
            1. Nutritional requirements for a healthy body{'\n'}
            2. Types of protein, Carbohydrates and Vegetables{'\n'}
            3. Planning meals{'\n'}
            4. Preparation and cooking meals{'\n'}
           
          </Text>
        </View>


        <View>
          <TouchableOpacity style={styles.apply} onPress = {() => navigation.navigate('Fees')}>
            <Text style={{textAlign: 'center', color: 'white'}}>APPLY NOW</Text>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: "#5E52A9", height: 50, marginTop: 30}}>
          <Text></Text>
        </View>
        </View>
      </ScrollView>
      </NavigationContainer>
    )
}
const styles = StyleSheet.create({
  title: {
   fontSize: 26,
   fontWeight: 'bold',
   textAlign: 'center',
  },

  fees: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20
  },

  par: {
    fontSize: 25,
    textAlign: 'center',
    margin: 25
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
  apply: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    width: 100,
    backgroundColor: '#01A4FF',
    
  },
}
);

export default CookingScreen