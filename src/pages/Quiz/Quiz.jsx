import React, { useEffect, useState } from 'react';
import { useQuizManagement } from '../../hooks/QuizManagement';
import Radio from '@material-ui/core/Radio';
import {
  ButtonWrapper,
  Content,
  QuestionContainer,
  QuestionTitle,
  Wrapper,
} from './_Quiz';
import {
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from '@material-ui/core';
import { useHistory } from 'react-router';

export const Quiz = () => {
  const [corrects, setCorrects] = useState(0);
  const [finish, setFinish] = useState(false);
  const [restart, setRestart] = useState(false);
  const { questionsNumber, handleGetQuestions, questions } =
    useQuizManagement();

  useEffect(() => {
    setFinish(false);
    const choosedNumber = localStorage.getItem('questionsNum');
    if (choosedNumber) {
      handleGetQuestions(choosedNumber);
    } else {
      handleGetQuestions(questionsNumber);
    }
  }, [restart]);

  let history = useHistory();

  function handleStartPage() {
    history.push('/');
  }

  const handleChoice = (answer, status) => {
    if (status) {
      setCorrects(corrects + 1);
    }
  };

  const handleSubmitAnswers = () => {
    setFinish(true);
    localStorage.setItem('lastScore', corrects);
  };

  const renderQuestions = () => {
    const itens = questions.map((item, index) => (
      <FormControl component="fieldset" key={index}>
        <QuestionTitle
          dangerouslySetInnerHTML={{ __html: item.question }}
        ></QuestionTitle>
        {index % 2 === 0 ? (
          <RadioGroup aria-label="answers" name="radio-buttons-group">
            <FormControlLabel
              value={item.correct_answer}
              control={
                <Radio
                  disabled={finish ? true : false}
                  className={finish ? 'correct' : ''}
                />
              }
              label={item.correct_answer}
              onChange={() => handleChoice(item.correct_answer, true)}
            />
            {item.incorrect_answers.map((item, index) => (
              <FormControlLabel
                key={index}
                value={item}
                control={
                  <Radio
                    className={finish ? 'wrong' : ''}
                    disabled={finish ? true : false}
                  />
                }
                label={item}
                onChange={() => handleChoice(item, false)}
              />
            ))}
          </RadioGroup>
        ) : (
          <RadioGroup aria-label="answers" name="radio-buttons-group">
            {item.incorrect_answers.map((item, index) => (
              <FormControlLabel
                value={item}
                key={index}
                control={
                  <Radio
                    className={finish ? 'wrong' : ''}
                    disabled={finish ? true : false}
                  />
                }
                label={item}
                onChange={() => handleChoice(item, false)}
              />
            ))}
            <FormControlLabel
              value={item.correct_answer}
              control={
                <Radio
                  disabled={finish ? true : false}
                  className={finish ? 'correct' : ''}
                />
              }
              label={item.correct_answer}
              onChange={() => handleChoice(item.correct_answer, true)}
            />
          </RadioGroup>
        )}
      </FormControl>
    ));

    return <QuestionContainer>{itens}</QuestionContainer>;
  };

  return (
    <Content>
      {questions && (
        <Wrapper>
          {renderQuestions()}
          {finish && <p>Sua pontuação foi: {corrects}</p>}
          <ButtonWrapper>
            <Button
              onClick={() => setRestart(restart + 1)}
              size="large"
              variant="contained"
            >
              Restart
            </Button>
            <Button
              onClick={() => handleSubmitAnswers()}
              size="large"
              variant="contained"
            >
              Finalizar
            </Button>

            <Button
              onClick={() => handleStartPage()}
              size="large"
              variant="contained"
            >
              Início
            </Button>
          </ButtonWrapper>
        </Wrapper>
      )}
    </Content>
  );
};
