import React, {useState} from 'react'
import './App.css';
import foodsData from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import Searchbar from './Components/SearchBar/Searchbar';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foods, setFood] = useState(foodsData);
  const [displayFood, setDisplayFood] = useState(foodsData)
  const [showForm, setForm] = useState(true)

  const deleteFood = (foodName) => {
    let newFood = [...displayFood];
    const filteredFoods = newFood.filter((foodToDelete) => {
        return foodToDelete.name !== foodName
        
    });
    setDisplayFood(filteredFoods)
};
const toggleShow = () => {
  setForm(!showForm)
}

  const addNewFood = (newfood) => {
    const updatedFood = [...foods, newfood]
    setFood(updatedFood)
    setDisplayFood(updatedFood)
}
const searchFilter = (searchQuery) => {
  let filteredFoods = foods.filter((food)=> 
      food.name.toLowerCase().startsWith(searchQuery.toLowerCase())
     
) 
console.log(filteredFoods)
  setDisplayFood(filteredFoods)
  
}
  return (
    <div className="App">
    {showForm && <AddFoodForm addFood={addNewFood}></AddFoodForm>}
    <Button onClick={toggleShow}>{showForm?'Hide':'Add New Food'}> </Button>

    <Searchbar search={searchFilter}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {displayFood.map((food) =>{
     return (
     <FoodBox key={food.name} clickToDelete={deleteFood} food={food} />
      )
    })}
      </Row>
      {!displayFood.length && <h2> Ooops! There's no more content to show! </h2>}
    </div>
  );
}

export default App;
