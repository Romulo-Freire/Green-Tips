import React, { useRef, useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

import Logo from '../../../assets/logo.png'

const Login = ({ navigation }) => {

  

  const [save, setSave] = useState(false);
  const inputUser = useRef(null);

  function proxInput(){
    inputUser.current.focus();
  }

  function handleLogin(){
    navigation.navigate('Menu');
  }

  function handleRegister(){
    navigation.navigate('Register');
  }

  return (
      <>
        <StatusBar  />
        <View 
          style={styles.container}
          > 
            <Image source={Logo} style={styles.logo} />
            <Text
              style={styles.h1}
            > Bem vindo(a) ao Green Tips</Text>
            <View style={styles.form}>
              <View style={styles.content_input}>
                <Icon 
                  name='user' 
                  color='#d2691e'
                  size={22}
                   />
                <TextInput 
                  placeholder='Username'
                  placeholderTextColor='#d2691e' 
                  style={styles.input} 
                  returnKeyType={'next'}
                  onSubmitEditing={ () => { proxInput()}} />
                </View>
                
                <View style={styles.content_input}>
                  <Icon 
                    name='lock' 
                    color='#d2691e'
                    size={22}
                    />
                  <TextInput 
                    placeholder='Password'
                    placeholderTextColor='#d2691e' 
                    style={styles.input}
                    ref={inputUser}  />
                  </View>
                  <View style={styles.content_check}>
                    <CheckBox 
                      disabled={false}
                      value={save}
                      onValueChange={() => save ? setSave(false) : setSave(true) }
                    />
                    <Text style={styles.check_text}>Lembrar-me</Text>
                  </View>
                  <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleLogin()}  >
                    <Text style={styles.text_button}>Log In</Text>
                  </TouchableOpacity>

                  <Text
                    style={styles.text_register} 
                    onPress={ () => handleRegister() }
                  >
                    Não possui uma conta ?
                  </Text>
            </View>
        </View>
      </>
  )
}

export default Login;