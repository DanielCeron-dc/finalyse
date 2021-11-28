import React from 'react';

import classes from './Content.module.css';
import MainPanel from './MainPanel/MainPanel';
import Groups from './Groups/Groups';


const Content:React.FC = () => {
    
    return <div className = {classes.Content}>
        <Groups />
        <MainPanel/>
    </div>
}
export default Content;