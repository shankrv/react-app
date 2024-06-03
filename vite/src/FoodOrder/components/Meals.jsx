import MealItem from './MealItem';
import useAxios from '../hooks/useAxios';
import Error from './Error';

export default function Meals() {
  const { isLoading, data: meals = [], error } = useAxios('http://localhost:3000/api/meals');

  if (isLoading) return <p className='center'>Loading...</p>;
  if (error) return <Error title='Meals Error' message={error} />;

  return (
    <ul id='meals'>
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
