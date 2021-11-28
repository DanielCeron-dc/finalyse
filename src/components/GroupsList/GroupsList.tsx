import React, { CSSProperties } from 'react';
import Group from './Group/Group';


const arrayOfGroups = [
    {
        id: 1,
        name: 'Group 1',
        description: 'This is group 1',
    },
    {
        id: 2,
        name: 'Group 2',
        description: 'This is group 2',
    },
    {
        id: 3,
        name: 'Group 3',
        description: 'This is group 3',
    },
    {
        id: 4,
        name: 'Group 4',
        description: 'This is group 4',
    },
    {
        id: 5,
        name: 'Group 5',
        description: 'This is group 5',
    }
];

const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    gap: '10px',
}

const GroupsList:React.FC = () => {
    
    return <div style = {style}>
        {arrayOfGroups.map(group => <Group key={group.id} name={group.name} id={group.id} />)}
    </div>;
}
export default GroupsList;