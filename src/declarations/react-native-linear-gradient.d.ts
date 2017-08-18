declare module 'react-native-linear-gradient' {
    import React from 'react'
    import { ViewStyle } from 'react-native'

    interface Props {
        colors?: ViewStyle;
        style?: ViewStyle;
    }

    export default class LinearGradient extends React.Component<Props, any> {
    }
}