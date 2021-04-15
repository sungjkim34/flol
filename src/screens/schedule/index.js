import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

export default class Schedule extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.scheduleView}>
                <Text>Schedule</Text>
                <Text>Schedule</Text>
                <Text>Schedule</Text>
                <Text>Schedule</Text>
                <Text>Schedule</Text>
                <Text>Schedule</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scheduleView: {
        flex: 1
    }
});