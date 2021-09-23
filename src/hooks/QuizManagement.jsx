import axios from 'axios';
import React, { useContext, createContext, useState } from 'react';

const QuizManagementContext = createContext();

const QuizManagementProvider = ({ children }) => {
  const [questionsNumber, setQuestionsNumber] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleGetQuestions = (selectedNumber) => {
    axios
      .get(`https://opentdb.com/api.php?amount=${selectedNumber}`)
      .then((response) => setQuestions(response.data.results))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  };

  return (
    <QuizManagementContext.Provider
      value={{
        questionsNumber,
        setQuestionsNumber,
        handleGetQuestions,
        questions,
      }}
    >
      {children}
    </QuizManagementContext.Provider>
  );
};

const useQuizManagement = () => {
  const context = useContext(QuizManagementContext);

  if (!context) {
    throw new Error('useQuizManagement must be used within an QuizManagement');
  }

  return context;
};

export { QuizManagementProvider, useQuizManagement };
