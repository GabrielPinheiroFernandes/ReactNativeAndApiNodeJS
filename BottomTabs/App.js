import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./app/Home"; // Certifique-se de que o caminho está correto
import Revenues from "./app/revenues";
import Expenses from "./app/expenses";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  const a = 'sim';

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen 
          name="Revenues" 
          component={Revenues} 
          options={{ 
            tabBarLabel: 'Receitas',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cash" color={color} size={size} />
            )
          }} 
        />
        {a === 'sim' ? (
          <Tab.Screen 
            name="Expenses" 
            component={Expenses} 
            options={{ 
              tabBarLabel: 'Despesas',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="currency-usd-off" color={color} size={size} />
              )
            }} 
          />
        ) : null}
      </Tab.Navigator>   
    </NavigationContainer> 
  );
}
