import React, { useEffect, useState } from 'react';
import { View, BackHandler, Alert, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Register = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigation();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>  exitApp());

    return BackHandler.removeEventListener('hardwareBackPress', () => exitApp());
  }, []);

  function exitApp(){
    Alert.alert('foi');
  }

  function createAccount(){
    Alert.alert(email, password);
  }

  return (
      <View
        style={styles.conteiner}
      >
        <Text style={styles.text_h1}>Criar conta</Text>
        <View style={styles.content_input}>
          <Text style={styles.text_input}>Email</Text>
          <TextInput 
            style={styles.input}
            value={email}
            onChangeText={setEmail}    
          />
        </View>
        <View style={styles.content_input}>
          <Text style={styles.text_input}>Senha</Text>
          <TextInput 
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={ () => createAccount() }
        >
          <Text style={styles.text_button}>Confirmar</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Register;