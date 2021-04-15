import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';

import { PRIVACY } from '../constants';
import Card from './card';

const getPrivacyIcon = (privacy) => {
    switch (privacy) {
        case 'PRIVATE_SELF':
            return <Icon name="lock" color='gray' style={{ marginHorizontal: 5 }} />
        case 'PRIVATE_FRIENDS':
            return <Icon name="users" color='gray' style={{ marginHorizontal: 5 }} />
        case 'PUBLIC_AFTER':
            return <Icon name="clock" color='gray' style={{ marginHorizontal: 5 }} />
        case 'PUBLIC_ALL':
            return <Icon name="globe" color='gray' style={{ marginHorizontal: 5 }} />
    }
}

const EventCard = ({ event = {}, onClose }) => (
    <Card style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{ flex: 1, fontWeight: '600', fontSize: 18 }}>{event.name}</Text>
            <TouchableOpacity onPress={onClose}>
                <Icon name="x" size={20} />
            </TouchableOpacity>
        </View>
        <Text style={{ color: 'gray' }}>{event.location}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: 'gray', flex: 1 }}>{moment.unix(event.startDate).format('MMM D, YYYY - hh:mma')}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {getPrivacyIcon(event.privacy)}
                <Text style={{ color: 'gray' }}>{PRIVACY[event.privacy]}</Text>
            </View>
        </View>
        {
            event.pictures &&
            <ScrollView horizontal style={{ marginBottom: 10 }}>
                <View onStartShouldSetResponder={() => true} style={{ flexGrow: 1, flexDirection: 'row' }}>
                    {
                        event.pictures.map(picture =>
                            <View style={{ flex: 1, marginRight: 5 }}>
                                <Image
                                    source={{ uri: picture }}
                                    style={{ height: 100, width: 100 }}
                                />
                            </View>
                        )
                    }
                </View>
            </ScrollView>
        }
        {
            event.people.map((person, i) =>
                <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Image
                        source={{ uri: person.picture }}
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 50,
                            marginRight: 10
                        }}
                    />
                    <Text>{person.name}</Text>
                </View>
            )
        }
    </Card>
);

const style = StyleSheet.create({
});

export default EventCard;