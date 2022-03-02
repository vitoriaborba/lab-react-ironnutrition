import React, {useState} from 'react'
import './App.css';
import foodsData from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';

function App() {
  const [foods, setFood] = useState(foodsData);
  const [displayFood, setDisplayFood] = useState(foodsData)

  const addNewFood = (newfood) => {
    const updatedFood = [...foods, newfood]
    setFood(updatedFood)
    setDisplayFood(updatedFood)
}
  return (
    <div className="App">
      <h1>Food List</h1>
    <AddFoodForm addFood={addNewFood}></AddFoodForm>
      <hr />
    {foods.map((food) =>{
     return (
     <FoodBox food={food} />
      )
    })}
    </div>
  );
}

export default App;
