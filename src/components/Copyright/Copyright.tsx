import React, { CSSProperties } from 'react';

const copyrightStyle: CSSProperties = {
    fontSize: '0.8em',
    color: '#999',
    textAlign: 'center',
    marginTop: '1em',
    marginBottom: '1em',
};

const Copyright:React.FC = () => {
    return (
        <div style = {copyrightStyle}>
            <p>Copyright &copy; {new Date().getFullYear()} Daniel Cerón</p>
        </div>
    )
}
export default Copyright;