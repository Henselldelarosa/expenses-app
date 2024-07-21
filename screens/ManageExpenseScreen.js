import React, {useLayoutEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconButton from '../UI/IconButton'
import { Colors } from '../variables/colors'
import Button from '../util/Button'

const ManageExpenseScreen = ({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId

  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expenses" : "Add Expenses"
    })
  },[navigation,isEditing])


  const handleDelete = () => {
    navigation.goBack()
  }

  const handleCancel = () => {
    navigation.goBack()
  }

  const handleConfirm = () => {
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
