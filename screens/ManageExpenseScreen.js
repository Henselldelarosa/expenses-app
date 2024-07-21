import React, {useContext, useLayoutEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconButton from '../UI/IconButton'
import { Colors } from '../variables/colors'
import Button from '../util/Button'
import { ExpenseContext } from '../store/expenses-context'

const ManageExpenseScreen = ({route, navigation}) => {
  const expensesCtx = useContext(ExpenseContext)

  const editedExpenseId = route.params?.expenseId

  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expenses" : "Add Expenses"
    })
  },[navigation,isEditing])


  const handleDelete = () => {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  const handleCancel = () => {
    navigation.goBack()
  }

  const handleConfirm = () => {
    if(isEditing){
      expensesCtx.updateExpense(
        editedExpenseId,
        {

        description: 'Test!!!',
        amount: 19.99,
        date: new Date('2024-07-20')
      })

    }else{

      expensesCtx.addExpense({
        description: 'Test',
        amount: 19.99,
        date: new Date('2024-07-19')
      })
    }
    navigation.goBack()
  }

  return (
    <View style={styles.container}>

      <View style={styles.buttons}>
        <Button mode={'flat'} onPress={handleCancel} style={styles.button}>Cancel</Button>
        <Button style={styles.button} onPress={handleConfirm}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>

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

  buttons:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button:{
    minWidth: 120,
    marginHorizontal: 8
  },

  deleteContainer:{
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.colors.primary200,
    alignItems: 'center'
  }
})
