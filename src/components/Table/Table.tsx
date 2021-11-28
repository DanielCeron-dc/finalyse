import React from 'react';
import classes from './Table.module.css';


const Table:React.FC = () => {
    
    return <table className = {classes.Table}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>
                    <button>Add</button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>25</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
            <tr>
                <td>John</td>
                <td>25</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
            <tr>
                <td>John</td>
                <td>25</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
}
export default Table;