import styled from '@emotion/styled'

export const Formulario= styled.form`

    width:100%;
    height:fit-content;
    max-width:30rem;
    background-color:#ecccb271;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:1.5rem;
    border:none;
    border-radius:20px;
    @media (min-width:992px){
        margin-top:2rem;
        height:13rem;
    
    }
    

`

export const Input= styled.input`
    display:block;
    background-color:#eddda87a;
    padding:0.2rem 1rem;
    font-size:1.2rem;
    font-family: 'Lato' sans-serif;
    font-weight:700;
    margin:0.5rem;
    width:80%;
    border:none;
    border-radius:30px;
    
    &:focus{
        background-color:#fff;
        outline:none;
        letter-spacing:2px;
        text-align:center;
        font-weight:400;
        font-size:1.5rem
        
    }
 
`
export const Label= styled.label`
    
    display:block;
    font-family: 'Lato' sans-serif;
    font-weight:700;
    font-size:1.5rem;
    text-align:center;
    padding:0.5rem 1rem;
    margin:0.5rem;
    color:#A10035;
    text-shadow: -3px -4px 6px rgba(150, 150, 150, 1);
    @media (min-width:992px){
        font-size:2rem;
        
    
    }
   
`

export const Button= styled.input`
    padding:0.5rem 1rem;
    margin:0.5rem;
    display:block;
    width:30%;
    border:none;
    border-radius:30px;
    font-family: 'Lato' sans-serif;
    font-weight:700;
    font-size:1rem;
    background-color:#7a4495a9;
    color:#fff;
    letter-spacing:2px;
    &:hover{
        background-color:#7A4495;

    }
    
    
`