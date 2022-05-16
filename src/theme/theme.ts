export type ThemeType = typeof defaultTheme;

export const defaultTheme = {
    bgColor: '#150b0a',
    textColor: '#f9f5f4',
    linkColor: '#b1b0be',
    buttonColor: '#412939',
    buttonBorderColor: '#70625f',
    headerHeight: '50px',
}

export const lightTheme: ThemeType = {
    ...defaultTheme,
    bgColor: '#f9f5f4',
    textColor: '#150b0a',
    linkColor: '#412939',
    buttonColor: '#b1b0be',
    buttonBorderColor: '#4c353f',
};

export const darkTheme: ThemeType = {
    ...defaultTheme
}

const theme = defaultTheme;
export default theme;