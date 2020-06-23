import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8ef19a',
    },

    header: {
        width: '100%',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 40,
        
    },

    content: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },

    user_img: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },

    user_name:{
        width: '55%', 
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
    },

    user_data:{
        width: '90%',
        height: 50,
        flexDirection: 'row',
        paddingLeft: 20,
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,

        elevation: 5,
    },

    input_label:{
        fontSize: 18,
    },

    input_data:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    content_button:{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },  

    button_update:{
        width: '90%',
        height: 60,
        bottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 18,
    },

    button_text:{
        color: '#83f19a',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default styles;