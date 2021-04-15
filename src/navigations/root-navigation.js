import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigation from './main-navigation';
import Modal from '../components/modal';
import PopupModal from '../components/popup-modal';

const Stack = createStackNavigator();

export const RootNavigation = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainNavigation} />
        <Stack.Screen name="Modal" component={Modal} options={{ cardStyle: { backgroundColor: 'transparent' }, animationEnabled: false }} />
        <Stack.Screen name="PopupModal" component={PopupModal} options={{ cardStyle: { backgroundColor: 'transparent' }, gestureResponseDistance: { vertical: 500 } }} />
    </Stack.Navigator>
)

export default RootNavigation;