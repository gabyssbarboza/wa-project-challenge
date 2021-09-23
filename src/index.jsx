import React from 'react';
import ReactDOM from 'react-dom';
import { QuizContextProvider, QuizManagementProvider } from './hooks/QuizManagement';
import { Routes } from './routes/Routes';
import GlobalStyle from './styles/global';



ReactDOM.render(
  <React.StrictMode>
    <QuizManagementProvider>
    <Routes />
    <GlobalStyle />
    </QuizManagementProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

