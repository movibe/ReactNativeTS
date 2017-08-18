declare module 'react-native-button' {
    import React from 'react'
    import { ViewStyle } from 'react-native'

    interface Props {
        style?: ViewStyle;
        styleDisabled?: ViewStyle;
        onPress?: () => any;
    }

    export default class Button extends React.Component<Props, any> {
    }
}