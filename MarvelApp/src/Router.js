import React  from 'react';
import {Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages
import Home from './pages/Home';
import Details from './pages/Details';

// assets
import logo from './assets/img/Marvel_Logo.png'


const Stack = createNativeStackNavigator();

const Router = ( ) => {

  // **** Marvel Logo ***
  function LogoTitle() {
    return (
          <Image
        style={{ width: 99, height:37 , marginHorizontal: 120}}
        source={logo}
      />
    );
  }
  return (
   
      <NavigationContainer>
      <Stack.Navigator   initialRouteName="HomeScreen" >
       <Stack.Group >
          <Stack.Screen 
          name="HomeScreen" 
          component={Home} 
          options={{ 
            headerTitle: (props) => <LogoTitle {...props} />,  
            headerStyle: { backgroundColor: 'black' ,flex:1 } }} 
            />
          <Stack.Screen 
          name="DetailsScreen" 
          component={Details} 
          options={{headerShown:true,
              headerShadowVisible:false,
              headerTitle:'',
              headerTransparent:true,
              headerTintColor:'white',
              }} />
       </Stack.Group>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
