import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig ={
    initialColorMode : 'system'
};

const Color_theme = extendTheme({config});

export default Color_theme;