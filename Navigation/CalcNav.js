import { StatusBar } from 'react-native';
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ErrorBoundary } from "react-error-boundary";
import SimpleCalc from '../Screens/SimpleCalc';
import GstCalc from '../Screens/GstCalc';

const Tab = createMaterialTopTabNavigator();


export default function CalcNav() {




  return (
    <>
    <ErrorBoundary>
      <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold', color: 'white' },
        tabBarStyle: { backgroundColor: 'black',   },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
      }}
      >
      <Tab.Screen name="Simple" component={SimpleCalc} />
      <Tab.Screen name="GST" component={GstCalc} />
    </Tab.Navigator>


      </SafeAreaView>
      <StatusBar barStyle="light-content" />
      </ErrorBoundary>
    </>

  );
}

