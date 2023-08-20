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
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  -webkit-font-smoothing:antialiased;
}

body, input, button, textarea{
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight:400;
  font-size:${(props) => props.theme.fontSizes['text-m']};
}

`
