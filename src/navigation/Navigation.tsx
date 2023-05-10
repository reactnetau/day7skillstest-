import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../theme/color';
import { RootNavigatorParamList } from '../types/types';
import AddNetworkMembers from '../screens/AddNetworkMembers/AddNetworkMembers';
import AddMembersStackNavigator from './AddMembersStackNavigator';

const Tab = createBottomTabNavigator<RootNavigatorParamList>();

const screenOptions = {
    tabBarStyle:{
        backgroundColor: 'white',
        height: 100, 
        borderTopColor:  colors.accent,
        borderTopWidth: 3,
        paddingBottom: 30,
        
    },
    tabBarItemStyle:{
        padding: 5,// marginBottom: insets.bottom,
    },
    tabBarInactiveTintColor: 'black',
    tabBarActiveTintColor: colors.accent,
    headerShown: false,
};

function Navigation() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Ionicons name="home" size={30} color={focused ? colors.accent : 'black'} /> }} />
            <Tab.Screen name="Add" component={AddMembersStackNavigator}  options={{ headerShown: false, tabBarIcon: ({ focused }) => <Ionicons name="add" size={30} color={focused ? colors.accent : 'black'} /> }} />
        </Tab.Navigator>
    );
}

export default Navigation;