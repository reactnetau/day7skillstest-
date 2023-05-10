import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import colors from '../../theme/color';
import fonts from '../../theme/fonts';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationProp } from '../../types/types';

const AddNetworkButton = () => {
    const navigation = useNavigation<HomeStackNavigationProp>();
    const navigateToAddMembers = () => {
        navigation.navigate('AddNetworkMembers')
    }
    
    return (
        <Pressable style={styles.container} onPress={() => navigateToAddMembers()}>
            <Text style={styles.text}>Add Network Members</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 15,
        borderWidth: 2,
        borderRadius: 10,
        padding: 17,
        borderColor: colors.accent
    },
    text: {
        color: colors.accent,
        fontSize: 18,
        fontWeight: fonts.weight.bold,
        textAlign: 'center',
    }
});

export default AddNetworkButton