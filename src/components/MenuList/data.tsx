import { Icon, NavLink } from "../../types/types"
export default [{
    label: 'Contacts',
    detail: 'Invite from your contacts',
    target: 'AddNetworkMembersContacts' as NavLink,
    icon: 'inbox' as Icon,
},{
    label: 'Email',
    detail: 'Send email invitations',
    target: 'AddNetworkMembersEmail' as NavLink,
    icon: 'mail' as Icon,
}]