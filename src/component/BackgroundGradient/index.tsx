import React from 'react'
import { ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import style from './style'


interface Props {
    from?: string
    to?: string
    style?: ViewStyle
    children: any
}

interface State {
    name: string
}

export default class BackgroundLinear extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        console.log('linear gradient',this.props)
    }


    render(): JSX.Element {
        return (
            <LinearGradient colors={[this.props.from || '#1276AF', this.props.to || '#00e3c0']}
                            style={[style.linearGradient, this.props.style]}>
                {this.props.children}
            </LinearGradient>
        )
    }
}