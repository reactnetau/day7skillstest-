import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../theme/color'
import fonts from '../../theme/fonts'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const DetailSection = ({ title, label }: { title: string, label: string }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.dropdown}>
                <Text style={styles.dropdowntext}>{label}</Text>
                <FontAwesome name="caret-down" color='black' size={30} style={{ marginLeft: 'auto' }}/>
            </View>
            <View style={styles.textContainer}>
                <Text>Lorem Ipsum</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: fonts.weight.bold,
        padding: 20,
    },
    dropdown: {
        backgroundColor: colors.verylightgray,
        padding: 15,
        width: '90%',
        alignSelf: 'center',
        borderColor: colors.lightgray,
        borderWidth: 1,
        borderRadius: 7,
        flexDirection: 'row',
    },
    dropdowntext: {
        fontSize: 18,
        marginTop: 4,
    },
    textContainer: {
        padding: 20,
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 1,
    }
});

export default DetailSection