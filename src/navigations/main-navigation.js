import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../screens/home';
import Search from '../screens/search';
import Schedule from '../screens/schedule';

import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const getScreenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        const icons = {
            Home: 'home',
            Search: 'search',
            Schedule: 'calendar',
            Profile: 'user',
        }
        return (
            <Icon name={icons[route.name]} size={20} color="gray" />
        )
    },
});

const AddEventButton = (navigation) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.addEventButton} onPress={() => navigation.navigate('PopupModal')}>
        <Icon name={'plus'} size={20} color="gray" />
    </TouchableOpacity>
);

export const MainNavigation = ({ navigation }) => (
    <Tab.Navigator screenOptions={getScreenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Add" component={Search} options={{ tabBarButton: (e) => (<AddEventButton {...navigation} />) }} />
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
)

const styles = StyleSheet.create({
    addEventButton: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        top: -25,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.25
    }
})

export default MainNavigation;