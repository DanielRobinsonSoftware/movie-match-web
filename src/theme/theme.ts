export type ThemeType = typeof defaultTheme;

export const defaultTheme = {
    bgColor: '#100000',
    textColor: '#fef5d2',
    linkColor: '#c10912',
    highlightColor: '#f00b18',
    buttonColor: '#100000',
    headingColor: '#8D0000',
    headerHeight: '50px',
}

export const lightTheme: ThemeType = {
    ...defaultTheme,
    bgColor: '#e8ecf0',
    textColor: '#001c38',
    linkColor: '#5d85f2',
};

export const darkTheme: ThemeType = {
    ...defaultTheme
}

const theme = defaultTheme;
export default theme;