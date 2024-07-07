import { StatusBar } from 'react-native';
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../component/Button';
import { useEffect, useState } from 'react';
import Mexp from 'math-expression-evaluator'

const mexp = new Mexp()


const { width, height } = Dimensions.get('window')

export default function App() {

  const [btnText, setBtnText] = useState('');
  const [operation, setOperation] = useState('')
  const [basic, setbasic] = useState('')
  const [gst, setGst] = useState('')
  const [sgst, setSgst] = useState('')
  const [cgst, setCgst] = useState('')
  const [total, setTotal] = useState('')
  const [round, setRound] = useState('')
  const [value, setValue] = useState({
    gstValue: '',
    sgstValue: '',
    cgstValue: '',
  })
  const [show, setShow] = useState(false)


  const numBtn = (num) => {
    setBtnText(btnText.concat(num))
    setbasic(btnText.concat(num))


  }

  const optBtn = (opt) => {

    if (opt === 'x') {
      setBtnText(btnText.concat('*'))
    }

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
      if (btnText != '') {
        setOperation(btnText)
        let value = mexp.eval(btnText);
        console.log(value);
        let result = String(value);
        setBtnText(result)
        setbasic(result)
    
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
    setbasic('');
    setGst('');
    setTotal('');
    setCgst('')
    setSgst('')
    setRound('')
    setValue({
      gstValue: '',
      sgstValue: '',
      cgstValue: ''
    })
    setShow(false)

  }

  const afterGst = (text) => {
    setShow(true)
    setValue({
      gstValue: text,
      sgstValue: String(Number(text / 2)),
      cgstValue: String(Number(text / 2))
    })

    let basicValue = Number(basic)

    setbasic(String(basicValue.toFixed(2)))
    let gst = text;
    let gstValue = Number(gst)

    let Basicvalue = Number(basic)

    let gstAmount = (Basicvalue * (gstValue / 100))

    let value_sgst = gstAmount / 2
    let value_cgst = gstAmount / 2

    setGst(String(gstAmount.toFixed(2)))
    setSgst(String(value_sgst.toFixed(3)))
    setCgst(String(value_cgst.toFixed(3)))



    let totalAmount = Basicvalue + gstAmount

    let round_total = Math.round(totalAmount, 2)
    let roun_off_value = round_total - totalAmount;
    setRound(String(roun_off_value.toFixed(2)))
    setTotal(String(round_total.toFixed(2)));




  }

  const beforeGst = (text) => {
    setShow(true)
    setRound(0.00)
    let toatalValue = Number(basic)
    setTotal(String(toatalValue.toFixed(2)))

    let gstValue = Number(text.slice(1))

    setValue({
      gstValue: String(gstValue),
      sgstValue: String(gstValue / 2),
      cgstValue: String(gstValue / 2)
    })


    let gstAmount = (Number(basic) * (gstValue / (gstValue + 100)))

    setGst(String(gstAmount.toFixed(2)))
    setSgst(String((gstAmount / 2).toFixed(3)))
    setCgst(String((gstAmount / 2).toFixed(3)))

    let basicAmount = Number(basic) - gstAmount
    setbasic(String(basicAmount.toFixed(2)));

    setShow(true)

  }




  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ width: width, height: height / 2.5, backgroundColor: 'black', padding: 12 }}>
          <View style={{ fontSize: 20, color: '#d3d3d3', width: width - 24, borderColor: 'orange', borderWidth: 1 }}>
            <View style={{ width: width - 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Net Price: </Text>
              <Text style={{ color: 'white', fontSize: 20 }}> {show ? basic : ''} </Text>
            </View>
            <View style={{ width: width - 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: 'white', fontSize: 20 }}>SGst({value.sgstValue}%): </Text>
              <Text style={{ color: 'white', fontSize: 20 }}> {sgst} </Text>
            </View>
            <View style={{ width: width - 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: 'white', fontSize: 20 }}>CGst({value.cgstValue}%): </Text>
              <Text style={{ color: 'white', fontSize: 20 }}> {cgst} </Text>
            </View>
            <View style={{ width: width - 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: 'white', fontSize: 20 }}>IGst({value.gstValue}%): </Text>
              <Text style={{ color: 'white', fontSize: 20 }}> {gst} </Text>
            </View>
            <View style={{ width: width - 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Round Off: </Text>
              <Text style={{ color: 'white', fontSize: 20 }}> {round} </Text>
            </View>
            <View style={{ width: width - 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderColor: 'yellow', borderStyle: 'dashed' }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Total Price: </Text>
              <Text style={{ color: 'white', fontSize: 20 }}> {total} </Text>
            </View>

          </View>

          <Text style={{ fontSize: 20, color: '#d3d3d3', textAlign: 'right', marginTop: 10 }}>
            {operation}
          </Text>
          <Text style={{ fontSize: 35, color: 'white', textAlign: 'right', }}>
            {btnText}
          </Text>
        </View>

        <View style={{ width: width, flex: 1, backgroundColor: 'black' }}>
          <View style={{ width: width, height: '14%', flexDirection: 'row', gap: 22, padding: 5 }}>
            <Button text='-5' color='#795548' beforeGst={beforeGst} />
            <Button text='-12' color='#795548' beforeGst={beforeGst} />
            <Button text='-18' color='#795548' beforeGst={beforeGst} />
            <Button text='-28' color='#795548' beforeGst={beforeGst} />
          </View>

          <View style={{ width: width, height: '14%', flexDirection: 'row', gap: 22, padding: 5 }}>
            <Button text='5' color='#795548' afterGst={afterGst} />
            <Button text='12' color='#795548' afterGst={afterGst} />
            <Button text='18' color='#795548' afterGst={afterGst} />
            <Button text='28' color='#795548' afterGst={afterGst} />
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





        </View>

      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </>

  );
}

