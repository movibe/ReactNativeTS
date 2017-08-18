import React from 'react'
import { StatusBar, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import Button from 'react-native-button'
import ButtonReact from './component/Button/index'
import BackgroundLinear from './component/BackgroundGradient/index'

interface Props {

}

interface State {
    name: string
}

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
    }

    // Comentários somente no TypeScript
    onPress(valor: string = 'Its working fine'): void {
        alert(valor)
    }


    render(): JSX.Element {
        return (
            <BackgroundLinear>
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor="blue"
                        barStyle="light-content"
                    />
                    <Text style={styles.text}>
                        React com TypeScript
                    </Text>
                    <Text style={styles.instructions}>
                        Bem legal
                    </Text>
                    <Button onPress={() => this.onPress()} style={styles.button}>
                        Clique aqui
                    </Button>

                    <ButtonReact name="Botão Normal"/>
                    <ButtonReact name="Botão Legal"
                                 onPress={() => this.onPress('Modifica o valor')}
                                 style={{
                                     backgroundColor: 'rgba(255,255,255,0.4)',
                                     borderRadius   : 10,
                                 }}
                                 textStyle={{color: '#fff'}}/>
                </View>
            </BackgroundLinear>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: 'transparent',
        flexDirection  : 'column',
    } as ViewStyle,

    text: {
        fontSize  : 40,
        textAlign : 'center',
        margin    : 10,
        color     : '#fff',
        fontWeight: 'bold',
    } as TextStyle,

    instructions: {
        textAlign   : 'center',
        color       : '#fff',
        marginBottom: 5,
        fontSize    : 20,
    } as TextStyle,

    button: {
        backgroundColor: '#fff',
        padding        : 10,
        margin         : 10,
        borderRadius   : 10,
    } as ViewStyle,
})
