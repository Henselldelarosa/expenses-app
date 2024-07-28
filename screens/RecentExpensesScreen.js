import { View, Text } from 'react-native'
import React, { useContext, useEffect,useState } from 'react'
import ExpensesOutput from '../component/expenseOutput/ExpensesOutput'
import {ExpenseContext} from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'
import { fetchExpenses } from '../util/http'
import LoadingOverlay from '../UI/LoadingOverlay'
20
const RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpenseContext)
  const [isFetching, setIsFetching] = useState(true)
  


  useEffect(() => {
    const getExpenses = async () => {

      setIsFetching(true)
      const expenses = await fetchExpenses()
      setIsFetching(false)
      expensesCtx.setExpenses(expenses)
    }

    getExpenses()
  }, [])

  if(isFetching){
    return <LoadingOverlay/>
  }

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
