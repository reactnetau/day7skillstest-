import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '../../theme/color';
import fonts from '../../theme/fonts';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationProp } from '../../types/types';
import { Icon, NavLink } from '../../types/types';

interface IMenuListItem {
    item: {
        label: string;
        detail: string;
        icon: Icon;
        target: NavLink;
    }
}

const MenuListItem = ({ item }: IMenuListItem ) => {
    const navigation = useNavigation<HomeStackNavigationProp>();
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate(item.target)}>
            <Feather name={item.icon} size={30} style={{ padding: 10 }}/>
            <View style={styles.subcontainer}>
                <View>
                    <Text style={styles.heading}>{item.label}</Text>
                    <Text style={styles.detail}>{item.detail}</Text>
                </View>
                <AntDesign name="right" size={20} style={{ marginLeft: 'auto', padding: 10 }}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subcontainer: {
        width: '90%',
        borderBottomColor: colors.verylightgray,
        borderBottomWidth: 1,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    heading: {
        paddingVertical: 2,
        paddingHorizontal: 2,
        fontSize: 18,
        fontWeight: fonts.weight.semi
    },
    detail: {
        paddingHorizontal: 2,
        color: colors.grey
    }
});
export default MenuListItem