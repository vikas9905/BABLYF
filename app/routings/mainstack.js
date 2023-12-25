/*eslint-disable*/
import React from 'react';
import {createStackNavigator, HeaderStyleInterpolators} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { fromLeft, zoomIn, zoomOut } from 'react-navigation-transitions';
import { routes } from '../utils/constants';
const Stack = createStackNavigator();

export default function MainStack() {
    
  return (
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name={routes.AUTH_STACK[0].route} component={routes.AUTH_STACK[0].component} options={{headerShown:false}}/> */}
            
            <Stack.Screen name={routes.MAIN_STACK[0].route} component={routes.MAIN_STACK[0].component} options={{headerShown:false}}/>
            <Stack.Screen name={routes.MAIN_STACK[1].route} component={routes.MAIN_STACK[1].component} options={{headerShown:false}}/>
            <Stack.Screen name={routes.MAIN_STACK[2].route} component={routes.MAIN_STACK[2].component} options={{headerShown:false}}/>
            <Stack.Screen name={routes.MAIN_STACK[3].route} component={routes.MAIN_STACK[3].component} options={{headerShown:false}}/>
            <Stack.Screen name={routes.MAIN_STACK[4].route} component={routes.MAIN_STACK[4].component} options={{headerShown:false}}/>
            <Stack.Screen name={routes.MAIN_STACK[5].route} component={routes.MAIN_STACK[5].component} options={{headerShown:false}}/>
            <Stack.Screen name={routes.MAIN_STACK[6].route} component={routes.MAIN_STACK[6].component} options={{headerShown:false}}/>
            <Stack.Screen name={routes.MAIN_STACK[7].route} component={routes.MAIN_STACK[7].component} options={{headerShown:false}}/>
            <Stack.Screen name={routes.MAIN_STACK[8].route} component={routes.MAIN_STACK[8].component} options={{headerShown:false}}/>
            <Stack.Screen name={routes.MAIN_STACK[9].route} component={routes.MAIN_STACK[9].component} options={{headerShown:false}}/>
            <Stack.Screen name={routes.MAIN_STACK[10].route} component={routes.MAIN_STACK[10].component} options={{headerShown:false}}/>


      </Stack.Navigator>
   
  );
}
