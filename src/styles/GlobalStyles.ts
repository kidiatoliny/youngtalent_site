import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

*, button, input, body{
  font-family: 'Ubuntu', sans-serif;
}

:root {
  --color-primary: #2f2f2f;
  --color-secondary: #ffc635;
  --color-tertiary: #fff;
  --color-quaternary: #000;

  --color-blue: #0061ff;
  --color-border: #bdc4c9;
  --ambient-bg:#484b48;
  --ambient-title:#006400
}
`
