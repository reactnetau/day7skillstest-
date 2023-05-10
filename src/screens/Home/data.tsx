import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';
import avatar4 from '../../assets/images/avatar4.png';

import { Access, Relationship } from '../../types/types';


export default [{
    name: 'Maria Sutton',
    avatar: avatar1,
    access: Access.ADMIN,
    relationship: Relationship.DAUGHTER,
},{
    name: 'James Sutton',
    avatar: avatar2,
    access: Access.FAVOURITE,
    relationship: Relationship.SON,
}]