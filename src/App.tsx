
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { INGREDIENTS } from './Constants';
import Ingredient from './Components/Ingredient';
import { useState } from 'react';
import { StateIngredient } from './types';

const App = () => {
  const [ingredients, setIngredients] = useState<StateIngredient[]>([
    {name:'Meat', count:0},
    {name:'Cheese', count:0},
    {name:'Salad', count:0},
    {name:'Becon', count:0},
  ]);

  const addIngredient = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === name) {
          return { ...ingredient, count: ingredient.count + 1 };
        }
        return ingredient;
      });
    });
  };

  const deleteIngredient = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === name) {
          if (ingredient.count > 0) {
            return { ...ingredient, count: ingredient.count - 1 };
          }
        }
        return ingredient;
      });
    });
  };

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Ингредиенты</h2>
          {INGREDIENTS.map((ingredient) => (
            <Ingredient
             name={ingredient.name}
             cost={ingredient.cost}
            img={ingredient.img}
            onAdd={() => addIngredient(ingredient.name)}
            onDelete={() => deleteIngredient(ingredient.name)}/>
          ) )}
        </div>
        <div className="col">
          <h2>Бургер</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
