import { View, Text, ImageSourcePropType, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Avatar from '../Avatar/Avatar'
import fonts from '../../theme/fonts'
import colors from '../../theme/color'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProp } from '../../types/types'

interface INetworkMemberItem {
    user: {
        name: string,
        avatar: ImageSourcePropType,
        access: string, 
        relationship: string,
    }
}

const NetworkMemberItem = ({ user } : INetworkMemberItem) => {
    const navigation = useNavigation<HomeStackNavigationProp>();

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('UserDetail', { user })}>
            <Avatar image={user.avatar} width={50} height={50} />
            <View>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.access}>{user.access}</Text>
            </View>
            <View style={styles.relationship}>
                <Text style={styles.relationshipLabel}>{user.relationship}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
    },
    name: {
        fontSize: 15,
        fontWeight: fonts.weight.bold,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    access: {
        color: colors.grey,
        paddingHorizontal: 15,
    },
    relationship: {
        marginLeft: 'auto',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: colors.grey,
    },
    relationshipLabel: {    
        color: colors.white,
        fontSize: 15,
    }
});
export default NetworkMemberItem