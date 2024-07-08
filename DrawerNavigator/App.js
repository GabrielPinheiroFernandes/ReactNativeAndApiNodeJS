import { NavigationContainer } from "@react-navigation/native"; 
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./app/home";  // Certifique-se de que o caminho está correto
import Revenues from "./app/revenues";
import Expenses from "./app/expenses";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Revenues" component={Revenues}/>
        <Drawer.Screen name="Expenses" component={Expenses}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
