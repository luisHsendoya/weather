import styled from '@emotion/styled'


export const Container= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:fit-content;
margin:2rem 0;
border-radius:30px;
box-shadow: 10px 10px 5px 0px #00000096;

background-color:#EEEBDD;

`;

export const Header= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:8rem;

`;

export const Section= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;

export const Grafica= styled.div`
width: 150px;
 height: 150px;
 margin:0.5rem 0;

@media (min-width:992px){
    width: 200px;
    height: 200px;

}

`;

export const Statis=styled.p`
display:inline-block;
margin: 0 0.2rem;
padding: 0.5rem 0;
font-family:'Lato',sans-serif;
font-weight: 700;
color:#5C3D2E;
font-size:1.2rem;
text-align:center;
span{
    font-weight: 900;
    padding:0 0.3rem;
    font-size:1.3rem;
    color:#2E0249;
};

@media (min-width:992px){
    font-size:1rem;
    margin: 0 0.5rem;
    padding: 1rem 0;
};
 

`



export const Flex= styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:0;



`;

export const Region= styled.h3`
font-family:'Lato',sans-serif;
font-weight: 900;
color:#2E0249;
font-size:2rem;
text-align:center;
   
margin:2rem 0 0 0;


@media (min-width:992px){
    font-size:2.5rem;
    margin-top:3rem;
 

}
`;
export const Date= styled.p`
font-family:'Lato',sans-serif;
font-weight: 400;
color:#630000;
font-size:1.2rem;
text-align:center;

@media (min-width:992px){
    font-size:1.5rem;
 
}

`;
export const Image= styled.img`
width:11rem;
height:9rem;
object-fit:cover;


@media (min-width:992px){
    width:12rem;
    height:12rem
 
}



`;

export const Grade= styled.h2`
font-family:'Lato',sans-serif;
font-weight: 700;
color:#361500;
font-size:2.4rem;
margin:0;
text-align:center;
@media (min-width:992px){
    font-size:3.2rem;
 

}


`
export const State= styled.p`
font-family:'Lato',sans-serif;
font-weight: 700;
color:black;
font-size:1.2rem;
margin:0;
@media (min-width:992px){
    font-size:1.3rem;
 

}


`