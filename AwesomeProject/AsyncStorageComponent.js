import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'

type Props = {};
class AsyncStorageComponent extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            'name': ''
        };
    }
    componentDidMount = () => AsyncStorage.getItem('name')
        .then((value) => this.setState({ 'name': value }));

    setName = (value) => {
        AsyncStorage.setItem('name', value);
        this.setState({ 'name': value });
    };

    render() {
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.textInput} autoCapitalize = 'none'
                           onChangeText = {this.setName}/>
                <Text>
                    {this.state.name}
                </Text>
            </View>
        )
    }
}

// export default AsyncStorageComponent

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    textInput: {
        margin: 5,
        height: 100,
        borderWidth: 1,
        backgroundColor: '#7685ed'
    }
});
