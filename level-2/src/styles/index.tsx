import type { FC } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  html, body, body > div {
    font-family: ${({ theme }) => theme.fontFamily};
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
  * {
    outline: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    display: inline-block;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Styler: FC = ({ children }) => (
	<ThemeProvider theme={theme}>
		<Reset />
		<GlobalStyle />
		{children}
	</ThemeProvider>
)
export { Styler }
