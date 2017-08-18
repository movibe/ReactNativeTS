import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

export default StyleSheet.create({
    container: {
        //flex           : 1,
        //justifyContent : 'center',
        //alignItems     : 'center',
        backgroundColor: '#0099cc',
        borderColor    : '#ccc',
        borderStyle    : 'solid',
        borderWidth    : 1,
        height         : 50,
        marginBottom   : 20,
        //width          : 150,
    } as ViewStyle,

    text: {
        fontSize  : 20,
        textAlign : 'center',
        margin    : 10,
        color     : '#fa0',
        fontWeight: 'bold',
    } as TextStyle,
})
