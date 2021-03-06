import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuizManagement } from '../../hooks/QuizManagement';
import Button from '@material-ui/core/Button';

import { Container, ButtonContainer, Title } from './_Dashboard';
import { TextField } from '@material-ui/core';
import { WrapperPage } from '../../shared/components/WrapperPage/WrapperPage';

export const Dashboard = () => {
  const { questionsNumber, setQuestionsNumber } = useQuizManagement();
  const [lastScore, setLastScore] = useState(0);

  useEffect(() => {
    const isThereLastScore = localStorage.getItem('lastScore');

    if (isThereLastScore) {
      setLastScore(isThereLastScore);
    }
  }, []);

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
              variant="outlined"
              size="large"
              onClick={() => handleNextPage()}
            >
              Next
            </Button>
          )}
        </ButtonContainer>
        {lastScore ? <p>Última pontuação: {lastScore} </p> : ''}
      </Container>
    </WrapperPage>
  );
};
