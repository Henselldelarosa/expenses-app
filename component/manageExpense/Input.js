import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../../variables/colors'

const Input = ({label, invalid, style, textInputConfig}) => {

  let inputStyle = [styles.input]

  if(textInputConfig && textInputConfig.multiline){
    inputStyle.push(styles.multiline)
  }

  if(invalid){
    inputStyle.push(styles.invalidInput)
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 4,
    marginVertical: 8
  },

  label:{
    fontSize: 16,
    color: Colors.colors.primary100,
    marginBottom: 4
  },
  input:{
    backgroundColor: Colors.colors.primary100,
    padding: 6,
    color: Colors.colors.primary700,
    borderRadius: 6,
    fontSize: 18
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  invalidLabel:{
    color: Colors.colors.error500
  },
  invalidInput:{
    backgroundColor: Colors.colors.error50
  }
})
