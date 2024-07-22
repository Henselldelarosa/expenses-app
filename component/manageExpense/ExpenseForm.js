import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from './Input'

const ExpenseForm = () => {
  const handleChange = () => {

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
          onChangeText: handleChange
        }}
        />

        <Input
        style={styles.rowStyle}
        label={'Date'}
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
        />

    </View>
        <Input
        label={'Description'}
        textInputConfig={{
          multiline: true,
          // autoCorrect: false, //default is true
          // autoCapitalize: 'none'
        }}
        />
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
  form:{
    marginTop: 40
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
