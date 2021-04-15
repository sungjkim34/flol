import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView
} from 'react-native'
import Timeline from '../../components/timeline';
import EventCard from '../../components/event-card';
import ProfileHeader from './profile-header';

export default class Home extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // this.props.fetchEvent('123')
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.homeView}>
                <ProfileHeader />
                <View style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
                    <Timeline navigation={navigation} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    homeView: {
        flex: 1,
        backgroundColor: 'white'
    }
});