import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListUsers from '../pages/ListUsers'; // Ajuste o caminho conforme necessário
import ViewUser from '../pages/ViewUser'; // Ajuste o caminho conforme necessário
import EditUser from '../pages/EditUser'; // Ajuste o caminho conforme necessário
import AddUser from '../pages/AddUser'; // Ajuste o caminho conforme necessário


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ListUser"
                    component={ListUsers}
                    options={{ headerTitle: 'Listar Usuários' }}
                />
                <Stack.Screen
                    name="ViewUser"
                    component={ViewUser}
                    options={{ headerTitle: 'Visualizar Usuário' }}
                />
                <Stack.Screen
                    name="EditUser"
                    component={EditUser}
                    options={{ headerTitle: 'Editar Usuário' }}
                />
                <Stack.Screen
                    name="AddUser"
                    component={AddUser}
                    options={{ headerTitle: 'Adicionar Usuário' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
