import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../component/ExpensesOutput'

const RecentExpensesScreen = () => {
  return (
    <ExpensesOutput period={'Last 7 Days'}/>
  )
}

export default RecentExpensesScreen
