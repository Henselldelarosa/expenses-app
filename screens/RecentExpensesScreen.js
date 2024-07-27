import { View, Text } from 'react-native'
import React, { useContext, useEffect,useState } from 'react'
import ExpensesOutput from '../component/expenseOutput/ExpensesOutput'
import {ExpenseContext} from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'
import { fetchExpenses } from '../util/http'

const RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpenseContext)


  useEffect(() => {
    const getExpenses = async () => {

      const expenses = await fetchExpenses()
      console.log(expenses)
      expensesCtx.setExpenses(expenses)
    }

    getExpenses()
  }, [])


  const resentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7)

    return (expense.date >= date7DaysAgo) && (expense.date <= today)
  })
  return (
    <ExpensesOutput expenses={resentExpenses} period={'Last 7 Days'} fallbackText='No Expenses Registered'/>
  )
}

export default RecentExpensesScreen
