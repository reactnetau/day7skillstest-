import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNetworkMembers from '../screens/AddNetworkMembers/AddNetworkMembers';
import AddNetworkMembersEmail from '../screens/AddNetworkMembersEmail/AddNetworkMembersEmail';
import AddNetworkMembersContacts from '../screens/AddNetworkMembersContacts/AddNetworkMembersContacts';
import { HomeStackNavigatorParamList } from '../types/types';
import Home from '../screens/Home/Home';
import UserDetail from '../screens/UserDetail/UserDetail';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const AddMembersStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="AddNetworkMembers" component={AddNetworkMembers} options={{ headerTitle: 'Add Network Members'}} />
            <Stack.Screen name="AddNetworkMembersEmail" component={AddNetworkMembersEmail} options={{ headerTitle: 'Add Network Members'}} />
            <Stack.Screen name="AddNetworkMembersContacts" component={AddNetworkMembersContacts} options={{ headerTitle: 'Contacts', presentation: 'modal' }}  />
            <Stack.Screen name="UserDetail" component={UserDetail} options={{ headerTitle: ""}} />
        </Stack.Navigator>
    );
}

export default AddMembersStackNavigator;