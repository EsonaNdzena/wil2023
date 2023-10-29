import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const LandscapingScreen = ({navigation}) => {
    return (
      <NavigationContainer independent={true}>
        <View>
        <View style={{flexDirection: 'row'}}>
          <Image 
          style={{height: 150, width: 150, marginRight: 170}}
          source={require('./img/Empowering.png')}/>
  
        <TouchableOpacity>
          <Image
          style={{height: 50, width: 50, margin: 50,}}
          source={require('./img/search.png')}/>
        </TouchableOpacity>
  
        <TouchableOpacity onPress = {() => navigation.navigate('Menu')}>
          <Image
          style={{height: 50, width: 50, margin: 50,}}
          source={require('./img/menu.png')}/>
    
        </TouchableOpacity>
        </View>
  
        <View style={{backgroundColor: '#D9D9D9'}}>
          <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>EMPOWERING THE NATION</Text>
        </View>

        <View>
          <Text style={styles.title}> Landscaping </Text>
        </View>

        <View> 
            <Image
            style={{height: 300, width: 550, alignSelf: 'center'}}
            source={require('./img/landscaping.jpg')}/>
        </View>

        <View>
          <Text style={styles.fees}>Fees: R1,500</Text>
        </View>
        
        <View>
          <Text style={styles.par}>
            Purpose: To probide landscaping services for new and established gardens.{'\n'}
            Content:{'\n'}
            1. Indigenous and exotic plants and trees.{'\n'}
            2. Fixed stractures (Fountains, statues, benches, tables, built-in braai).{'\n'}
            3. Balancing of plant and trees in a garden {'\n'}
            4. Aesthetics of plant shapes and colours{'\n'}
            5. Garden layout
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.apply} onPress = {() => navigation.navigate('Fees')}>
            <Text style={{textAlign: 'center', color: 'white'}}>APPLY NOW</Text>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: "#5E52A9", height: 50, marginTop: 50}}>
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
  },

  fees: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20
  },

  par: {
    fontSize: 25,
    textAlign: 'center'
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

export default LandscapingScreen