import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProfileHeader = ({ }) => (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 20 }}>
        <View style={{ justifyContent: 'center' }}>
            <Image
                source={{ uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' }}
                style={{ flex: 1, borderRadius: 32, aspectRatio: 1 }}
            />
        </View>
        <View style={{ flex: 4, paddingHorizontal: 25 }}>
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
                <Text>@jkimbab</Text>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Icon name="settings" size={20} />
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '600' }}>24</Text>
                    <Text>Events</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '600' }}>89</Text>
                    <Text>Followers</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '600' }}>89</Text>
                    <Text>Following</Text>
                </View>
            </View>
        </View>
    </View>
);

export default ProfileHeader;