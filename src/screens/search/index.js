import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

export default class Search extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.searchView}>
                <Text>SEarchhhh</Text>
                <Text>SEarchhhh</Text>
                <Text>SEarchhhh</Text>
                <Text>SEarchhhh</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchView: {
        flex: 1
    }
});