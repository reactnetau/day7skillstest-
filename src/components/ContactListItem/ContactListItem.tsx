import { View, Text, ImageSourcePropType, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Avatar from '../Avatar/Avatar'
import Feather from '@expo/vector-icons/Feather';

interface IContactListItem {
    item: {
        name: string,
        avatar: ImageSourcePropType,
        access: string, 
        relationship: string,
    }
}

const ContactListItem = ({ item }: IContactListItem) => {
    const [selected, setSelected] = useState<boolean>(false);
    return (
        <View style={styles.container}>
            <Avatar image={item.avatar} width={50} height={50} />
            <Text style={styles.name}>{item.name}</Text>
            <Pressable onPress={() => setSelected(v => !v)} style={{marginLeft: 'auto',}}>
                <Feather name={selected ? "check-square" : "square" } color={selected ? 'green' : 'black'} size={24} style={{  padding: 10 }}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        marginHorizontal: 15,
    }
});

export default ContactListItem