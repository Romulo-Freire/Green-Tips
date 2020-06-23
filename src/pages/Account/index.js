import React, { useState, useRef } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import ImgUser from '../../../assets/logo.png';

import styles from './styles';

const Account = () => {

  const [userImg, setUserImg] = useState(null);
  const [useName, setUserName] = useState('Romulo Vieira');
  const [email, setEmail] = useState('romulo@gmail.com');
  const [cpf, setCpf] = useState('778887544574');
  const [numero, setNumero] = useState('95867423');

  const [isEditable, setIsEditable] = useState(false);

  const userNameRef = useRef();

  return (
      <KeyboardAvoidingView 
        behavior={'padding'}
        style={styles.conteiner}
      >
          <View style={styles.header} >
            {
              userImg ?
              <Image 
                style={styles.user_img}
                source={ImgUser}
              /> 
               : 
              <View style={styles.user_img}>
                <Icon name='user' size={100}/>
              </View>
            }
            <TextInput
              editable={isEditable}
              style={styles.user_name}
              value={useName}
              ref={userNameRef}
            />
          </View>
          <View style={styles.content}>

            <View style={styles.user_data}>
              <Text style={styles.input_label}>Email:</Text>
              <TextInput 
                editable={isEditable}
                value={email}
                style={styles.input_data}
              />
            </View>

            <View style={styles.user_data}>
              <Text style={styles.input_label}>CPF:</Text>
              <TextInput 
                editable={isEditable}
                value={cpf}
                style={styles.input_data}
              />
            </View>

            <View style={styles.user_data}>
              <Text style={styles.input_label}>Número:</Text>
              <TextInput 
                editable={isEditable}
                value={numero}
                style={styles.input_data}
              />
            </View>

            <View style={styles.content_button}>
              <TouchableOpacity
                style={styles.button_update}
                onPress={() => isEditable ? setIsEditable(false) : setIsEditable(true)}
              >
                <Text style={styles.button_text}>Alterar Dados</Text>
              </TouchableOpacity>
            </View>
          </View>
      </KeyboardAvoidingView>
  )
}

export default Account;