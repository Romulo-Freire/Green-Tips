import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
    },

    map: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },

    formSearch: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },

    form_input: {
        backgroundColor: '#fff',
        flex: 1,
        color: '#333',
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 25,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 4,
            width: 4,
        },
        elevation: 2,
    },

    button_search:{
        width: 50,
        height: 50,
        backgroundColor: '#83f19a',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    }

});

export default styles;