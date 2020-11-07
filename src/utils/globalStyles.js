import { createGlobalStyle, css } from "styled-components";


const GlobalStyles = createGlobalStyle`
  ${({theme}) => css`
      * {
          margin: 0;
      }  
      
      @font-face {
        font-family: Nunito;
        src: url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap'); 
      }

      body {
        box-sizing: border-box;
        color: ${theme.colors.textBlack};
        font-size: 10px;
        font-family: Nunito, sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        user-select: none;
            
        input {
          font-family: Nunito, sans-serif;
          &::-webkit-input-placeholder {
            font-weight: 400;
          }
        }
            
        input:focus {
          outline: 0;
        }
        
        button {
          border: none;
          margin: 0;
          padding: 0;
          width: auto;
          overflow: visible;
        }
          
        #root {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            min-height: 100vh;
            background-color: ${theme.colors.backgroundMain};
            & > main {
                width: 100%;
                max-width: ${theme.wrappers.desktop};
            }
          }
        }
      
  `}
`
;

export default GlobalStyles
