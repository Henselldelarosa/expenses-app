import React from 'react'
import {StyleSheet, View} from 'react-native'
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'
import { Colors } from '../variables/colors'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    descriptio:'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
  },
    {
    id: 'e2',
    descriptio:'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05')
  },
  {
    id: 'e3',
    descriptio:'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01')
  },
  {
    id: 'e4',
    descriptio:'A book',
    amount: 14.99,
    date: new Date('2022-02-19')
  },
  {
    id: 'e5',
    descriptio:'Another Book',
    amount: 18.59,
    date: new Date('2022-02-19')
  },

]

const ExpensesOutput = ({expenses, period}) => {


  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_EXPENSES} period={period}/>
      <ExpenseList expenses={DUMMY_EXPENSES}/>
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
})
