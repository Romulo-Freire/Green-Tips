import React from 'react';
import { View,StyleSheet, Text, TouchableOpacity} from 'react-native';


const Decides = ({ navigation }) => {
  return (
      <View style={styles.conteiner}>
          <Text 
            style={styles.title}
          >Escolha que tipo de conta você deseja criar</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={ () => navigation.navigate('RegisterUser')}
          >
              <Text
                style={styles.text_button}
              >Usuário</Text>
          </TouchableOpacity>
            <Text
                style={styles.ou}
            >ou</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={ () => navigation.navigate('RegisterPoints')}
          >
            <Text
                style={styles.text_button}
            >PEV</Text>
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8ef19a',
    },

    button:{
        width: '90%',
        height: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#333',
        shadowOffset: {
            height: 20,
            width: 10
        },
        elevation: 5,
    },

    text_button:{
        color: '#8ef19a',
        fontSize: 20,
        fontWeight: 'bold',
    },

    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        width: '90%',
        marginBottom: 40,
    },

    ou: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
    }
});

export default Decides;