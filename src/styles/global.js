import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,400;1,500&display=swap');


/* Reset */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}

:root {
  
    --white: #fff;
    --black: #000;
    
    --textColor: #374B5C;
    --detailsColor: #00DBD0;
    --blue: #529BA2;
    --gray: #374B5C;

    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
   
    width: 100%;
  }

  body{

    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-repeat: no-repeat;
    background: radial-gradient(circle at 7.5% 24%, rgb(237, 161, 193) 0%, rgb(250, 178, 172) 25.5%, rgb(190, 228, 210) 62.3%, rgb(215, 248, 247) 93.8%);
      
  };






    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #E9E9E9;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--greenText);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--greenText);
}


  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }


`;