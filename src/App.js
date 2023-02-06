/** --- Expense Tracker --- **
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense';
import { useState } from 'react';

const initExpenses = [
  { id: 'E-1', date: new Date(2022, 5, 18), title: 'Rent', amount: 5000 },
  { id: 'E-2', date: new Date(2023, 0, 19), title: 'Maintenance', amount: 1500 },
  { id: 'E-3', date: new Date(2023, 1, 20), title: 'Electric Bill', amount: 1250 },
  { id: 'E-4', date: new Date(2022, 11, 21), title: 'Internet', amount: 3560 },
  { id: 'E-5', date: new Date(2020, 2, 9), title: 'Health Insurance', amount: 2500 },
];

function App() {
  const [expenses, setExpense] = useState(initExpenses);

  const newExpenseHandler = (expense) => {
    console.log('in App.js: ', expense);
    setExpense((expenseList) => [expense, ...expenseList]);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense count={expenses.length} onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
*/

/** --- Goal Tracker --- */
import './App.css';
import { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>;

  if (courseGoals.length > 0) {
    content = <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
}

export default App;
