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
import IconButton from './UI/IconButton';

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()

const ExpensesOverView = () => {



  return (
    <BottomTab.Navigator
    screenOptions={({navigation}) => ({
      headerStyle:{backgroundColor: Colors.colors.primary500},
      headerTintColor:'white',
      tabBarStyle:{backgroundColor:Colors.colors.primary500},
      tabBarActiveTintColor: Colors.colors.accent500,
      headerRight: ({tintColor}) =>(
      <IconButton
      Icon='add'
      size={24}
      color={tintColor}
      onPress={() => {
        navigation.navigate('ManageExpenses')
      }}
      />)
    })}
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
        <Stack.Navigator
        screenOptions={{
          headerStyle:{backgroundColor: Colors.colors.primary500},
          headerTintColor: 'white'
        }}
        >
          <Stack.Screen
          name='ExpensesOverview'
          component={ExpensesOverView}
          options={{headerShown:false}}
          />

          <Stack.Screen
          name='ManageExpenses'
          component={ManageExpenseScreen}
          options={{
            title: 'Manage Expense',
            presentation: 'modal'
          }}
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
