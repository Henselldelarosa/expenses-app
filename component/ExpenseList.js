import React from 'react'
import {Text, View, FlatList} from 'react-native'


const renderExpenseItem = (itemData) => {
  return <Text>{itemData.item.descriptio}</Text>
}

const ExpenseList = ({expenses}) => {
  return (
    <FlatList
    data={expenses}
    renderItem={renderExpenseItem}
    keyExtractor={(item) => item.id}
    />
  )
}

export default ExpenseList
