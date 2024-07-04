import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListUsers from '../pages/ListUsers'; // Ajuste o caminho conforme necessário
import ViewUser from '../pages/ViewUser'; // Ajuste o caminho conforme necessário

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
