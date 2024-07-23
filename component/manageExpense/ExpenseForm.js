import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import Input from './Input'
import Button from '../../util/Button'
import {getFormatedDate} from '../../util/date'

const ExpenseForm = ({onCancel, submitLabel, onSubmit, defaultValue}) => {

  const [inputValues, setInputValues] = useState({
    amount: defaultValue ? defaultValue.amount.toString() : '',
    date:defaultValue ? getFormatedDate(defaultValue.date) : '',
    description: defaultValue ? defaultValue.description : '',
  })


  const handleChange = (inputIdentifier, enteredValue) => {

    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier] : enteredValue
      }
    })
  }

  const handleSubmit = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
    const descriptionIsValid = expenseData.description.trim().length > 0

    if(!amountIsValid || !dateIsValid || !descriptionIsValid){
      Alert.alert('Invalid input', 'Please check your input values')
      return;
    }
    onSubmit(expenseData)
  }


  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.innerContainer}>

        <Input
        style={styles.rowStyle}
        label={'Amount'}
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: handleChange.bind(this, 'amount'),
          value: inputValues.amount,
        }}
        />

        <Input
        style={styles.rowStyle}
        label={'Date'}
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: handleChange.bind(this, 'date'),
          value: inputValues.date,
        }}
        />

    </View>
        <Input
        label={'Description'}
        textInputConfig={{
          multiline: true,
          onChangeText: handleChange.bind(this, 'description'),
          value: inputValues.description,
          // autoCorrect: false, //default is true
          // autoCapitalize: 'none'
        }}
        />

      <View style={styles.buttons}>
        <Button mode={'flat'} onPress={onCancel} style={styles.button}>Cancel</Button>
        <Button style={styles.button} onPress={handleSubmit}>{submitLabel}</Button>
      </View>
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
  form:{
    marginTop: 40
  },

  buttons:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button:{
    minWidth: 120,
    marginHorizontal: 8
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 24
  },

  innerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  rowStyle:{
    flex: 1
  }
})
