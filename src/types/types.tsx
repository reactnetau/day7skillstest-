import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native/types";

export const Access = {
    ADMIN: 'Admin',
    DEVELOPER: 'Developer',
    FAVOURITE: 'Favourite Access',
}

export const Relationship = {
    SON: 'Son',
    DAUGHTER: 'Daughter',
    MOTHER: 'Mother',
    FATHER: 'Father',
}

export type RootNavigatorParamList = {
    Home: undefined;
    Add: undefined;
};

export type Icon = 'mail' | 'inbox';
export type NavLink = 'Home' | 'AddNetworkMembers' | 'AddNetworkMembersEmail' | 'AddNetworkMembersContacts';

export type HomeStackNavigatorParamList = {
    Home: undefined;
    AddNetworkMembers: undefined;
    AddNetworkMembersEmail: undefined;
    AddNetworkMembersContacts: undefined;
    UserDetail: { user: {
        name: string,
        avatar: ImageSourcePropType,
        access: string, 
        relationship: string,
    }};
};

export type HomeStackNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'AddNetworkMembers'
>;

export type UserDetailRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'UserDetail'
>;