import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

const Card = ({ children, style, props }) => (
    <View style={{ ...styles.card, ...style }} {...props}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    card: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        backgroundColor: 'white',
        shadowColor: 'lightgray',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { y: 10 }
    }
});

export default Card;