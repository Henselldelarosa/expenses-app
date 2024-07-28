import React, {useContext, useLayoutEffect, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import IconButton from '../UI/IconButton'
import { Colors } from '../variables/colors'
import { ExpenseContext } from '../store/expenses-context'
import ExpenseForm from '../component/manageExpense/ExpenseForm'
import { storeExpense,updatedExpenses, deleteExpenses } from '../util/http'
import LoadingOverlay from '../UI/LoadingOverlay'
import ErrorOverlay from '../UI/ErrorOverlay'

const ManageExpenseScreen = ({route, navigation}) => {
  const expensesCtx = useContext(ExpenseContext)

  const editedExpenseId = route.params?.expenseId

  const expectedExpense = expensesCtx.expenses.find((expense) => expense.id === editedExpenseId)

  const isEditing = !!editedExpenseId

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expenses" : "Add Expenses"
    })
  },[navigation,isEditing])


  const handleDelete = async() => {
    setIsSubmitting(true)
    try {
      expensesCtx.deleteExpense(editedExpenseId)
      await deleteExpenses(editedExpenseId)
      navigation.goBack()

    } catch (error) {
      setError('Could not delete expense try again')
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    navigation.goBack()
  }




  const handleConfirm = async (expenseData) => {
    setIsSubmitting(true)

    try {
      if(isEditing){
        expensesCtx.updateExpense(editedExpenseId, expenseData)
        await updatedExpenses(editedExpenseId, expenseData)

      }else{
        storeExpense(expenseData)
        expensesCtx.addExpense({...expenseData, id: id})
      }
      navigation.goBack()

    } catch (error) {
      setError('Could not save data -- please try again')
      setIsSubmitting(false)
    }
  }
  const handleError = () => {
    setError(null)
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={handleError}/>
  }

  if(isSubmitting) {
    return <LoadingOverlay/>
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
