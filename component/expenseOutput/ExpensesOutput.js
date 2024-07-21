import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'
import { Colors } from '../../variables/colors'



const ExpensesOutput = ({expenses, period, fallbackText}) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>

  if(expenses.length > 0) {
    content = <ExpenseList expenses={expenses}/>
  }

  return (
    <View style={styles.container}>
      {!expenses && (
        {content}
      )}
      <ExpenseSummary expenses={expenses} period={period}/>
      {content}
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24,
    backgroundColor: Colors.colors.primary700
  },
  infoText: {
    color:'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
    fontWeight: 'bold'
  }
})
