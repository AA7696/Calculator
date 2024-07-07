import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window')

const Button = ({ text, color, numBtn, optBtn, equalBtn, delBtn, clearBtn, afterGst, beforeGst }) => {
  return (

    <TouchableOpacity onPress={() => {

      if (numBtn) {
        numBtn(text)
      }

      if (optBtn) {
        optBtn(text)
      }

      if (equalBtn) {
        equalBtn()
      }

      if (delBtn) {
        delBtn()
      }

      if (clearBtn) {
        clearBtn()
      }

      if (afterGst) {
        afterGst(text)
      }

      if (beforeGst) {
        beforeGst(text)
      }


    }}>
      <View style={{
        width: width / 5.3, height: '100%', justifyContent: 'center', backgroundColor: `${color}`,
        alignItems: 'center', borderRadius: width / 9
      }}>
        <Text style={{ color: 'white', fontSize: 20 }}>{text}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})