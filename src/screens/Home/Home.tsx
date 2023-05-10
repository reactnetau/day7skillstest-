import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import fonts from '../../theme/fonts';
import colors from '../../theme/color';
import AddNetworkButton from '../../components/AddNetworkButton/AddNetworkButton';
import users from './data';
import NetworkMemberItem from '../../components/NetworkMemberItem/NetworkMemberItem';

const Home = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[{ paddingTop: insets.top }, styles.page]}>
            <Text style={styles.title}>My Network</Text>
            <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan efficitur lacus non iaculis. Donec  </Text>
            <Text style={styles.heading}>Network Members</Text>
            <FlatList
                style={{ paddingVertical: 15 }}
                data={users}
                renderItem={({item}) => <NetworkMemberItem user={item} /> }
                ListFooterComponent={AddNetworkButton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 15,
        flex: 1,
        backgroundColor: colors.white
    },
    title: {
        textAlign: 'center',
        margin: 10,
        fontSize: 18,
        fontWeight: fonts.weight.bold,
    },
    heading: {
        paddingTop: 15,
        textAlign: 'left',
        fontSize: 18,
        fontWeight: fonts.weight.full,
    },
    body: {
        fontSize: 18,
        marginVertical: 10,
    }
})


export default Home