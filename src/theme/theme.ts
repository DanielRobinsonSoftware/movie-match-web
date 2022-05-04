export type ThemeType = typeof defaultTheme;

export const defaultTheme = {
    bgColor: '#282c34',
    textColor: '#c8dbff',
    linkColor: '#61dafb',
}

export const lightTheme: ThemeType = {
    bgColor: '#e8ecf0',
    textColor: '#001c38',
    linkColor: '#5d85f2',
};

export const darkTheme: ThemeType = {
    ...defaultTheme
}

const theme = defaultTheme;
export default theme;