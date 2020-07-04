import React, { useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '../src/services/firebase';

import Login from './pages/Login';
import Menu from './menu';
import RegisterUser from './pages/RegisterUser';
import RegisterPoints from './pages/RegisterPoints';
import Decides from './pages/Decides';

const Stack = createStackNavigator();

const Loading = ({ navigation }) =>{

    useEffect(() => {
        async function getSave(){
          const savelog = await AsyncStorage.getItem('save');
          const log = JSON.parse(savelog);
          if(log){
            const userItem = await AsyncStorage.getItem('user');
            const user = JSON.parse(userItem);

            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then( result => {
                    navigation.navigate('Menu');
                })
                .catch(error => {
                    Alert.alert('Email ou senha inválidos, tente novamente!');
                });
          }else{
            navigation.navigate('Login');
          }
        }
    
        getSave();
      }, []);

    return(
        <View style={{ flex: 1, backgroundColor: '#8ef19a' }}>
        </View>
    )
}

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Loading' component={Loading} options={{headerShown: false}} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Menu' component={Menu} options={{ headerShown: false }}  />
                <Stack.Screen name='RegisterUser' component={RegisterUser} options={{ headerShown: false}} />
                <Stack.Screen name='RegisterPoints' component={RegisterPoints} options={{ headerShown: false}} />
                <Stack.Screen name='Decides' component={Decides} options={{ headerShown: false}} />
           </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;