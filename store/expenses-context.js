import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description:'A pair of shoes',
    amount: 59.99,
    date: new Date('2024-07-19')
  },
    {
    id: 'e2',
    description:'A pair of trousers',
    amount: 89.29,
    date: new Date('2024-07-05')
  },
  {
    id: 'e3',
    description:'Some bananas',
    amount: 5.99,
    date: new Date('2024-07-01')
  },
  {
    id: 'e4',
    description:'A book',
    amount: 14.99,
    date: new Date('2024-02-19')
  },
  {
    id: 'e5',
    description:'Another Book',
    amount: 18.59,
    date: new Date('2024-02-19')
  },
  {
    id: 'e6',
    description:'A pair of shoes',
    amount: 59.99,
    date: new Date('2024-07-19')
  },
    {
    id: 'e7',
    description:'A pair of trousers',
    amount: 89.29,
    date: new Date('2024-07-05')
  },
  {
    id: 'e8',
    description:'Some bananas',
    amount: 5.99,
    date: new Date('2024-7-01')
  },
  {
    id: 'e9',
    description:'A book',
    amount: 14.99,
    date: new Date('2024-07-19')
  },
  {
    id: 'e10',
    description:'Another Book',
    amount: 18.59,
    date: new Date('2024-07-19')
  },

]

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, {description, amount, date}) => {}
})

const expsenseReducer = (state, action) => {
   switch(action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString()
      return [{...action.payload, id: id}, ...state]

    case 'UPDATE':
      const updateExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      )

      const updatatableExpense = state[updateExpenseIndex]
      const updateItem = {...updatatableExpense, ...action.payload.data}
      const updatedExpenses = [...state]
      updatedExpenses[updateExpenseIndex] = updateItem
      return updatedExpenses

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload)

    default:
      return state
   }
}

const ExpenseContextProvider = ({children}) => {
  const [expenseState, dispatch] = useReducer(expsenseReducer, DUMMY_EXPENSES)

  const addExpense = (expenseData) => {
    dispatch({type: 'ADD', payload: expenseData})
  }

  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
  }

  const deleteExpense = (id) => {
    dispatch({type: 'DELETE', payload: id})
  }

  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  }
  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}

export default ExpenseContextProvider
