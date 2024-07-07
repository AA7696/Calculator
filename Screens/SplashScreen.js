import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SplashScreen = () => {
    const {navigate} = useNavigation()
    setTimeout(() =>{
        navigate('CalcNav')
    }, 5000)
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
      <LottieView 
      style={{width: 200, height: 300}}
      source={require('../assets/animation.json')}
      autoPlay
      loop
      />

      <View style={{width: 120, height: 30, backgroundColor:'brown', borderRadius: 20, justifyContent:'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() =>{
          navigate('CalcNav')
        }}>
          <Text style={{color: 'white', fontSize: 17, textAlign: 'center'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})