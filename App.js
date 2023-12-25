/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './app/screens/Home';
import MainStack from './app/routings/mainstack';
import { StatusBar } from 'react-native';
import {theme} from './app/themes/theme';
import { useTheme } from "@react-native-material/core";
import {useState,useEffect,useCallback} from "react";
import { store } from './app/store/store';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { Provider,useSelector } from "react-redux";
import {
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Provider as MaterialProvider} from '@react-native-material/core';
import Feather from 'react-native-vector-icons/Feather'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

export default function App() {
  // console.log("Apptheme",matTheme)
  const matTheme = useTheme();
  const AppTheme = {
    ...DefaultTheme,
    ...matTheme,
    ...theme.lightTheme,
    colors: {
      ...DefaultTheme.colors,
      ...theme.colors.light
    },
  };
  const STYLES = ['default', 'dark-content', 'light-content'];
    const TRANSITIONS = ['fade', 'slide', 'none'];
    const statusBarStyle = STYLES[2];
    const statusBarTransition = TRANSITIONS[2];
    const hidden = false;
    const [appIsReady, setAppIsReady] = useState(false);
  return(
    <>
        <StatusBar
        animated={true}
        backgroundColor={theme.lightTheme.statusBarColor}
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden} />
        {/* <PaperProvider theme={MD3LightTheme}> */}
          <NavigationContainer theme={AppTheme}>
            <Provider store={store}>
              <MaterialProvider theme={AppTheme}> 
                {<MainStack/>}
              </MaterialProvider>
            </Provider>
          </NavigationContainer>
        {/* </PaperProvider>, */}
    </>
  )
}