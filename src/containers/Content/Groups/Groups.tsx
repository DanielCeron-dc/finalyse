import GroupsList from 'components/GroupsList/GroupsList';
import React from 'react';
import classes from './Groups.module.css';


const Groups:React.FC = () => {
    
    return <div className={classes.Groups}>
        <h2>Groups</h2>
        <GroupsList/>
    </div>
}
export default Groups;