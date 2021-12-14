import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages
import Home from './pages/Home';
import Details from './pages/Details';

// components
import LogoTitle from './components/LogoTitle'


const Stack = createNativeStackNavigator();

const Router = ( ) => {

 
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
