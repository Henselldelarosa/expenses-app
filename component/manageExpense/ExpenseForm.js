import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import Input from './Input'
import Button from '../../util/Button'
import {getFormatedDate} from '../../util/date'
import { Colors } from '../../variables/colors'

const ExpenseForm = ({onCancel, submitLabel, onSubmit, defaultValue}) => {

  const [inputs, setInputs] = useState({
    amount:{
      value: defaultValue ? defaultValue.amount.toString() : '',
      isValid: true
    },

    date:{
      value: defaultValue ? getFormatedDate(defaultValue.date) : '',
      isValid: true
    },

    description:{
      value: defaultValue ? defaultValue.description : '',
      isValid: true
    },
  })


  const handleChange = (inputIdentifier, enteredValue) => {

    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier] : {value: enteredValue, isValid: true}
      }
    })
  }

  const handleSubmit = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
    const descriptionIsValid = expenseData.description.trim().length > 0

    if(!amountIsValid || !dateIsValid || !descriptionIsValid){

      setInputs((curInputs) => {
        return {
          amount: {value: curInputs.amount.value, isValid: amountIsValid},
          date: {value: curInputs.date.value, isValid: dateIsValid},
          description: {value: curInputs.description.value, isValid: descriptionIsValid}
        }
      })
      return;
    }
    onSubmit(expenseData)
  }

  const formisInvalid =
  !inputs.amount.isValid ||
  !inputs.date.isValid ||
  !inputs.description.isValid

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.innerContainer}>

        <Input
        style={styles.rowStyle}
        label={'Amount'}
        invalid={!inputs.amount.isValid}
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: handleChange.bind(this, 'amount'),
          value: inputs.amount.value,
        }}
        />

        <Input
        style={styles.rowStyle}
        label={'Date'}
        invalid={!inputs.date.isValid}
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: handleChange.bind(this, 'date'),
          value: inputs.date.value,
        }}
        />

    </View>
        <Input
        label={'Description'}
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: handleChange.bind(this, 'description'),
          value: inputs.description.value,
          // autoCorrect: false, //default is true
          // autoCapitalize: 'none'
        }}
        />
        {formisInvalid &&(
          <Text style={styles.error}>Invalid input values - please check your entered data!</Text>
          )}
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
  },
  error:{
    color: Colors.colors.error500,
    textAlign:'center',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold'
  }
})
