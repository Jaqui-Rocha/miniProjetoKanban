import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
    font-family: 'Poppins', sans-serif;
    
} 
button{
    font-size: 24px;
    font-weight: bold;
    color: white;
    background: #0A2668 ;
    border-radius: 50px;
    display: inline-block;
    margin-left: 35%;
 
}
input{
    background: white;
    border-radius: 25px;
   display:flex;
   width:80%;
   height: 2.5rem;
   //margin-left:2.8rem;
   margin-bottom: 2.5rem;
   font-size: 24px;
   border: none;
   color: black;
   padding-left: 1rem;
}
label{
    color:white;
    font-size:24px;
    align-items: start;
    margin-left:2.5rem;
}
form{
    margin-bottom: 2.5rem;

};


`