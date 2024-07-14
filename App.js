import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import { Colors } from './variables/colors';
import {Ionicons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()

const ExpensesOverView = () => {

  return (
    <BottomTab.Navigator
    screenOptions={{
      headerStyle:{backgroundColor: Colors.colors.primary500},
      headerTintColor:'white',
      tabBarStyle:{backgroundColor:Colors.colors.primary500},
      tabBarActiveTintColor: Colors.colors.accent500
    }}
    >
      <BottomTab.Screen
      name='RecentExpenses'
      component={RecentExpensesScreen}
      options={{
        title: 'Recent Expenses',
        tabBarLabel:'Recent',
        tabBarIcon: ({color, size}) => (
          <Ionicons
          color={color}
          size={size}
          name='hourglass'
          />
        )
      }}
      />
      <BottomTab.Screen
      name='AllExpenses'
      component={AllExpensesScreen}
      options={{
        title: 'All Expenses',
        tabBarLabel:'All Expenses',
        tabBarIcon: ({color, size}) => (
          <Ionicons
          color={color}
          size={size}
          name='calendar'
          />
        )
      }}
      />
    </BottomTab.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
          name='ExpensesOverview'
          component={ExpensesOverView}
          options={{headerShown:false}}
          />

          <Stack.Screen
          name='Manage Expenses'
          component={ManageExpenseScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
