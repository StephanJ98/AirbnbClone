import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    tag: {
        fontWeight: 'bold'
    },
    subtag: {
        color: '#8d8d8d'
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center'
    },
    value: {
        marginHorizontal: 20,
        fontSize: 16
    },
    simbol: {
        fontSize: 20,
        color: '#474747'
    },
    searchButton: {
        marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10
    }
});

export default styles;