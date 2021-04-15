import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const TimelineCard = ({ eventName, eventPlace, eventPeople = [] }) => (
    <View style={style.timelineCard}>
        <Text style={{ fontWeight: '600' }}>{eventName}</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginBottom: 5 }}>{eventPlace}</Text>
        <View style={style.eventPeopleContainer}>
            {eventPeople.map((person, i) => (
                <View key={i} style={[style.avatarContainer, { marginLeft: i !== 0 ? -5 : 0 }]}>
                    {/* <Text>{person.name}</Text> */}
                    <Image source={{ uri: person.picture }} style={style.avatar} />
                </View>
            ))}
        </View>
    </View>
);

const style = StyleSheet.create({
    timelineCard: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        width: 200,
        backgroundColor: 'white',
        shadowColor: 'lightgray',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { y: 10 }
    },
    eventPeopleContainer: {
        flexDirection: 'row'
    },
    avatarContainer: {
        borderRadius: 50,
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'lightgray',
        borderWidth: 1,
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { y: 10 }
    },
    avatar: {
        borderRadius: 50,
        height: '100%',
        width: '100%'
    }
});

export default TimelineCard;