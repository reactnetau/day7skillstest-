import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import colors from '../../theme/color'
import Feather from '@expo/vector-icons/Feather';
import users from '../Home/data';
import ContactListItem from '../../components/ContactListItem/ContactListItem';
const AddNetworkMembersContacts = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Feather name="search" size={25} color={colors.lightgray} style={{ padding: 10 }}/>
                <TextInput placeholder='Search' style={styles.input} />
            </View>
            <FlatList
                data={users}
                renderItem={({item}) => <ContactListItem item={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        height: 30,
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        padding: 0,
        margin: 25,
        height: 40,
        width: '90%',
        backgroundColor: colors.verylightgray,
        borderRadius: 10,
        alignItems: 'center'

    },
    input: {
        width: '90%',
        fontSize: 18,
        color: colors.grey,
        borderRadius: 15,
    }
})

export default AddNetworkMembersContacts