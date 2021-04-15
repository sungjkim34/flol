import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const PopupModal = () => (
    <View style={style.viewContainer}>
        <View style={style.modalContainer}>
            <View style={{ alignItems: 'center', paddingBottom: 20, borderBottomWidth: 1, borderColor: '#F3F3F3' }}>
                <View style={{ height: 5, width: 50, backgroundColor: 'gray', borderRadius: 50, marginBottom: 20 }} />
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Create</Text>
            </View>
            <View style={style.itemContainer}>
                <Icon name="activity" style={{ fontSize: 18, marginRight: 12 }} />
                <Text style={{ fontSize: 16 }}>Public Event</Text>
            </View>
            <View style={style.itemContainer}>
                <Icon name="activity" style={{ fontSize: 18, marginRight: 12 }} />
                <Text style={{ fontSize: 16 }}>Private Event</Text>
            </View>
        </View>
    </View>
)

const style = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalContainer: {
        // height: '50%',
        paddingTop: 10,
        paddingBottom: 75,
        backgroundColor: 'white',
        borderRadius: 25,
        borderColor: 'lightgray',
        shadowColor: 'lightgray',
        shadowOpacity: 0.65,
        shadowRadius: 10,
        shadowOffset: { y: 10 }
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#F3F3F3'
    }
});

export default PopupModal;