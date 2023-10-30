import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'
import HomeScreen from './Screens/Home';
import MonthlyScreen from './Screens/MonthlyCourses';
import WeeklyScreen from './Screens/WeeklyCourses';
import DrawerMenu from './Screens/Drawer';
import FeesScreen from './Screens/Fees';
import ContactScreen from './Screens/Contacts';
import LifeScreen from './Screens/LifeSkills';
import FirstAidScreen from './Screens/firstAid';
import GardeningScreen from './Screens/GardeningM';
import LandscapingScreen from './Screens/Landscaping';
import SewingScreen from './Screens/Sewing';
import ChildmindingScreen from './Screens/ChildMinding';
import CookingScreen from './Screens/Cooking';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const MyStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Monthly Course" component={MonthlyScreen} />
        <Drawer.Screen name="Weekly Course" component={WeeklyScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Fees" component={FeesScreen} />
        <Drawer.Screen name="Life Skills" component={LifeScreen} />
        <Drawer.Screen name="First Aid" component={FirstAidScreen} />
        <Drawer.Screen name="Gardening Maintenance" component={GardeningScreen} />
        <Drawer.Screen name="Landscaping" component={LandscapingScreen} />
        <Drawer.Screen name="Sewing" component={SewingScreen} />
        <Drawer.Screen name="Child Minding" component={ChildmindingScreen} />
        <Drawer.Screen name="Cooking" component={CookingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
