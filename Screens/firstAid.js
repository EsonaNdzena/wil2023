import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const FirstAidScreen = ({navigation}) => {
    return (
      <NavigationContainer independent={true}>
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
          <Text style={styles.title}> First Aid </Text>
        </View>

        <View> 
            <Image
            style={{height: 300, width: 550, alignSelf: 'center'}}
            source={require('./img/firstAid.png')}/>
        </View>

        <View>
          <Text style={styles.fees}>Fees: R1,500</Text>
        </View>
        
        <View>
          <Text style={styles.par}>
            Purpose: To probide first Aid Awareness and basic life support.{'\n'}
            Content:{'\n'}
            1. Wounds and Bleeding{'\n'}
            2. Burns and fractures{'\n'}
            3. Emergency Scene Management{'\n'}
            4. Cardio-Pulmonary Resucitation (CPR){'\n'}
            5. Respitory Distress e.g Choking, Blocked airway.
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.apply} onPress = {() => navigation.navigate('Fees')}>
            <Text style={{textAlign: 'center', color: 'white'}}>APPLY NOW</Text>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: "#5E52A9", height: 50, marginTop: 20}}>
          <Text></Text>
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
   marginVertical: 20,
  },

  fees: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    margin: 15
  },

  par: {
    fontSize: 25,
    textAlign: 'left',
    margin: 15
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

export default FirstAidScreen