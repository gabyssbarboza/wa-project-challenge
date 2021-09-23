import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
margin: auto;



`;

export const Wrapper = styled.div`
 background-color: #fff;
border-radius: 20px;
width: 50%;
height: 80%;

    @media screen and (max-width: 780px){
        width: 95%;
    height: 80%;
    }
`;