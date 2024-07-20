import { StyleSheet, View, Button } from 'react-native';
import { useLayoutEffect } from 'react';
// import Button from '../components/UI/Button';
import IconButton from '../UI/IconButton';
import { Colors } from '../variables/colors';
// import { ExpensesContext } from '../store/expenses-context';

function ManageExpense({ route, navigation }) {
  // const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    // expensesCtx.deleteExpense(editedExpenseId);
    // navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(
        editedExpenseId,
        {
          description: 'Test!!!!',
          amount: 29.99,
          date: new Date('2022-05-20'),
        }
      );
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 19.99,
        date: new Date('2022-05-19'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler} title='hello'/>
          {/* Cancel */}
        {/* </Button> */}
        <Button style={styles.button} onPress={confirmHandler} title='add'/>
          {/* {isEditing ? 'Update' : 'Add'} */}
        {/* </Button> */}
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Colors.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.colors.primary200,
    alignItems: 'center',
  },
});
