import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Colors } from '../../variables/colors'

const ExpenseSummary = ({period, expenses}) => {
  const expenseSTotal = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      {/* toFixed(2) will output 2 decimal place */}
      <Text style={styles.sum}>{expenseSTotal.toFixed(2)}</Text>
    </View>
  )
}

export default ExpenseSummary

const styles = StyleSheet.create({
  container:{
    padding: 8,
    backgroundColor: Colors.colors.primary50,
    flexDirection: 'row',
    justifyContent:'space-between',
    borderRadius: 6,
    alignItems:'center'
  },
  period:{
    fontSize:12,
    color: Colors.colors.primary400
  },
  sum:{
    fontSize:16,
    fontWeight: 'bold',
    color: Colors.colors.primary500
  }
})
