import React from 'react'
import {View, Pressable, Text, StyleSheet} from 'react-native'
import { Colors } from '../variables/colors'

const Button = ({children, onPress, mode, style}) => {
  return (
    <View style={style}>

      <Pressable onPress={onPress} style={({pressed}) => pressed? styles.pressed : ''}>

        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.text, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>

      </Pressable>

    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  button:{
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.colors.primary500
  },


  innerContainer:{

  },

  text: {
    color: 'white',
    textAlign:'center'
  },

  flat: {
    backgroundColor: 'transparent'
  },

  flatText: {
    color: Colors.colors.primary200
  },

  pressed: {
    opacity: .75,
    backgroundColor: Colors.colors.primary100,
    borderRadius: 4
  }
})
