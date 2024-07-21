import React from 'react'
import {Pressable, View, Text, StyleSheet} from 'react-native'
import { Colors } from '../variables/colors'
import { getFormateedDate } from '../util/date'
import { useNavigation } from '@react-navigation/native'

const ExpenseItem = ({id, date, description, amount}) => {
  const navigation = useNavigation()

  const handleManageExpense = () => {
    navigation.navigate('ManageExpenses', {
      expenseId: id
    })
  }

  return (
    <Pressable onPress={handleManageExpense} style={({pressed}) => pressed? styles.pressed : ''}>
      <View style={styles.expenseItem}>

        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormateedDate(date)}</Text>
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.colors.primary500,
    flexDirection: 'row',
    justifyContent:'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: .4
  },

  pressed:{
    opacity:.75
  },

  textBase:{
    color: Colors.colors.primary50
  },

  description:{
    fontSize: 16,
    marginBottom: 4,
    fontWeight:'bold'
  },

  amountContainer:{
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 4,
    minWidth: 80
  },

  amount:{
    color: Colors.colors.primary500,
    fontWeight: 'bold'
  }
})
