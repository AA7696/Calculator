import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ErrorBoundary } from "react-error-boundary";
import SplashScreen from './Screens/SplashScreen';
import CalcNav from './Navigation/CalcNav';

const Stack = createStackNavigator();

export default function App() {


  return (
    <>
    <ErrorBoundary>
      <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,
      }}
      >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="CalcNav" component={CalcNav} />
    </Stack.Navigator>
    </NavigationContainer>


      </SafeAreaView>
      <StatusBar barStyle="light-content" />
      </ErrorBoundary>
    </>

  );
}

