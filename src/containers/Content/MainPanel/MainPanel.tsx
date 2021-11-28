import React from 'react';
import Table from 'components/Table/Table';
import classes from './MainPanel.module.css';


const MainPanel:React.FC = () => {
    
    return <div className={classes.MainPanel}>
        <h1>Group 1</h1>
        <Table />
    </div>
}
export default MainPanel;