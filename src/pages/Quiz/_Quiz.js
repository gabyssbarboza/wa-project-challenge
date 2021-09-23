import styled from 'styled-components';

export const Content = styled.div`
  .correct + span {
    color: green;

    &:after {
      content: '';
      display: inline-block;
      transform: rotate(45deg);
      height: 12px;
      width: 6px;
      margin-left: 10px;
      border-bottom: 4px solid #78b13f;
      border-right: 4px solid #78b13f;
    }
  }

  .wrong.Mui-checked + span {
    color: red;
    &:after {
      content: 'X';
      display: inline-block;
      font-weight: 900;
      font-size: 1.1rem;
      color: red;
      margin-left: 10px;
    }
  }

  .MuiRadio-colorSecondary {
    color: grey;
  }
  .MuiRadio-colorSecondary.Mui-checked {
    color: grey;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 3rem auto;

  > p {
    font-size: 22px;
    margin-bottom: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const QuestionTitle = styled.h1`
  font-size: 1.2rem;
`;

export const QuestionContainer = styled.div`
  background: #fff;
  width: 75%;
  gap: 2.5rem;
  padding: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 2rem 10rem auto;
`;
