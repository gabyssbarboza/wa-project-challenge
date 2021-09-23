import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useQuizContext, { useQuizManagement } from '../../hooks/QuizManagement';
import Button from '@material-ui/core/Button';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Container, ButtonContainer, Title } from './_Dashboard';
import { TextField } from '@material-ui/core';
import { WrapperPage } from '../../shared/components/WrapperPage/WrapperPage';

export const Dashboard = () => {
  const { questionsNumber, setQuestionsNumber } = useQuizManagement();

  let history = useHistory();

  function handleNextPage() {
    localStorage.setItem('questionsNum', questionsNumber);

    history.push('/start-quiz');
  }

  return (
    <WrapperPage>
      <Container>
        <Title>Welcome!</Title>

        <TextField
          id="outlined-number"
          label="Número de questões"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={questionsNumber}
          onChange={(e) => setQuestionsNumber(e.target.value)}
        />
        <ButtonContainer>
          {questionsNumber > 0 && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleNextPage()}
            >
              Next
              <ArrowForwardIosIcon />
            </Button>
          )}
        </ButtonContainer>
      </Container>
    </WrapperPage>
  );
};
