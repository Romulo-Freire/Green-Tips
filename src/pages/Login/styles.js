import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8ef19a',
        alignItems: 'center',
        justifyContent: 'center',
      },

      logo:{
        width: 250,
        height: 250,
      },

      h1: {
        color:'#fff',
        fontSize: 22,
        fontWeight: 'bold',
      },

      form:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },

      content_input:{
        width: '90%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: '#d2691e',
        marginTop: 5,
      },

      input: {
        width: '93%',
        height: 60,
        backgroundColor: '#FFf',
        borderRadius: 12,
        paddingLeft: 10,
      },

      button:{
        width: '90%',
        height: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 30,
      },

      text_button:{
        color: '#8ef19a',
        fontSize: 20,
        fontWeight: 'bold',
      },

      content_check: {
        width: '92%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10, 
      },

      check_text:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },

      text_register:{
        marginTop: 20,
        fontWeight: 'bold',
        color: '#fff',
      }
});

export default styles;