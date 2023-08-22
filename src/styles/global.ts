import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

li {
  list-style:none;
}

a{
  text-decoration:none;
}

body{
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color['base-text']};
  -webkit-font-smoothing:antialiased;
}

body, input, button, textarea{
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight:400;
  font-size:${({ theme }) => theme.fontSizes['text-m']};
}

`
