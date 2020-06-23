import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Menu from './menu';
import Register from './pages/Register';

const Stack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Menu' component={Menu} options={{ headerShown: false }}  />
                <Stack.Screen name='Register' component={Register} options={{ headerShown: false}} />
           </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;