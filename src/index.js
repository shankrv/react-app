import ReactDOM from 'react-dom/client';

import './index.css';
import CourseGoalsApp from './CourseGoals/App';
import ExpenseTrackerApp from './ExpenseTracker/App';
import UserDirectoryApp from './UserDirectory/App';
import UserLoginApp from './UserLogin/App';
import { AuthContextProvider } from './UserLogin/context/auth';
import FoodOrderApp from './FoodOrder/App';
import OptimizationApp from './Optimization/App';
import UserListApp from './UserList/App';
import StarWarsApp from './StarWars/App';
import CounterApp from './Counter/App';
import TaskTrackerApp from './TaskTracker/App';

const { REACT_APP_PROJECT } = process.env;

const root = ReactDOM.createRoot(document.getElementById('root'));

switch (REACT_APP_PROJECT) {
  case 'COURSE':
    root.render(<CourseGoalsApp />);
    break;

  case 'EXPENSE':
    root.render(<ExpenseTrackerApp />);
    break;

  case 'USERDIR':
    root.render(<UserDirectoryApp />);
    break;

  case 'USERLOGIN':
    root.render(
      <AuthContextProvider>
        <UserLoginApp />
      </AuthContextProvider>
    );
    break;

  case 'FOODORDER':
    root.render(<FoodOrderApp />);
    break;

  case 'OPTIMIZATION':
    root.render(<OptimizationApp />);
    break;

  case 'USERLIST':
    root.render(<UserListApp />);
    break;

  case 'STARWARS':
    root.render(<StarWarsApp />);
    break;

  case 'COUNTER':
    root.render(<CounterApp />);
    break;

  case 'TASKS':
    root.render(<TaskTrackerApp />);
    break;

  default:
    root.render(<CourseGoalsApp />);
    break;
}
