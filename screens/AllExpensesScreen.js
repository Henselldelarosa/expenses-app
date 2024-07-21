import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import ExpensesOutput from '../component/expenseOutput/ExpensesOutput'
import { ExpenseContext } from '../store/expenses-context'

const AllExpensesScreen = () => {
  const expensesCtx = useContext(ExpenseContext)


  return (
      <ExpensesOutput expenses={expensesCtx.expenses} period={'Total'} fallbackText='No Registered expenses found!'/>
  )
}

export default AllExpensesScreen
