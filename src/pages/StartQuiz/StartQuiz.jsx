import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { WrapperPage } from '../../shared/components/WrapperPage/WrapperPage';
import { ButtonContainer } from './_StartQuiz';

export const StartQuiz = () => {
  let history = useHistory();

  function handleStartQuiz() {
    history.push('/quiz');
  }
  function handleCancelQuiz() {
    history.push('/');
  }

  return (
    <WrapperPage>
      <ButtonContainer>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => handleStartQuiz()}
        >
          START
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleCancelQuiz()}
        >
          CANCEL
        </Button>
      </ButtonContainer>
    </WrapperPage>
  );
};
