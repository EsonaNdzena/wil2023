import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Card} from 'react-native-paper'

const MonthlyCourse = ({navigation}) => {
  return (

    <NavigationContainer independent={true}>
      
      <View>
        <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image 
          style={{height: 150, width: 150, marginRight: 170}}
          source={require('./img/Empowering.png')}/>
        </View>
  
        <View style={{backgroundColor: '#D9D9D9'}}>
          <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold',}}>EMPOWERING THE NATION</Text>
        </View>
  
        
      <View>
        <Text style={{fontSize: 32, fontWeight: 'bold', color: 'black', textAlign: 'center', marginVertical: 10}}>6 Months Courses</Text>
      </View>

      <View>
        <Text></Text>
      </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 35}}>
          <Card>
            <TouchableOpacity onPress = {() => navigation.navigate('First Aid') }>
                <Image 
                style={{height: 200, width: 250}}
                source={require('./img/firstAid.png')}/>
            </TouchableOpacity>
            <Text style={styles.title}>First Aid</Text>
          </Card>
      
          <Card>
            <TouchableOpacity onPress = {() => navigation.navigate("Sewing")}>
                  <Image 
                    style={{height: 200, width: 250}}
                    source={require('./img/sewing.png')}/>
                  <Text style={styles.title}>Sewing</Text>
            </TouchableOpacity>
          </Card>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 25}}>
            <Card>
              <TouchableOpacity onPress = {() => navigation.navigate("Landscaping")}>
                  <Image
                    style={{height: 200, width: 250}}
                    source={require('./img/landscaping.jpg')}/>
                  <Text style={styles.title}>Landscaping</Text>
              </TouchableOpacity>
            </Card>
            <Card>
              <TouchableOpacity onPress = {() => navigation.navigate('Life Skills')}>
                  <Image
                    style={{height: 200, width: 250}}
                    source={require('./img/lifeSkills.png')}/>
                    <Text style={styles.title}>Life Skills</Text>
              </TouchableOpacity>
            </Card>
            </View>

           

        <View style={{backgroundColor: "#5E52A9", height: 50, marginTop: 60}}>
          <Text></Text>
        </View>
        
            
          </ScrollView>
        </View>
    </NavigationContainer>

  )
};

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

export default MonthlyCourse