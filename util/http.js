import axios from "axios";

const URL =  'https://react-native-expsense-app-default-rtdb.firebaseio.com'

export const storeExpense = async (expenseData) => {
  const res = await axios.post(URL + '/expenses.json', expenseData)
  id = res.data.name

  return id
}

export  const fetchExpenses = async () => {
  const res = await axios.get(URL + '/expenses.json')

  const expenses = []


  for (const key in res.data){
    const expenseObj = {
      id: key,
      amount: res.data[key].amount,
      date: new Date(res.data[key].date),
      description: res.data[key].description
    }
    expenses.push(expenseObj)
  }
  return expenses
}
