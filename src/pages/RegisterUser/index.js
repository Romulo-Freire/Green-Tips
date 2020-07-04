import React, { useEffect, useState } from 'react';
import { View, BackHandler, Alert, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebase'

import styles from './styles';


const Register = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name, setName] = useState('');
  const [contato, setContato] = useState('');
  const [cpf, setCpf] = useState('')

  const navigate = useNavigation();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>  exitApp());

    return BackHandler.removeEventListener('hardwareBackPress', () => exitApp());
  }, []);

  function exitApp(){
    Alert.alert('Sair','Deseja cancelar sua inscrição ?', [{
      text: 'Sim', onPress: () => navigate.navigate('Login')
    }, {
      text: 'cancelar'
    }]);

    return true;
  }

  function createAccount(){
    try{
      if(password.length > 6 && name.length > 0 && contato.length > 0 && cpf.length > 0 ){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then( result => {
          Alert.alert('Concluido', 'Conta criada com sucesso !',[{ text: 'Ok', onPress: () => loginNext() }]);
        })
        .catch( error => {
            Alert.alert('Erro', 'Ocorreu um erro inesperado, por favor tente mais tarde.');
        })
      }else{
        Alert.alert('Os compos devem estar preenchidos coretamente!');
      }
    }catch( ex ){
      Alert.alert( ex );
    }
  }

  function loginNext(){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( result => {
        createUserData();
        navigate.navigate('Menu');
      })
      .catch( error => {
        Alert.alert('Erro', 'Ocorreu um erro inesperado, por favor tente novamente.');
      });
  }

  function createUserData(){
    const data = {
      name: name,
      contato: contato,
      cpf: cpf
    }
    firebase.database().ref('users').child(`${firebase.auth().currentUser.uid}`).set(data);
  }
  return (
      <View
        style={styles.conteiner}
      >
        <Text style={styles.text_h1}>Criar conta</Text>
        <View style={styles.content_input}>
          <Text style={styles.text_input}>Nome</Text>
          <TextInput 
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.content_input}>
          <Text style={styles.text_input}>CPF</Text>
          <TextInput 
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}    
          />
        </View>
        <View style={styles.content_input}>
          <Text style={styles.text_input}>Contato</Text>
          <TextInput 
            style={styles.input}
            value={contato}
            onChangeText={setContato}    
          />
        </View>
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