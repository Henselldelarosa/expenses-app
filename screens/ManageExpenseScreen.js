import React, {useContext, useLayoutEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconButton from '../UI/IconButton'
import { Colors } from '../variables/colors'
import Button from '../util/Button'
import { ExpenseContext } from '../store/expenses-context'
import ExpenseForm from '../component/manageExpense/ExpenseForm'
import { storeExpense,updatedExpenses, deleteExpenses } from '../util/http'

const ManageExpenseScreen = ({route, navigation}) => {
  const expensesCtx = useContext(ExpenseContext)

  const editedExpenseId = route.params?.expenseId

  const expectedExpense = expensesCtx.expenses.find((expense) => expense.id === editedExpenseId)

  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expenses" : "Add Expenses"
    })
  },[navigation,isEditing])


  const handleDelete = async() => {
    expensesCtx.deleteExpense(editedExpenseId)
    await deleteExpenses(editedExpenseId)
    navigation.goBack()
  }

  const handleCancel = () => {
    navigation.goBack()
  }

  const handleConfirm = async (expenseData) => {
    if(isEditing){
      expensesCtx.updateExpense(editedExpenseId, expenseData)
      await updatedExpenses(editedExpenseId, expenseData)


    }else{
      storeExpense(expenseData)
      expensesCtx.addExpense({...expenseData, id: id})
    }
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
          <ExpenseForm
          submitLabel={isEditing ? 'Update' : 'Add'}
          onCancel={handleCancel}
          onSubmit={handleConfirm}
          defaultValue={expectedExpense}
          />

      {isEditing &&(

        <View style={styles.deleteContainer}>
          <IconButton
          Icon='trash'
          color={Colors.colors.error500}
          size={36}
          onPress={handleDelete}
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpenseScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:24,
    backgroundColor: Colors.colors.primary800
  },

  deleteContainer:{
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.colors.primary200,
    alignItems: 'center'
  }
})
