import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
--background: #f0f2f5;
--shape: #FFFFFF;

--blue: #5429CC;
--red: #E62E4D;

--blue-light: #6333ff

--text-title: #363F5F;
--text-body: #969CB3;
} 

*{
margin: 0;
padding:0;
box-sizing: border-box; 
}
     
body{
        
background: var(--background);
-webkit-font-smooting: antialiased;
}

body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
}

html{
        
        @media (max-width:1080px) {
        font-size: 93.75%;//15px
        }

        @media (max-width:1080px) {
        font-size: 87.5%;//14px
        }

}

button{
        cursor: pointer;
}

[disabled]{
        opacity: 0.6;
        cursor: not-allowed;
}
`;