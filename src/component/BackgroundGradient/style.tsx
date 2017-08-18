import { Dimensions, StyleSheet, ViewStyle } from 'react-native'
const IMAGE_SIZE = Dimensions.get('window').width

export default StyleSheet.create({
    linearGradient: {
        flex           : 1,
        width          : IMAGE_SIZE,
        backgroundColor: 'transparent',
        flexDirection  : 'column',
    } as ViewStyle,

})
