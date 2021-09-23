import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Quiz } from '../pages/Quiz/Quiz';
import { StartQuiz } from '../pages/StartQuiz/StartQuiz';


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={StartQuiz} path="/start-quiz" exact />
        <Route component={Quiz} path="/quiz" exact />
      </Switch>
    </BrowserRouter>
  );
};