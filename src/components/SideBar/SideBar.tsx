import React from 'react';

import Copyright from 'components/Copyright/Copyright';
import classes from './SideBar.module.css';

import { ReactComponent as DarkModeSvg } from 'assets/svg/dark_mode.svg';
import { ReactComponent as LightModeSvg } from 'assets/svg/light_mode.svg';
import { ReactComponent as BlackModeSvg } from 'assets/svg/black_mode.svg';
import { useTheme } from 'hooks/useTheme';

type SideBarProps = {
    open: boolean;
};

const SideBar: React.FC<SideBarProps> = (props) => {

    const [theme,changeTheme] = useTheme(); 

    return <aside className={`${classes.SideBar}  ${props.open ? classes.open : ''}`}>
        <section className={classes.actions}>
            <div className={`${classes.colorAction}  ${theme === 'light' && classes.colorSelected}`} onClick = {() => changeTheme("light")}>
                <LightModeSvg /> Light
            </div>
            <div className={`${classes.colorAction}  ${theme === 'dark' && classes.colorSelected}`} onClick={() => changeTheme("dark")}>
                <DarkModeSvg /> Dark
            </div>
            <div className={`${classes.colorAction}  ${theme === 'black' && classes.colorSelected}`} onClick={() => changeTheme("black")}>
                <BlackModeSvg /> Black
            </div>
        </section>
        <section className = {classes.content}>
            <div className={classes.SideBar__header}>
                <h1>Finalyse</h1>
            </div>
            <div className={classes.SideBar__content}>
                <p>SideBar content</p>
            </div>
            <div className={classes.SideBar__footer}>
                <Copyright />
            </div>
        </section>
    </aside>
}
export default SideBar;