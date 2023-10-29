import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Touchable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Contact = ({navigation}) => {
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

        <View style={{marginVertical: 20}}>
          <Text  style={{color: '#5E52A9', fontSize: 40, textAlign: 'center'}}>Contacts</Text>
        </View>

        <View style={{margin: 30}}>
          <Text style={{color: '#5E52A9', fontSize: 24, textAlign: 'center'}}> Support us on: </Text>
          <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
          <Image style={styles.logoNerd} source={require('./img/insta.png')} />
          <Image style={styles.logoNerd} source={require('./img/twitter.png')} />
          <Image style={styles.logoNerd} source={require('./img/threads.png')} />
          <Image style={styles.logoNerd} source={require('./img/facebook.png')} />

        </View>

        <View style={{marginVertical: 30}}>
          <Text style={{color: '#5E52A9', fontSize: 24, textAlign: 'center'}}>Email us on:</Text>
          <TouchableOpacity>
            <Text  style={{ fontSize: 24, textAlign: 'center'}}>empowertn@etn.co.za</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text  style={{color: '#5E52A9', fontSize: 24, textAlign: 'center'}}>Call Us On:</Text>
          <Text  style={{ fontSize: 24, textAlign: 'center'}}>+27 (87) 338 8008</Text>
        </View>

        <View>
          <Text  style={{color: '#5E52A9', fontSize: 30, textAlign: 'center', marginVertical: 20}}>VISIT OUR CENTRES</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10}}>
          <TouchableOpacity>
            <Image
            style={{height: 150, width: 150}} 
            source={require('./img/sandtonMap.png')}/>
          </TouchableOpacity>
         
          <TouchableOpacity>
            <Image
             style={{height: 150, width: 150}}
             source={require('./img/midrandMap.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
             style={{height: 150, width: 150}}
             source={require('./img/rosebankMap.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>
          <Text style={{ fontSize: 30}}>Sandton</Text>
          <Text style={{ fontSize: 30}}>Midrand</Text>
          <Text style={{ fontSize: 30}}>RoseBank</Text>
        </View>
        </View>


        </View>
       
        <View style={{backgroundColor: "#5E52A9", height: 50, marginTop: 30}}>
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

export default Contact