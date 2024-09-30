import { ImageBackground, StatusBar } from 'react-native';
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Mexp from 'math-expression-evaluator'
import Button from '../component/Button'
import { KeyboardAvoidingView } from 'react-native';

const mexp = new Mexp()


const { width, height } = Dimensions.get('window')

export default function SimpleCalc() {

  const [btnText, setBtnText] = useState('');
  const [operation, setOperation] = useState('')

  const numBtn = (num) => {
    setBtnText(btnText.concat(num))
  }

  const optBtn = (opt) => {


    if ((opt === '+' || opt === '/' || opt === '%' || opt === 'x' || opt === '^' || opt === '!') && (btnText.slice(0, 1) === '')) {
      setBtnText(btnText)
    } else {
      if (opt === 'x') {
        setBtnText(btnText.concat('*'))
      }else if(opt === '%'){
        setBtnText(btnText.concat('/100*'))
      } else {
        setBtnText(btnText.concat(opt))
      }
    }
    if(btnText.slice(0,1) === '-' && (opt === '+' || opt === '/' || opt === '%' || opt === 'x' || opt === '^' || opt === '!' || opt === '-') ){
        setBtnText(btnText)
    }
    if((btnText.slice(-1) === '*' || btnText.slice(-1) === '-' || btnText.slice(-1) === '+' || btnText.slice(-1) === '/' || btnText.slice(-1) === '%' || btnText.slice(-1) === '^' || btnText.slice(-1) === '!') && (opt === '+' || opt === '/' || opt === '%' || opt === 'x' || opt === '^' || opt === '!' || opt === '-')){
        setBtnText(btnText)
    }
  }


  const equalBtn = () => {
    try {
      if(btnText != ''){
      
        setOperation(btnText)
        let value = mexp.eval(btnText);
        let result = String(value);
        setBtnText(result)
    
    }

    } catch (error) {
      console.log(error);
    }


  }

  const delBtn = () => {
    setBtnText(btnText.slice(0, -1));
  }

  const clearBtn = () => {
    setBtnText('');
    setOperation('');
  }



  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ width: width, height: height / 2.5, backgroundColor: 'black' }}>
        <ImageBackground
        source={require('../assets/me2.png')}
        style={{ width: width, height: height / 2.5 , padding: 20, justifyContent: 'flex-end'}}
        >
        <Text style={{ fontSize: 40, color: '#d3d3d3', textAlign: 'right', }}>
            {operation}
          </Text>
          <Text style={{ fontSize: 40, color: 'white', textAlign: 'right', }}>
            {btnText}
          </Text>
        </ImageBackground>
        </View>

        <KeyboardAvoidingView style={{ width: width, flex: 1, backgroundColor: 'black' }}>
          <View style={{ width: width, height: '14%', flexDirection: 'row', gap: 22, padding: 5 }}>
            <Button text='sin' color='#795548' optBtn={optBtn} />
            <Button text='cos' color='#795548' optBtn={optBtn} />
            <Button text='tan' color='#795548' optBtn={optBtn} />
            <Button text='log' color='#795548' optBtn={optBtn} />
          </View>

          <View style={{ width: width, height: '14%', flexDirection: 'row', gap: 22, padding: 5 }}>
            <Button text='!' color='#795548' optBtn={optBtn} />
            <Button text='^' color='#795548' optBtn={optBtn} />
            <Button text='(' color='#795548' optBtn={optBtn} />
            <Button text=')' color='#795548' optBtn={optBtn} />
          </View>

          <View style={{ width: width, height: '14%', flexDirection: 'row', gap: 22, padding: 5 }}>
            <Button text='AC' color='red' clearBtn={clearBtn} />
            <Button text='DEL' color='red' delBtn={delBtn} />
            <Button text='%' color='grey' optBtn={optBtn} />
            <Button text='/' color='grey' optBtn={optBtn} />
          </View>
          <View style={{ width: width, height: '14%', flexDirection: 'row', gap: 22, padding: 5 }}>
            <Button text='7' color='grey' numBtn={numBtn} />
            <Button text='8' color='grey' numBtn={numBtn} />
            <Button text='9' color='grey' numBtn={numBtn} />
            <Button text='x' color='grey' optBtn={optBtn} />

          </View>

          <View style={{ width: width, height: '14%', flexDirection: 'row', gap: 22, padding: 5 }}>
            <Button text='4' color='grey' numBtn={numBtn} />
            <Button text='5' color='grey' numBtn={numBtn} />
            <Button text='6' color='grey' numBtn={numBtn} />
            <Button text='-' color='grey' optBtn={optBtn} />

          </View>

          <View style={{ width: width, height: '14%', flexDirection: 'row', gap: 22, padding: 5 }}>
            <Button text='1' color='grey' numBtn={numBtn} />
            <Button text='2' color='grey' numBtn={numBtn} />
            <Button text='3' color='grey' numBtn={numBtn} />
            <Button text='+' color='grey' optBtn={optBtn} />

          </View>

          <View style={{ width: width, height: '14%', flexDirection: 'row', gap: 22, padding: 5 }}>
            <Button text='00' color='grey' numBtn={numBtn} />
            <Button text='0' color='grey' numBtn={numBtn} />
            <Button text='.' color='grey' numBtn={numBtn} />
            <Button text='=' color='orange' equalBtn={equalBtn} />

          </View>


        </KeyboardAvoidingView>

      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </>

  );
}

