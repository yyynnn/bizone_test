import { createGlobalStyle } from 'styled-components'
import { theme } from 'mtsbankui'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Inter', sans-serif !important;
    }

    body {
        background-color: ${theme.colors.gray.g700};
        color: ${theme.colors.gray.primary};
    }
    
    @import url('https://rsms.me/inter/inter.css');
    html { font-family: 'Inter', sans-serif; }
    @supports (font-variation-settings: normal) {
        html { font-family: 'Inter var', sans-serif; }
    }
`
