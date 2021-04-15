import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Modal = ({ route, navigation }) => {
    const Children = route.params;
    const closeModal = () => navigation.goBack();
    return (
        <TouchableOpacity activeOpacity={1} onPress={closeModal} style={style.eventCardContainer}>
            <TouchableOpacity activeOpacity={1} /*onPress={e => e.preventDefault()} */>
                <Children onClose={closeModal} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    eventCardContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        padding: 25
    }
});

export default Modal;