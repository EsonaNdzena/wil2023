import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react'
import HomeScreen from '../Screens/Home'
import MonthlyScreen from '../Screens/MonthlyCourses'
import WeeklyScreen from '../Screens/WeeklyCourses'
import FeesScreen from '../Screens/Fees'
import ContactScreen  from '../Screens/Contacts'



const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
                <Drawer.Navigator initialRouteName='Menu'>
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Six-Months Courses" component={MonthlyScreen}/>
                <Drawer.Screen name="Six-Week Courses" component={WeeklyScreen}/>
                <Drawer.Screen name="Fees" component={FeesScreen}/>
                <Drawer.Screen name="Contacts" component={ContactScreen}/>
                </Drawer.Navigator>
        </NavigationContainer>
    )
}

