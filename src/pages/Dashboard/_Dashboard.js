import styled from "styled-components";
import {BsArrowRight} from  'react-icons/bs';



export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
margin: auto;



`;


export const Title = styled.h1`
    font-size: 1.9rem;
    text-align: center;
    margin-bottom: 2rem;

`;

export const Subtitle = styled.p`
    font-size: 1.9rem;
    text-align: center;
    margin-bottom: 2rem;

`;

export const ButtonContainer = styled.div`
    height: 50px;
    width: 100%;
    

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


export const InputNumber = styled.input`
    height: 65px;
    padding: 1rem;
    border-radius: 10px;
    border: 0;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
    outline: none;
    margin-bottom: 2rem;

`;
export const NextButton = styled.button`
    font-size: 1.6rem;
    border: none;
    background: transparent;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const NextIcon = styled(BsArrowRight)``; 