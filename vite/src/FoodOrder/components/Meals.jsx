import { useEffect, useState } from 'react';
import axios from 'axios';
import MealItem from './MealItem';

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getAvailableMeals() {
      try {
        const { data: availableMeals } = await axios.get('http://localhost:3000/api/meals');
        setMeals(availableMeals);
      } catch (error) {
        console.error('API Error: ', error.message);
      }
    }
    getAvailableMeals();
  }, []);

  return (
    <ul id='meals'>
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
