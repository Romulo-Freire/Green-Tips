import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#8ef19a',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    text_h1:{
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
    },

    content_input:{
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },

    text_input: {
        width: '90%',
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#fff',
    },

    input:{
        backgroundColor: '#f8f8ff',
        width: '90%',
        height: 50,
        paddingLeft: 10,
        borderRadius: 14,
    },

    button:{
        width: '90%',
        height: 65,
        borderRadius: 14,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'auto',
        marginTop: 30,
    },

    text_button:{
        fontSize: 18,
        color: '#8ef19a',
        fontWeight: 'bold',
    }
});

export default styles;