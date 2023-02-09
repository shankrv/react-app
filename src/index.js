import ReactDOM from 'react-dom/client';

import './index.css';
import CourseGoalsApp from './CourseGoals/App';
import ExpenseTrackerApp from './ExpenseTracker/App';

const { REACT_APP_PROJECT } = process.env;

const root = ReactDOM.createRoot(document.getElementById('root'));

switch (REACT_APP_PROJECT) {
  case 'COURSE':
    root.render(<CourseGoalsApp />);
    break;

  case 'EXPENSE':
    root.render(<ExpenseTrackerApp />);
    break;

  default:
    root.render(<CourseGoalsApp />);
    break;
}
