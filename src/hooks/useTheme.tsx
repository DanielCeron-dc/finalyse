import React, { useEffect } from 'react';

const changeCssVariable = (name: string, value: string) => {
    document.documentElement.style.setProperty(name, value);
};

const changeTheme = (type: 'light' | 'black' | 'dark') => {
    switch (type) {
        case 'light':
            changeCssVariable('--color1', 'white');
            changeCssVariable('--color1-dark', '#f6fafa');
            changeCssVariable('--color-text', 'black');
            break;
        case 'black':
            changeCssVariable('--color1', '#201F20');
            changeCssVariable('--color1-dark', '#151315');
            changeCssVariable('--color-text', 'white');
            break;
        case 'dark':
            changeCssVariable('--color1', '#36363E');
            changeCssVariable('--color1-dark', '#25232A');
            changeCssVariable('--color-text', 'white');
            break;
    }
};

type themeType = 'light' | 'black' | 'dark';
type updateTheme = (type: themeType) => void;


//* this custom hook allows you to use the user's system theme by default, but also to change it and save it to local storage
export const useTheme = (): [themeType, updateTheme]=> {
    const [theme, setTheme] = React.useState<themeType>(window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'black');

    const updateTheme: updateTheme = (type: themeType) => {
        setTheme(type);
        localStorage.setItem('theme-color', type);
        changeTheme(type);
    }

    useEffect(() => {
        let theme = localStorage.getItem('theme-color');
        if (theme == null) {
            localStorage.setItem("theme-color", 'light');
        }
        theme && changeTheme(theme as 'light' | 'black' | 'dark');
    }, []);

    return [theme, updateTheme];
}