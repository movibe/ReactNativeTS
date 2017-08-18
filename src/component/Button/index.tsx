import React from 'react'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import styles from './style'

interface Props {
    name: String
    style?: ViewStyle
    textStyle?: TextStyle
    onPress?: () => any
}

interface State {
    title: string
}

export default class ButtonReact extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render(): JSX.Element {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[styles.container, this.props.style]}>
                <Text style={[styles.text, this.props.textStyle]}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )
    }
}

