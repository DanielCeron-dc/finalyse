import React from 'react';
import classes from './Group.module.css';

interface IProps {
    name: string;
    id: number;
}

const Group:React.FC<IProps> = (props) => {
    
    return <div className = {classes.Group}>
        <p>{props.name}</p>
        <span className = {classes.line}></span>
    </div>
}
export default Group;