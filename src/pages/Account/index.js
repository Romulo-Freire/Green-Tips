import React, { useState, useRef, useEffect} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, BackHandler, Alert, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import firebase from '../../services/firebase';

import ImgUser from '../../../assets/logo.png';

import styles from './styles';

const Account = () => {

  const [userImg, setUserImg] = useState(null);
  const [useName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [numero, setNumero] = useState('');

  const [isEditable, setIsEditable] = useState(false);

  const userNameRef = useRef();

  useEffect(() => {
    firebase.database().ref('users/'+ firebase.auth().currentUser.uid).once('value')
      .then( snapshot => {
        setUserName(snapshot.val().name);
        setCpf(snapshot.val().cpf);
        setNumero(snapshot.val().contato);
      });

    setEmail(firebase.auth().currentUser.email);

  }, []);

  function logOff(){
    firebase.auth().signOut()
      .then( async result => {
        await AsyncStorage.removeItem('save');
        await AsyncStorage.removeItem('user');
        BackHandler.exitApp()
      })
      
  }

  function decide(){
    Alert.alert('Sair', 'Tem certeza ?', [{
      text: 'Sair', onPress: () => logOff()
    },{
      text: 'cancelar'
    }])
  }
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
            <TouchableOpacity 
              style={styles.button_sair}
              onPress={ () => decide()}
              >
              <Text style={styles.text_sair}>Sair</Text>
            </TouchableOpacity>

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