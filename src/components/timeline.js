import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    // FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient';

import TimelineCard from './timeline-card';
import Card from './card';
import EventCard from './event-card';

import { SCHEDULE } from '../constants/mocks';
import { COLORS } from '../constants';

const Timeline = ({ navigation }) => (
    // TODO: Update to flatlist
    <ScrollView contentContainerStyle={style.timelineContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 25 }}>
            <LinearGradient
                locations={[0.2, 1.0]}
                end={{ x: 1.1, y: 1.1 }}
                colors={[COLORS.ACQUAMARINE, COLORS.CORNFLOWER_BLUE]}
                style={style.addEntryButton}
            >
                <Icon name="plus" size={25} color={COLORS.CULTURED_GRAY} />
            </LinearGradient>
            <View style={{ flex: 1 }}>
                <Text style={{ color: 'gray', fontSize: 12, marginBottom: 2 }}>TODAY</Text>
                <Card>
                    <Text style={{ margin: 5 }}>Add entry</Text>
                </Card>
            </View>
        </View>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <LinearGradient colors={[COLORS.ACQUAMARINE, COLORS.CORNFLOWER_BLUE]} style={style.line} />
            <View style={{ flex: 1 }}>
                <View style={style.cardsContainer}>
                    {
                        Object.keys(SCHEDULE).sort((a, b) => b - a).map((year) => (
                            Object.keys(SCHEDULE[year]).sort((a, b) => b - a).map(month => (
                                [
                                    <Text key={`${year}-${month}`} style={style.timelineDateHeader}>
                                        {moment(year + '-' + month, 'YYYY-M').format('MMMM YYYY')}
                                    </Text>,
                                    SCHEDULE[year][month].map((event, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            style={{ marginVertical: 5, alignSelf: 'flex-start' }}
                                            onPress={() => navigation.navigate('Modal', (props) => <EventCard event={event} {...props} />)}
                                        >
                                            <TimelineCard
                                                eventName={event.name}
                                                eventPlace={event.location}
                                                eventPeople={event.people}
                                            />
                                        </TouchableOpacity>
                                    ))
                                ]
                            ))
                        ))
                    }
                </View>
            </View>
        </View>
    </ScrollView>
);

const style = StyleSheet.create({
    timelineContainer: {
        paddingHorizontal: 25,
        paddingTop: 25,
        paddingBottom: 25,
        flexGrow: 1,
    },
    line: {
        width: 10,
        borderRadius: 5,
        backgroundColor: 'gray'
    },
    addEntryButton: {
        margin: 4,
        height: 40,
        width: 40,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.25
    },
    timelineDateHeader: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5
    },
    cardsContainer: {
        paddingHorizontal: 10
    },
    cardContainer: {
        marginVertical: 5
    }
});

export default Timeline;