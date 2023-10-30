import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Checkbox, Card, } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const Fees = ({navigation}) => {
  const [checked, setChecked,] = React.useState(false);

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

        <View style={{marginVertical: 20}}>
          <Text style={styles.title}>Calculating Fees</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginRight: 50, marginTop: 20}}>
          <Text style={{fontWeight: 'bold', marginRight: 80}}>First Name</Text>
          <Text style={{fontWeight: 'bold', marginRight: 10 }}>Last Name</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 60}}>
          <TextInput style={styles.input}/>
          <TextInput style={styles.input}/>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginRight: 20, marginTop: 40}}>
          <Text style={{fontWeight: 'bold', marginRight: 80}}>Email</Text>
          <Text style={{fontWeight: 'bold', marginRight: 10}}>          Phone Number </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 60}}>
          <TextInput style={styles.input}/>
          <TextInput style={styles.input}/>
        </View>

        <View style={{marginVertical: 30}}>
          <Text style={styles.title}>PICK A COURSE[S]</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View>
            <Text style={{color: '#5E52A9'}}> 6 MONTHS COURSE {'\n'} [EACH R1500] </Text>
            <Checkbox.Item label="First Aid" status={checked ? "checked" : "unchecked"} onPress={() => {
        setChecked(!checked);}} />
            <Checkbox.Item label="Sewing" />
            <Checkbox.Item label="Landscaping"  />
            <Checkbox.Item label="Life Skills"   />
          </View>
          <View>
            <Text style={{color: '#5E52A9'}}> 6 WEEK COURSE {'\n'} [EACH R750] </Text>
            <Checkbox.Item label="Child Minding"    />
            <Checkbox.Item label="Cooking"  />
            <Checkbox.Item label="Garden Maintenance"   />
            <TouchableOpacity style={{backgroundColor: 'red', height: 50, alignItems: 'center', justifyContent: 'center'}} onPress = {() => navigation.navigate('Contact')}>
              <Text style={{color: 'white'}}>Contact a consultant</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{margin: 20}}>
          <Card style={styles.Card}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{justifyContent: 'flex-start', fontSize: 26, fontWeight: 'bold'}}>YOUR ORDER</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>
              <View>
                <Text>Items[0]</Text>
                <Text>VAT[incl]</Text>
                <Text>discount</Text>
              </View>
              <View>
                <Text>R</Text>
                <Text>R</Text>
                <Text>R</Text>
              </View>
            </View>
            
          </Card>
        </View>

        <View style={{backgroundColor: "#5E52A9", height: 50, marginTop: 60}}>
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

  input: {
    borderWidth: 1,
    width: 200,
    marginVertical: 5,
    backgroundColor: '#D9D9D9'
  },
 
  horizontalLayout: {
   flexDirection: 'row',
   justifyContent: 'space-evenly',
   margin: 20
  },
 
  button: {
   backgroundColor: '#5E52A9',
   width: 150,
   height: 50,
   alignSelf: 'flex-end',
   alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 10
  },
 
  buttn2: {
   backgroundColor: '#D9D9D9',
   marginBottom: 20,
   margin: 5,
   height: 50,
   flexDirection: 'row',
   justifyContent: 'space-evenly'
  },

  Card: {
    backgroundColor: '#D9D9D9',
    height: 150,
    margin: 20
  },
}
);

export default Fees